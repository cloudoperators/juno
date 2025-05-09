/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { produce } from "immer"
import { StateCreator } from "zustand"
import { AppState } from "../components/StoreProvider"

export interface FilterSlice {
  filters: FilterState
}

interface FilterState {
  labels: string[]
  activeFilters: Record<string, string[]>
  pausedFilters: Record<string, string[]>
  filterLabelValues: Record<string, { isLoading: boolean; values?: string[] }>
  predefinedFilters: Filter[]
  activePredefinedFilter: string | null
  searchTerm: string
  actions: FilterActions
}

export interface Filter {
  name: string
  displayName: string
  matchers: Record<string, string>
}

export interface FilterActions {
  setActiveFilters: (activeFilters: Record<string, string[]>) => void
  clearFilters: () => void
  addActiveFilter: (filterLabel: string, filterValue: string) => void
  addActiveFilters: (filterLabel: string, filterValues: string[]) => void
  removeActiveFilter: (filterLabel: string, filterValue: string) => void
  setPausedFilters: (pausedFilters: Record<string, string[]>) => void
  addPausedFilter: (filterLabel: string, filterValue: string) => void
  removePausedFilter: (filterLabel: string, filterValue: string) => void
  setActivePredefinedFilter: (filterName: string) => void
  clearActivePredefinedFilter: () => void
  togglePredefinedFilter: (filterName: string) => void
  loadFilterLabelValues: (filterLabel: string) => void
  reloadFilterLabelValues: () => void
  setSearchTerm: (searchTerm: string) => void
}

const initialFiltersState = {
  labels: ["status"], // labels to be used for filtering: [ "label1", "label2", "label3"]. Default is status which is enriched by the worker
  activeFilters: {}, // for each active filter key list the selected values: {key1: [value1], key2: [value2_1, value2_2], ...}
  pausedFilters: {}, // inactive subset of activeFilters. Same structure as activeFilters
  filterLabelValues: {}, // contains all possible values for filter labels: {label1: ["val1", "val2", "val3", ...], label2: [...]}, lazy loaded when a label is selected for filtering
  predefinedFilters: [], // predefined complex filters that filter using regex: [{name: "filter1", displayName: "Filter 1", matchers: {"label1": "regex1", "label2": "regex2", ...}}, ...]
  activePredefinedFilter: null, // the currently active predefined filter
  searchTerm: "", // the search term used for full-text filtering
}

const parsePredefinedFilters = (predefinedFilters: any[]): FilterState["predefinedFilters"] => {
  if (!predefinedFilters) return initialFiltersState.predefinedFilters
  if (!Array.isArray(predefinedFilters)) {
    console.warn("[supernova]::parsePredefinedFilter: predefinedFilters object is not an array")
    return initialFiltersState.predefinedFilters
  }

  return predefinedFilters
}

const parseInitialFilters = (
  initialFilters: Record<string, string[]>,
  filterLabels: string[]
): Record<string, string[]> => {
  if (!initialFilters) return {}

  if (typeof initialFilters !== "object" || initialFilters === null) {
    console.warn("[supernova]::parseInitialFilters: initialFilters object is not an object")
    return {}
  }

  // Check if all values are arrays
  initialFilters = Object.entries(initialFilters).reduce((acc: any, [key, value]) => {
    if (Array.isArray(value)) {
      acc[key] = value // valid key-value pair
    } else {
      console.warn(`[supernova]::parseInitialFilters: Value for "${key}" is not an Array.`)
    }
    return acc
  }, {})

  // Check if all keys are in filterLabelValues
  if (!Object.keys(initialFilters).every((key) => filterLabels.includes(key))) {
    console.warn(
      "[supernova]::parseInitialFilters: Some keys of the initialFilters object are not valid filter labels. They must be configured as filterLabels first. Using only valid keys."
    )

    // filter out the keys that are not in filterLabels, return the rest
    // this will ensure that at least the valid keys are used as initial filters
    const filtered = Object.keys(initialFilters)
      .filter((key) => filterLabels.includes(key))
      .reduce((obj, key) => {
        return {
          ...obj,
          [key]: initialFilters[key],
        }
      }, {})
    return filtered
  }

  return initialFilters
}

const parseActivePredefinedFilter = (predefinedFilters: any): string | null => {
  if (!predefinedFilters) return initialFiltersState.activePredefinedFilter

  if (!Array.isArray(predefinedFilters)) {
    console.warn("[supernova]::parseActivePredefinedFilter: predefinedFilters object is not an array")
    return initialFiltersState.activePredefinedFilter
  }

  return predefinedFilters[0]?.name || null
}

const parseFilterLabels = (labels: string[]): string[] => {
  // return the default labels if none are provided
  if (!labels) return initialFiltersState.labels

  // check if labels is an array
  if (!Array.isArray(labels)) {
    console.warn("[supernova]::setLabels: labels object is not an array")
    return initialFiltersState.labels
  }

  // check if all elements in the array are strings delete the ones that are not
  if (!labels.every((element) => typeof element === "string")) {
    console.warn("[supernova]::setLabels: Some elements of the array are not strings.")
    labels = labels.filter((element) => typeof element === "string")
  }

  // merge given labels with the initial, make it unique and sort it alphabetically
  const uniqueLabels = Array.from(new Set(initialFiltersState.labels.concat(labels))).sort((a: any, b: any) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  )

  return uniqueLabels
}

