/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { produce } from "immer"
import { StateCreator } from "zustand"
import { countAlerts } from "./utils"
import { Filter } from "./createFiltersSlice"
import { AppState } from "../components/StoreProvider"

export interface AlertsSlice {
  alerts: AlertsState
}

interface AlertsState {
  items: AlertItem[]
  itemsFiltered: AlertItem[]
  totalCounts: AlertCounts
  severityCountsPerRegion: Record<string, SeverityCounts>
  regions: string[]
  regionsFiltered: string[]
  enrichedLabels: string[]
  updatedAt: number | null
  actions: AlertsActions
}

export interface AlertItem {
  fingerprint: string
  labels: Record<string, string>
  [key: string]: any
}

export interface AlertCounts {
  total?: number
  critical?: number
  warning?: number
  info?: number
  [key: string]: number | undefined
}

export interface SeverityCounts {
  total: number
  critical?: { total: number; suppressed: number }
  warning?: { total: number; suppressed: number }
  info?: { total: number; suppressed: number }
  [key: string]: any
}

export interface AlertsActions {
  setAlertsData: (data: {
    items: AlertItem[]
    counts: { global: AlertCounts; regions: Record<string, SeverityCounts> }
  }) => void
  filterItems: () => void
  setFilteredItems: (items: AlertItem[]) => void
  setRegionsFiltered: (regions: string[]) => void
  updateFilteredCounts: () => void
  getAlertByFingerprint: (fingerprint: string) => AlertItem | undefined
}

const initialAlertsState = {
  items: [],
  itemsFiltered: [],
  totalCounts: {}, // { total: number, critical: number, ...},
  severityCountsPerRegion: {}, // {"eu-de-1": { total: number, critical: {total: number, suppressed: number}, warning: {...}, ...}
  regions: [], // save all available regions from initial list here
  regionsFiltered: [], // regions list filtered by active predefined filters
  enrichedLabels: ["status"], // labels that are enriched by the alert worker
  updatedAt: null,
}

