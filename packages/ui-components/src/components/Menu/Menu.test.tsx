/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { Menu } from "./Menu.component"
import { MenuItem } from "../MenuItem/MenuItem.component"

describe("Menu", () => {
  test("renders a Menu", () => {
    render(<Menu />)
    expect(screen.getByRole("menu")).toBeInTheDocument()
  })

  test("renders a Menu with Children as passed", () => {
    render(
      <Menu>
        <MenuItem label="Menu Item 1" href="#" />
      </Menu>
    )
    expect(screen.getByRole("menuitem")).toBeInTheDocument()
    expect(screen.getByRole("menuitem")).toHaveTextContent("Menu Item 1")
    expect(screen.getByRole("menuitem")).toHaveAttribute("href", "#")
  })

  test("renders a normal Menu variant by default", () => {
    render(<Menu />)
    expect(screen.getByRole("menu")).toBeInTheDocument()
    expect(screen.getByRole("menu")).toHaveClass("juno-menu-normal")
  })

  test("renders a small Menu variant as passed", () => {
    render(<Menu variant="small" />)
    expect(screen.getByRole("menu")).toBeInTheDocument()
    expect(screen.getByRole("menu")).toHaveClass("juno-menu-small")
  })

  test("renders a className as passed", () => {
    render(<Menu className="my-class" />)
    expect(screen.getByRole("menu")).toBeInTheDocument()
    expect(screen.getByRole("menu")).toHaveClass("my-class")
  })

  test("renders props as passed", () => {
    render(<Menu data-lolol="1 2 3" />)
    expect(screen.getByRole("menu")).toBeInTheDocument()
    expect(screen.getByRole("menu")).toHaveAttribute("data-lolol", "1 2 3")
  })
})
