/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { GridRow } from "./index"

describe("GridRow", () => {
  test("renders a Grid row", async () => {
    render(<GridRow data-testid="my-grid-row" />)
    expect(screen.getByTestId("my-grid-row")).toBeInTheDocument()
  })

  test("renders a custom className", async () => {
    render(<GridRow data-testid="my-grid-row" className="my-grid-row-class" />)
    expect(screen.getByTestId("my-grid-row")).toHaveClass("my-grid-row-class")
  })
})
