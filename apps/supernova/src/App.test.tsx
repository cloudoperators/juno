/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render } from "@testing-library/react"
import { screen } from "shadow-dom-testing-library"
import { describe } from "node:test"

import App from "./App"

vi.mock("./hooks/useAlertmanagerAPI", () => ({
  default: vi.fn(() => ({})),
}))

describe("App", () => {
  it("should render the App component", () => {
    render(<App id="123" />)
    const loginTitle = screen.queryAllByShadowText(/SUPERNOVA/i)
    expect(loginTitle.length > 0).toBe(true)
  })
})
