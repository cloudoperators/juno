/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { produce } from "immer"
import constants from "../../components/shared/constants"

// Constants for each entity
const ISSUEMATCHES = "IssueMatches"
const SERVICES = "Services"
const COMPONENTS = "Components"

// Function to generate the initial filter state
const createFilterState = () => ({
  labels: [], // Array of objects: { displayName, filterName } for each filter entity. Filter names are used for request-building
  activeFilters: {}, // Active filters { filterName1: [value1], filterName2: [value2_1, value2_2], ... }
  filterLabelValues: {}, // Filter name values { filterName1: ["val1", "val2", ...], filterName2: [...] }
  predefinedFilters: [], // Predefined filters [ {name: "filter1", matchers: {"filterName1": "regex1", ...}}]
  activePredefinedFilter: null, // Active predefined filter
  search: "", // Search term used for full-text filtering
})

// Initial filters state using a helper function
const initialFiltersState = {
  [ISSUEMATCHES]: createFilterState(),
  [SERVICES]: createFilterState(),
  [COMPONENTS]: createFilterState(),
}

const createFiltersSlice = (set, get) => ({
  filters: {
    ...initialFiltersState,
    actions: {
      setLabels: (entity, labelPairs) =>
        set(
          produce((state) => {
            state.filters[entity].labels = labelPairs.map(({ displayName, filterName }) => ({
              displayName,
              filterName,
            }))
            state.filters[entity].filterNames = labelPairs.map(({ filterName }) => filterName) // update filterNames accordingly
          }),
          false,
          `filters.setLabels.${entity}`
        ),

      setFilterLabelValues: (entity, filters) =>
        set(
          produce((state) => {
            state.filters[entity].filterLabelValues = filters.reduce((acc, filter) => {
              acc[filter.filterName] = filter.values
              return acc
            }, {})
          }),
          false,
          `filters.setFilterLabelValues.${entity}`
        ),

      setActiveFilters: (entity, activeFilters) => {
        set(
          produce((state) => {
            state.filters[entity].activeFilters = activeFilters
          }),
          false,
          `filters.setActiveFilters.${entity}`
        )
      },

      clearActiveFilters: (entity) => {
        set(
          produce((state) => {
            state.filters[entity].activeFilters = {}
          }),
          false,
          `filters.clearActiveFilters.${entity}`
        )
      },

      addActiveFilter: (entity, filterName, filterValue) => {
        set(
          produce((state) => {
            if (!state.filters[entity].activeFilters[filterName]) {
              state.filters[entity].activeFilters[filterName] = []
            }

            // Add the filter value if it doesn't already exist
            state.filters[entity].activeFilters[filterName] = [
              ...new Set([...state.filters[entity].activeFilters[filterName], filterValue]),
            ]
          }),
          false,
          `filters.addActiveFilter.${entity}`
        )
      },

      addActiveFilters: (entity, filterName, filterValues) => {
        set(
          produce((state) => {
            if (!state.filters[entity].activeFilters[filterName]) {
              state.filters[entity].activeFilters[filterName] = []
            }

            // Add the filter values and ensure uniqueness
            state.filters[entity].activeFilters[filterName] = [
              ...new Set([...state.filters[entity].activeFilters[filterName], ...filterValues]),
            ]
          }),
          false,
          `filters.addActiveFilters.${entity}`
        )
      },

      removeActiveFilter: (entity, filterName, filterValue) => {
        set(
          produce((state) => {
            const updatedFilters = state.filters[entity].activeFilters[filterName].filter(
              (value) => value !== filterValue
            )

            if (updatedFilters.length === 0) {
              delete state.filters[entity].activeFilters[filterName]
            } else {
              state.filters[entity].activeFilters[filterName] = updatedFilters
            }
          }),
          false,
          `filters.removeActiveFilter.${entity}`
        )
      },

      setSearchTerm: (entity, searchTerm) =>
        set(
          produce((state) => {
            state.filters[entity].search = searchTerm
          }),
          false,
          `filters.setSearchTerm.${entity}`
        ),

      setFiltersFromURL: (activeFilters, searchTerm) =>
        set(
          produce((state) => {
            if (activeFilters) {
              state.filters[ISSUEMATCHES].activeFilters = activeFilters[ISSUEMATCHES] || {}
              state.filters[SERVICES].activeFilters = activeFilters[SERVICES] || {}
              state.filters[COMPONENTS].activeFilters = activeFilters[COMPONENTS] || {}
            }

            if (searchTerm) {
              state.filters[ISSUEMATCHES].search = searchTerm[ISSUEMATCHES] || ""
              state.filters[SERVICES].search = searchTerm[SERVICES] || ""
              state.filters[COMPONENTS].search = searchTerm[COMPONENTS] || ""
            }
          }),
          false,
          `filters.setFiltersFromURL`
        ),

      syncFiltersWithURL: () => {
        const encodedSearchTerm = btoa(
          JSON.stringify({
            [ISSUEMATCHES]: get().filters[ISSUEMATCHES].search,
            [SERVICES]: get().filters[SERVICES].search,
            [COMPONENTS]: get().filters[COMPONENTS].search,
          })
        )

        const activeFilters = {
          [ISSUEMATCHES]: get().filters[ISSUEMATCHES].activeFilters,
          [SERVICES]: get().filters[SERVICES].activeFilters,
          [COMPONENTS]: get().filters[COMPONENTS].activeFilters,
        }

        return {
          [constants.ACTIVE_FILTERS]: activeFilters,
          [constants.SEARCH_TERM]: encodedSearchTerm,
        }
      },
    },
  },
})

export default createFiltersSlice
