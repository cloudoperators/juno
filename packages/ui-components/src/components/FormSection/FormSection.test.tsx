/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { FormSection } from "./FormSection.component"

describe("FormSection", () => {
  describe("Basic Rendering", () => {
    test("renders a FormSection", () => {
      render(<FormSection data-testid="my-formsection" />)
      expect(screen.getByTestId("my-formsection")).toBeInTheDocument()
    })

    test("renders children as passed", () => {
      render(
        <FormSection>
          <button></button>
        </FormSection>
      )
      expect(screen.getByRole("button")).toBeInTheDocument()
    })
  })

  describe("Title Handling", () => {
    test("renders a title", () => {
      render(<FormSection data-testid="my-form-section" title="My Form Section" />)
      expect(screen.getByTestId("my-form-section")).toBeInTheDocument()
      expect(screen.getByRole("heading")).toHaveClass("juno-formsection-heading")
      expect(screen.getByRole("heading")).toHaveTextContent("My Form Section")
    })
  })

  describe("Class Name Handling", () => {
    test("renders a custom className", () => {
      render(<FormSection data-testid="my-formsection" className="my-custom-class" />)
      expect(screen.getByTestId("my-formsection")).toBeInTheDocument()
      expect(screen.getByTestId("my-formsection")).toHaveClass("my-custom-class")
    })
  })

  describe("Props Handling", () => {
    test("renders all props as passed", () => {
      render(<FormSection data-testid="test-id" data-lolol={true} />)
      expect(screen.getByTestId("test-id")).toBeInTheDocument()
      expect(screen.getByTestId("test-id")).toHaveAttribute("data-lolol", "true")
    })
  })
})
