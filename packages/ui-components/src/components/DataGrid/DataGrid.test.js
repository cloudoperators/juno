/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { DataGrid } from "./index"

describe("DataGrid", () => {
  test("renders a DataGrid", async () => {
    render(<DataGrid />)
    expect(screen.getByRole("grid")).toBeInTheDocument()
  })

  test("renders a custom className", async () => {
    render(<DataGrid className="my-custom-class" />)
    expect(screen.getByRole("grid")).toBeInTheDocument()
    expect(screen.getByRole("grid")).toHaveClass("my-custom-class")
  })
})
