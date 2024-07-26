/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, act } from "@testing-library/react"
import { MenuItem } from "./index.js"
import { Menu } from "../Menu/index.js"

describe("MenuItem", () => {
  test("renders a MenuItem", async () => {
    render(
      <Menu>
        <MenuItem />
      </Menu>
    )
    expect(screen.getByRole("menuitem")).toBeInTheDocument()
    expect(screen.getByRole("menuitem")).toHaveClass("juno-menu-item")
  })

  test("renders an anchor menu item when href prop is passed", async () => {
    render(
      <Menu>
        <MenuItem href="#" />
      </Menu>
    )
    expect(screen.getByRole("menuitem")).toBeInTheDocument()
    expect(screen.getByRole("menuitem")).toHaveClass("juno-menu-item")
    expect(screen.getByRole("menuitem")).toHaveClass("juno-menu-item-anchor")
    expect(screen.getByRole("menuitem")).not.toHaveClass("juno-menu-item-button")
  })

  test("renders a button menu item when onClick prop is passed", async () => {
    render(
      <Menu>
        <MenuItem
          onClick={() => {
            console.log("clicked")
          }}
        />
      </Menu>
    )
    expect(screen.getByRole("menuitem")).toBeInTheDocument()
    expect(screen.getByRole("menuitem")).toHaveClass("juno-menu-item")
    expect(screen.getByRole("menuitem")).toHaveClass("juno-menu-item-button")
    expect(screen.getByRole("menuitem")).not.toHaveClass("juno-menu-item-anchor")
  })

  test("renders a menu item with an icon as passed", async () => {
    render(
      <Menu>
        <MenuItem icon="warning" />
      </Menu>
    )
    expect(screen.getByRole("img")).toHaveAttribute("alt", "warning")
  })

  test("renders children as passed", async () => {
    render(
      <Menu>
        <MenuItem>
          <button>Child Button</button>
        </MenuItem>
      </Menu>
    )
    expect(screen.getByRole("button", { name: "Child Button" })).toBeInTheDocument()
  })

  test("executes an onClick handler as passed", async () => {
    const onClickSpy = jest.fn()
    render(
      <Menu>
        <MenuItem onClick={onClickSpy} />
      </Menu>
    )
    act(() => screen.getByRole("menuitem").click())
    expect(onClickSpy).toHaveBeenCalled()
  })
})
