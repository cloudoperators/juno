/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { Breadcrumb } from "./index"

describe("Breadcrumb", () => {
  test("renders a breadcrumb with text as passed", async () => {
    render(<Breadcrumb data-testid="breadcrumb" />)
    expect(screen.getByTestId("breadcrumb")).toBeInTheDocument()
    expect(screen.getByTestId("breadcrumb")).toHaveClass("juno-breadcrumb")
  })

  test("renders a custom className as passed", async () => {
    render(<Breadcrumb data-testid="breadcrumb" className="my-custom-class" />)
    expect(screen.getByTestId("breadcrumb")).toBeInTheDocument()
    expect(screen.getByTestId("breadcrumb")).toHaveClass("my-custom-class")
  })

  test("renders all props as passed", async () => {
    render(<Breadcrumb data-testid="breadcrumb" data-lolol={true} />)
    expect(screen.getByTestId("breadcrumb")).toBeInTheDocument()
    expect(screen.getByTestId("breadcrumb")).toHaveAttribute("data-lolol")
  })
})
