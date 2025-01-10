/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import decode from "./decode"
import testCases from "./testCases"

describe("decode", () => {
  it.each(testCases)("[$id] should successfully decode given input", ({ encoded: input, decoded: output }) => {
    expect(decode(input)).toMatchObject(output)
  })
})
