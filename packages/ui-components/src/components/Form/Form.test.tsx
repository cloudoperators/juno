/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Form } from "./Form.component"

describe("Form Component Tests", () => {
  describe("Basic Rendering", () => {
    test("renders a Form", () => {
      render(<Form data-testid="my-form" />)
      expect(screen.getByTestId("my-form")).toBeInTheDocument()
    })

    test("renders a title", () => {
      render(<Form data-testid="my-form" title="My Form" />)
      expect(screen.getByTestId("my-form")).toBeInTheDocument()
      expect(screen.getByRole("heading")).toHaveClass("juno-form-heading")
      expect(screen.getByRole("heading")).toHaveTextContent("My Form")
    })

    test("renders without any props", () => {
      const { container } = render(<Form />)
      expect(container.firstChild).toBeInTheDocument()
      expect(container.firstChild).toHaveClass("juno-form")
    })

    test("renders with falsy values as title", () => {
      render(<Form data-testid="my-form" title={""} />)
      expect(screen.queryByRole("heading")).not.toBeInTheDocument()
    })
  })

  describe("Props Handling", () => {
    test("renders a custom className", () => {
      render(<Form data-testid="my-form" className="my-custom-class" />)
      expect(screen.getByTestId("my-form")).toBeInTheDocument()
      expect(screen.getByTestId("my-form")).toHaveClass("my-custom-class")
    })

    test("renders all props as passed", () => {
      render(<Form data-testid="23" data-lolol={true} />)
      expect(screen.getByTestId("23")).toBeInTheDocument()
      expect(screen.getByTestId("23")).toHaveAttribute("data-lolol")
    })

    test("applies default styles", () => {
      const { container } = render(<Form />)
      expect(container.firstChild).toHaveClass("juno-form")
      expect(container.firstChild).toHaveClass("jn:mb-8")
    })
  })

  describe("Children Rendering", () => {
    test("renders children as passed", () => {
      render(
        <Form data-testid="my-form">
          <button></button>
        </Form>
      )
      expect(screen.getByRole("button")).toBeInTheDocument()
    })

    test("renders multiple children", () => {
      render(
        <Form data-testid="my-form">
          <button>Button 1</button>
          <button>Button 2</button>
        </Form>
      )
      expect(screen.getByText("Button 1")).toBeInTheDocument()
      expect(screen.getByText("Button 2")).toBeInTheDocument()
    })

    test("renders with no children", () => {
      render(<Form data-testid="my-form" />)
      expect(screen.getByTestId("my-form").childElementCount).toBe(0)
    })
  })
})
