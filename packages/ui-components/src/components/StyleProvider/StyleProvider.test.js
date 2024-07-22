/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render } from "@testing-library/react"
import { StyleProvider } from "./index"

describe("StyleProvider", () => {
  test("renders a StyleProvider wrapper div with 'theme-dark' theme class by default", async () => {
    const { container } = render(<StyleProvider></StyleProvider>)
    expect(container.querySelector("div.juno-app-body")).toHaveClass(
      "theme-dark"
    )
  })

  test("renders a StyleProvider wrapper div with theme class as passed", async () => {
    const { container } = render(
      <StyleProvider theme="my-theme"></StyleProvider>
    )
    expect(container.querySelector("div.juno-app-body")).toHaveClass("my-theme")
  })
})
