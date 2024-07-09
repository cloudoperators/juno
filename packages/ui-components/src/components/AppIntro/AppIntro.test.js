/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { AppIntro } from "./index"

describe("AppIntro", () => {
  test("renders an app intro", async () => {
    render(<AppIntro data-testid="app-intro" />)
    expect(screen.getByTestId("app-intro")).toBeInTheDocument()
    expect(screen.getByTestId("app-intro")).toHaveClass("juno-app-intro")
  })

  test("renders children as passed", async () => {
    render(
      <AppIntro data-testid="app-intro">
        <button></button>
      </AppIntro>
    )
    expect(screen.getByTestId("app-intro")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  test("renders a custom className", async () => {
    render(<AppIntro data-testid="app-intro" className="my-custom-classname" />)
    expect(screen.getByTestId("app-intro")).toBeInTheDocument()
    expect(screen.getByTestId("app-intro")).toHaveClass("my-custom-classname")
  })

  test("renders all props", async () => {
    render(<AppIntro data-testid="app-intro" data-lolol="some-prop" />)
    expect(screen.getByTestId("app-intro")).toBeInTheDocument()
    expect(screen.getByTestId("app-intro")).toHaveAttribute(
      "data-lolol",
      "some-prop"
    )
  })
})
