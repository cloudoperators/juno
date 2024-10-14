/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, act, waitFor } from "@testing-library/react"
import { screen } from "shadow-dom-testing-library" // only import screen from here
import App from "./App"

describe("App", () => {
  test("should render the App component", async () => {
    await act(async () => {
      render(<App id="123" />)
    })

    await waitFor(() => {
      const loginTitles = screen.queryAllByShadowText(/HEUREKA/i)
      expect(loginTitles.length).toBeGreaterThan(0)
    })
  })
})
