/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { PanelFooter } from "./PanelFooter.component"

describe("PanelFooter component tests", () => {
  describe("Basic rendering", () => {
    test("renders a panel footer", () => {
      render(<PanelFooter data-testid="panel-footer" />)
      expect(screen.getByTestId("panel-footer")).toBeInTheDocument()
      expect(screen.getByTestId("panel-footer")).toHaveClass("juno-panel-footer")
    })

    test("renders a panel footer with flex layout", () => {
      render(<PanelFooter data-testid="panel-footer" />)
      expect(screen.getByTestId("panel-footer")).toBeInTheDocument()
      expect(screen.getByTestId("panel-footer")).toHaveClass("jn:flex")
    })

    test("renders without any props", () => {
      const { container } = render(<PanelFooter />)
      expect(container.firstChild).toBeInTheDocument()
      expect(container.firstChild).toHaveClass("juno-panel-footer")
    })
  })

  describe("Props handling", () => {
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

    test("applies default styles", () => {
      const { container } = render(<PanelFooter />)
      expect(container.firstChild).toHaveClass("juno-panel-footer")
      expect(container.firstChild).toHaveClass("jn:flex")
    })
  })

  describe("Children rendering", () => {
    test("renders children as passed", () => {
      render(
        <PanelFooter data-testid="panel-footer">
          <button></button>
        </PanelFooter>
      )
      expect(screen.getByTestId("panel-footer")).toBeInTheDocument()
      expect(screen.getByRole("button")).toBeInTheDocument()
    })

    test("renders multiple children", () => {
      render(
        <PanelFooter data-testid="panel-footer">
          <button>Button 1</button>
          <button>Button 2</button>
        </PanelFooter>
      )
      expect(screen.getByText("Button 1")).toBeInTheDocument()
      expect(screen.getByText("Button 2")).toBeInTheDocument()
    })

    test("renders with no children", () => {
      render(<PanelFooter data-testid="panel-footer" />)
      expect(screen.getByTestId("panel-footer").childElementCount).toBe(0)
    })
  })
})
