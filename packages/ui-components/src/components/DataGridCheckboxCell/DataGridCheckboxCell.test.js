/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { DataGridCheckboxCell } from "./index"

describe("DataGridCheckboxCell", () => {
  test("renders a DataGridCheckboxCell", async () => {
    render(<DataGridCheckboxCell />)
    expect(screen.getByRole("gridcell")).toBeInTheDocument()
  })

  test("renders a custom className", async () => {
    render(<DataGridCheckboxCell className="my-custom-class" />)
    expect(screen.getByRole("gridcell")).toBeInTheDocument()
    expect(screen.getByRole("gridcell")).toHaveClass("my-custom-class")
  })
})
