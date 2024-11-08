/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Grid } from "./Grid.component"

describe("Grid Component", () => {
  describe("Basic Rendering", () => {
    test("renders a Grid container", () => {
      render(<Grid data-testid="my-grid" />)
      expect(screen.getByTestId("my-grid")).toBeInTheDocument()
    })

    test("renders children elements correctly", () => {
      render(
        <Grid data-testid="my-grid">
          <div data-testid="child1">Child 1</div>
          <div data-testid="child2">Child 2</div>
        </Grid>
      )

      expect(screen.getByTestId("child1")).toBeInTheDocument()
      expect(screen.getByTestId("child2")).toBeInTheDocument()
    })
  })

  describe("Class Names", () => {
    test("renders a custom className", () => {
      render(<Grid data-testid="my-grid" className="my-grid-class" />)
      expect(screen.getByTestId("my-grid")).toHaveClass("my-grid-class")
    })

    test("applies default className when no custom className is provided", () => {
      render(<Grid data-testid="my-default-grid" />)
      expect(screen.getByTestId("my-default-grid")).toHaveClass("juno-grid")
    })
  })

  describe("Inline Styles and Auto Prop", () => {
    test("has modified CSS variables in a style tag for auto grids", () => {
      render(<Grid data-testid="my-auto-grid" auto />)
      const gridElement = screen.getByTestId("my-auto-grid")

      // Ensure element is in the document before accessing style
      expect(gridElement).toBeInTheDocument()

      // Cast element style as CSSStyleDeclaration to ensure type safety
      const style = gridElement.style

      expect(style.getPropertyValue("--grid-column-flex-grow")).toBe("1")
      expect(style.getPropertyValue("--grid-column-flex-shrink")).toBe("0")
      expect(style.getPropertyValue("--grid-column-flex-basis")).toBe("0")
    })

    test("does not apply auto styles when 'auto' prop is false", () => {
      render(<Grid data-testid="my-standard-grid" />)
      const gridElement = screen.getByTestId("my-standard-grid")

      const style = gridElement.style

      // Ensure auto grid styles are not applied
      expect(style.getPropertyValue("--grid-column-flex-grow")).toBe("")
      expect(style.getPropertyValue("--grid-column-flex-shrink")).toBe("")
      expect(style.getPropertyValue("--grid-column-flex-basis")).toBe("")
    })

    test("applies custom styles", () => {
      render(<Grid data-testid="my-grid" style={{ backgroundColor: "red" }} />)
      const gridElement = screen.getByTestId("my-grid")
      const style = gridElement.style

      expect(style.backgroundColor).toBe("red")
    })

    test("applies no styles when neither auto nor style prop is provided", () => {
      render(<Grid data-testid="my-no-styles-grid" />)
      const gridElement = screen.getByTestId("my-no-styles-grid")
      const style = gridElement.style

      expect(style.flexGrow).toBe("")
      expect(style.flexShrink).toBe("")
      expect(style.flexBasis).toBe("")
    })
  })
})
