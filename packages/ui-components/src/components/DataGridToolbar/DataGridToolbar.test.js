/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { DataGridToolbar } from "./index"
import { SearchInput } from "../SearchInput/index"

describe("DataGridToolbar", () => {
  test("renders a DataGridToolbar", async () => {
    render(<DataGridToolbar data-testid="my-datagridtoolbar" />)
    expect(screen.getByTestId("my-datagridtoolbar")).toBeInTheDocument()
  })

  test("renders a SearchInput as passed", async () => {
    render(<DataGridToolbar search={<SearchInput />}></DataGridToolbar>)
    expect(screen.getByRole("searchbox")).toBeInTheDocument()
  })

  test("renders a custom className", async () => {
    render(<DataGridToolbar data-testid="my-datagridtoolbar" className="my-custom-class" />)
    expect(screen.getByTestId("my-datagridtoolbar")).toBeInTheDocument()
    expect(screen.getByTestId("my-datagridtoolbar")).toHaveClass("my-custom-class")
  })

  test("renders all props as passed", async () => {
    render(<DataGridToolbar data-testid="23" data-lolol={true} />)
    expect(screen.getByTestId("23")).toBeInTheDocument()
    expect(screen.getByTestId("23")).toHaveAttribute("data-lolol")
  })
})
