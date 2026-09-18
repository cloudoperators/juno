/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { FormSection } from "./index"

describe("FormSection", () => {
  test("renders a FormSection", () => {
    render(<FormSection data-testid="my-formsection" />)
    expect(screen.getByTestId("my-formsection")).toBeInTheDocument()
    expect(screen.getByTestId("my-formsection")).toHaveClass("juno-form-section")
  })

  test("renders a section HTML element", () => {
    render(<FormSection data-testid="my-formsection" />)
    expect(screen.getByTestId("my-formsection").tagName).toBe("SECTION")
  })

  test("renders children as passed", () => {
    render(
      <FormSection data-testid="my-formsection">
        <button></button>
      </FormSection>
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
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
        {null}
        <p>Paragraph Element</p>
      </FormSection>
    )
    expect(screen.getByText("Div Element")).toBeInTheDocument()
    expect(screen.getByText("Paragraph Element")).toBeInTheDocument()
  })

  test("renders a title", () => {
    render(<FormSection title="My Form Section" />)
    expect(screen.getByRole("region", { name: "My Form Section" })).toBeInTheDocument()
    expect(screen.getByText("My Form Section")).toHaveClass("juno-form-section-title")
  })

  test("renders title as a paragraph element, not a heading", () => {
    render(<FormSection title="My Section" />)
    expect(screen.queryByRole("heading")).not.toBeInTheDocument()
    expect(screen.getByText("My Section").tagName).toBe("P")
  })

  test("section has aria-labelledby pointing to the title's id when title is present", () => {
    render(<FormSection title="My Section" />)
    const section = screen.getByRole("region", { name: "My Section" })
    const titleEl = screen.getByText("My Section")
    expect(section).toHaveAttribute("aria-labelledby", titleEl.id)
  })

  test("section does not have aria-labelledby when no title is provided", () => {
    render(<FormSection data-testid="my-form-section" />)
    expect(screen.getByTestId("my-form-section")).not.toHaveAttribute("aria-labelledby")
  })

  test("section does not have aria-labelledby when title is an empty string", () => {
    render(<FormSection data-testid="my-formsection" title="" />)
    expect(screen.getByTestId("my-formsection")).not.toHaveAttribute("aria-labelledby")
  })

  test("does not render a title element when title prop is not provided", () => {
    const { container } = render(<FormSection data-testid="my-form-section" />)
    expect(container.querySelector(".juno-form-section-title")).not.toBeInTheDocument()
  })

  test("does not render a title element when title is an empty string", () => {
    const { container } = render(<FormSection data-testid="my-formsection" title="" />)
    expect(container.querySelector(".juno-form-section-title")).not.toBeInTheDocument()
  })

  test("renders a title element only if title is provided", () => {
    const { container, rerender } = render(<FormSection data-testid="my-formsection" title={undefined} />)
    expect(container.querySelector(".juno-form-section-title")).not.toBeInTheDocument()

    rerender(<FormSection data-testid="my-formsection" title="Title" />)
    expect(screen.getByRole("region", { name: "Title" })).toBeInTheDocument()
  })

  test("renders a custom className", () => {
    render(<FormSection data-testid="my-formsection" className="my-custom-class" />)
    expect(screen.getByTestId("my-formsection")).toHaveClass("my-custom-class")
  })

  test("renders custom className after internal class names on the section element", () => {
    render(<FormSection data-testid="my-formsection" className="my-custom-class" />)
    expect(screen.getByTestId("my-formsection").className).toMatch(/juno-form-section.*my-custom-class/s)
  })

  test("renders custom titleClassName after internal class names on the title element", () => {
    render(<FormSection title="My Section" titleClassName="my-title-class" />)
    expect(screen.getByText("My Section").className).toMatch(/juno-form-section-title.*my-title-class/s)
  })

  test("renders all props as passed", () => {
    render(<FormSection data-testid="23" data-lolol={true} />)
    expect(screen.getByTestId("23")).toBeInTheDocument()
    expect(screen.getByTestId("23")).toHaveAttribute("data-lolol")
  })

  test("applies titleClassName to the title element", () => {
    render(<FormSection title="My Section" titleClassName="my-title-class" />)
    expect(screen.getByText("My Section")).toHaveClass("my-title-class")
  })

  test("titleClassName does not affect the section element", () => {
    render(<FormSection data-testid="my-formsection" title="My Section" titleClassName="my-title-class" />)
    expect(screen.getByTestId("my-formsection")).not.toHaveClass("my-title-class")
  })
})
