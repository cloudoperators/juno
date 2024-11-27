/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { PanelBody } from "./PanelBody.component"
import { PanelFooter } from "../PanelFooter/PanelFooter.component"

describe("PanelBody component", () => {
  describe("Basic rendering", () => {
    test("renders a panel body", () => {
      render(<PanelBody data-testid="panel-body" />)
      expect(screen.getByTestId("panel-body")).toBeInTheDocument()
      expect(screen.getByTestId("panel-body")).toHaveClass("juno-panel-body")
    })

    test("renders without any props", () => {
      const { container } = render(<PanelBody />)
      expect(container.firstChild).toBeInTheDocument()
    })

    test("renders with null children", () => {
      render(<PanelBody data-testid="panel-body">{null}</PanelBody>)
      expect(screen.getByTestId("panel-body")).toBeInTheDocument()
    })

    test("renders with undefined children", () => {
      render(<PanelBody data-testid="panel-body">{undefined}</PanelBody>)
      expect(screen.getByTestId("panel-body")).toBeInTheDocument()
    })
  })

  describe("Props handling", () => {
    test("renders a custom className", () => {
      render(<PanelBody data-testid="panel-body" className="my-custom-classname" />)
      expect(screen.getByTestId("panel-body")).toBeInTheDocument()
      expect(screen.getByTestId("panel-body")).toHaveClass("my-custom-classname")
    })

    test("renders footer as passed", () => {
      render(<PanelBody data-testid="panel-body" footer={<PanelFooter>This is the footer</PanelFooter>}></PanelBody>)
      expect(screen.getByTestId("panel-body")).toBeInTheDocument()
      expect(screen.getByTestId("panel-body")).toHaveTextContent("This is the footer")
    })

    test("renders all props", () => {
      render(<PanelBody data-testid="panel-body" data-lolol="some-prop" />)
      expect(screen.getByTestId("panel-body")).toBeInTheDocument()
      expect(screen.getByTestId("panel-body")).toHaveAttribute("data-lolol", "some-prop")
    })

    test("applies default styles", () => {
      const { container } = render(<PanelBody />)
      expect(container.firstChild).toHaveClass("juno-panel-body")
    })
  })

  describe("Children rendering", () => {
    test("renders children as passed", () => {
      render(
        <PanelBody data-testid="panel-body">
          <button></button>
        </PanelBody>
      )
      expect(screen.getByTestId("panel-body")).toBeInTheDocument()
      expect(screen.getByRole("button")).toBeInTheDocument()
    })

    test("renders multiple children", () => {
      render(
        <PanelBody data-testid="panel-body">
          <button>Button 1</button>
          <button>Button 2</button>
        </PanelBody>
      )
      expect(screen.getByText("Button 1")).toBeInTheDocument()
      expect(screen.getByText("Button 2")).toBeInTheDocument()
    })

    test("renders with no children", () => {
      render(<PanelBody data-testid="panel-body" />)
      expect(screen.getByTestId("panel-body").childElementCount).toBe(1)
    })
  })
})
