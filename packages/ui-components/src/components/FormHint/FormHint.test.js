/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { FormHint } from "./index"

describe("FormHint", () => {
  test("renders a FormHint", async () => {
    render(<FormHint data-testid="my-form-hint" />)
    expect(screen.getByTestId("my-form-hint")).toBeInTheDocument()
  })

  test("renders children as passed", async () => {
    render(
      <FormHint data-testid="my-form-hint">
        <button></button>
      </FormHint>
    )
    expect(screen.getByTestId("my-form-hint")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  test("renders a text as passed", async () => {
    render(<FormHint data-testid="my-form-hint" text="My form-related message" />)
    expect(screen.getByTestId("my-form-hint")).toBeInTheDocument()
    expect(screen.getByTestId("my-form-hint")).toHaveTextContent("My form-related message")
  })

  test("renders children if both children and text have been passed", async () => {
    render(
      <FormHint data-testid="my-form-hint" text="123">
        <>abc</>
      </FormHint>
    )
    expect(screen.getByTestId("my-form-hint")).toBeInTheDocument()
    expect(screen.getByTestId("my-form-hint")).toHaveTextContent("abc")
    expect(screen.getByTestId("my-form-hint")).not.toHaveTextContent("123")
  })

  test("renders a help message by default", async () => {
    render(<FormHint data-testid="my-form-hint" />)
    expect(screen.getByTestId("my-form-hint")).toBeInTheDocument()
    expect(screen.getByTestId("my-form-hint")).toHaveClass("juno-form-hint-help")
  })

  test("renders an error message as passed", async () => {
    render(<FormHint data-testid="my-form-hint" variant="error" />)
    expect(screen.getByTestId("my-form-hint")).toBeInTheDocument()
    expect(screen.getByTestId("my-form-hint")).toHaveClass("juno-form-hint-error")
  })

  test("renders a success message as passed", async () => {
    render(<FormHint data-testid="my-form-hint" variant="success" />)
    expect(screen.getByTestId("my-form-hint")).toBeInTheDocument()
    expect(screen.getByTestId("my-form-hint")).toHaveClass("juno-form-hint-success")
  })

  test("renders a custom className", async () => {
    render(<FormHint data-testid="my-form-hint" className="my-custom-class" />)
    expect(screen.getByTestId("my-form-hint")).toBeInTheDocument()
    expect(screen.getByTestId("my-form-hint")).toHaveClass("my-custom-class")
  })

  test("renders all props as passed", async () => {
    render(<FormHint data-testid="23" data-lolol={true} />)
    expect(screen.getByTestId("23")).toBeInTheDocument()
    expect(screen.getByTestId("23")).toHaveAttribute("data-lolol")
  })
})
