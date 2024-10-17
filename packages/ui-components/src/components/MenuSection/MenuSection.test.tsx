/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { MenuSection } from "./"

describe("MenuSection", () => {
  test("renders a MenuSection", () => {
    render(<MenuSection data-testid="menu-section" />)
    expect(screen.getByTestId("menu-section")).toBeInTheDocument()
    expect(screen.getByTestId("menu-section")).toHaveClass("juno-menu-section")
  })
  test("renders a MenuSection with a title as passed", () => {
    render(<MenuSection data-testid="menu-section" title="My Menu Section" />)
    expect(screen.getByTestId("menu-section")).toBeInTheDocument()
    expect(screen.getByTestId("menu-section")).toHaveTextContent("My Menu Section")
  })
  test("renders children as passed", () => {
    render(
      <MenuSection>
        <button>Test Button</button>
      </MenuSection>
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("Test Button")
  })
  test("renders a custom className as passed", () => {
    render(<MenuSection data-testid="menu-section" className="my-class" />)
    expect(screen.getByTestId("menu-section")).toBeInTheDocument()
    expect(screen.getByTestId("menu-section")).toHaveClass("my-class")
  })
})
