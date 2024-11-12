/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { FormRow } from "./FormRow.component"

describe("FormSection", () => {
  test("renders a FormRow", () => {
    render(<FormRow data-testid="my-form-row" />)
    expect(screen.getByTestId("my-form-row")).toBeInTheDocument()
  })

  test("renders a custom className", () => {
    render(<FormRow data-testid="my-form-row" className="my-custom-class" />)
    expect(screen.getByTestId("my-form-row")).toBeInTheDocument()
    expect(screen.getByTestId("my-form-row")).toHaveClass("my-custom-class")
  })

  test("renders children as passed", () => {
    render(
      <FormRow>
        <button></button>
      </FormRow>
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  test("renders all props as passed", () => {
    render(<FormRow data-testid="23" data-lolol={true} />)
    expect(screen.getByTestId("23")).toBeInTheDocument()
    expect(screen.getByTestId("23")).toHaveAttribute("data-lolol")
  })
})
