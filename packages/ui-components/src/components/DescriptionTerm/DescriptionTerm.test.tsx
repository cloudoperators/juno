/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { DescriptionTerm } from "./DescriptionTerm.component"

describe("DescriptionTerm", () => {
  it("renders textContain='no-wrap' class directly on the <dt>", () => {
    render(<DescriptionTerm textContain="no-wrap">Term</DescriptionTerm>)
    expect(screen.getByRole("term")).toHaveClass("jn:whitespace-nowrap")
  })

  it("renders textContain='break-word' class directly on the <dt>", () => {
    render(<DescriptionTerm textContain="break-word">Term</DescriptionTerm>)
    expect(screen.getByRole("term")).toHaveClass("jn:break-words")
  })

  it("renders textContain='break-all' class directly on the <dt>", () => {
    render(<DescriptionTerm textContain="break-all">Term</DescriptionTerm>)
    expect(screen.getByRole("term")).toHaveClass("jn:break-all")
  })

  it("wraps truncate-end content in an inner block element carrying the truncate class", () => {
    render(<DescriptionTerm textContain="truncate-end">A long term</DescriptionTerm>)
    const dt = screen.getByRole("term")
    expect(dt).not.toHaveClass("jn:truncate")
    const inner = dt.querySelector(".juno-dt-truncate")
    expect(inner).toHaveClass("jn:block")
    expect(inner).toHaveClass("jn:truncate")
    expect(inner).toHaveTextContent("A long term")
    expect(dt.querySelector("bdi")).toBeNull()
  })

  it("wraps truncate-start content in an inner block element and isolates it with <bdi>", () => {
    render(<DescriptionTerm textContain="truncate-start">Ready!</DescriptionTerm>)
    const dt = screen.getByRole("term")
    const bdi = dt.querySelector("bdi")
    expect(bdi).not.toBeNull()
    expect(bdi).toHaveTextContent("Ready!")
    expect(dt.querySelector(".juno-dt-truncate")?.contains(bdi)).toBe(true)
  })

  it("adds min-w-0 for truncate-end so the <dt> can shrink within its grid track", () => {
    render(<DescriptionTerm textContain="truncate-end">Term</DescriptionTerm>)
    expect(screen.getByRole("term")).toHaveClass("jn:min-w-0")
  })

  it("adds min-w-0 for break-word so long words wrap within the track instead of widening it", () => {
    render(<DescriptionTerm textContain="break-word">Term</DescriptionTerm>)
    expect(screen.getByRole("term")).toHaveClass("jn:min-w-0")
  })

  it("does not add min-w-0 for no-wrap", () => {
    render(<DescriptionTerm textContain="no-wrap">Term</DescriptionTerm>)
    expect(screen.getByRole("term")).not.toHaveClass("jn:min-w-0")
  })

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
      <DescriptionTerm data-arbitrary-prop={"data-madeup-content"}>
        <span>Complex Term</span> <strong>Content</strong>
      </DescriptionTerm>
    )
    expect(screen.getByText("Complex Term")).toBeInTheDocument()
    expect(screen.getByText("Content")).toBeInTheDocument()
  })

  it("receives and applies arbitrary props", () => {
    render(
      <DescriptionTerm data-testid={"custom-id"} data-arbitrary-prop={"data-madeup-content"}>
        <span>Complex Term</span> <strong>Content</strong>
      </DescriptionTerm>
    )

    const dtElement = screen.getByRole("term")
    expect(dtElement).toHaveAttribute("data-arbitrary-prop", "data-madeup-content")
  })
})
