/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, test, expect } from "vitest"
import { createConditionAbbreviation, formatAge, getReadyCondition, isEmpty, isReady } from "./utils"
import { PluginPreset } from "./types/k8sTypes"

/** Define mock data **/
const mockPreset: PluginPreset = {
  status: {
    statusConditions: {
      conditions: [{ type: "Ready", status: "True", lastTransitionTime: "" }],
    },
  },
}

const mockPresetNotReady: PluginPreset = {
  status: {
    statusConditions: {
      conditions: [{ type: "Ready", status: "False", lastTransitionTime: "" }],
    },
  },
}

/** Tests for utils **/

describe("Utility Functions", () => {
  describe("getReadyCondition", () => {
    test("returns ready condition from preset", () => {
      const condition = getReadyCondition(mockPreset)
      expect(condition).toEqual({ type: "Ready", status: "True" })
    })

    test("returns undefined when no ready condition is present", () => {
      const condition = getReadyCondition({})
      expect(condition).toBeUndefined()
    })
  })

  describe("isReady", () => {
    test("returns true for a ready preset", () => {
      const result = isReady(mockPreset)
      expect(result).toBe(true)
    })

    test("returns false for a not ready preset", () => {
      const result = isReady(mockPresetNotReady)
      expect(result).toBe(false)
    })
  })

  describe("createConditionAbbreviation", () => {
    test("extracts capital letters from a string", () => {
      const abbreviation = createConditionAbbreviation("AllPluginsReady")
      expect(abbreviation).toBe("APR")
    })

    test("returns the whole word if single capital letter", () => {
      const abbreviation = createConditionAbbreviation("Ready")
      expect(abbreviation).toBe("Ready")
    })
  })

  describe("isEmpty", () => {
    test("returns true for empty string, array, or object", () => {
      expect(isEmpty("")).toBe(true)
      expect(isEmpty([])).toBe(true)
      expect(isEmpty({})).toBe(true)
    })

    test("returns false for non-empty values", () => {
      expect(isEmpty("text")).toBe(false)
      expect(isEmpty([1])).toBe(false)
      expect(isEmpty({ key: "value" })).toBe(false)
    })

    test("returns true for null or undefined", () => {
      expect(isEmpty(null)).toBe(true)
      expect(isEmpty(undefined)).toBe(true)
    })
  })

  describe("formatAge", () => {
    test("formats time correctly as age", () => {
      const now = new Date()
      const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000)

      const result = formatAge(oneHourAgo)
      expect(result).toBe("1 hour")
    })

    test("formats multiple units correctly as age", () => {
      const now = new Date()
      const twoDaysThreeHours = new Date(now.getTime() - (2 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000))

      const result = formatAge(twoDaysThreeHours)
      expect(result).toBe("2 days, 3 hours")
    })

    test("returns '0 minutes' if difference is minimal", () => {
      const now = new Date()
      const justNow = new Date(now.getTime())

      const result = formatAge(justNow)
      expect(result).toBe("0 minutes")
    })
  })
})
