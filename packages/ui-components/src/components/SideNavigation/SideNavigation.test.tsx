/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, cleanup } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { SideNavigation } from "./index"
import { SideNavigationItem } from "../SideNavigationItem/index"

const mockOnActiveItemChange = vi.fn()

describe("SideNavigation", () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  test("render a SideNavigation", () => {
    render(<SideNavigation />)
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.getByRole("navigation")).toHaveClass("juno-sidenavigation")
  })

  test("renders children as passed", () => {
    render(
      <SideNavigation>
        <SideNavigationItem label="Item 1" key="i-1" />
        <SideNavigationItem label="Item 2" key="i-2" />
        <SideNavigationItem label="Item 3" key="i-3" />
      </SideNavigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
  })

  test("renders an aria-label as passed", () => {
    render(<SideNavigation ariaLabel="describe the navigation" />)
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.getByRole("navigation")).toHaveAttribute("aria-label", "describe the navigation")
  })

  test("renders disabled children as passed", () => {
    render(
      <SideNavigation disabled>
        <SideNavigationItem label="Item 1" />
        <SideNavigationItem label="Item 2" />
      </SideNavigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(2)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).toBeDisabled()
    expect(screen.getByRole("button", { name: "Item 1" })).toHaveAttribute("aria-disabled", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toBeDisabled()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-disabled", "true")
  })

  test("renders an active navigation item as passed", () => {
    render(
      <SideNavigation activeItem="Item 2">
        <SideNavigationItem label="Item 1" />
        <SideNavigationItem label="Item 2" />
      </SideNavigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(2)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
  })

  test("renders an active navigation item as passed by value", () => {
    render(
      <SideNavigation activeItem="i-2">
        <SideNavigationItem label="Item 1" value="i-1" />
        <SideNavigationItem label="Item 2" value="i-2" />
      </SideNavigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(2)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
  })

  test("renders the active item as passed to the parent if conflicting with active prop passed to child item", () => {
    render(
      <SideNavigation activeItem="Item 2">
        <SideNavigationItem label="Item 1" active />
        <SideNavigationItem label="Item 2" />
      </SideNavigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(2)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
  })

  test("rerenders the active item as passed to the parent if conflicting with new state of active prop passed to child item", () => {
    const { rerender } = render(
      <SideNavigation activeItem="Item 2">
        <SideNavigationItem label="Item 1" />
        <SideNavigationItem label="Item 2" />
      </SideNavigation>
    )
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
    rerender(
      <SideNavigation activeItem="Item 1">
        <SideNavigationItem label="Item 1" />
        <SideNavigationItem label="Item 2" />
      </SideNavigation>
    )
    expect(screen.getByRole("button", { name: "Item 1" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).not.toHaveClass("juno-navigation-item-active")
  })

  test("rerenders the active item as passed to the parent if conflicting with new state of active prop passed to child item, 4 items", () => {
    const { rerender } = render(
      <SideNavigation activeItem="Item 2">
        <SideNavigationItem label="Item 1" active />
        <SideNavigationItem label="Item 2" />
        <SideNavigationItem label="Item 3" />
      </SideNavigation>
    )
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveClass("juno-navigation-item-active")
    rerender(
      <SideNavigation activeItem="Item 2">
        <SideNavigationItem label="Item 1" />
        <SideNavigationItem label="Item 2" />
        <SideNavigationItem label="Item 3" active />
      </SideNavigation>
    )
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveClass("juno-navigation-item-active")
  })

  test("changes the active item when the user clicks", async () => {
    render(
      <SideNavigation activeItem="Item 1">
        <SideNavigationItem label="Item 1" />
        <SideNavigationItem label="Item 2" />
      </SideNavigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(2)
    const tab1 = screen.getByRole("button", { name: "Item 1" })
    const tab2 = screen.getByRole("button", { name: "Item 2" })
    expect(tab1).toHaveAttribute("aria-selected", "true")
    expect(tab1).toHaveClass("juno-navigation-item-active")
    expect(tab2).not.toHaveAttribute("aria-selected")
    expect(tab2).not.toHaveClass("juno-navigation-item-active")
    await userEvent.click(tab2)
    expect(tab1).not.toHaveAttribute("aria-selected")
    expect(tab1).not.toHaveClass("juno-navigation-item-active")
    expect(tab2).toHaveAttribute("aria-selected", "true")
    expect(tab2).toHaveClass("juno-navigation-item-active")
  })

  test("executes a handler as passed when the selected item changes", async () => {
    render(
      <SideNavigation activeItem="Item 1" onActiveItemChange={mockOnActiveItemChange}>
        <SideNavigationItem label="Item 1" />
        <SideNavigationItem label="Item 2" />
      </SideNavigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(2)
    const item2 = screen.getByRole("button", { name: "Item 2" })
    await userEvent.click(item2)
    expect(mockOnActiveItemChange).toHaveBeenCalled()
  })

  test("renders custom classNames as passed", () => {
    render(<SideNavigation className="my-custom-class" />)
    expect(screen.getByRole("navigation")).toHaveClass("my-custom-class")
  })

  test("renders all props as passed", () => {
    render(<SideNavigation data-lol="Prop goes here" />)
    expect(screen.getByRole("navigation")).toHaveAttribute("data-lol", "Prop goes here")
  })
})
