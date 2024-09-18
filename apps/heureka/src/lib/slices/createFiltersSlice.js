/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { produce } from "immer"

// Constants for each entity
const ISSUEMATCHES = "IssueMatches"
const SERVICES = "Services"
const COMPONENTS = "Components"

// Function to generate the initial filter state
const createFilterState = () => ({
  labels: [], // Labels for each entity: ["label1", "label2", ...]
  activeFilters: {}, // Active filters { label1: [value1], label2: [value2_1, value2_2], ... }
  filterLabelValues: {}, // Filter label values { label1: ["val1", "val2", ...], label2: [...] }
  predefinedFilters: [], // Predefined filters [ {name: "filter1", matchers: {"label1": "regex1", ...}}]
  activePredefinedFilter: null, // Active predefined filter
  search: "", // Search term used for full-text filtering
})

// Initial filters state using a helper function
const initialFiltersState = {
  [ISSUEMATCHES]: createFilterState(),
  [SERVICES]: createFilterState(),
  [COMPONENTS]: createFilterState(),
}

const createFiltersSlice = (set) => ({
  filters: {
    ...initialFiltersState,
    actions: {
      setLabels: (entity, labels) =>
        set(
          produce((state) => {
            state.filters[entity].labels = labels
          }),
          false,
          `filters.setLabels.${entity}`
        ),

      setFilterLabelValues: (entity, filters) =>
        set(
          produce((state) => {
            state.filters[entity].filterLabelValues = filters.reduce((acc, filter) => {
              acc[filter.label] = filter.values
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

      addActiveFilter: (entity, filterLabel, filterValue) => {
        set(
          produce((state) => {
            if (!state.filters[entity].activeFilters[filterLabel]) {
              state.filters[entity].activeFilters[filterLabel] = []
            }

            // Add the filter value if it doesn't already exist
            state.filters[entity].activeFilters[filterLabel] = [
              ...new Set([...state.filters[entity].activeFilters[filterLabel], filterValue]),
            ]
          }),
          false,
          `filters.addActiveFilter.${entity}`
        )
      },

      addActiveFilters: (entity, filterLabel, filterValues) => {
        set(
          produce((state) => {
            if (!state.filters[entity].activeFilters[filterLabel]) {
              state.filters[entity].activeFilters[filterLabel] = []
            }

            // Add the filter values and ensure uniqueness
            state.filters[entity].activeFilters[filterLabel] = [
              ...new Set([...state.filters[entity].activeFilters[filterLabel], ...filterValues]),
            ]
          }),
          false,
          `filters.addActiveFilters.${entity}`
        )
      },

      removeActiveFilter: (entity, filterLabel, filterValue) => {
        set(
          produce((state) => {
            const updatedFilters = state.filters[entity].activeFilters[filterLabel].filter(
              (value) => value !== filterValue
            )

            if (updatedFilters.length === 0) {
              delete state.filters[entity].activeFilters[filterLabel]
            } else {
              state.filters[entity].activeFilters[filterLabel] = updatedFilters
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
    },
  },
})

export default createFiltersSlice
