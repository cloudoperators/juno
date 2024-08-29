/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { DataGridHeadCell } from "./index"

describe("DataGridHeadCell", () => {
  test("renders a DataGridHeadCell", async () => {
    render(<DataGridHeadCell />)
    expect(screen.getByRole("columnheader")).toBeInTheDocument()
  })

  test("renders a custom className", async () => {
    render(<DataGridHeadCell className="my-custom-class" />)
    expect(screen.getByRole("columnheader")).toBeInTheDocument()
    expect(screen.getByRole("columnheader")).toHaveClass("my-custom-class")
  })
})
