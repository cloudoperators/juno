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
    ).toBe("key=value")
  })

  it.each`
    description                                                                     | input
    ${"not an object"}                                                              | ${null}
    ${"not an object"}                                                              | ${undefined}
    ${"not an object"}                                                              | ${true}
    ${"not an object"}                                                              | ${false}
    ${"not an object"}                                                              | ${1}
    ${"not an object"}                                                              | ${"string"}
    ${"is ab empty object"}                                                         | ${{}}
    ${"a regular expression"}                                                       | ${/regexp/}
    ${"an array"}                                                                   | ${[1, 2, 3]}
    ${"a valid object but the value of each key does not conform to required type"} | ${{ a: "b", c: { d: "e" } }}
  `("should throw an error when input is $description", ({ input }) => {
    expect(() => encode(input)).toThrowError("Invalid object to encode")
  })
})
