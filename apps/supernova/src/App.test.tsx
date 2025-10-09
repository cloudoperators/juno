/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { act } from "react"
import { render } from "@testing-library/react"
import { screen } from "shadow-dom-testing-library"
import { describe } from "node:test"

import App from "./App"

vi.mock("./hooks/useAlertmanagerAPI", () => ({
  default: vi.fn(() => ({})),
}))

describe("App", () => {
  it("should render the App component", async () => {
    const mockProps = {
      endpoint: "http://localhost:3000",
      filterLabels: [],
      initialFilters: {},
      predefinedFilters: {},
      silenceExcludedLabels: [],
      silenceTemplates: [],
      theme: "theme-dark" as const,
      username: "testuser",
    }

    act(() => {
      render(<App {...mockProps} />)
    })
    const loginTitle = await screen.findAllByShadowText(/SUPERNOVA/i)
    expect(loginTitle.length > 0).toBe(true)
  })
})
