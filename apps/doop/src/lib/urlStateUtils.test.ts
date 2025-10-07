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
      s: "searchTerm",
      v: "violationGroup",
    }

    const result = readLegacyUrlState(state)

    expect(result).toEqual({
      activeFilters: ["filter1", "filter2"],
      searchTerm: "searchTerm",
      violationGroup: "violationGroup",
    })
  })

  it("should handle undefined properties", () => {
    const state = {}

    const result = readLegacyUrlState(state)

    expect(result).toEqual({
      activeFilters: undefined,
      searchTerm: undefined,
      violationGroup: undefined,
    })
  })

  it("should handle null state", () => {
    const result = readLegacyUrlState(null)

    expect(result).toEqual({
      activeFilters: undefined,
      searchTerm: undefined,
      violationGroup: undefined,
    })
  })
})

describe("getFiltersForUrl", () => {
  it("should convert filter array to URL format with prefix", () => {
    const filters = [
      { key: "status", value: "active" },
      { key: "severity", value: "high" },
      { key: "status", value: "pending" },
    ]

    const result = getFiltersForUrl("f_", filters)

    expect(result).toEqual({
      f_status: ["active", "pending"],
      f_severity: "high",
    })
  })

  it("should handle single filter", () => {
    const filters = [{ key: "status", value: "active" }]

    const result = getFiltersForUrl("f_", filters)

    expect(result).toEqual({
      f_status: "active",
    })
  })

  it("should handle empty filters array", () => {
    const result = getFiltersForUrl("f_", [])
    expect(result).toEqual({})
  })

  it("should handle multiple values for same key", () => {
    const filters = [
      { key: "type", value: "error" },
      { key: "type", value: "warning" },
      { key: "type", value: "info" },
    ]

    const result = getFiltersForUrl("f_", filters)

    expect(result).toEqual({
      f_type: ["error", "warning", "info"],
    })
  })
})

describe("convertAppStateToUrlState", () => {
  it("should convert complete app state to URL state", () => {
    const appState = {
      activeFilters: [
        { key: "support_group", value: "a" },
        { key: "support_group", value: "b" },
        { key: "severity", value: "high" },
      ],
      searchTerm: "error",
      violationGroup: "group123",
    }

    const result = convertAppStateToUrlState(appState)

    expect(result).toEqual({
      f_support_group: ["a", "b"],
      f_severity: "high",
      searchTerm: "error",
      violationGroup: "group123",
    })
  })

  it("should handle empty app state", () => {
    const result = convertAppStateToUrlState({})

    expect(result).toEqual({
      searchTerm: undefined,
      violationGroup: undefined,
    })
  })

  it("should handle undefined activeFilters", () => {
    const appState = {
      activeFilters: undefined,
      searchTerm: "test",
    }

    const result = convertAppStateToUrlState(appState)

    expect(result).toEqual({
      searchTerm: "test",
      violationGroup: undefined,
    })
  })
})

describe("getFiltersForApp", () => {
  it("should extract filters with prefix from URL state", () => {
    const urlState = {
      f_status: ["active", "pending"],
      f_severity: "high",
      pf_type: "warning",
      searchTerm: "test",
    }

    const result = getFiltersForApp("f_", urlState)

    expect(result).toEqual([
      { key: "status", value: "active" },
      { key: "status", value: "pending" },
      { key: "severity", value: "high" },
    ])
  })

  it("should handle empty URL state", () => {
    const result = getFiltersForApp("f_", {})
    expect(result).toEqual([])
  })

  it("should ignore undefined and null values", () => {
    const urlState = {
      f_status: "active",
    }

    const result = getFiltersForApp("f_", urlState)

    expect(result).toEqual([{ key: "status", value: "active" }])
  })

  it("should only include keys with matching prefix", () => {
    const urlState = {
      f_status: "active",
      pf_type: "warning",
      searchTerm: "test",
    }

    const result = getFiltersForApp("f_", urlState)

    expect(result).toEqual([{ key: "status", value: "active" }])
  })
})

describe("convertUrlStateToAppState", () => {
  it("should convert URL state to app state", () => {
    const urlState = {
      f_status: ["active", "pending"],
      f_severity: "high",
      searchTerm: "error",
      violationGroup: "group123",
    }

    const result = convertUrlStateToAppState(urlState)

    expect(result).toEqual({
      activeFilters: [
        { key: "status", value: "active" },
        { key: "status", value: "pending" },
        { key: "severity", value: "high" },
      ],
      searchTerm: "error",
      violationGroup: "group123",
    })
  })

  it("should handle empty URL state", () => {
    const result = convertUrlStateToAppState({})

    expect(result).toEqual({
      activeFilters: [],
      searchTerm: undefined,
      violationGroup: undefined,
    })
  })

  it("should handle URL state without filters", () => {
    const urlState = {
      searchTerm: "test",
      violationGroup: "group456",
    }

    const result = convertUrlStateToAppState(urlState)

    expect(result).toEqual({
      activeFilters: [],
      searchTerm: "test",
      violationGroup: "group456",
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
