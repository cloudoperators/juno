/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { parseError } from "./helpers"

describe("helpers", () => {
  describe("parseError", () => {
    // test if we get the correct error message
    it("should return the error string", () => {
      const error = "An error occurred"
      expect(parseError(error)).toEqual("An error occurred")
    })

    // test if we get the correct error message
    it("should return a special Message for failed to fetch string", () => {
      const error = "Failed to fetch"
      expect(parseError(error)).toEqual(
        "Could not reach endpoint. Possible causes could include network issues, incorrect URL, or server outages."
      )
    })

    // test if we get the correct error message
    it("should return the the error message from a object", () => {
      // 404 err
      const error = { code: 404, message: "path was not found" }

      expect(parseError(error)).toEqual("404: path was not found")
    })

    // test if we get the correct error message
    it("should return the the error message from a stringifyed object", () => {
      // 404 err
      const error = JSON.stringify({ code: 404, message: "path was not found" })

      expect(parseError(error)).toEqual("404: path was not found")
    })

    // return standard message if its not parseable
    it("should return a standard message", () => {
      const error = 3
      expect(parseError(error)).toEqual("An error occurred")
    })
  })
})
