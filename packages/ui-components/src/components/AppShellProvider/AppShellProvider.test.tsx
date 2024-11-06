/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render } from "@testing-library/react"
import { AppShellProvider } from "./AppShellProvider.component"

describe("AppShellProvider", () => {
  test("renders an AppShellProvider wrapper div with 'theme-dark' theme class by default", () => {
    render(<AppShellProvider shadowRoot={false} />)
    expect(document.querySelector(".juno-app-body")).toHaveClass("theme-dark")
  })

  test("renders an AppShellProvider wrapper div with theme as passed", () => {
    render(<AppShellProvider shadowRoot={false} theme="theme-light" />)
    expect(document.querySelector("div.juno-app-body")).toHaveClass("theme-light")
  })
})
