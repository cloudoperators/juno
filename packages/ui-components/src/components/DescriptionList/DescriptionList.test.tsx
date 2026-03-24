/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { DescriptionList } from "./DescriptionList.component"
import { DescriptionTerm } from "../DescriptionTerm"
import { DescriptionDefinition } from "../DescriptionDefinition"

describe("DescriptionList", () => {
  it("renders child DescriptionTerm and DescriptionDefinition components correctly", () => {
    render(
      <DescriptionList>
        <DescriptionTerm>Term 1</DescriptionTerm>
        <DescriptionDefinition>Definition 1</DescriptionDefinition>
      </DescriptionList>
    )
    expect(screen.getByText("Term 1")).toBeInTheDocument()
    expect(screen.getByText("Definition 1")).toBeInTheDocument()
  })

  it("applies custom className to the <dl> element", () => {
    const customClass = "custom-class"
    render(
      <DescriptionList data-testid={"description-list"} className={customClass}>
        <DescriptionTerm>Term 2</DescriptionTerm>
        <DescriptionDefinition>Definition 2</DescriptionDefinition>
      </DescriptionList>
    )

    const dlElement = screen.getByTestId("description-list")
    expect(dlElement).toHaveClass(customClass)
  })

  it("aligns terms to the right by default", () => {
    const { container } = render(
      <DescriptionList>
        <DescriptionTerm>Term 3</DescriptionTerm>
        <DescriptionDefinition>Definition 3</DescriptionDefinition>
      </DescriptionList>
    )

    const dlElement = container.querySelector("dl")
    expect(dlElement).toHaveClass("align-right")
  })

  it("aligns terms to the left", () => {
    const { container } = render(
      <DescriptionList alignTerms="left">
        <DescriptionTerm>Left Term</DescriptionTerm>
        <DescriptionDefinition>Definition for Left Term</DescriptionDefinition>
      </DescriptionList>
    )

    const dlElement = container.querySelector("dl")
    expect(dlElement).toHaveClass("align-left")
  })

  it("renders multiple terms and definitions in a single list", () => {
    render(
      <DescriptionList>
        <DescriptionTerm>Term 4</DescriptionTerm>
        <DescriptionDefinition>Definition 4</DescriptionDefinition>
        <DescriptionTerm>Term 5</DescriptionTerm>
        <DescriptionDefinition>Definition 5</DescriptionDefinition>
      </DescriptionList>
    )
    expect(screen.getByText("Term 4")).toBeInTheDocument()
    expect(screen.getByText("Definition 4")).toBeInTheDocument()
    expect(screen.getByText("Term 5")).toBeInTheDocument()
    expect(screen.getByText("Definition 5")).toBeInTheDocument()
  })

  it("receives and applies arbitrary props", () => {
    render(
      <DescriptionList data-testid={"custom-id"} data-arbitrary-prop={"data-madeup-content"}>
        <DescriptionTerm>Term 7</DescriptionTerm>
        <DescriptionDefinition>Definition 7</DescriptionDefinition>
      </DescriptionList>
    )

    const dlElement = screen.getByTestId("custom-id")
    expect(dlElement).toHaveAttribute("data-arbitrary-prop", "data-madeup-content")
  })
})
