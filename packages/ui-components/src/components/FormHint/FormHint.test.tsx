/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { FormHint } from "./FormHint.component"

describe("FormHint Component Tests", () => {
  describe("Basic Rendering", () => {
    test("renders a FormHint", () => {
      render(<FormHint data-testid="my-form-hint" />)
      expect(screen.getByTestId("my-form-hint")).toBeInTheDocument()
    })
  })

  describe("Children Rendering", () => {
    test("renders children as passed", () => {
      render(
        <FormHint data-testid="my-form-hint">
          <button></button>
        </FormHint>
      )
      expect(screen.getByTestId("my-form-hint")).toBeInTheDocument()
      expect(screen.getByRole("button")).toBeInTheDocument()
    })

    test("renders children if both children and text have been passed", () => {
      render(
        <FormHint data-testid="my-form-hint" text="123">
          <>abc</>
        </FormHint>
      )
      expect(screen.getByTestId("my-form-hint")).toBeInTheDocument()
      expect(screen.getByTestId("my-form-hint")).toHaveTextContent("abc")
      expect(screen.getByTestId("my-form-hint")).not.toHaveTextContent("123")
    })
  })

  describe("Text Rendering", () => {
    test("renders a text as passed", () => {
      render(<FormHint data-testid="my-form-hint" text="My form-related message" />)
      expect(screen.getByTestId("my-form-hint")).toBeInTheDocument()
      expect(screen.getByTestId("my-form-hint")).toHaveTextContent("My form-related message")
    })

    test("handles an empty string as text", () => {
      render(<FormHint data-testid="my-form-hint" text="" />)
      expect(screen.getByTestId("my-form-hint")).toBeInTheDocument()
      expect(screen.getByTestId("my-form-hint")).toHaveTextContent("")
    })

    test("handles null text", () => {
      render(<FormHint data-testid="my-form-hint" text={null} />)
      expect(screen.getByTestId("my-form-hint")).toBeInTheDocument()
      expect(screen.getByTestId("my-form-hint")).toHaveTextContent("")
    })

    test("handles undefined text", () => {
      render(<FormHint data-testid="my-form-hint" text={undefined} />)
      expect(screen.getByTestId("my-form-hint")).toBeInTheDocument()
      expect(screen.getByTestId("my-form-hint")).toHaveTextContent("")
    })

    test("renders very long text", () => {
      const longText = "A".repeat(1000)
      render(<FormHint data-testid="my-form-hint" text={longText} />)
      expect(screen.getByTestId("my-form-hint")).toBeInTheDocument()
      expect(screen.getByTestId("my-form-hint")).toHaveTextContent(longText)
    })
  })

  describe("Variant Rendering", () => {
    test("renders a help message by default", () => {
      render(<FormHint data-testid="my-form-hint" />)
      expect(screen.getByTestId("my-form-hint")).toBeInTheDocument()
      expect(screen.getByTestId("my-form-hint")).toHaveClass("juno-form-hint-help")
    })

    test("renders an error message as passed", () => {
      render(<FormHint data-testid="my-form-hint" variant="error" />)
      expect(screen.getByTestId("my-form-hint")).toBeInTheDocument()
      expect(screen.getByTestId("my-form-hint")).toHaveClass("juno-form-hint-error")
    })

    test("renders a success message as passed", () => {
      render(<FormHint data-testid="my-form-hint" variant="success" />)
      expect(screen.getByTestId("my-form-hint")).toBeInTheDocument()
      expect(screen.getByTestId("my-form-hint")).toHaveClass("juno-form-hint-success")
    })
  })

  describe("Props Handling", () => {
    test("renders a custom className", () => {
      render(<FormHint data-testid="my-form-hint" className="my-custom-class" />)
      expect(screen.getByTestId("my-form-hint")).toBeInTheDocument()
      expect(screen.getByTestId("my-form-hint")).toHaveClass("my-custom-class")
    })

    test("renders all props as passed", () => {
      render(<FormHint data-testid="23" data-lolol={true} />)
      expect(screen.getByTestId("23")).toBeInTheDocument()
      expect(screen.getByTestId("23")).toHaveAttribute("data-lolol")
    })
  })
})