const createFiltersSlice: (options?: Record<string, any>) => StateCreator<AppState, [], [], FilterSlice> =
  (options) => (set, get, store) => ({
    filters: {
      ...initialFiltersState,
      activeFilters: parseInitialFilters(options?.initialFilters, parseFilterLabels(options?.filterLabels)) || {},
      predefinedFilters: parsePredefinedFilters(options?.predefinedFilters),
      activePredefinedFilter: parseActivePredefinedFilter(options?.predefinedFilters),
      labels: parseFilterLabels(options?.filterLabels),
      actions: {
        setActiveFilters: (activeFilters: Record<string, string[]>) => {
          set((state: any) => {
            return {
              filters: {
                ...state.filters,
                activeFilters,
              },
            }
          }, false)
          get().alerts.actions.filterItems()
        },

        clearFilters: () => {
          set(
            produce((state: any) => {
              state.filters.activeFilters = {}
              state.filters.pausedFilters = {}
            }),
            false
          )
          get().alerts.actions.filterItems()
        },

        addActiveFilter: (filterLabel: string, filterValue: string) => {
          set(
            produce((state: any) => {
              // use Set to prevent duplicate values
              state.filters.activeFilters[filterLabel] = Array.from(
                new Set([...(state.filters.activeFilters[filterLabel] || []), filterValue])
              )
            }),
            false
          )
          // after adding a new filter key and value: filter items
          get().alerts.actions.filterItems()
        },

        // add multiple values for a filter label
        addActiveFilters: (filterLabel: string, filterValues: string[]) => {
          set(
            produce((state: any) => {
              // use Set to prevent duplicate values
              state.filters.activeFilters[filterLabel] = Array.from(
                new Set([...(state.filters.activeFilters[filterLabel] || []), ...filterValues])
              )
            }),
            false
          )
          // after adding a new filter key and value: filter items
          get().alerts.actions.filterItems()
        },

        removeActiveFilter: (filterLabel: string, filterValue: string) => {
          set(
            produce((state: any) => {
              state.filters.activeFilters[filterLabel] = state.filters.activeFilters[filterLabel].filter(
                (value: any) => value !== filterValue
              )
              // if this was the last selected value delete the whole label key
              if (state.filters.activeFilters[filterLabel].length === 0) {
                delete state.filters.activeFilters[filterLabel]
              }
            }),
            false
          )
          // after removing a filter: filter items
          get().alerts.actions.filterItems()
        },
        setPausedFilters: (pausedFilters: Record<string, string[]>) => {
          set((state: any) => {
            return {
              filters: {
                ...state.filters,
                pausedFilters,
              },
            }
          }, false)
          get().alerts.actions.filterItems()
        },

        addPausedFilter: (filterLabel: string, filterValue: string) => {
          set(
            produce((state: any) => {
              // use Set to prevent duplicate values
              const newFilterValues = Array.from(
                new Set([...(state.filters.pausedFilters[filterLabel] || []), filterValue])
              )
              state.filters.pausedFilters[filterLabel] = newFilterValues
            }),
            false
          )

          // after adding a new filter key and value: filter items
          get().alerts.actions.filterItems()
        },

        removePausedFilter: (filterLabel: string, filterValue: string) => {
          set(
            produce((state: any) => {
              state.filters.pausedFilters[filterLabel] = state.filters.pausedFilters[filterLabel]?.filter(
                (value: any) => value !== filterValue
              )
              // if this was the last selected value delete the whole label key
              if (state.filters.pausedFilters[filterLabel]?.length === 0) {
                delete state.filters.pausedFilters[filterLabel]
              }
            }),
            false
          )
          // after removing a filter: filter items
          get().alerts.actions.filterItems()
        },

        setActivePredefinedFilter: (filterName: string) => {
          set(
            produce((state: any) => {
              state.filters.activePredefinedFilter = filterName
            }),
            false
          )
          // after activating predefined filter: filter items
          get().alerts.actions.filterItems()
        },

        clearActivePredefinedFilter: () => {
          set(
            produce((state: any) => {
              state.filters.activePredefinedFilter = null
            }),
            false
          )
          // after clearing predefined filter: filter items
          get().alerts.actions.filterItems()
        },

        togglePredefinedFilter: (filterName: string) => {
          set(
            produce((state: any) => {
              // if active predefined filter is already set and equal to the one that was clicked, clear it
              if (state.filters.activePredefinedFilter === filterName) {
                state.filters.activePredefinedFilter = null
              } else {
                state.filters.activePredefinedFilter = filterName
              } // otherwise set the clicked filter as active
            }),
            false
          )
          // after activating predefined filter: filter items
          get().alerts.actions.filterItems()
        },

        // retieve all possible values for the given filter label from the list of items and add them to the list
        loadFilterLabelValues: (filterLabel: string) => {
          set(
            produce((state: any) => {
              state.filters.filterLabelValues[filterLabel] = { isLoading: true }
            }),
            false
          )
          set(
            produce((state: any) => {
              // use Set to ensure unique values
              const values: string[] = Array.from(
                new Set(state.alerts.items.map((item: any) => item.labels[filterLabel]))
              )
              // remove any "blank" values from the list, then sort
              state.filters.filterLabelValues[filterLabel].values = values
                .filter((value) => (value ? true : false))
                .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

              state.filters.filterLabelValues[filterLabel].isLoading = false
            }),
            false
          )
        },

        // for each filter label where we already loaded the values, reload them
        reloadFilterLabelValues: () => {
          Object.keys(get().filters.filterLabelValues).forEach((label) => {
            get().filters.actions.loadFilterLabelValues(label)
          })
        },

        setSearchTerm: (searchTerm: string) => {
          set(
            produce((state: any) => {
              state.filters.searchTerm = searchTerm
            }),
            false
          )
          // after setting the search term: filter items
          get().alerts.actions.filterItems()
        },
      },
    },
  })

export default createFiltersSlice
