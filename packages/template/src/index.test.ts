import templateAddNumbers from "../src/index"

/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

describe("templateAddNumbers", () => {
  it("should return the sum of two positive numbers", () => {
    const result = templateAddNumbers(2, 3)
    expect(result).toBe(5)
  })

  it("should return the sum of a positive and a negative number", () => {
    const result = templateAddNumbers(5, -3)
    expect(result).toBe(2)
  })

  it("should return the sum of two negative numbers", () => {
    const result = templateAddNumbers(-10, -5)
    expect(result).toBe(-15)
  })

  it("should return 0 when both numbers are 0", () => {
    const result = templateAddNumbers(0, 0)
    expect(result).toBe(0)
  })
})
