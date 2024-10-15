/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FILTER_TYPE_UNKNOWN } from "./createDataSlice"
import { valueToLabel } from "../helpers"

// converts standardized filters object:
// {
//   "support_group": ["containers"]
// }
// to array of objects:
// [
//   {
//       "key": "unknown:support_group",
//       "id": "support_group",
//       "type": FILTER_TYPE_UNKNOWN,
//       "label": "support group",
//       "value": "containers"
//   }
// ]
const parseInitialFilters = (initialFilters) => {
  if (typeof initialFilters !== "object" || !Object.keys(initialFilters).length) return undefined

  return Object.keys(initialFilters)
    .map((key) => {
      if (Array.isArray(initialFilters[key])) {
        return initialFilters[key].map((value) => {
          return {
            key: `${FILTER_TYPE_UNKNOWN}:${key}`,
            id: key,
            type: FILTER_TYPE_UNKNOWN,
            label: valueToLabel(key),
            value: value,
          }
        })
      } else if (typeof initialFilters[key] === "string") {
        return {
          key: `${FILTER_TYPE_UNKNOWN}:${key}`,
          id: key,
          type: FILTER_TYPE_UNKNOWN,
          label: valueToLabel(key),
          value: initialFilters[key],
        }
      }
    })
    .flat()
}

const createFiltersSlice = (set, get, options) => ({
  filters: {
    searchTerm: null,
    active: parseInitialFilters(options?.initialFilters),

    actions: {
      ensureFilterType: () => {
        // map filter with unknown type to the filter labels found in the data
        let filters = get().filters.active?.map((filter) => {
          if (filter.type === FILTER_TYPE_UNKNOWN) {
            // find the filter kez in filterEntries and override the type
            let filterEntry = get().data.filterEntries.find((entry) => entry.id === filter.id)
            // override the type with the filterEntry type
            if (filterEntry) {
              filter.type = filterEntry.type
              filter.key = filterEntry.type + ":" + filter.id
            }
          }
          return filter
        })

        set((state) => ({ filters: { ...state.filters, active: filters } }), false, "filters.ensureFilterType")
      },
      set: (filters) => {
        if (!Array.isArray(filters)) return

        set((state) => ({ filters: { ...state.filters, active: filters } }), false, "filters.set")
        // filter items
        get().data.actions.filterItems()
      },
      add: (key, value) => {
        set(
          (state) => {
            let activeFilters = state.filters.active?.slice() || []
            let index = activeFilters.findIndex((f) => f.key === key && f.value === value)
            if (index < 0) activeFilters.push({ key: key, value: value })
            return { filters: { ...state.filters, active: activeFilters } }
          },
          false,
          "filters.add"
        )
        // filter items
        get().data.actions.filterItems()
      },
      remove: (key, value) => {
        set(
          (state) => {
            let activeFilters = state.filters.active?.slice() || []
            let index = activeFilters.findIndex((f) => f.key === key && f.value === value)
            if (index >= 0) activeFilters.splice(index, 1)
            return { filters: { ...state.filters, active: activeFilters } }
          },
          false,
          "filters.remove"
        )
        // filter items
        get().data.actions.filterItems()
      },
      removeAll: () => {
        set((state) => ({ filters: { ...state.filters, active: [] } }), false, "filters.remove")
        // filter items
        get().data.actions.filterItems()
      },
      setSearchTerm: (searchTerm) => {
        set((state) => ({ filters: { ...state.filters, searchTerm } }))
        // filter items
        get().data.actions.filterItems()
      },
    },
  },
})

export default createFiltersSlice
