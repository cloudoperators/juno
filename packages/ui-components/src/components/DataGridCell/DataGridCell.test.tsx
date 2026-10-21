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

  test("renders no-wrap class when textContain='no-wrap'", () => {
    render(<DataGridCell textContain="no-wrap" />)
    expect(screen.getByRole("gridcell")).toHaveClass("jn:whitespace-nowrap")
  })

  test("wraps truncate-end content in an inner block element carrying the truncate class", () => {
    render(<DataGridCell textContain="truncate-end">content</DataGridCell>)
    const cell = screen.getByRole("gridcell")
    // truncation is applied to an inner wrapper, not the cell itself
    expect(cell).not.toHaveClass("jn:truncate")
    const inner = cell.querySelector("span")
    expect(inner).toHaveClass("jn:block")
    expect(inner).toHaveClass("jn:truncate")
    expect(inner).toHaveTextContent("content")
  })

  test("adds min-w-0 to truncating cells so they can shrink within the grid track", () => {
    render(<DataGridCell textContain="truncate-end" />)
    expect(screen.getByRole("gridcell")).toHaveClass("jn:min-w-0")
  })

  test("does not add min-w-0 to non-truncating cells", () => {
    render(<DataGridCell textContain="break-word" />)
    expect(screen.getByRole("gridcell")).not.toHaveClass("jn:min-w-0")
  })

  test("renders break-words class when textContain='break-word'", () => {
    render(<DataGridCell textContain="break-word" />)
    expect(screen.getByRole("gridcell")).toHaveClass("jn:break-words")
  })

  test("renders break-all class when textContain='break-all'", () => {
    render(<DataGridCell textContain="break-all" />)
    expect(screen.getByRole("gridcell")).toHaveClass("jn:break-all")
  })

  test("textContain takes precedence over deprecated nowrap", () => {
    render(<DataGridCell nowrap textContain="break-word" />)
    expect(screen.getByRole("gridcell")).toHaveClass("jn:break-words")
    expect(screen.getByRole("gridcell")).not.toHaveClass("jn:whitespace-nowrap")
  })

  test("truncate preserves center alignment on the cell (truncation sits on the inner element)", () => {
    render(
      <DataGrid columns={1} cellVerticalAlignment="center">
        <DataGridCell textContain="truncate-end">content</DataGridCell>
      </DataGrid>
    )
    const cell = screen.getByRole("gridcell")
    expect(cell).toHaveClass("jn:flex")
    expect(cell).toHaveClass("jn:flex-col")
    expect(cell).toHaveClass("jn:justify-center")
    expect(cell).not.toHaveClass("jn:truncate")
    expect(cell.querySelector("span")).toHaveClass("jn:truncate")
  })

  test("non-truncating textContain is applied to the cell without an inner wrapper", () => {
    render(
      <DataGrid columns={1} cellVerticalAlignment="center">
        <DataGridCell textContain="break-word">content</DataGridCell>
      </DataGrid>
    )
    const cell = screen.getByRole("gridcell")
    expect(cell).toHaveClass("jn:break-words")
    expect(cell).toHaveClass("jn:flex")
    expect(cell.querySelector("span")).toBeNull()
  })

  test("verticalAlignment prop works without a parent DataGrid context", () => {
    render(<DataGridCell verticalAlignment="center" />)
    expect(screen.getByRole("gridcell")).toHaveClass("jn:flex")
    expect(screen.getByRole("gridcell")).toHaveClass("jn:flex-col")
    expect(screen.getByRole("gridcell")).toHaveClass("jn:justify-center")
  })

  test("renders colSpan via inline style", () => {
    render(<DataGridCell colSpan={3} />)
    expect(screen.getByRole("gridcell")).toHaveStyle({ gridColumn: "span 3 / span 3" })
  })
})
