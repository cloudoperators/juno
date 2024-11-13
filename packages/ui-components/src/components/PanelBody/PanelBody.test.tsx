/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { PanelBody } from "./PanelBody.component"
import { PanelFooter } from "../PanelFooter/PanelFooter.component"

describe("PanelBody", () => {
  test("renders a panel body", () => {
    render(<PanelBody data-testid="panel-body" />)
    expect(screen.getByTestId("panel-body")).toBeInTheDocument()
    expect(screen.getByTestId("panel-body")).toHaveClass("juno-panel-body")
  })

  test("renders children as passed", () => {
    render(
      <PanelBody data-testid="panel-body">
        <button></button>
      </PanelBody>
    )
    expect(screen.getByTestId("panel-body")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  test("renders footer as passed", () => {
    render(<PanelBody data-testid="panel-body" footer={<PanelFooter>This is the footer</PanelFooter>}></PanelBody>)
    expect(screen.getByTestId("panel-body")).toBeInTheDocument()
    expect(screen.getByTestId("panel-body")).toHaveTextContent("This is the footer")
  })

  test("renders a custom className", () => {
    render(<PanelBody data-testid="panel-body" className="my-custom-classname" />)
    expect(screen.getByTestId("panel-body")).toBeInTheDocument()
    expect(screen.getByTestId("panel-body")).toHaveClass("my-custom-classname")
  })

  test("renders all props", () => {
    render(<PanelBody data-testid="panel-body" data-lolol="some-prop" />)
    expect(screen.getByTestId("panel-body")).toBeInTheDocument()
    expect(screen.getByTestId("panel-body")).toHaveAttribute("data-lolol", "some-prop")
  })
})
