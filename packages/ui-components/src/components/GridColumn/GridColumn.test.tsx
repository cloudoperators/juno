/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { GridColumn } from "./GridColumn.component"

describe("GridColumn", () => {
  test("renders a Grid row", () => {
    render(<GridColumn data-testid="my-grid-column" />)
    expect(screen.getByTestId("my-grid-column")).toBeInTheDocument()
  })

  test("renders a custom className", () => {
    render(<GridColumn data-testid="my-grid-column" className="my-grid-column-class" />)
    expect(screen.getByTestId("my-grid-column")).toHaveClass("my-grid-column-class")
  })

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
})
