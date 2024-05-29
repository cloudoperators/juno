/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * @jest-environment jsdom
 */

import { renderHook, act } from "@testing-library/react"
import useURLStateProvider from "./useURLStateProvider"
globalThis.console.error = jest.fn(() => null)

describe("useURLStateProvider", () => {
  it("initializes url based navigation", () => {
    const { result } = renderHook(() => useURLStateProvider("app1"))

    expect(result.current.state).toBeDefined()
    expect(result.current.navigateTo).toBeDefined()
    expect(result.current.redirectTo).toBeDefined()
  })

  it("throws an error if stateID is missing", () => {
    const { result } = renderHook(() => useURLStateProvider())

    expect(console.error).toHaveBeenCalledWith(
      "stateID is undefined. Please provide an unique ID."
    )
  })

  describe("navigateTo", () => {
    it("should update path", () => {
      const { result } = renderHook(() => useURLStateProvider("app"))

      act(() => {
        result.current.navigateTo("/items/x10")
      })

      expect(result.current.state.p).toEqual("/items/x10")
    })

    it("should update options", () => {
      const { result } = renderHook(() => useURLStateProvider("app"))

      act(() => {
        result.current.navigateTo("/items/x10", { key: "value" })
      })

      expect(result.current.state.o).toEqual({ key: "value" })
    })
  })

  describe("redirectTo", () => {
    it("should update path", () => {
      const { result } = renderHook(() => useURLStateProvider("app"))

      act(() => {
        result.current.redirectTo("/items/x10")
      })

      expect(result.current.state.p).toEqual("/items/x10")
    })

    it("should update options", () => {
      const { result } = renderHook(() => useURLStateProvider("app"))

      act(() => {
        result.current.redirectTo("/items/x10", { key: "value" })
      })

      expect(result.current.state.o).toEqual({ key: "value" })
    })
  })
})
