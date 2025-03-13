/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, act, waitFor } from "@testing-library/react"
import { screen } from "shadow-dom-testing-library"
import App from "./App"

describe("App", () => {
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
