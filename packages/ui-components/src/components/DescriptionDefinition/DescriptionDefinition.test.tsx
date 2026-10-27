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
  it("renders textContain='no-wrap' class directly on the <dd>", () => {
    render(<DescriptionDefinition textContain="no-wrap">Definition</DescriptionDefinition>)
    expect(screen.getByRole("definition")).toHaveClass("jn:whitespace-nowrap")
  })

  it("renders textContain='break-word' class directly on the <dd>", () => {
    render(<DescriptionDefinition textContain="break-word">Definition</DescriptionDefinition>)
    expect(screen.getByRole("definition")).toHaveClass("jn:break-words")
  })

  it("renders textContain='break-all' class directly on the <dd>", () => {
    render(<DescriptionDefinition textContain="break-all">Definition</DescriptionDefinition>)
    expect(screen.getByRole("definition")).toHaveClass("jn:break-all")
  })

  it("wraps truncate-end content in an inner block element carrying the truncate class", () => {
    render(<DescriptionDefinition textContain="truncate-end">A long definition</DescriptionDefinition>)
    const dd = screen.getByRole("definition")
    expect(dd).not.toHaveClass("jn:truncate")
    const inner = dd.querySelector(".juno-dd-truncate")
    expect(inner).toHaveClass("jn:block")
    expect(inner).toHaveClass("jn:truncate")
    expect(inner).toHaveTextContent("A long definition")
    expect(dd.querySelector("bdi")).toBeNull()
  })

  it("wraps truncate-start content in an inner block element and isolates it with <bdi>", () => {
    render(<DescriptionDefinition textContain="truncate-start">Ready!</DescriptionDefinition>)
    const dd = screen.getByRole("definition")
    const bdi = dd.querySelector("bdi")
    expect(bdi).not.toBeNull()
    expect(bdi).toHaveTextContent("Ready!")
    expect(dd.querySelector(".juno-dd-truncate")?.contains(bdi)).toBe(true)
  })

  it("adds min-w-0 for truncate-end so the <dd> can shrink within its grid track", () => {
    render(<DescriptionDefinition textContain="truncate-end">Definition</DescriptionDefinition>)
    expect(screen.getByRole("definition")).toHaveClass("jn:min-w-0")
  })

  it("adds min-w-0 for break-word so long words wrap within the track instead of widening it", () => {
    render(<DescriptionDefinition textContain="break-word">Definition</DescriptionDefinition>)
    expect(screen.getByRole("definition")).toHaveClass("jn:min-w-0")
  })

  it("does not add min-w-0 for no-wrap", () => {
    render(<DescriptionDefinition textContain="no-wrap">Definition</DescriptionDefinition>)
    expect(screen.getByRole("definition")).not.toHaveClass("jn:min-w-0")
  })

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

    const ddElement = screen.getByRole("definition")
    expect(ddElement).toHaveAttribute("data-arbitrary-prop", "data-madeup-content")
  })
})
