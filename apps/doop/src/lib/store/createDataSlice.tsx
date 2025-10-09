/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { valueToLabel } from "../helpers"
import { FILTER_TYPE_CLUSTER, getViolationFilterItems, filterViolations } from "../filterViolations"

/**
 * This function, getClusterFilterItems, takes an object clusterIdentities as input and generates an
 * array of filter items based on the data within this object.
 * It first checks if the input parameter clusterIdentities is falsy (null or undefined).
 * If it is, the function returns an empty array.
 * It initializes an empty object called entries to store the filter items that will be generated.
 * Inside the reduce function, it processes each cluster within the clusterIdentities object:
 * For each cluster, it retrieves the identities associated with that cluster.
 * For each identity within a cluster, it creates a filter item if it doesn't already exist in the filterItems object.
 * Each filter item has a type, key, label, and an array called values.
 * It adds the value associated with the identity to the filter item's values array if it's not already present.
 * After processing all clusters and identities, it returns an array of filter items by extracting the values
 * from the entries object and returning them as an array.
 * This function essentially transforms data about cluster identities into a structured array of filter items,
 * making it easier to work with and display the data. The comments provided in the code offer explanations
 * of each step and the purpose of various operations.
 * @param {Object} clusterIdentities
 * @returns
 */
const getClusterFilterItems = (clusterIdentities: any) => {
  // Check if clusterIdentities is falsy (null or undefined), and return an empty array if true.
  if (!clusterIdentities) return []

  // Create an object called `entries` to store the filter items that will be generated.
  const entries = Object.keys(clusterIdentities).reduce((filterItems, cluster) => {
    // Get all identities for the current cluster.
    const identities = clusterIdentities[cluster]

    // Iterate through each identity within the cluster.
    Object.keys(identities).forEach((id) => {
      // Get the value associated with the identity.
      const value = identities[id]

      // Create a filter item for the identity if it doesn't exist in filterItems.
      // @ts-expect-error TS(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      filterItems[id] = filterItems[id] || {
        key: `${FILTER_TYPE_CLUSTER}:${id}`,
        id: id,
        type: FILTER_TYPE_CLUSTER,
        label: valueToLabel(id), // Convert the identity key to a human-readable label.
        values: [],
      }

      // Add the value to the filter item's values array if it's not already present.
      // @ts-expect-error TS(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      if (filterItems[id].values.indexOf(value) < 0) filterItems[id].values.push(value)
    })

    return filterItems // Return the updated filterItems object.
  }, {})

  // Return an array of filter items by extracting the values from the `entries` object.
  return Object.values(entries)
}

// extend the violation groups with additional information
const extendAndSortViolations = ({ items, severityWeights }: any) => {
  if (!items) return []
  return items
    .map((item: any) => {
      // count the number of violations
      item.violationCount = 0
      // collect all severities and sort them by severity weight
      // first severity is the highest severity
      item.severities = []

      item.constraints?.forEach((constraint: any) => {
        item.violationCount += constraint.violation_groups?.length || 0
        if (item.severities.indexOf(constraint?.metadata?.severity) < 0) {
          item.severities.push(constraint?.metadata?.severity)
        }
      })
      item.severities = item.severities.sort(
        (a: any, b: any) => (severityWeights.indexOf(a) || 100) - (severityWeights.indexOf(b) || 100)
      )
      return item
    })
    .sort(
      (a: any, b: any) => (severityWeights[a.severities[0]] || 100) - (severityWeights[b.severities[0]] || 100) // sort by highest severity
    )
}

// Data slice
// @ts-expect-error TS(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
const createDataSlice = (set, get) => ({
  data: {
    severityWeights: {
      error: 1,
      warning: 2,
      info: 3,
      debug: 4,
    },
    showDebugSeverities: true,
    loaded: false,
    clusterIdentities: null,
    violationGroups: null,
    filterEntries: [],
    filteredItems: {},
    detailsViolationGroupKind: null,
    detailsViolationGroup: null,

    actions: {
      setShowDebugSeverities: (value: any) => {
        set((state: any) => ({
          data: { ...state.data, showDebugSeverities: value },
        }))
      },
      setData: (data: any) => {
        if (!data) return

        let clusterIdentities: any = []
        if (data.cluster_identities) {
          clusterIdentities = Object.keys(data.cluster_identities).map((key) => ({
            cluster: key,
            ...data.cluster_identities[key],
          }))
        }

        set(
          (state: any) => ({
            data: {
              ...state.data,
              loaded: true,
              clusterIdentities,
              violationGroups: data.templates || [],
              filterEntries: [
                ...getClusterFilterItems(data.cluster_identities),
                ...getViolationFilterItems(data.templates, {
                  showDebugSeverities: state.data.showDebugSeverities,
                }),
              ],
            },
          }),
          false,
          "data/setData"
        )
        get().filters.actions.ensureFilterType()
        // filter items
        get().data.actions.filterItems()
      },

      /**
        triggered by: new data data (setData), activeFilters (all actions), searchTerm (new search term set)
       */
      filterItems: () => {
        const violationGroups = get().data.violationGroups
        const clusterIdentities = get().data.clusterIdentities
        const activeFilters = get().filters.active || []
        const searchTerm = get().filters.searchTerm
        const severityWeights = get().data.severityWeights
        let items = filterViolations({
          violationGroups,
          clusterIdentities,
          activeFilters,
          searchTerm,
          showDebugSeverities: get().data.showDebugSeverities,
        })

        items = extendAndSortViolations({ items, severityWeights })

        // save the filtered items
        set(
          (state: any) => ({
            data: { ...state.data, filteredItems: items },
          }),
          false,
          "data/filterItems"
        )
        // set the details violation group after filtering
        // it can be that the active violation group is not in the filtered items
        get().data.actions.setDetailsViolationGroup()
      },

      setDetailsViolationGroupKind: (detailsViolationGroupKind: any) => {
        set(
          (state: any) => ({
            data: {
              ...state.data,
              detailsViolationGroupKind: detailsViolationGroupKind,
            },
          }),
          false,
          "data.setDetailsViolationGroup"
        )
        // set the details violation group
        get().data.actions.setDetailsViolationGroup()
      },
      setDetailsViolationGroup: () => {
        // if there is no active violation group kind, return
        const activeKind = get().data.detailsViolationGroupKind
        if (!activeKind) return
        // find the active violation group in the filtered items
        const activeViolationGroup = get().data.filteredItems?.find((i: any) => i.kind === activeKind)

        // if the active violation group is already set, return
        if (
          get().data.detailsViolationGroup &&
          activeViolationGroup &&
          JSON.stringify(get().data.detailsViolationGroup) === JSON.stringify(activeViolationGroup)
        )
          return
        // set the active violation group
        set(
          (state: any) => ({
            data: {
              ...state.data,
              detailsViolationGroup: activeViolationGroup,
            },
          }),
          false,
          "data.setDetailsViolationGroup"
        )
      },
    },
  },
})

export default createDataSlice
