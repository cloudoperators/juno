/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { DataGridRow } from "./index"

describe("DataGridRow", () => {
  test("renders a DataGridRow", () => {
    render(<DataGridRow />)
    expect(screen.getByRole("row")).toBeInTheDocument()
  })

  test("renders a custom className", () => {
    render(<DataGridRow className="my-custom-class" />)
    expect(screen.getByRole("row")).toBeInTheDocument()
    expect(screen.getByRole("row")).toHaveClass("my-custom-class")
  })

  it("applies the hoverable class when onClick passed", () => {
    render(<DataGridRow onClick={() => {}}>Content</DataGridRow>)
    const row = screen.getByRole("row")

    expect(row).toHaveClass("datagrid-row")
    expect(row).toHaveClass("datagrid-row-hoverable")
  })

  it("applies the active class when true", () => {
    render(<DataGridRow isSelected>Content</DataGridRow>)
    const row = screen.getByRole("row")

    expect(row).toHaveClass("datagrid-row")
    expect(row).toHaveClass("datagrid-row-selected")
  })

  it("does not apply the hoverable or active class when disabled", () => {
    render(<DataGridRow>Content</DataGridRow>)
    const row = screen.getByRole("row")

    expect(row).toHaveClass("datagrid-row")
    expect(row).not.toHaveClass("datagrid-row-hoverable")
    expect(row).not.toHaveClass("datagrid-row-selected")
  })
})
