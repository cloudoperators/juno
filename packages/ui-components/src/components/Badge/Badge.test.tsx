/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"

import { Badge } from "./index"

describe("Badge", () => {
  test("renders a badge with text as passed", () => {
    render(<Badge text="default badge" data-testid="badge" />)
    expect(screen.getByTestId("badge")).toBeInTheDocument()
    expect(screen.getByTestId("badge")).toHaveTextContent("default badge")
  })

  test("renders a badge with children", () => {
    render(<Badge data-testid="badge">Children inside</Badge>)
    expect(screen.getByTestId("badge")).toBeInTheDocument()
    expect(screen.getByTestId("badge")).toHaveTextContent("Children inside")
  })

  test("renders an info badge variant as passed", () => {
    render(<Badge variant="info" data-testid="badge" />)
    expect(screen.getByTestId("badge")).toBeInTheDocument()
    expect(screen.getByTestId("badge")).toHaveClass("juno-badge-info")
  })

  test("renders a success badge variant as passed", () => {
    render(<Badge variant="success" data-testid="badge" />)
    expect(screen.getByTestId("badge")).toBeInTheDocument()
    expect(screen.getByTestId("badge")).toHaveClass("juno-badge-success")
  })

  test("renders a warning badge variant as passed", () => {
    render(<Badge variant="warning" data-testid="badge" />)
    expect(screen.getByTestId("badge")).toBeInTheDocument()
    expect(screen.getByTestId("badge")).toHaveClass("juno-badge-warning")
  })

  test("renders a danger badge variant as passed", () => {
    render(<Badge variant="danger" data-testid="badge" />)
    expect(screen.getByTestId("badge")).toBeInTheDocument()
    expect(screen.getByTestId("badge")).toHaveClass("juno-badge-danger")
  })

  test("renders an error badge variant as passed", () => {
    render(<Badge variant="error" data-testid="badge" />)
    expect(screen.getByTestId("badge")).toBeInTheDocument()
    expect(screen.getByTestId("badge")).toHaveClass("juno-badge-error")
  })

  test("renders a critical badge variant as passed", () => {
    render(<Badge variant="critical" data-testid="badge" />)
    expect(screen.getByTestId("badge")).toBeInTheDocument()
    expect(screen.getByTestId("badge")).toHaveClass("juno-badge-critical")
  })

  test("renders a default icon as passed", () => {
    render(<Badge icon={true} />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveClass("juno-icon-default")
  })

  test("renders the correct variant-specific icon as passed", () => {
    render(<Badge variant="warning" icon={true} />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveClass("juno-icon-warning")
  })

  test("renders any available icon as passed", () => {
    render(<Badge icon="comment" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveClass("juno-icon-comment")
  })

  test("renders all props as passed", () => {
    render(<Badge data-testid="badge" data-lolol={true} />)
    expect(screen.getByTestId("badge")).toBeInTheDocument()
    expect(screen.getByTestId("badge")).toHaveAttribute("data-lolol")
  })
})
