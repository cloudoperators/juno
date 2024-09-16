/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { ContentContainer } from "./index"

describe("ContentContainer", () => {
  test("renders a content container", () => {
    render(<ContentContainer data-testid="content-container" />)
    expect(screen.getByTestId("content-container")).toBeInTheDocument()
    expect(screen.getByTestId("content-container")).toHaveClass("juno-content-container")
  })

  test("renders a content container with flex col layout", () => {
    render(<ContentContainer data-testid="content-container" />)
    expect(screen.getByTestId("content-container")).toBeInTheDocument()
    expect(screen.getByTestId("content-container")).toHaveClass("jn-flex-col")
  })

  test("renders a content container with flex grow", () => {
    render(<ContentContainer data-testid="content-container" />)
    expect(screen.getByTestId("content-container")).toBeInTheDocument()
    expect(screen.getByTestId("content-container")).toHaveClass("jn-grow")
  })

  test("renders children as passed", () => {
    render(
      <ContentContainer data-testid="content-container">
        <button></button>
      </ContentContainer>
    )
    expect(screen.getByTestId("content-container")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  test("renders a custom className", () => {
    render(<ContentContainer data-testid="content-container" className="my-custom-classname" />)
    expect(screen.getByTestId("content-container")).toBeInTheDocument()
    expect(screen.getByTestId("content-container")).toHaveClass("my-custom-classname")
  })

  test("renders all props", () => {
    render(<ContentContainer data-testid="content-container" data-lolol="some-prop" />)
    expect(screen.getByTestId("content-container")).toBeInTheDocument()
    expect(screen.getByTestId("content-container")).toHaveAttribute("data-lolol", "some-prop")
  })
})
