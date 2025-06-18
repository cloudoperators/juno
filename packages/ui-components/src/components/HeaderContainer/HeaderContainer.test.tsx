/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { HeaderContainer } from "./index"

describe("HeaderContainer", () => {
  test("renders a header container", () => {
    render(<HeaderContainer data-testid="my-header-container" />)
    expect(screen.getByTestId("my-header-container")).toBeInTheDocument()
    expect(screen.getByTestId("my-header-container")).toHaveClass("juno-header-container")
  })

  test("renders a header container which has sticky class", () => {
    render(<HeaderContainer data-testid="my-header-container" />)
    expect(screen.getByTestId("my-header-container")).toBeInTheDocument()
    expect(screen.getByTestId("my-header-container")).toHaveClass("jn:sticky")
  })

  test("renders a custom className as passed", () => {
    render(<HeaderContainer className="my-class" data-testid="my-header-container" />)
    expect(screen.getByTestId("my-header-container")).toBeInTheDocument()
    expect(screen.getByTestId("my-header-container")).toHaveClass("my-class")
  })

  test("renders all props", () => {
    render(<HeaderContainer data-lolol="some-prop" data-testid="my-header-container" />)
    expect(screen.getByTestId("my-header-container")).toBeInTheDocument()
    expect(screen.getByTestId("my-header-container")).toHaveAttribute("data-lolol", "some-prop")
  })
})
