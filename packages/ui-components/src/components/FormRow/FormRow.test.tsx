/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { FormSection } from "../FormSection/FormSection.component"

describe("FormSection Component Tests", () => {
  describe("Basic Rendering", () => {
    test("renders a FormSection", () => {
      render(<FormSection data-testid="my-formsection" />)
      expect(screen.getByTestId("my-formsection")).toBeInTheDocument()
    })

    test("renders children as passed", () => {
      render(
        <FormSection data-testid="my-formsection">
          <button></button>
        </FormSection>
      )
      expect(screen.getByRole("button")).toBeInTheDocument()
    })

    test("renders without any props", () => {
      render(<FormSection data-testid="my-formsection" />)
      expect(screen.getByTestId("my-formsection")).toBeInTheDocument()
    })

    test("renders with null children", () => {
      render(<FormSection data-testid="my-formsection">{null}</FormSection>)
      expect(screen.getByTestId("my-formsection")).toBeInTheDocument()
    })

    test("renders with undefined children", () => {
      render(<FormSection data-testid="my-formsection">{undefined}</FormSection>)
      expect(screen.getByTestId("my-formsection")).toBeInTheDocument()
    })

    test("renders with mixed children types correctly", () => {
      render(
        <FormSection data-testid="my-formsection">
          <div>Div Element</div>
          {false && <span>False Element</span>}
          {null}
          <p>Paragraph Element</p>
        </FormSection>
      )
      expect(screen.getByText("Div Element")).toBeInTheDocument()
      expect(screen.queryByText("False Element")).not.toBeInTheDocument()
      expect(screen.getByText("Paragraph Element")).toBeInTheDocument()
    })
  })

  describe("Title Handling", () => {
    test("renders a title", () => {
      render(<FormSection data-testid="my-form-section" title="My Form Section" />)
      expect(screen.getByTestId("my-form-section")).toBeInTheDocument()
      expect(screen.getByRole("heading")).toHaveClass("juno-formsection-heading")
      expect(screen.getByRole("heading")).toHaveTextContent("My Form Section")
    })

    test("does not render a title when title prop is not provided", () => {
      render(<FormSection data-testid="my-form-section" />)
      const titleElement = screen.queryByRole("heading")
      expect(titleElement).not.toBeInTheDocument()
    })

    test("renders with an empty string title", () => {
      render(<FormSection data-testid="my-formsection" title="" />)
      expect(screen.getByTestId("my-formsection")).toBeInTheDocument()
      const titleElement = screen.queryByRole("heading")
      expect(titleElement).not.toBeInTheDocument()
    })

    test("renders with a long string title", () => {
      const longTitle = "A".repeat(1000)
      render(<FormSection data-testid="my-formsection" title={longTitle} />)
      const titleElement = screen.getByText(longTitle)
      expect(titleElement).toBeInTheDocument()
    })

    test("renders with special characters in title", () => {
      const specialTitle = "!@#$%^&*()_+=-[]{}|;:'\",.<>?/"
      render(<FormSection data-testid="my-formsection" title={specialTitle} />)
      const titleElement = screen.getByText(specialTitle)
      expect(titleElement).toBeInTheDocument()
    })

    test("renders h1 element only if title is provided", () => {
      const { rerender } = render(<FormSection data-testid="my-formsection" title={undefined} />)
      expect(screen.queryByRole("heading")).toBeNull()

      rerender(<FormSection data-testid="my-formsection" title="Title" />)
      expect(screen.getByRole("heading")).toBeInTheDocument()
    })
  })

  describe("Props Handling", () => {
    test("renders a custom className", () => {
      render(<FormSection data-testid="my-formsection" className="my-custom-class" />)
      expect(screen.getByTestId("my-formsection")).toBeInTheDocument()
      expect(screen.getByTestId("my-formsection")).toHaveClass("my-custom-class")
    })

    test("renders all props as passed", () => {
      render(<FormSection data-testid="23" data-lolol={true} />)
      expect(screen.getByTestId("23")).toBeInTheDocument()
      expect(screen.getByTestId("23")).toHaveAttribute("data-lolol")
    })

    test("renders section HTML element with classnames", () => {
      const { container } = render(<FormSection data-testid="my-form-section" />)
      expect(container.firstChild).toHaveClass("juno-form-section")
    })
  })
})
