/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"

import { ContentHeading } from "./ContentHeading.component"

describe("ContentHeading", () => {
  test("renders a content heading", () => {
    render(<ContentHeading heading="My Heading" />)
    expect(screen.getByRole("heading")).toBeInTheDocument()
    expect(screen.getByRole("heading")).toHaveClass("juno-content-heading")
  })

  test("renders a content heading with the given text", () => {
    render(<ContentHeading heading="My Heading" />)
    expect(screen.getByRole("heading")).toHaveTextContent("My Heading")
  })

  test("renders a content heading without any text", () => {
    render(<ContentHeading />)
    expect(screen.getByRole("heading")).toBeInTheDocument()
    expect(screen.getByRole("heading")).toHaveTextContent("")
  })

  test("renders children as passed", () => {
    render(
      <ContentHeading>
        <button></button>
      </ContentHeading>
    )
    expect(screen.getByRole("heading")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  test("renders multiple children elements", () => {
    render(
      <ContentHeading>
        <button>Button 1</button>
        <span>Span 1</span>
      </ContentHeading>
    )
    expect(screen.getByRole("heading")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByText("Span 1")).toBeInTheDocument()
  })

  test("renders with no children", () => {
    render(<ContentHeading />)
    expect(screen.getByRole("heading")).toBeInTheDocument()
    expect(screen.getByRole("heading").children).toHaveLength(0)
  })

  test("renders a custom className", () => {
    render(<ContentHeading className="my-custom-classname" />)
    expect(screen.getByRole("heading")).toBeInTheDocument()
    expect(screen.getByRole("heading")).toHaveClass("my-custom-classname")
  })

  test("renders all props", () => {
    render(<ContentHeading data-lolol="some-prop" />)
    expect(screen.getByRole("heading")).toBeInTheDocument()
    expect(screen.getByRole("heading")).toHaveAttribute("data-lolol", "some-prop")
  })
})
