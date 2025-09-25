/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect } from "vitest"
import {
  readLegacyUrlState,
  getFiltersForUrl,
  convertAppStateToUrlState,
  getFiltersForApp,
  convertUrlStateToAppState,
  removeFilter,
  addFilter,
} from "./urlStateUtils"

describe("readLegacyUrlState", () => {
  it("should read all legacy state properties correctly", () => {
    const state = {
      f: ["filter1", "filter2"],
      pf: ["pausedFilter1"],
      s: "searchTerm",
      p: 1,
      d: 2,
      t: "activeTab",
      r: "regexPattern",
      st: "status",
    }

    const result = readLegacyUrlState(state)

    expect(result).toEqual({
      activeFilters: ["filter1", "filter2"],
      pausedFilters: ["pausedFilter1"],
      searchTerm: "searchTerm",
      predefinedFilter: 1,
      showDetailsFor: 2,
      activeTab: "activeTab",
      silencesStatus: "status",
      silencesRegEx: "regexPattern",
    })
  })

  it("should handle NaN values for predefinedFilter and showDetailsFor", () => {
    const state = {
      p: NaN,
      d: NaN,
    }

    const result = readLegacyUrlState(state)

    expect(result.predefinedFilter).toBeUndefined()
    expect(result.showDetailsFor).toBeUndefined()
  })
})

describe("getFiltersForUrl", () => {
  it("should convert filters to URL format with prefix", () => {
    const filters = {
      status: ["active", "pending"],
      severity: "high",
      category: undefined,
      tags: null,
    }

    const result = getFiltersForUrl("f_", filters)

    expect(result).toEqual({
      f_status: ["active", "pending"],
      f_severity: "high",
    })
  })

  it("should handle empty filters object", () => {
    const result = getFiltersForUrl("f_", {})
    expect(result).toEqual({})
  })
})

describe("convertAppStateToUrlState", () => {
  it("should convert complete app state to URL state", () => {
    const appState = {
      activeFilters: {
        support_group: ["a", "b"],
        severity: "high",
      },
      pausedFilters: {
        type: "warning",
      },
      predefinedFilter: 1,
      searchTerm: "error",
      showDetailsFor: 123,
      silenceRegEx: "pattern",
      silenceStatus: "active",
    }

    const result = convertAppStateToUrlState(appState)

    expect(result).toEqual({
      f_support_group: ["a", "b"],
      f_severity: "high",
      pf_type: "warning",
      predefinedFilter: 1,
      searchTerm: "error",
      showDetailsFor: 123,
      silenceRegEx: "pattern",
      silenceStatus: "active",
    })
  })

  it("should handle empty app state", () => {
    const result = convertAppStateToUrlState({})

    expect(result).toEqual({
      predefinedFilter: undefined,
      searchTerm: undefined,
      showDetailsFor: undefined,
      silenceRegEx: undefined,
      silenceStatus: undefined,
    })
  })

  it("should handle undefined filters", () => {
    const appState = {
      activeFilters: undefined,
      pausedFilters: undefined,
    }

    const result = convertAppStateToUrlState(appState)

    expect(result).toEqual({
      predefinedFilter: undefined,
      searchTerm: undefined,
      showDetailsFor: undefined,
      silenceRegEx: undefined,
      silenceStatus: undefined,
    })
  })
})

describe("getFiltersForApp", () => {
  it("should extract filters with prefix from URL state", () => {
    const urlState = {
      f_status: ["active", "pending"],
      f_severity: "high",
      pf_type: "warning",
      predefinedFilter: "1",
    }

    const result = getFiltersForApp("f_", urlState)

    expect(result).toEqual({
      status: ["active", "pending"],
      severity: ["high"],
    })
  })

  it("should handle empty URL state", () => {
    const result = getFiltersForApp("f_", {})
    expect(result).toEqual({})
  })
})

