/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { AppBody } from "./index"

describe("AppBody", () => {
  test("renders an app body", () => {
    render(<AppBody data-testid="app-body" />)
    expect(screen.getByTestId("app-body")).toBeInTheDocument()
    expect(screen.getByTestId("app-body")).toHaveClass("juno-body")
  })

  test("renders an app body with flex column", () => {
    render(<AppBody data-testid="app-body" />)
    expect(screen.getByTestId("app-body")).toBeInTheDocument()
    expect(screen.getByTestId("app-body")).toHaveClass("jn-flex-col")
  })

  test("renders an app body with full height", () => {
    render(<AppBody data-testid="app-body" />)
    expect(screen.getByTestId("app-body")).toBeInTheDocument()
    expect(screen.getByTestId("app-body")).toHaveClass("jn-h-full")
  })

  test("renders children as passed", () => {
    render(
      <AppBody data-testid="app-body">
        <button></button>
      </AppBody>
    )
    expect(screen.getByTestId("app-body")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  test("renders a custom className", () => {
    render(<AppBody data-testid="app-body" className="my-custom-classname" />)
    expect(screen.getByTestId("app-body")).toBeInTheDocument()
    expect(screen.getByTestId("app-body")).toHaveClass("my-custom-classname")
  })

  test("renders all props", () => {
    render(<AppBody data-testid="app-body" data-lolol="some-prop" />)
    expect(screen.getByTestId("app-body")).toBeInTheDocument()
    expect(screen.getByTestId("app-body")).toHaveAttribute("data-lolol", "some-prop")
  })
})
