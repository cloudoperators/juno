/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render } from "@testing-library/react"
// support shadow dom queries
// https://reactjsexample.com/an-extension-of-dom-testing-library-to-provide-hooks-into-the-shadow-dom/
import { screen } from "shadow-dom-testing-library"
import App from "./App"
import { describe } from "node:test"

// Mock the styles
vi.mock("./styles.module.scss", () => ({
  default: new Proxy(new Object(), {
    toString() {
      return "/*TEST STYLES*/"
    },
  }),
}))

describe("App", () => {
  it("should render the App component", () => {
    render(<App id="123" />)
    const loginTitle = screen.queryAllByShadowText(/DOOP/i)
    expect(loginTitle.length > 0).toBe(true)
  })
})
