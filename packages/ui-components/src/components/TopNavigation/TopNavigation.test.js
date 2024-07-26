/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { cleanup, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { TopNavigation } from "./index"
import { TopNavigationItem } from "../TopNavigationItem/index"

const mockOnActiveItemChange = jest.fn()

describe("TopNavigation", () => {
  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test("render a TopNavigation", async () => {
    render(<TopNavigation />)
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.getByRole("navigation")).toHaveClass("juno-topnavigation")
  })

  test("renders children as passed", async () => {
    render(
      <TopNavigation>
        <TopNavigationItem label="Item 1" key="i-1" />
        <TopNavigationItem label="Item 2" key="i-2" />
        <TopNavigationItem label="Item 3" key="i-3" />
      </TopNavigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
  })

  test("renders an aria-label as passed", async () => {
    render(<TopNavigation ariaLabel="describe the navigation" />)
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.getByRole("navigation")).toHaveAttribute("aria-label", "describe the navigation")
  })

  test("renders disabled children as passed", async () => {
    render(
      <TopNavigation disabled>
        <TopNavigationItem label="Item 1" />
        <TopNavigationItem label="Item 2" />
      </TopNavigation>
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

  test("renders an active navigation item as passed", async () => {
    render(
      <TopNavigation activeItem="Item 2">
        <TopNavigationItem label="Item 1" />
        <TopNavigationItem label="Item 2" />
      </TopNavigation>
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

  test("renders an active navigation item as passed by value", async () => {
    render(
      <TopNavigation activeItem="i-2">
        <TopNavigationItem label="Item 1" value="i-1" />
        <TopNavigationItem label="Item 2" value="i-2" />
      </TopNavigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(2)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-selected")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
  })

  test("renders the active item as passed to the parent if conflicting with active prop passed to child item", async () => {
    render(
      <TopNavigation activeItem="Item 2">
        <TopNavigationItem label="Item 1" active />
        <TopNavigationItem label="Item 2" />
      </TopNavigation>
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

  test("changes the active item when the user clicks", async () => {
    render(
      <TopNavigation activeItem="Item 1">
        <TopNavigationItem label="Item 1" />
        <TopNavigationItem label="Item 2" />
      </TopNavigation>
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
      <TopNavigation activeItem="Item 1" onActiveItemChange={mockOnActiveItemChange}>
        <TopNavigationItem label="Item 1" />
        <TopNavigationItem label="Item 2" />
      </TopNavigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(2)
    const item2 = screen.getByRole("button", { name: "Item 2" })
    await userEvent.click(item2)
    expect(mockOnActiveItemChange).toHaveBeenCalled()
  })

  test("renders custom classNames as passed", async () => {
    render(<TopNavigation className="my-custom-class" />)
    expect(screen.getByRole("navigation")).toHaveClass("my-custom-class")
  })

  test("renders all props as passed", async () => {
    render(<TopNavigation data-lol="Prop goes here" />)
    expect(screen.getByRole("navigation")).toHaveAttribute("data-lol", "Prop goes here")
  })
})
