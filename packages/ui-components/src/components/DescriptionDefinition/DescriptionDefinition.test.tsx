/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { DescriptionDefinition } from "../DescriptionDefinition"

describe("DescriptionDefinition", () => {
  it("renders the children correctly", () => {
    render(<DescriptionDefinition>Test Description</DescriptionDefinition>)
    expect(screen.getByText("Test Description")).toBeInTheDocument()
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
})
