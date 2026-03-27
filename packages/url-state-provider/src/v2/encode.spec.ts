/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import encode from "./encode"
import testCases from "./testCases"

describe("encode", () => {
  it.each(testCases)("[$id] should successfully encode given input", ({ decoded: input, encoded: output }) => {
    expect(encode(input, { skipEmptyString: false, skipNull: false })).toBe(output)
  })

  it("should remove empty string and null by default", () => {
    expect(
      encode({
        key: "value",
        null: null,
        empty: "",
      })
    ).toBe("?key=value")
  })

  describe("returns empty string for non-object values", () => {
    it("returns '' when input is not an object (null)", () => {
      expect(encode(null as any)).toBe("")
    })
    it("returns '' when input is not an object (undefined)", () => {
      expect(encode(undefined as any)).toBe("")
    })
    it("returns '' when input is not an object (true)", () => {
      expect(encode(true as any)).toBe("")
    })
    it("returns '' when input is not an object (false)", () => {
      expect(encode(false as any)).toBe("")
    })
    it("returns '' when input is not an object (number)", () => {
      expect(encode(1 as any)).toBe("")
    })
    it("returns '' when input is not an object (string)", () => {
      expect(encode("string" as any)).toBe("")
    })
    it("returns '' when input is an empty object", () => {
      expect(encode({})).toBe("")
    })
    it("returns '' when input is a regular expression", () => {
      expect(encode(/regexp/ as any)).toBe("")
    })
    it("returns '' when input is an array", () => {
      expect(encode([1, 2, 3] as any)).toBe("")
    })
  })

  describe("throws error for invalid object values", () => {
    it.each`
      description                    | input
      ${"nested object as value"}    | ${{ a: "b", c: { d: "e" } }}
      ${"array of objects as value"} | ${{ a: [{ b: 1 }] }}
      ${"function as value"}         | ${{ a: () => {} }}
      ${"symbol as value"}           | ${{ a: Symbol("s") }}
    `("throws error when input is $description", ({ input }) => {
      expect(() => encode(input)).toThrowError("Invalid object to encode")
    })
  })
})
