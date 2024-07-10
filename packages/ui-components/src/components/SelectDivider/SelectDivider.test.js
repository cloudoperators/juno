/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { SelectDivider } from "./index"


describe("SelectDivider", () => {
  
  test("renders a SelectDivider", async () => {
    render(<SelectDivider data-testid="select-divider" />)
    expect(screen.getByTestId("select-divider")).toBeInTheDocument()
  })
  
  test("renders a className as passed", async () => {
    render(<SelectDivider data-testid="select-divider" className="my-class"/>)
    expect(screen.getByTestId("select-divider")).toBeInTheDocument()
    expect(screen.getByTestId("select-divider")).toHaveClass("my-class")
  })
  
  test("renders all pops as passed", async () => {
    render(<SelectDivider data-testid="select-divider" data-lolol="123" />)
    expect(screen.getByTestId("select-divider")).toBeInTheDocument()
    expect(screen.getByTestId("select-divider")).toHaveAttribute("data-lolol", "123")
  })
  
})