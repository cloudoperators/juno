import { valueToLabel } from "./helpers"

export const FILTER_TYPE_CLUSTER = "cluster"
const FILTER_TYPE_VIOLATION_GROUP = "violationGroup"
const FILTER_TYPE_CHECK = "check"
export const FILTER_TYPE_UNKNOWN = "unknown"

const filterOutDebugSeverities = (violationGroups: any[]) => {
  if (!violationGroups) return []

  return violationGroups
    .map((group: any) => ({
      ...group,
      constraints: group.constraints?.filter((constraint: any) => constraint.metadata?.severity !== "debug"),
    }))
    .filter((group: any) => group.constraints?.length > 0)
}

const groupActiveFilters = (activeFilters: any[]) => {
  const severityFilters: Record<string, string[]> = {}
  const checkFilters: Record<string, string[]> = {}
  const clusterFilters: Record<string, string[]> = {}

  if (!activeFilters) return { severityFilters, checkFilters, clusterFilters }

  activeFilters.forEach((filter) => {
    const [type, key] = filter.key?.split(":") ?? []

    if (!type || !key) return

    switch (type) {
      case FILTER_TYPE_VIOLATION_GROUP:
        if (key === "severity") {
          severityFilters[key] = severityFilters[key] || []
          severityFilters[key].push(filter.value)
        }
        break

      case FILTER_TYPE_CHECK:
        checkFilters[key] = checkFilters[key] || []
        checkFilters[key].push(filter.value)
        break

      case FILTER_TYPE_CLUSTER:
        clusterFilters[key] = clusterFilters[key] || []
        clusterFilters[key].push(filter.value)
        break
    }
  })

  return { severityFilters, checkFilters, clusterFilters }
}

const filterByActiveFilters = (violationGroups: any[], clusterIdentities: any[], activeFilters: any[]) => {
  if (!violationGroups || !activeFilters?.length) return violationGroups

  const { severityFilters, checkFilters, clusterFilters } = groupActiveFilters(activeFilters)
  const filteredItems: any[] = []

  violationGroups.forEach((violation: any) => {
    // Deep clone to avoid mutation
    const item = JSON.parse(JSON.stringify(violation))

    // Filter constraints inside each violation group
    item.constraints = item.constraints?.filter((constraint: any) => {
      let found = true

      // ############ CHECK FILTERS ############
      if (Object.keys(checkFilters).length > 0) {
        constraint.violation_groups = constraint.violation_groups?.filter((vg: any) =>
          Object.keys(checkFilters).reduce(
            (bool, key) =>
              bool && vg.pattern?.object_identity && checkFilters[key]?.includes(vg.pattern.object_identity[key]),
            true
          )
        )
        found = found && constraint.violation_groups?.length > 0
      }

      // ############ CLUSTER FILTERS ############
      if (Object.keys(clusterFilters).length > 0) {
        const clusters = clusterIdentities
          ?.filter((ci: any) =>
            Object.keys(clusterFilters).reduce((bool, key) => bool && clusterFilters[key].includes(ci[key]), true)
          )
          .map((ci: any) => ci.cluster)

        constraint.violation_groups = constraint.violation_groups?.filter((vg: any) => {
          vg.instances = vg.instances.filter((i: any) => clusters.includes(i.cluster))
          return vg.instances.length > 0
        })

        found = found && constraint.violation_groups?.length > 0
      }

      // ############ SEVERITY FILTERS ############
      if (Object.keys(severityFilters).length > 0) {
        found =
          found &&
          Object.values(severityFilters).reduce(
            (bool: any, values: any) => bool && values.includes(constraint.metadata?.severity),
            true
          )
      }

      return found
    })

    if (item.constraints?.length > 0) filteredItems.push(item)
  })

  return filteredItems
}

const filterBySearchTerm = (items: any[], searchTerm: string) => {
  if (!searchTerm || !items) return items

  const lowerSearch = searchTerm.toLowerCase()

  return items
    .map((item) => {
      const filteredConstraints = item.constraints?.filter((constraint: any) => {
        const { violation_groups, ...data } = constraint

        // Check for match in constraint metadata or data
        const foundInData = JSON.stringify(data).toLowerCase().includes(lowerSearch)

        // Check for match in nested violation_groups
        const filteredVgs =
          violation_groups?.filter((vg: any) => JSON.stringify(vg).toLowerCase().includes(lowerSearch)) || []

        // Update constraint only if needed
        return foundInData || filteredVgs.length > 0 ? { ...constraint, violation_groups: filteredVgs } : false
      })

      // Return a shallow copy with filtered constraints
      return { ...item, constraints: filteredConstraints }
    })
    .filter((item) => item.constraints?.length > 0)
}

