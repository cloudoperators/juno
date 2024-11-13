/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { FormRow } from "../FormRow/FormRow.component"

describe("FormRow Component Tests", () => {
  describe("Basic Rendering", () => {
    test("renders a FormRow", () => {
      render(<FormRow data-testid="my-form-row" />)
      expect(screen.getByTestId("my-form-row")).toBeInTheDocument()
    })

    test("renders without any props", () => {
      const { container } = render(<FormRow />)
      expect(container.firstChild).toBeInTheDocument()
      expect(container.firstChild).toHaveClass("juno-form-row")
    })

    test("renders with null children", () => {
      render(<FormRow data-testid="my-form-row">{null}</FormRow>)
      expect(screen.getByTestId("my-form-row")).toBeInTheDocument()
    })

    test("renders with undefined children", () => {
      render(<FormRow data-testid="my-form-row">{undefined}</FormRow>)
      expect(screen.getByTestId("my-form-row")).toBeInTheDocument()
    })
  })

  describe("Props Handling", () => {
    test("renders a custom className", () => {
      render(<FormRow data-testid="my-form-row" className="my-custom-class" />)
      expect(screen.getByTestId("my-form-row")).toBeInTheDocument()
      expect(screen.getByTestId("my-form-row")).toHaveClass("my-custom-class")
    })

    test("renders all props as passed", () => {
      render(<FormRow data-testid="23" data-lolol={true} />)
      expect(screen.getByTestId("23")).toBeInTheDocument()
      expect(screen.getByTestId("23")).toHaveAttribute("data-lolol")
    })

    test("adds and handles additional props", () => {
      render(<FormRow data-testid="24" aria-label="form-row" />)
      const sectionElement = screen.getByTestId("24")
      expect(sectionElement).toHaveAttribute("aria-label", "form-row")
    })

    test("applies default styles", () => {
      const { container } = render(<FormRow data-testid="my-form-row-default-styles" />)
      expect(container.firstChild).toHaveClass("juno-form-row")
      expect(container.firstChild).toHaveClass("jn-mb-2")
    })
  })

  describe("Children Rendering", () => {
    test("renders children as passed", () => {
      render(
        <FormRow>
          <button></button>
        </FormRow>
      )
      expect(screen.getByRole("button")).toBeInTheDocument()
    })

    test("renders multiple children", () => {
      render(
        <FormRow data-testid="my-form-row">
          <button>Button 1</button>
          <button>Button 2</button>
        </FormRow>
      )
      expect(screen.getByText("Button 1")).toBeInTheDocument()
      expect(screen.getByText("Button 2")).toBeInTheDocument()
    })

    test("renders with no children", () => {
      render(<FormRow data-testid="my-form-row" />)
      expect(screen.getByTestId("my-form-row")).toBeInTheDocument()
      expect(screen.getByTestId("my-form-row").childElementCount).toBe(0)
    })
  })
})
