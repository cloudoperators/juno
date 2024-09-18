// SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
// SPDX-License-Identifier: Apache-2.0

import { createStore } from "zustand"
import createFiltersSlice from "./createFiltersSlice"

// Constants for entities
const ISSUEMATCHES = "IssueMatches"
const SERVICES = "Services"
const COMPONENTS = "Components"

describe("createFiltersSlice", () => {
  let store

  beforeEach(() => {
    store = createStore((set) => ({
      ...createFiltersSlice(set),
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
    setLabels(ISSUEMATCHES, ["label1", "label2"])

    const state = store.getState()
    expect(state.filters[ISSUEMATCHES].labels).toEqual(["label1", "label2"])
  })

  it("should set filter label values correctly for an entity", () => {
    const { setFilterLabelValues } = store.getState().filters.actions
    const filters = [
      { label: "filter1", values: ["value1", "value2"] },
      { label: "filter2", values: ["value3", "value4"] },
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
})
