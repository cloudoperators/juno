/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { DataGridCheckboxCell } from "./index"
import { Checkbox } from "../Checkbox"

describe("DataGridCheckboxCell", () => {
  test("renders a DataGridCheckboxCell", () => {
    render(<DataGridCheckboxCell />)
    expect(screen.getByRole("gridcell")).toBeInTheDocument()
    expect(screen.getByRole("gridcell")).toHaveClass("juno-datagrid-checkbox-cell")
  })

  test("renders a custom className", () => {
    render(<DataGridCheckboxCell className="my-custom-class" />)
    expect(screen.getByRole("gridcell")).toHaveClass("my-custom-class")
  })

  test("renders a Checkbox child", () => {
    render(
      <DataGridCheckboxCell>
        <Checkbox />
      </DataGridCheckboxCell>
    )
    expect(screen.getByRole("checkbox")).toBeInTheDocument()
  })

  test("renders other children", () => {
    render(
      <DataGridCheckboxCell>
        <span data-testid="child" />
      </DataGridCheckboxCell>
    )
    expect(screen.getByTestId("child")).toBeInTheDocument()
  })
})