const createAlertsSlice: StateCreator<AppState, [], [], AlertsSlice> = (set, get, store) => ({
  alerts: {
    ...initialAlertsState,
    actions: {
      setAlertsData: ({ items, counts }) => {
        set(
          produce((state: AppState) => {
            state.alerts.items = items
            state.alerts.totalCounts = counts?.global
            state.alerts.severityCountsPerRegion = counts?.regions
            state.alerts.regions = Object.keys(counts?.regions).sort()
            state.alerts.updatedAt = Date.now()

            // on the initial fetch copy all items to the filtered items list once since
            // most views operate on the filtered items list
            if (state.alerts.itemsFiltered.length === 0) {
              state.alerts.itemsFiltered = items
            }

            // same with the filtered regions list
            if (state.alerts.regionsFiltered.length === 0) {
              state.alerts.regionsFiltered = state.alerts.regions
            }

            // TODO:
            // reload previously loaded filter label values (they might have changed since last load)
            // state.filters.filterLabelValues = {} // -> do NOT just reset them, reload instead
          }),
          false
        )
        // if there are already active filters or active predefined filters, filter the new list
        if (Object.keys(get().filters.activeFilters)?.length > 0 || get().filters.activePredefinedFilter) {
          get().alerts.actions.filterItems()
        }
      },

      filterItems: () => {
        // the actual active predefinedFilter and not the name saved activePredefinedFilter in Zustand
        let activePredefinedFilter: Filter | undefined
        if (get().filters.predefinedFilters && get().filters.activePredefinedFilter) {
          activePredefinedFilter = get().filters.predefinedFilters.find(
            (filter: Filter) => filter.name === get().filters.activePredefinedFilter
          )
        }

        const filteredRegions: Set<string> = new Set()

        // reduce active filters to only those that are not paused (this will make the filter logic more intuitive)
        const unpausedActiveFilters = Object.keys(get().filters.activeFilters).reduce(
          (acc: Record<string, string[]>, key) => {
            // check all values of the current label key and filter out the paused ones, so that only unpaused values remain
            const filtered = get().filters.activeFilters[key].filter(
              (value) => !get().filters.pausedFilters[key]?.includes(value)
            )

            // if there are still values left after filtering out the paused ones, add them to the new filtered object
            if (filtered.length > 0) {
              acc[key] = filtered
            }
            return acc
          },
          {}
        )

        set(
          produce((state) => {
            state.alerts.itemsFiltered = state.alerts.items.filter((item: any) => {
              let visible = true

              // test if the item has a label "visibility" with value "hidden"
              // if it does, immediately return false, no further processing needed, these items are always filtered out
              if (item.labels.visibility === "hidden") {
                return false
              }

              // if the item is still visible test if item labels match the regex matchers of the active predefined filter
              // for each key and value pair in the filter matchers check if the key's value regex matches the item's label value for this key
              // if it doesn't match, set visible to false and break out of the loop
              activePredefinedFilter &&
                Object.entries(activePredefinedFilter.matchers).forEach(([key, value]) => {
                  if (!new RegExp(value, "i").test(item.labels[key])) {
                    visible = false
                    return
                  } else {
                    // if the item is visible, add the item's region to the filtered regions set
                    // this way the filtered Regions set will contain all regions that have at least one visible item
                    filteredRegions.add(item.labels.region)
                  }
                })

              // if the item is still visible after the predefined filters, check if it gets filtered out by the active filters
              // active filters is an object where the keys correspond to labels and the value is an array of all selected values to be filtered by
              // iterate over all (unpaused) active filter keys and then check if one of the selected values matches the item's value for this key
              if (visible) {
                Object.keys(unpausedActiveFilters).forEach((key) => {
                  if (!unpausedActiveFilters[key].includes(item.labels[key])) {
                    // if the item's label value for the current label isn't included in the active filters set visible to false, i.e. filter out item
                    // this automatically leads to different values for the same label to be OR concatenated, while different labels are AND concatenated
                    // so an item must have at least one of the selected values for each filtered label
                    // we can break out of the loop here since we already know the item is not visible
                    visible = false
                    return
                  }
                })
              }

              // if the item is still visible check if it gets filtered out by a search term
              // the search term is matched against the stringified item object via regex
              // if the item object does not contain the search term, it is not visible
              if (visible && state.filters.searchTerm && state.filters.searchTerm.length > 0) {
                const itemString = JSON.stringify(item)
                const re = new RegExp(state.filters.searchTerm, "i")
                if (!itemString.match(re)) {
                  visible = false
                }
              }

              return visible
            })
          }),
          false
        )
        get().alerts.actions.updateFilteredCounts()
        if (filteredRegions.size > 0) {
          get().alerts.actions.setRegionsFiltered(Array.from(filteredRegions).sort())
        } else {
          // if nothing was filtered out, set the filtered regions to all available regions
          get().alerts.actions.setRegionsFiltered(get().alerts.regions)
        }
      },

      setFilteredItems: (items) => {
        set(
          produce((state) => {
            state.alerts.itemsFiltered = items
          }),
          false
        )
        get().alerts.actions.updateFilteredCounts()
      },

      setRegionsFiltered: (regions) => {
        set(
          produce((state) => {
            state.alerts.regionsFiltered = regions
          }),
          false
        )
      },

      updateFilteredCounts: () => {
        const counts = countAlerts(get().alerts.itemsFiltered)
        set(
          produce((state) => {
            state.alerts.totalCounts = counts.global
            state.alerts.severityCountsPerRegion = counts.regions
          }),
          false
        )
      },

      getAlertByFingerprint: (fingerprint) => {
        return get().alerts.items.find((alert) => alert.fingerprint === fingerprint)
      },
    },
  },
})

export default createAlertsSlice
