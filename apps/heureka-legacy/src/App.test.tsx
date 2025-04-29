/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, act, waitFor, cleanup } from "@testing-library/react"
import { screen } from "shadow-dom-testing-library"
import App from "./App"

class ResizeObserver {
  observe() {
    // do nothing
    vi.fn()
  }
  unobserve() {
    // do nothing
    vi.fn()
  }
  disconnect() {
    // do nothing
    vi.fn()
  }
}

window.ResizeObserver = ResizeObserver

describe("App", () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  test("should render the App component", async () => {
    let loginTitles
    act(() => {
      render(<App id="123" />)
    })
    waitFor(() => (loginTitles = screen.queryAllByShadowText(/HEUREKA/i)))
    // @ts-expect-error TS(2454): Variable 'loginTitles' is used before being assign... Remove this comment to see the full error message
    expect(loginTitles.length).toBeGreaterThan(0)
  })
})
