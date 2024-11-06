/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Grid } from "./Grid.component"

describe("Grid", () => {
  test("renders a Grid container", () => {
    render(<Grid data-testid="my-grid" />)
    expect(screen.getByTestId("my-grid")).toBeInTheDocument()
  })

  test("renders a custom className", () => {
    render(<Grid data-testid="my-grid" className="my-grid-class" />)
    expect(screen.getByTestId("my-grid")).toHaveClass("my-grid-class")
  })

  test("has modified CSS variables in a style tag for auto grids", () => {
    render(<Grid data-testid="my-auto-grid" auto />)
    const gridElement = screen.getByTestId("my-auto-grid")

    // Ensure element is in the document before accessing style
    expect(gridElement).toBeInTheDocument()

    // Cast elem style as CSSStyleDeclaration to ensure type safety
    const style = gridElement.style

    expect(style.getPropertyValue("--grid-column-flex-grow")).toBe("1")
    expect(style.getPropertyValue("--grid-column-flex-shrink")).toBe("0")
    expect(style.getPropertyValue("--grid-column-flex-basis")).toBe("0")
  })
})
