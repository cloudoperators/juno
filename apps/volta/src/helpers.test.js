/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { parseError } from "./helpers"

describe("Helpers", () => {
  describe("parseError", () => {
    test("return error as string if no object with message", () => {
      expect(parseError({ error: "This is an error text" })).toEqual(
        '{"error":"This is an error text"}'
      )
    })
    test("return error message if object with message attr exists", () => {
      expect(parseError({ message: "This is an error text" })).toEqual(
        "This is an error text"
      )
    })
    test("return error message if object message has attr msg", () => {
      expect(
        parseError({ message: '{ "msg": "This is an error text" }' })
      ).toEqual("This is an error text")
    })
  })
})
