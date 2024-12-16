/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render } from "@testing-library/react"
// @ts-expect-error TS(6142): Module './App' was resolved to '/Users/I531348/Doc... Remove this comment to see the full error message
import App from "./App"
import { describe } from "node:test"
import { screen } from "shadow-dom-testing-library"

// Mock the styles
// @ts-expect-error TS(2304): Cannot find name 'vi'.
vi.mock("./styles.module.scss", () => ({
  default: new Proxy(new Object(), {
    // @ts-expect-error TS(2345): Argument of type '{ toString(): string; }' is not ... Remove this comment to see the full error message
    toString() {
      return "/*TEST STYLES*/"
    },
  }),
}))

describe("App", () => {
  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it("should render the App component", async () => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    render(<App id="123" />)
    const loginTitle = screen.queryAllByShadowText(/Converged Cloud/i)
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(loginTitle.length > 0).toBe(true)
  })
})
