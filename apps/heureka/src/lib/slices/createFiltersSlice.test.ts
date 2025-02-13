// SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
// SPDX-License-Identifier: Apache-2.0

import { createStore } from "zustand"
import createFiltersSlice from "./createFiltersSlice"
import constants from "../../components/shared/constants" // Import constants for use in tests

// Constants for entities
const ISSUEMATCHES = "IssueMatches"
const SERVICES = "Services"
const COMPONENTS = "Components"

describe("createFiltersSlice", () => {
  let store: any

  beforeEach(() => {
    store = createStore((set, get) => ({
      ...createFiltersSlice(set, get),
    }))
  })

  it("should initialize with default filter states", () => {
    const state = store.getState()
    expect(state.filters[ISSUEMATCHES].labels).toEqual([])
    expect(state.filters[SERVICES].activeFilters).toEqual({})
    expect(state.filters[COMPONENTS].filterLabelValues).toEqual({})
    expect(state.filters[ISSUEMATCHES].search).toBe("")
  })

  it("should set labels correctly for an entity", () => {
    const { setLabels } = store.getState().filters.actions
    const labelPairs = [
      { displayName: "Label 1", filterName: "filter1" },
      { displayName: "Label 2", filterName: "filter2" },
    ]
    setLabels(ISSUEMATCHES, labelPairs)

    const state = store.getState()
    expect(state.filters[ISSUEMATCHES].labels).toEqual(labelPairs)
    expect(state.filters[ISSUEMATCHES].filterNames).toEqual(["filter1", "filter2"])
  })

  it("should set filter label values correctly for an entity", () => {
    const { setFilterLabelValues } = store.getState().filters.actions
    const filters = [
      { filterName: "filter1", values: ["value1", "value2"] },
      { filterName: "filter2", values: ["value3", "value4"] },
    ]
    setFilterLabelValues(ISSUEMATCHES, filters)

    const state = store.getState()
    expect(state.filters[ISSUEMATCHES].filterLabelValues).toEqual({
      filter1: ["value1", "value2"],
      filter2: ["value3", "value4"],
    })
  })

  it("should set active filters correctly for an entity", () => {
    const { setActiveFilters } = store.getState().filters.actions
    const activeFilters = { filter1: ["value1"], filter2: ["value2"] }
    setActiveFilters(SERVICES, activeFilters)

    const state = store.getState()
    expect(state.filters[SERVICES].activeFilters).toEqual({
      filter1: ["value1"],
      filter2: ["value2"],
    })
  })

  it("should add a single active filter correctly for an entity", () => {
    const { addActiveFilter } = store.getState().filters.actions

    // Add first filter value
    addActiveFilter(COMPONENTS, "filter1", "value1")

    // Get the updated state after the first value is added
    let state = store.getState()
    expect(state.filters[COMPONENTS].activeFilters).toEqual({
      filter1: ["value1"],
    })

    // Add second filter value
    addActiveFilter(COMPONENTS, "filter1", "value2")

    // Get the updated state after the second value is added
    state = store.getState()
    expect(state.filters[COMPONENTS].activeFilters).toEqual({
      filter1: ["value1", "value2"],
    })
  })

  it("should not duplicate values when adding a single active filter", () => {
    const { addActiveFilter } = store.getState().filters.actions

    addActiveFilter(COMPONENTS, "filter1", "value1")
    addActiveFilter(COMPONENTS, "filter1", "value1") // Adding the same value again

    const state = store.getState()
    expect(state.filters[COMPONENTS].activeFilters).toEqual({
      filter1: ["value1"],
    })
  })

  it("should add multiple active filters correctly for an entity", () => {
    const { addActiveFilters } = store.getState().filters.actions

    // Add multiple filter values
    addActiveFilters(COMPONENTS, "filter1", ["value1", "value2"])

    // Get the updated state
    const state = store.getState()
    expect(state.filters[COMPONENTS].activeFilters).toEqual({
      filter1: ["value1", "value2"],
    })
  })

  it("should remove an active filter correctly for an entity", () => {
    const { addActiveFilter, removeActiveFilter } = store.getState().filters.actions
    addActiveFilter(SERVICES, "filter1", "value1")
    addActiveFilter(SERVICES, "filter1", "value2")

    let state = store.getState()
    expect(state.filters[SERVICES].activeFilters).toEqual({
      filter1: ["value1", "value2"],
    })

    removeActiveFilter(SERVICES, "filter1", "value1")
    state = store.getState()
    expect(state.filters[SERVICES].activeFilters).toEqual({
      filter1: ["value2"],
    })

    removeActiveFilter(SERVICES, "filter1", "value2")
    state = store.getState()
    expect(state.filters[SERVICES].activeFilters).toEqual({})
  })

  it("should clear all active filters for an entity", () => {
    const { addActiveFilter, clearActiveFilters } = store.getState().filters.actions
    addActiveFilter(ISSUEMATCHES, "filter1", "value1")
    addActiveFilter(ISSUEMATCHES, "filter2", "value2")

    let state = store.getState()
    expect(state.filters[ISSUEMATCHES].activeFilters).toEqual({
      filter1: ["value1"],
      filter2: ["value2"],
    })

    clearActiveFilters(ISSUEMATCHES)
    state = store.getState()
    expect(state.filters[ISSUEMATCHES].activeFilters).toEqual({})
  })

  it("should set search term correctly for an entity", () => {
    const { setSearchTerm } = store.getState().filters.actions
    setSearchTerm(SERVICES, "searchText")

    const state = store.getState()
    expect(state.filters[SERVICES].search).toBe("searchText")
  })

  it("should set filters from URL correctly", () => {
    const { setFiltersFromURL } = store.getState().filters.actions
    const activeFilters = {
      [ISSUEMATCHES]: { filter1: ["value1"] },
      [SERVICES]: { filter2: ["value2"] },
      [COMPONENTS]: { filter3: ["value3"] },
    }
    const searchTerm = {
      [ISSUEMATCHES]: "search1",
      [SERVICES]: "search2",
      [COMPONENTS]: "search3",
    }

    setFiltersFromURL(activeFilters, searchTerm)

    const state = store.getState()
    expect(state.filters[ISSUEMATCHES].activeFilters).toEqual(activeFilters[ISSUEMATCHES])
    expect(state.filters[SERVICES].activeFilters).toEqual(activeFilters[SERVICES])
    expect(state.filters[COMPONENTS].activeFilters).toEqual(activeFilters[COMPONENTS])
    expect(state.filters[ISSUEMATCHES].search).toBe("search1")
    expect(state.filters[SERVICES].search).toBe("search2")
    expect(state.filters[COMPONENTS].search).toBe("search3")
  })

  it("should synchronize filters with URL correctly", () => {
    const { syncFiltersWithURL } = store.getState().filters.actions
    const result = syncFiltersWithURL({ filter1: ["value1"] }, { filter2: ["value2"] }, { filter3: ["value3"] })

    expect(result).toEqual({
      [constants.ACTIVE_FILTERS]: {
        [ISSUEMATCHES]: { filter1: ["value1"] },
        [SERVICES]: { filter2: ["value2"] },
        [COMPONENTS]: { filter3: ["value3"] },
      },
      [constants.SEARCH_TERM]: expect.any(String), // Use expect.any() for encoded search term verification
    })
  })
})