/**
 * Filters violation groups based on various criteria.
 * @param {Object} params - The parameters for filtering.
 * @param {Array} params.violationGroups - The array of violation groups to be filtered.
 * @param {Array} params.clusterIdentities - The array of cluster identities for filtering.
 * @param {Array} params.activeFilters - The array of active filters to apply.
 * @param {string} params.searchTerm - The search term to filter by.
 * @param {boolean} params.showDebugSeverities - Flag to determine if debug severities should be shown.
 * Description:
 * 1. Initializes `items` to the provided `violationGroups`.
 * 2. If `showDebugSeverities` is false, it filters out violation groups with debug severities using the `filterOutDebugSeverities` function.
 * 3. If there are active filters, it further filters the violation groups based on these filters using the `filterByActiveFilters` function.
 * 4. Finally, it filters the items based on the provided search term using the `filterBySearchTerm` function.
 * @returns An array of filtered violation groups.
 */
export const filterViolations = ({
  violationGroups,
  clusterIdentities,
  activeFilters,
  searchTerm,
  showDebugSeverities,
}: any) => {
  // initialize items to all violation groups
  let items = violationGroups

  // if showDebugSeverities is false and severity is debug, filter it out
  if (!showDebugSeverities) {
    items = filterOutDebugSeverities(items)
  }

  // filter violation groups by active filters
  if (violationGroups && activeFilters?.length > 0) {
    items = filterByActiveFilters(items, clusterIdentities, activeFilters)
  }

  // filter items by search term
  items = filterBySearchTerm(items, searchTerm)

  return items
}

/**
 * This function generates filter items from a list of violation groups.
 * Description:
 * 1. Checks if `violationGroups` is falsy. If so, it returns an empty array.
 * 2. Initializes an empty array `constraints`.
 * 3. Iterates through each `violationGroup` in `violationGroups` and for each `violationGroup`, iterates through
 *    its `constraints`, pushing them into the `constraints` array.
 * 4. Initializes an empty object `entries`.
 * 5. Reduces the `constraints` array to generate filter items.
 * - For each `constraint`:
 *   - Checks if `constraint.metadata.severity` exists.
 *      - If true:
 *        - Retrieves the severity value.
 *        - Initializes a filter item for severity if it doesn't exist.
 *        - Appends the severity value to the list of values for the severity filter item.
 *     - Iterates through each `violation_group` in `constraint`.
 *        - Checks if `violation_group.pattern.object_identity` exists.
 *         - If true:
 *           - Iterates through each `id` in `violation_group.pattern.object_identity`.
 *           - Retrieves the value associated with each `id`.
 *          - Initializes a filter item for the `id` if it doesn't exist.
 *           - Appends the value to the list of values for the respective filter item.
 * 6. Sorts the values of each filter item.
 * 7. Returns an array containing the values of the `entries` object.
 * This function takes an array of violation groups, processes them, and generates an array of
 * filter items based on the constraints and severity levels. The resulting filter items can be used
 * for various purposes, such as filtering and categorizing data related to violations.
 * @param {Array} violationGroups
 * @returns an array of objects representing filter items
 */
export const getViolationFilterItems = (violationGroups: any, options = { showDebugSeverities: false }) => {
  if (!violationGroups) return []
  const constraints: any = []
  violationGroups.forEach((v: any) => v.constraints.forEach((c: any) => constraints.push(c)))
  // @ts-expect-error TS(7006) FIXME: Parameter 'filterItems' implicitly has an 'any' ty... Remove this comment to see the full error message
  const entries = constraints.reduce((filterItems, constraint) => {
    if (constraint?.metadata?.severity) {
      const value = constraint.metadata.severity
      filterItems["severity"] = filterItems["severity"] || {
        key: `${FILTER_TYPE_VIOLATION_GROUP}:severity`,
        id: "severity",
        type: FILTER_TYPE_VIOLATION_GROUP,
        label: "severity",
        values: [],
      }
      if (filterItems["severity"].values.indexOf(value) < 0) {
        if (options?.showDebugSeverities || value !== "debug") filterItems["severity"].values.push(value)
      }
    }
    constraint?.violation_groups?.forEach((vg: any) => {
      if (vg?.pattern?.object_identity) {
        Object.keys(vg.pattern.object_identity).forEach((id) => {
          const value = vg.pattern.object_identity[id]
          filterItems[id] = filterItems[id] || {
            key: `${FILTER_TYPE_CHECK}:${id}`,
            id: id,
            type: FILTER_TYPE_CHECK,
            label: valueToLabel(id),
            values: [],
          }
          if (filterItems[id].values.indexOf(value) < 0) filterItems[id].values.push(value)
        })
      }
    })
    Object.keys(filterItems).forEach((key) => {
      filterItems[key].values.sort()
    })
    return filterItems
  }, {})

  return Object.values(entries)
}
