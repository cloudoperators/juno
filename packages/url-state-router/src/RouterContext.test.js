/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * @jest-environment jsdom
 */

import React from "react"
import Router from "./Router"
import { useRouter } from "./RouterContext"
import { renderHook } from "@testing-library/react"

describe("useRouter", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe("calling outside the Router", () => {
    it("logs a warning", () => {
      console.warn = jest.fn(() => null)
      const spy = jest.spyOn(console, "warn")
      renderHook(() => useRouter())

      expect(spy).toHaveBeenCalledWith(
        "You should not use <Route>, <Switch>, <Redirect> or <Link> outside a <Router>"
      )
    })
  })

  describe("calling inside the Router", () => {
    const wrapper = ({ children }) => <Router stateID="app">{children}</Router>

    it("returns router properties", () => {
      const spy = jest.spyOn(console, "warn")
      const { result } = renderHook(() => useRouter(), { wrapper })
      expect(spy).not.toHaveBeenCalledWith(
        "You should not use <Route>, <Switch>, <Redirect> or <Link> outside a <Router>"
      )
      expect(result.current.insideRouter).toEqual(true)
      expect(result.current.navigateTo).toBeDefined()
      expect(result.current.redirectTo).toBeDefined()
    })
  })
})
