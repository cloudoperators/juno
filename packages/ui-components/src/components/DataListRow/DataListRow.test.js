/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { DataListRow } from "./index"

describe("DataListRow", () => {
  test("renders a DataListRow", async () => {
    render(<DataListRow data-testid="my-datalistrow" />)
    expect(screen.getByTestId("my-datalistrow")).toBeInTheDocument()
  })

  test("renders a custom className", async () => {
    render(<DataListRow data-testid="my-datalistrow" className="my-custom-class" />)
    expect(screen.getByTestId("my-datalistrow")).toBeInTheDocument()
    expect(screen.getByTestId("my-datalistrow")).toHaveClass("my-custom-class")
  })
})
