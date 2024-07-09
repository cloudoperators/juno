/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const Template = require("../src/index")

describe("Template", () => {
  let library

  beforeEach(() => {
    // Initialize the library or create a new instance for each test
    library = new Template()
  })

  describe("sampleMethod", () => {
    it("should return a concatenated string", () => {
      const result = library.sampleMethod("Hello", 42)
      expect(result).toBe("Hello 42")
    })
  })

  describe("anotherMethod", () => {
    it("should return an object with the provided data", () => {
      const data = "Test Data"
      const result = library.anotherMethod(data)
      expect(result).toEqual({ result: data })
    })
  })
})
