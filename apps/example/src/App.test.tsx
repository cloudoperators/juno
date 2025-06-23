/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, cleanup } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
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

// Mock styles
vi.mock("./styles.module.css", () => ({
  default: new Proxy(
    {},
    {
      get: () => "/*TEST STYLES*/",
    }
  ),
}))

describe("App", () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it("should render the App component", () => {
    render(<App id="123" />)
    const loginTitle = screen.queryAllByShadowText(/Juno UI Peaks Monitoring Dashboard/i)
    expect(loginTitle.length > 0).toBe(true)
  })
})