describe("convertUrlStateToAppState", () => {
  it("should convert URL state to app state", () => {
    const urlState = {
      f_status: ["active", "pending"],
      f_severity: "high",
      pf_type: "warning",
      predefinedFilter: 1,
      searchTerm: "error",
      showDetailsFor: 123,
      silencesRegEx: "pattern",
      silencesStatus: "active",
    }

    const result = convertUrlStateToAppState(urlState)

    expect(result).toEqual({
      activeFilters: {
        status: ["active", "pending"], // Current implementation treats as single string
        severity: ["high"],
      },
      pausedFilters: {
        type: ["warning"],
      },
      predefinedFilter: 1,
      searchTerm: "error",
      showDetailsFor: 123,
      silencesRegEx: "pattern",
      silencesStatus: "active",
    })
  })

  it("should handle empty URL state", () => {
    const result = convertUrlStateToAppState({})

    expect(result).toEqual({
      activeFilters: {},
      pausedFilters: {},
      predefinedFilter: undefined,
      searchTerm: undefined,
      showDetailsFor: undefined,
      silencesRegEx: undefined,
      silencesStatus: undefined,
    })
  })
})

describe("removeFilter", () => {
  it("should remove specific value from array filter", () => {
    const filters = {
      status: ["active", "pending", "closed"],
      severity: "high",
    }

    const result = removeFilter(filters, "status", "pending")

    expect(result).toEqual({
      status: ["active", "closed"],
      severity: "high",
    })
  })

  it("should remove filter key when array becomes empty", () => {
    const filters = {
      status: ["active"],
      severity: "high",
    }

    const result = removeFilter(filters, "status", "active")

    expect(result).toEqual({
      severity: "high",
    })
  })

  it("should remove single value filter completely", () => {
    const filters = {
      status: "active",
      severity: "high",
    }

    const result = removeFilter(filters, "status", "active")

    expect(result).toEqual({
      severity: "high",
    })
  })

  it("should not remove single value filter if value does not match", () => {
    const filters = {
      status: "active",
      severity: "high",
    }

    const result = removeFilter(filters, "status", "pending")

    expect(result).toEqual({
      status: "active",
      severity: "high",
    })
  })

  it("should handle non-existent filter key", () => {
    const filters = {
      status: "active",
    }

    const result = removeFilter(filters, "nonexistent", "value")

    expect(result).toEqual({
      status: "active",
    })
  })

  it("should handle undefined filters", () => {
    const result = removeFilter(undefined, "status", "active")
    expect(result).toEqual({})
  })

  it("should not mutate original filters object", () => {
    const filters = {
      status: ["active", "pending"],
      severity: "high",
    }

    const result = removeFilter(filters, "status", "active")

    expect(filters).toEqual({
      status: ["active", "pending"],
      severity: "high",
    })
    expect(result).toEqual({
      status: ["pending"],
      severity: "high",
    })
  })
})

describe("addFilter", () => {
  it("should add value to existing array filter", () => {
    const filters = {
      status: ["active", "pending"],
      severity: "high",
    }

    const result = addFilter(filters, "status", "closed")

    expect(result).toEqual({
      status: ["active", "pending", "closed"],
      severity: "high",
    })
  })

  it("should not add duplicate values to array filter", () => {
    const filters = {
      status: ["active", "pending"],
    }

    const result = addFilter(filters, "status", "active")

    expect(result).toEqual({
      status: ["active", "pending"],
    })
  })

  it("should convert single value to array when adding second value", () => {
    const filters = {
      status: "active",
      severity: "high",
    }

    const result = addFilter(filters, "status", "pending")

    expect(result).toEqual({
      status: ["active", "pending"],
      severity: "high",
    })
  })

  it("should create new filter when key does not exist", () => {
    const filters = {
      severity: "high",
    }

    const result = addFilter(filters, "status", "active")

    expect(result).toEqual({
      severity: "high",
      status: "active",
    })
  })

  it("should handle empty filters object", () => {
    const result = addFilter({}, "status", "active")

    expect(result).toEqual({
      status: "active",
    })
  })

  it("should handle undefined filters", () => {
    const result = addFilter(undefined, "status", "active")

    expect(result).toEqual({
      status: "active",
    })
  })

  it("should not mutate original filters object", () => {
    const filters = {
      status: ["active"],
      severity: "high",
    }

    const result = addFilter(filters, "status", "pending")

    expect(filters).toEqual({
      status: ["active"],
      severity: "high",
    })
    expect(result).toEqual({
      status: ["active", "pending"],
      severity: "high",
    })
  })

  it("should preserve order when removing duplicates from Set", () => {
    const filters = {
      status: ["active", "pending", "closed"],
    }

    const result = addFilter(filters, "status", "pending")

    expect(result).toEqual({
      status: ["active", "pending", "closed"],
    })
  })
})
