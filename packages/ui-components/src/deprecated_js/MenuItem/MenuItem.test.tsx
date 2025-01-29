/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, act } from "@testing-library/react"
import { describe, test, expect, vi } from "vitest"
import { MenuItem } from "./MenuItem.component"
import { Menu } from "../Menu/Menu.component"

describe("MenuItem", () => {
  test("renders a menu item", () => {
    render(
      <Menu>
        <MenuItem />
      </Menu>
    )
    expect(screen.getByRole("menuitem")).toBeInTheDocument()
  })

  test("renders an anchor menu item when href prop is passed", () => {
    render(
      <Menu>
        <MenuItem href="#" />
      </Menu>
    )
    const item = screen.getByRole("menuitem")
    expect(item).toBeInTheDocument()
    expect(item.tagName).toBe("A")
    expect(item).toHaveClass("juno-menu-item")
    expect(item).toHaveClass("juno-menu-item-a")
    expect(item).not.toHaveClass("juno-menu-item-button")
    expect(item).not.toHaveClass("juno-menu-item-div")
  })

  test("renders a button menu item when onClick prop is passed", () => {
    render(
      <Menu>
        <MenuItem
          onClick={() => {
            console.log("clicked")
          }}
        />
      </Menu>
    )
    const item = screen.getByRole("menuitem")
    expect(item).toBeInTheDocument()
    expect(item.tagName).toBe("BUTTON")
    expect(item).toHaveClass("juno-menu-item")
    expect(item).toHaveClass("juno-menu-item-button")
    expect(item).not.toHaveClass("juno-menu-item-a")
    expect(item).not.toHaveClass("juno-menu-item-div")
  })

  test("renders a plain div menu item when children are passed", () => {
    render(
      <Menu>
        <MenuItem>
          <button>Child Button</button>
        </MenuItem>
      </Menu>
    )
    const item = screen.getByRole("menuitem")
    expect(item).toBeInTheDocument()
    expect(item.tagName).toBe("DIV")
    expect(item).toHaveClass("juno-menu-item")
    expect(item).toHaveClass("juno-menu-item-div")
    expect(item).not.toHaveClass("juno-menu-item-a")
    expect(item).not.toHaveClass("juno-menu-item-button")
  })

  test("renders a plain div menu item when neither onClick, href, nor children are passed", () => {
    render(
      <Menu>
        <MenuItem />
      </Menu>
    )
    const item = screen.getByRole("menuitem")
    expect(item).toBeInTheDocument()
    expect(item.tagName).toBe("DIV")
    expect(item).toHaveClass("juno-menu-item")
    expect(item).toHaveClass("juno-menu-item-div")
    expect(item).not.toHaveClass("juno-menu-item-a")
    expect(item).not.toHaveClass("juno-menu-item-button")
  })

  test("renders a plain div menu item when label, but neither onClick, href, nor children are passed", () => {
    render(
      <Menu>
        <MenuItem label="some item label" />
      </Menu>
    )
    const item = screen.getByRole("menuitem")
    expect(item).toBeInTheDocument()
    expect(item.tagName).toBe("DIV")
    expect(item).toHaveClass("juno-menu-item")
    expect(item).toHaveClass("juno-menu-item-div")
    expect(item).not.toHaveClass("juno-menu-item-a")
    expect(item).not.toHaveClass("juno-menu-item-button")
  })

  test("renders a menu item with an icon as passed", () => {
    render(
      <Menu>
        <MenuItem icon="warning" />
      </Menu>
    )
    expect(screen.getByRole("img")).toHaveAttribute("alt", "warning")
  })

  test("renders children as passed", () => {
    render(
      <Menu>
        <MenuItem>
          <button>Child Button</button>
        </MenuItem>
      </Menu>
    )
    expect(screen.getByRole("button", { name: "Child Button" })).toBeInTheDocument()
  })

  // renders plain div when only label, but no children, no href, and no onClick was passed

  test("renders a label as passed", () => {
    render(
      <Menu>
        <MenuItem label="some menu item label" />
      </Menu>
    )
    expect(screen.getByRole("menuitem")).toBeInTheDocument()
    expect(screen.getByRole("menuitem")).toHaveTextContent("some menu item label")
  })

  test("renders children and ignores label when both were passed", () => {
    render(
      <Menu>
        <MenuItem label="some menu item label">
          <button>Some Button</button>
        </MenuItem>
      </Menu>
    )
    expect(screen.getByRole("menuitem")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("Some Button")
    expect(screen.getByRole("menuitem")).not.toHaveTextContent("some menu item label")
  })

  test("executes an onClick handler as passed", () => {
    const onClickSpy = vi.fn() // Use `vi.fn()` for mocking
    render(
      <Menu>
        <MenuItem onClick={onClickSpy} />
      </Menu>
    )
    act(() => screen.getByRole("menuitem").click())
    expect(onClickSpy).toHaveBeenCalled()
  })
})
