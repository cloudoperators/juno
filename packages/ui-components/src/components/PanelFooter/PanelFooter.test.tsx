/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { PanelFooter } from "./PanelFooter.component"

describe("PanelFooter", () => {
  test("renders a panel footer", () => {
    render(<PanelFooter data-testid="panel-footer" />)
    expect(screen.getByTestId("panel-footer")).toBeInTheDocument()
    expect(screen.getByTestId("panel-footer")).toHaveClass("juno-panel-footer")
  })

  test("renders a panel footer with flex layout", () => {
    render(<PanelFooter data-testid="panel-footer" />)
    expect(screen.getByTestId("panel-footer")).toBeInTheDocument()
    expect(screen.getByTestId("panel-footer")).toHaveClass("jn-flex")
  })

  test("renders children as passed", () => {
    render(
      <PanelFooter data-testid="panel-footer">
        <button></button>
      </PanelFooter>
    )
    expect(screen.getByTestId("panel-footer")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  test("renders a custom className", () => {
    render(<PanelFooter data-testid="panel-footer" className="my-custom-classname" />)
    expect(screen.getByTestId("panel-footer")).toBeInTheDocument()
    expect(screen.getByTestId("panel-footer")).toHaveClass("my-custom-classname")
  })

  test("renders all props", () => {
    render(<PanelFooter data-testid="panel-footer" data-lolol="some-prop" />)
    expect(screen.getByTestId("panel-footer")).toBeInTheDocument()
    expect(screen.getByTestId("panel-footer")).toHaveAttribute("data-lolol", "some-prop")
  })
})
