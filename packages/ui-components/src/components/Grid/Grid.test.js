/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { Grid } from "./index"

describe("Grid", () => {
  test("renders a Grid container", async () => {
    render(<Grid data-testid="my-grid" />)
    expect(screen.getByTestId("my-grid")).toBeInTheDocument()
  })

  test("renders a custom className", async () => {
    render(<Grid data-testid="my-grid" className="my-grid-class" />)
    expect(screen.getByTestId("my-grid")).toHaveClass("my-grid-class")
  })

  test("has modified CSS variables in a style tag for auto grids", async () => {
    render(<Grid data-testid="my-auto-grid" auto />)
    expect(screen.getByTestId("my-auto-grid")).toHaveAttribute("style")
    expect(document.querySelector(".juno-grid").style.getPropertyValue("--grid-column-flex-grow")).toBe("1")
    expect(document.querySelector(".juno-grid").style.getPropertyValue("--grid-column-flex-shrink")).toBe("0")
    expect(document.querySelector(".juno-grid").style.getPropertyValue("--grid-column-flex-basis")).toBe("0")
  })
})
