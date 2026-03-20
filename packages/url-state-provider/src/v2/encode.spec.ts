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
    it.each`
      description                    | input
      ${"not an object (null)"}      | ${null}
      ${"not an object (undefined)"} | ${undefined}
      ${"not an object (true)"}      | ${true}
      ${"not an object (false)"}     | ${false}
      ${"not an object (number)"}    | ${1}
      ${"not an object (string)"}    | ${"string"}
      ${"is an empty object"}        | ${{}}
      ${"a regular expression"}      | ${/regexp/}
      ${"an array"}                  | ${[1, 2, 3]}
    `("returns '' when input is $description", ({ input }) => {
      expect(encode(input)).toBe("")
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
