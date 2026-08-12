/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { DataGridCell } from "./index"
import { DataGrid } from "../DataGrid/index"

describe("DataGridCell", () => {
  test("renders a DataGridCell", () => {
    render(<DataGridCell />)
    expect(screen.getByRole("gridcell")).toBeInTheDocument()
    expect(screen.getByRole("gridcell")).toHaveClass("juno-datagrid-cell")
  })

  test("renders a custom className", () => {
    render(<DataGridCell className="my-custom-class" />)
    expect(screen.getByRole("gridcell")).toHaveClass("my-custom-class")
  })

  test("renders arbitrary props", () => {
    render(<DataGridCell data-testid="my-cell" data-foo="bar" />)
    expect(screen.getByTestId("my-cell")).toHaveAttribute("data-foo", "bar")
  })

  test("inherits cellVerticalAlignment from parent DataGrid context", () => {
    render(
      <DataGrid columns={1} cellVerticalAlignment="center">
        <DataGridCell />
      </DataGrid>
    )
    expect(screen.getByRole("gridcell")).toHaveClass("jn:flex")
    expect(screen.getByRole("gridcell")).toHaveClass("jn:flex-col")
    expect(screen.getByRole("gridcell")).toHaveClass("jn:justify-center")
  })

  test("verticalAlignment prop overrides parent DataGrid context", () => {
    render(
      <DataGrid columns={1} cellVerticalAlignment="center">
        <DataGridCell verticalAlignment="top" />
      </DataGrid>
    )
    expect(screen.getByRole("gridcell")).not.toHaveClass("jn:flex")
    expect(screen.getByRole("gridcell")).not.toHaveClass("jn:flex-col")
    expect(screen.getByRole("gridcell")).not.toHaveClass("jn:justify-center")
  })

  test("verticalAlignment='center' overrides parent DataGrid cellVerticalAlignment='top'", () => {
    render(
      <DataGrid columns={1} cellVerticalAlignment="top">
        <DataGridCell verticalAlignment="center" />
      </DataGrid>
    )
    expect(screen.getByRole("gridcell")).toHaveClass("jn:flex")
    expect(screen.getByRole("gridcell")).toHaveClass("jn:flex-col")
    expect(screen.getByRole("gridcell")).toHaveClass("jn:justify-center")
  })

  test("renders nowrap class when nowrap is set", () => {
    render(<DataGridCell nowrap />)
    expect(screen.getByRole("gridcell")).toHaveClass("jn:whitespace-nowrap")
  })

  test("renders colSpan via inline style", () => {
    render(<DataGridCell colSpan={3} />)
    expect(screen.getByRole("gridcell")).toHaveStyle({ gridColumn: "span 3 / span 3" })
  })
})
