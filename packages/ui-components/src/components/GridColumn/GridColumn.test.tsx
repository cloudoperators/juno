/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { GridColumn } from "./GridColumn.component"

describe("GridColumn", () => {
  describe("Basic Rendering", () => {
    test("renders a Grid row", () => {
      render(<GridColumn data-testid="my-grid-column" />)
      expect(screen.getByTestId("my-grid-column")).toBeInTheDocument()
    })

    test("renders children elements correctly", () => {
      render(
        <GridColumn data-testid="my-grid-column">
          <div data-testid="child1">Child 1</div>
          <div data-testid="child2">Child 2</div>
        </GridColumn>
      )

      expect(screen.getByTestId("child1")).toBeInTheDocument()
      expect(screen.getByTestId("child2")).toBeInTheDocument()
    })

    test("applies default className when no custom className is provided", () => {
      render(<GridColumn data-testid="my-default-grid-column" />)
      expect(screen.getByTestId("my-default-grid-column")).toHaveClass("juno-grid-column")
    })
  })

  describe("Class Names", () => {
    test("renders a custom className", () => {
      render(<GridColumn data-testid="my-grid-column" className="my-grid-column-class" />)
      expect(screen.getByTestId("my-grid-column")).toHaveClass("my-grid-column-class")
    })

    test("applies column width class based on 'cols' prop", () => {
      render(<GridColumn data-testid="my-grid-column" cols={6} />)
      expect(screen.getByTestId("my-grid-column")).toHaveClass("jn:w-grid-col-6")
    })

    test("handles invalid 'cols' values gracefully", () => {
      render(<GridColumn data-testid="my-invalid-cols-grid-column" cols={15} />)
      expect(screen.getByTestId("my-invalid-cols-grid-column")).toHaveClass("jn:w-grid-column-default")
    })
  })

  describe("Inline Styles and Auto Prop", () => {
    test("renders modified 'auto' styles when passed", () => {
      render(<GridColumn data-testid="my-auto-column" auto />)
      const autoColumn = screen.getByTestId("my-auto-column")
      const styles = window.getComputedStyle(autoColumn)

      expect(autoColumn).toHaveAttribute("style")
      expect(styles.flexGrow).toBe("1")
      expect(styles.flexShrink).toBe("0")
      expect(styles.flexBasis).toBe("0px")
    })

    test("renders width-related styles in a style tag when passed", () => {
      render(<GridColumn data-testid="my-width-column" width={73} />)
      const widthColumn = screen.getByTestId("my-width-column")
      const styles = window.getComputedStyle(widthColumn)

      expect(widthColumn).toHaveAttribute("style")
      expect(styles.width).toBe("73%")
      expect(styles.flexShrink).toBe("0")
      expect(styles.flexBasis).toBe("73%")
    })

    test("renders no additional styles when neither 'width' nor 'auto' props are provided", () => {
      render(<GridColumn data-testid="my-default-styles-grid-column" />)
      const defaultColumn = screen.getByTestId("my-default-styles-grid-column")
      const styles = window.getComputedStyle(defaultColumn)

      expect(styles.flexGrow).toBe("")
      expect(styles.flexShrink).toBe("")
      expect(styles.flexBasis).toBe("")
      expect(styles.width).toBe("")
    })
  })
})
