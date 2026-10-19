/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { DescriptionListColumn } from "./DescriptionListColumn.component"
import { DescriptionList } from "../DescriptionList"
import { DescriptionTerm } from "../DescriptionTerm"
import { DescriptionDefinition } from "../DescriptionDefinition"

describe("DescriptionListColumn", () => {
  it("renders children correctly", () => {
    render(
      <DescriptionListColumn>
        <DescriptionTerm>Term 1</DescriptionTerm>
        <DescriptionDefinition>Definition 1</DescriptionDefinition>
      </DescriptionListColumn>
    )
    expect(screen.getByText("Term 1")).toBeInTheDocument()
    expect(screen.getByText("Definition 1")).toBeInTheDocument()
  })

  it("renders within a <div> element", () => {
    render(
      <DescriptionListColumn data-testid="dlc">
        <DescriptionTerm>Term</DescriptionTerm>
        <DescriptionDefinition>Definition</DescriptionDefinition>
      </DescriptionListColumn>
    )
    expect(screen.getByTestId("dlc").tagName.toLowerCase()).toBe("div")
  })

  it("applies custom className", () => {
    render(
      <DescriptionListColumn data-testid="dlc" className="custom-class">
        <DescriptionTerm>Term</DescriptionTerm>
        <DescriptionDefinition>Definition</DescriptionDefinition>
      </DescriptionListColumn>
    )
    expect(screen.getByTestId("dlc")).toHaveClass("custom-class")
  })

  it("renders correctly inside a multiColumn DescriptionList", () => {
    render(
      <DescriptionList multiColumn>
        <DescriptionListColumn data-testid="col-1">
          <DescriptionTerm>Term 1</DescriptionTerm>
          <DescriptionDefinition>Definition 1</DescriptionDefinition>
        </DescriptionListColumn>
        <DescriptionListColumn data-testid="col-2">
          <DescriptionTerm>Term 2</DescriptionTerm>
          <DescriptionDefinition>Definition 2</DescriptionDefinition>
        </DescriptionListColumn>
      </DescriptionList>
    )
    expect(screen.getByTestId("col-1")).toBeInTheDocument()
    expect(screen.getByTestId("col-2")).toBeInTheDocument()
    expect(screen.getByText("Term 1")).toBeInTheDocument()
    expect(screen.getByText("Definition 2")).toBeInTheDocument()
  })

  it("applies auto 1fr grid template by default", () => {
    render(
      <DescriptionListColumn data-testid="dlc">
        <DescriptionTerm>Term</DescriptionTerm>
        <DescriptionDefinition>Definition</DescriptionDefinition>
      </DescriptionListColumn>
    )
    expect(screen.getByTestId("dlc")).toHaveStyle({ gridTemplateColumns: "auto 1fr" })
  })

  it("applies a custom termWidth as grid template", () => {
    render(
      <DescriptionListColumn data-testid="dlc" termWidth="25%">
        <DescriptionTerm>Term</DescriptionTerm>
        <DescriptionDefinition>Definition</DescriptionDefinition>
      </DescriptionListColumn>
    )
    expect(screen.getByTestId("dlc")).toHaveStyle({ gridTemplateColumns: "25% 1fr" })
  })

  it("receives and applies arbitrary props", () => {
    render(
      <DescriptionListColumn data-testid="dlc" data-arbitrary-prop="data-madeup-content">
        <DescriptionTerm>Term</DescriptionTerm>
        <DescriptionDefinition>Definition</DescriptionDefinition>
      </DescriptionListColumn>
    )
    expect(screen.getByTestId("dlc")).toHaveAttribute("data-arbitrary-prop", "data-madeup-content")
  })
})
