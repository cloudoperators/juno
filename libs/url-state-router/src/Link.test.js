/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @jest-environment jsdom
 */

import React from "react"
import { render, screen, act, renderHook } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useRouter } from "./RouterContext"
import Router from "./Router"
import Link from "./Link"

describe("Link", () => {
  it("renders an anker tag", () => {
    render(
      <Router stateID="app">
        <Link to="/items/10">My Link</Link>
      </Router>
    )
    expect(() => {
      const anker = screen.getByText("My Link")
      expect(anker.nodeName).toEqual("A")
    }).not.toThrow()
  })

  it("navigate on click", async () => {
    const wrapper = ({ children }) => (
      <Router stateID="app">
        {children}
        <Link to="/items/x100">My Link</Link>
      </Router>
    )
    const { result } = renderHook(() => useRouter(), { wrapper })

    const link = screen.getByText("My Link")

    await act(async () => {
      await userEvent.click(link)
    })

    expect(result.current.currentPath).toEqual("/items/x100")
  })
})
