/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { DataListCell } from "./index"

describe("DataListCell", () => {
  test("renders a DataListCell", async () => {
    render(<DataListCell data-testid="my-datalistcell" />)
    expect(screen.getByTestId("my-datalistcell")).toBeInTheDocument()
  })

  test("renders a custom className", async () => {
    render(
      <DataListCell data-testid="my-datalistcell" className="my-custom-class" />
    )
    expect(screen.getByTestId("my-datalistcell")).toBeInTheDocument()
    expect(screen.getByTestId("my-datalistcell")).toHaveClass("my-custom-class")
  })
})
