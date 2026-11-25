/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, fireEvent, cleanup } from "@testing-library/react"
import { describe, test, expect, vi, afterEach } from "vitest"
import PluginErrorBoundary from "./PluginErrorBoundary"

const Boom = () => {
  throw new Error("plugin exploded")
}

describe("PluginErrorBoundary", () => {
  afterEach(() => cleanup())

  test("renders the error Status fallback when a child throws", () => {
    // Silence the expected React error log for the thrown render.
    const spy = vi.spyOn(console, "error").mockImplementation(() => {})
    render(
      <PluginErrorBoundary resetKey="EP">
        <Boom />
      </PluginErrorBoundary>
    )

    expect(screen.getByText("Failed to Load Plugin")).toBeInTheDocument()
    expect(screen.getByText("plugin exploded")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /retry/i })).toBeInTheDocument()
    spy.mockRestore()
  })

  test("Retry calls onReset and clears the error", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {})
    const onReset = vi.fn()
    render(
      <PluginErrorBoundary resetKey="EP" onReset={onReset}>
        <Boom />
      </PluginErrorBoundary>
    )

    fireEvent.click(screen.getByRole("button", { name: /retry/i }))
    expect(onReset).toHaveBeenCalledTimes(1)
    spy.mockRestore()
  })
})
