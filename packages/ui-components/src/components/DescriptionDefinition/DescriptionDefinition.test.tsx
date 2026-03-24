/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { DescriptionDefinition } from "../DescriptionDefinition"
import { DescriptionList } from "../DescriptionList"
import { DescriptionTerm } from "../DescriptionTerm"

describe("DescriptionDefinition", () => {
  it("renders child DescriptionTerm and DescriptionDefinition components with arbitrary test props", () => {
    render(
      <DescriptionList>
        <DescriptionTerm data-testid={"term-1"}>Term 1</DescriptionTerm>
        <DescriptionDefinition data-testid={"def-1"}>Definition 1</DescriptionDefinition>
      </DescriptionList>
    )

    const termElement = screen.getByTestId("term-1")
    const definitionElement = screen.getByTestId("def-1")

    expect(termElement).toBeInTheDocument()
    expect(termElement).toHaveTextContent("Term 1")

    expect(definitionElement).toBeInTheDocument()
    expect(definitionElement).toHaveTextContent("Definition 1")
  })

  it("applies custom className", () => {
    const customClass = "custom-class"
    render(<DescriptionDefinition className={customClass}>Test Description</DescriptionDefinition>)
    const ddElement = screen.getByText("Test Description")
    expect(ddElement).toHaveClass(customClass)
  })

  it("renders within a <dd> element", () => {
    render(<DescriptionDefinition>Test Description</DescriptionDefinition>)
    const ddElement = screen.getByText("Test Description")
    expect(ddElement.tagName).toBe("DD")
  })

  it("can render complex children", () => {
    render(
      <DescriptionDefinition>
        <span>Complex</span> <strong>Content</strong>
      </DescriptionDefinition>
    )
    expect(screen.getByText("Complex")).toBeInTheDocument()
    expect(screen.getByText("Content")).toBeInTheDocument()
  })

  it("receives and applies arbitrary props", () => {
    render(
      <DescriptionDefinition data-testid={"custom-id"} data-arbitrary-prop={"data-madeup-content"}>
        <span>Complex Term</span> <strong>Content</strong>
      </DescriptionDefinition>
    )

    const ddElement = screen.getByTestId("custom-id")
    expect(ddElement).toHaveAttribute("data-arbitrary-prop", "data-madeup-content")
  })
})
