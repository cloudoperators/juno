/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { DescriptionTerm } from "./DescriptionTerm.component"

describe("DescriptionTerm", () => {
  it("renders the children properly", () => {
    render(<DescriptionTerm>Test Term</DescriptionTerm>)
    expect(screen.getByText("Test Term")).toBeInTheDocument()
  })

  it("applies custom className to the <dt> element", () => {
    const customClass = "custom-class"
    render(<DescriptionTerm className={customClass}>Styled Term</DescriptionTerm>)
    const dtElement = screen.getByText("Styled Term")
    expect(dtElement).toHaveClass(customClass)
  })

  it("renders within a <dt> element", () => {
    render(<DescriptionTerm>Term Element</DescriptionTerm>)
    const dtElement = screen.getByText("Term Element")
    expect(dtElement.tagName.toLowerCase()).toBe("dt")
  })

  it("can render complex children", () => {
    render(
      <DescriptionTerm>
        <span>Complex Term</span> <strong>Content</strong>
      </DescriptionTerm>
    )
    expect(screen.getByText("Complex Term")).toBeInTheDocument()
    expect(screen.getByText("Content")).toBeInTheDocument()
  })
})
