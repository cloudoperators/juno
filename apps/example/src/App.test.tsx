/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render } from "@testing-library/react"
import App from "./App"
import { describe, it, expect, vi } from "vitest"
import { screen } from "shadow-dom-testing-library"

// Mock the styles
vi.mock("./styles.module.scss", () => ({
  default: new Proxy(
    {},
    {
      get: () => "/*TEST STYLES*/",
    }
  ),
}))

describe("App", () => {
  it("should render the App component", () => {
    render(<App id="123" />)
    const loginTitle = screen.queryAllByShadowText(/Converged Cloud/i)
    expect(loginTitle.length > 0).toBe(true)
  })
})
