/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { getInhibitor } from "./AlertStatus"

describe("AlertStatus", () => {
  describe("getInhibitor", () => {
    it("tests that null is returned if the inhibiting alert is not found", () => {
      const result = getInhibitor(testedAlertFingerPrintNonExistent.status.inhibitedBy, alerts)
      expect(result).toEqual(null)
    })
    it("test that the alert is not ihibited and returns null", () => {
      const result = getInhibitor(testedAlertNotInhibited.status.inhibitedBy, alerts)
      expect(result).toEqual(null)
    })
    it("should return the alert, which is the longest active", () => {
      const result = getInhibitor(testedAlert.status.inhibitedBy, alerts)
      expect(result).toEqual({
        endsAt: "2024-11-18T13:33:58.716Z",
        fingerprint: "8932rlf83rcs",
        status: { inhibitedBy: [], silencedBy: [], state: "suppressed" },
      })
    })
  })
})
const testedAlert = {
  fingerprint: "e6e485c4b035f167",
  status: { inhibitedBy: ["a02f20abab2e9f6a", "8932rlf83rcs", "sadfewttw"], silencedBy: [], state: "suppressed" },
}

const testedAlertFingerPrintNonExistent = {
  fingerprint: "e6e485c4b035f167",
  status: { inhibitedBy: ["525lgji8s87734s"], silencedBy: [], state: "suppressed" },
}

const testedAlertNotInhibited = {
  fingerprint: "e6e485c4b035f167",
  status: { inhibitedBy: [], silencedBy: [], state: "suppressed" },
}

const alerts = [
  {
    fingerprint: "e6e485c4b035f167",
    endsAt: "2024-09-18T13:33:57.716Z",
    status: { inhibitedBy: ["a02f20abab2e9f6a", "8932rlf83rcs", "sadfewttw"], silencedBy: [], state: "suppressed" },
  },
  {
    fingerprint: "a02f20abab2e9f6a",
    endsAt: "2024-09-18T13:33:57.716Z",
    status: { inhibitedBy: [], silencedBy: [], state: "suppressed" },
  },
  {
    fingerprint: "sadfewttw",
    endsAt: "2024-10-18T13:33:57.716Z",
    status: { inhibitedBy: [], silencedBy: [], state: "suppressed" },
  },
  {
    fingerprint: "8932rlf83rcs",
    endsAt: "2024-11-18T13:33:58.716Z",
    status: { inhibitedBy: [], silencedBy: [], state: "suppressed" },
  },
  {
    fingerprint: "wetsgs9v874",
    endsAt: "2025-10-18T13:33:57.716Z",
    status: { inhibitedBy: [], silencedBy: [], state: "suppressed" },
  },
]
