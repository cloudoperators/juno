/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, waitFor, cleanup } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Navigation } from "./index"
import { NavigationItem } from "../NavigationItem/index"

const mockOnChange = jest.fn()
const mockOnActiveItemChange = jest.fn()

describe("Navigation", () => {
  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test("renders a Navigation", async () => {
    render(<Navigation />)
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.getByRole("navigation")).toHaveClass("juno-navigation")
  })

  test("renders children as passed", async () => {
    render(
      <Navigation>
        <NavigationItem>Item 1</NavigationItem>
        <NavigationItem>Item 2</NavigationItem>
        <NavigationItem>Item 3</NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
  })

  test("renders an aria-label as passed", async () => {
    render(<Navigation ariaLabel="describe the navigation" />)
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.getByRole("navigation")).toHaveAttribute("aria-label", "describe the navigation")
  })

  test("renders a disabled navigation as passed", async () => {
    render(
      <Navigation disabled>
        <NavigationItem>Item 1</NavigationItem>
        <NavigationItem>Item 2</NavigationItem>
        <NavigationItem>Item 3</NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.getByRole("navigation")).toHaveAttribute("aria-disabled", "true")
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).toBeDisabled()
    expect(screen.getByRole("button", { name: "Item 1" })).toHaveAttribute("aria-disabled", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toBeDisabled()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-disabled", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).toBeDisabled()
    expect(screen.getByRole("button", { name: "Item 3" })).toHaveAttribute("aria-disabled", "true")
  })

  // Test setting the activeItem initially:

  test("renders an active item as passed to the parent by child content when only content is given", async () => {
    render(
      <Navigation activeItem="Item 2">
        <NavigationItem>Item 1</NavigationItem>
        <NavigationItem>Item 2</NavigationItem>
        <NavigationItem>Item 3</NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")

    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveClass("juno-navigation-item-active")
  })

  test("renders an active item as passed to the parent by child content when content and label are given", async () => {
    render(
      <Navigation activeItem="Item 2">
        <NavigationItem label="itm-1">Item 1</NavigationItem>
        <NavigationItem label="itm-2">Item 2</NavigationItem>
        <NavigationItem label="itm-3">Item 3</NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")

    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveClass("juno-navigation-item-active")
  })

  test("renders an active item as passed to the parent by child content when content and value are given", async () => {
    render(
      <Navigation activeItem="Item 2">
        <NavigationItem value="itm-1">Item 1</NavigationItem>
        <NavigationItem value="itm-2">Item 2</NavigationItem>
        <NavigationItem value="itm-3">Item 3</NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")

    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveClass("juno-navigation-item-active")
  })

  test("renders an active item as passed to the parent by child content when content, label, and value are given", async () => {
    render(
      <Navigation activeItem="Item 2">
        <NavigationItem label="itm-1" value="item-1">
          Item 1
        </NavigationItem>
        <NavigationItem label="itm-2" value="item-2">
          Item 2
        </NavigationItem>
        <NavigationItem label="itm-3" value="item-3">
          Item 3
        </NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")

    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveClass("juno-navigation-item-active")
  })

  test("renders an active item as passed to the parent by child value when only value is given", async () => {
    render(
      <Navigation activeItem="item-2">
        <NavigationItem value="item-1" />
        <NavigationItem value="item-2" />
        <NavigationItem value="item-3" />
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "item-1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "item-1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "item-1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "item-2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "item-2" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "item-2" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "item-3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "item-3" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "item-3" })).not.toHaveClass("juno-navigation-item-active")
  })

  test("renders an active item as passed to the parent by child value when value and label are given", async () => {
    render(
      <Navigation activeItem="item-2">
        <NavigationItem value="item-1" label="Item 1" />
        <NavigationItem value="item-2" label="Item 2" />
        <NavigationItem value="item-3" label="Item 3" />
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveClass("juno-navigation-item-active")
  })

  test("renders an active item as passed to the parent by child value when value and child content are given", async () => {
    render(
      <Navigation activeItem="itm-2">
        <NavigationItem value="itm-1">Item 1</NavigationItem>
        <NavigationItem value="itm-2">Item 2</NavigationItem>
        <NavigationItem value="itm-3">Item 3</NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveClass("juno-navigation-item-active")
  })

  test("renders an active item as passed to the parent by child value when value, label, and child content are given", async () => {
    render(
      <Navigation activeItem="item-2">
        <NavigationItem value="item-1" label="Item 1">
          Item 1
        </NavigationItem>
        <NavigationItem value="item-2" label="Item 2">
          Item 2
        </NavigationItem>
        <NavigationItem value="item-3" label="Item 3">
          Item 3
        </NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveClass("juno-navigation-item-active")
  })

  test("renders an active item as passed to the parent by child label when only label is given", async () => {
    render(
      <Navigation activeItem="Item 2">
        <NavigationItem label="Item 1" />
        <NavigationItem label="Item 2" />
        <NavigationItem label="Item 3" />
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveClass("juno-navigation-item-active")
  })

  test("renders an active item as passed to the parent by child label when value and label are given", async () => {
    render(
      <Navigation activeItem="Item 2">
        <NavigationItem value="item-1" label="Item 1" />
        <NavigationItem value="item-2" label="Item 2" />
        <NavigationItem value="item-3" label="Item 3" />
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveClass("juno-navigation-item-active")
  })

  test("renders an active item as passed to the parent by child label when label and child content are given", async () => {
    render(
      <Navigation activeItem="Item 2 Label">
        <NavigationItem label="Item 1 Label">Item 1</NavigationItem>
        <NavigationItem label="Item 2 Label">Item 2</NavigationItem>
        <NavigationItem label="Item 3 Label">Item 3</NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveClass("juno-navigation-item-active")
  })

  test("renders an active item as passed to the parent by child label when value, label, and child content are given", async () => {
    render(
      <Navigation activeItem="Item 2 Label">
        <NavigationItem value="item-1" label="Item 1 Label">
          Item 1
        </NavigationItem>
        <NavigationItem value="item-2" label="Item 2 Label">
          Item 2
        </NavigationItem>
        <NavigationItem value="item-3" label="Item 3 Label">
          Item 3
        </NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveClass("juno-navigation-item-active")
  })

  // Test re-rendering / updating the activeItem:

  test("re-renders the activeItem when passed by child content when only child content is given", async () => {
    const { rerender } = render(
      <Navigation activeItem="Item 2">
        <NavigationItem>Item 1</NavigationItem>
        <NavigationItem>Item 2</NavigationItem>
        <NavigationItem>Item 3</NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")

    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveClass("juno-navigation-item-active")

    rerender(
      <Navigation activeItem="Item 3">
        <NavigationItem>Item 1</NavigationItem>
        <NavigationItem>Item 2</NavigationItem>
        <NavigationItem>Item 3</NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).toHaveClass("juno-navigation-item-active")
  })

  test("re-renders the activeItem when passed by child content when child content and value are given", async () => {
    const { rerender } = render(
      <Navigation activeItem="Item 2">
        <NavigationItem value="itm-1">Item 1</NavigationItem>
        <NavigationItem value="itm-2">Item 2</NavigationItem>
        <NavigationItem value="itm-3">Item 3</NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveClass("juno-navigation-item-active")
    rerender(
      <Navigation activeItem="Item 3">
        <NavigationItem value="itm-1">Item 1</NavigationItem>
        <NavigationItem value="itm-2">Item 2</NavigationItem>
        <NavigationItem value="itm-3">Item 3</NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).toHaveClass("juno-navigation-item-active")
  })

  test("re-renders the activeItem when passed by child content when child content and child label are given", async () => {
    const { rerender } = render(
      <Navigation activeItem="Item 2">
        <NavigationItem label="itm-1">Item 1</NavigationItem>
        <NavigationItem label="itm-2">Item 2</NavigationItem>
        <NavigationItem label="itm-3">Item 3</NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveClass("juno-navigation-item-active")
    rerender(
      <Navigation activeItem="Item 3">
        <NavigationItem label="itm-1">Item 1</NavigationItem>
        <NavigationItem label="itm-2">Item 2</NavigationItem>
        <NavigationItem label="itm-3">Item 3</NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).toHaveClass("juno-navigation-item-active")
  })

  test("re-renders the activeItem when passed by child content when child content, value, and label are given", async () => {
    const { rerender } = render(
      <Navigation activeItem="Item 2">
        <NavigationItem label="itm-1" value="item-1">
          Item 1
        </NavigationItem>
        <NavigationItem label="itm-2" value="item-2">
          Item 2
        </NavigationItem>
        <NavigationItem label="itm-3" value="item-3">
          Item 3
        </NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveClass("juno-navigation-item-active")
    rerender(
      <Navigation activeItem="Item 3">
        <NavigationItem label="itm-1" value="item-1">
          Item 1
        </NavigationItem>
        <NavigationItem label="itm-2" value="item-2">
          Item 2
        </NavigationItem>
        <NavigationItem label="itm-3" value="item-3">
          Item 3
        </NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).toHaveClass("juno-navigation-item-active")
  })

  test("re-renders the activeItem when passed by child value when only child value is given", async () => {
    const { rerender } = render(
      <Navigation activeItem="item-2">
        <NavigationItem value="item-1" />
        <NavigationItem value="item-2" />
        <NavigationItem value="item-3" />
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "item-1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "item-1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "item-1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "item-2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "item-2" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "item-2" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "item-3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "item-3" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "item-3" })).not.toHaveClass("juno-navigation-item-active")
    rerender(
      <Navigation activeItem="item-3">
        <NavigationItem value="item-1" />
        <NavigationItem value="item-2" />
        <NavigationItem value="item-3" />
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "item-1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "item-1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "item-1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "item-2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "item-2" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "item-2" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "item-3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "item-3" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "item-3" })).toHaveClass("juno-navigation-item-active")
  })

  test("re-renders the activeItem when passed by child value when child value and label are given", async () => {
    const { rerender } = render(
      <Navigation activeItem="item-2">
        <NavigationItem value="item-1" />
        <NavigationItem value="item-2" />
        <NavigationItem value="item-3" />
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "item-1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "item-1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "item-1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "item-2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "item-2" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "item-2" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "item-3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "item-3" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "item-3" })).not.toHaveClass("juno-navigation-item-active")
    rerender(
      <Navigation activeItem="item-3">
        <NavigationItem value="item-1" />
        <NavigationItem value="item-2" />
        <NavigationItem value="item-3" />
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "item-1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "item-1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "item-1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "item-2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "item-2" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "item-2" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "item-3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "item-3" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "item-3" })).toHaveClass("juno-navigation-item-active")
  })

  test("re-renders the activeItem when passed by child value when child value and child content are given", async () => {
    const { rerender } = render(
      <Navigation activeItem="itm-2">
        <NavigationItem value="itm-1">Item 1</NavigationItem>
        <NavigationItem value="itm-2">Item 2</NavigationItem>
        <NavigationItem value="itm-3">Item 3</NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveClass("juno-navigation-item-active")
    rerender(
      <Navigation activeItem="itm-3">
        <NavigationItem value="itm-1">Item 1</NavigationItem>
        <NavigationItem value="itm-2">Item 2</NavigationItem>
        <NavigationItem value="itm-3">Item 3</NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).toHaveClass("juno-navigation-item-active")
  })

  test("re-renders the activeItem when passed by child value when child value, label, and child content are given", async () => {
    const { rerender } = render(
      <Navigation activeItem="itm-2">
        <NavigationItem value="itm-1" label="Item 1 Label">
          Item 1
        </NavigationItem>
        <NavigationItem value="itm-2" label="Item 2 Label">
          Item 2
        </NavigationItem>
        <NavigationItem value="itm-3" label="Item 3 Label">
          Item 3
        </NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveClass("juno-navigation-item-active")
    rerender(
      <Navigation activeItem="itm-3">
        <NavigationItem value="itm-1" label="Item 1 Label">
          Item 1
        </NavigationItem>
        <NavigationItem value="itm-2" label="Item 2 Label">
          Item 2
        </NavigationItem>
        <NavigationItem value="itm-3" label="Item 3 Label">
          Item 3
        </NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).toHaveClass("juno-navigation-item-active")
  })

  test("re-renders the activeItem when passed by child label when only child label is given", async () => {
    const { rerender } = render(
      <Navigation activeItem="Item 2 Label">
        <NavigationItem label="Item 1 Label" />
        <NavigationItem label="Item 2 Label" />
        <NavigationItem label="Item 3 Label" />
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1 Label" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1 Label" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1 Label" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2 Label" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2 Label" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2 Label" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3 Label" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3 Label" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3 Label" })).not.toHaveClass("juno-navigation-item-active")
    rerender(
      <Navigation activeItem="Item 3 Label">
        <NavigationItem label="Item 1 Label" />
        <NavigationItem label="Item 2 Label" />
        <NavigationItem label="Item 3 Label" />
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1 Label" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1 Label" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1 Label" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2 Label" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2 Label" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2 Label" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3 Label" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3 Label" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3 Label" })).toHaveClass("juno-navigation-item-active")
  })

  test("re-renders the activeItem when passed by child label when child label and child content are given", async () => {
    const { rerender } = render(
      <Navigation activeItem="Item 2 Label">
        <NavigationItem label="Item 1 Label">Item 1</NavigationItem>
        <NavigationItem label="Item 2 Label">Item 2</NavigationItem>
        <NavigationItem label="Item 3 Label">Item 3</NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveClass("juno-navigation-item-active")
    rerender(
      <Navigation activeItem="Item 3 Label">
        <NavigationItem label="Item 1 Label">Item 1</NavigationItem>
        <NavigationItem label="Item 2 Label">Item 2</NavigationItem>
        <NavigationItem label="Item 3 Label">Item 3</NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).toHaveClass("juno-navigation-item-active")
  })

  test("re-renders the activeItem when passed by child label when child label and child value are given", async () => {
    const { rerender } = render(
      <Navigation activeItem="Item 2 Label">
        <NavigationItem label="Item 1 Label" value="itm-1" />
        <NavigationItem label="Item 2 Label" value="itm-2" />
        <NavigationItem label="Item 3 Label" value="itm-3" />
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1 Label" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1 Label" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1 Label" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2 Label" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2 Label" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2 Label" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3 Label" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3 Label" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3 Label" })).not.toHaveClass("juno-navigation-item-active")
    rerender(
      <Navigation activeItem="Item 3 Label">
        <NavigationItem label="Item 1 Label" value="itm-1" />
        <NavigationItem label="Item 2 Label" value="itm-2" />
        <NavigationItem label="Item 3 Label" value="itm-3" />
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1 Label" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1 Label" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1 Label" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2 Label" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2 Label" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2 Label" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3 Label" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3 Label" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3 Label" })).toHaveClass("juno-navigation-item-active")
  })
  //
  test("re-renders the activeItem when passed by child label when child label, child value, and child content are given", async () => {
    const { rerender } = render(
      <Navigation activeItem="Item 2 Label">
        <NavigationItem label="Item 1 Label" value="itm-1">
          Item 1
        </NavigationItem>
        <NavigationItem label="Item 2 Label" value="itm-2">
          Item 2
        </NavigationItem>
        <NavigationItem label="Item 3 Label" value="itm-3">
          Item 3
        </NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveClass("juno-navigation-item-active")
    rerender(
      <Navigation activeItem="Item 3 Label">
        <NavigationItem label="Item 1 Label" value="itm-1">
          Item 1
        </NavigationItem>
        <NavigationItem label="Item 2 Label" value="itm-2">
          Item 2
        </NavigationItem>
        <NavigationItem label="Item 3 Label" value="itm-3">
          Item 3
        </NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).not.toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("button", { name: "Item 3" })).toHaveClass("juno-navigation-item-active")
  })

  test("executes an onActiveItemChange handler when the user clicks an item and the active item changes", async () => {
    // Use a callback to change a variable so we can double-check whether this was executed across context-/component borders:
    let callbackWasExecuted = 0
    const onActiveItemChangeCallback = () => {
      callbackWasExecuted = 1
    }
    render(
      <Navigation activeItem="Item 2" onActiveItemChange={onActiveItemChangeCallback}>
        <NavigationItem value="item-1" label="Item 1" />
        <NavigationItem value="item-2" label="Item 2" />
        <NavigationItem value="item-3" label="Item 3" />
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    const user = userEvent.setup()
    const itemToClick = screen.getByRole("button", { name: "Item 2" })
    waitFor(() => {
      user.click(itemToClick)
      expect(onActiveItemChangeCallback).toHaveBeenCalled()
      expect(callbackWasExecuted).toBe(1)
    })
  })

  test("executes an onChange handler when the user clicks an item", async () => {
    // Use a callback to change a variable so we can double-check whether this was executed across context-/component borders:
    let clickCallbackWasExecuted = 0
    const onChangeCallback = () => {
      clickCallbackWasExecuted = 1
    }
    render(
      <Navigation activeItem="Item 1" onChange={onChangeCallback}>
        <NavigationItem>Item 1</NavigationItem>
        <NavigationItem>Item 2</NavigationItem>
        <NavigationItem>Item 3</NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    const user = userEvent.setup()
    const itemToClick = screen.getByRole("button", { name: "Item 2" })
    waitFor(() => {
      user.click(itemToClick)
      expect(onChangeCallback).toHaveBeenCalled()
      expect(clickCallbackWasExecuted).toBe(1)
    })
  })

  test("executes an onChange handler when the active item was changed programmatically", async () => {
    const { rerender } = render(
      <Navigation activeItem="Item 1" onChange={mockOnChange}>
        <NavigationItem>Item 1</NavigationItem>
        <NavigationItem>Item 2</NavigationItem>
        <NavigationItem>Item 3</NavigationItem>
      </Navigation>
    )
    expect(mockOnChange).not.toHaveBeenCalled()
    waitFor(() => {
      rerender(
        <Navigation activeItem="Item 2" onChange={mockOnChange}>
          <NavigationItem>Item 1</NavigationItem>
          <NavigationItem>Item 2</NavigationItem>
          <NavigationItem>Item 3</NavigationItem>
        </Navigation>
      )
      expect(mockOnChange).toHaveBeenCalled()
    })
  })

  test("executes an onActiveItemChange handler when the active item was changed programmatically", async () => {
    const { rerender } = render(
      <Navigation activeItem="Item 1" onChange={mockOnActiveItemChange}>
        <NavigationItem>Item 1</NavigationItem>
        <NavigationItem>Item 2</NavigationItem>
        <NavigationItem>Item 3</NavigationItem>
      </Navigation>
    )
    expect(mockOnChange).not.toHaveBeenCalled()
    waitFor(() => {
      rerender(
        <Navigation activeItem="Item 1" onChange={mockOnActiveItemChange}>
          <NavigationItem>Item 1</NavigationItem>
          <NavigationItem>Item 2</NavigationItem>
          <NavigationItem>Item 3</NavigationItem>
        </Navigation>
      )
      expect(mockOnActiveItemChange).toHaveBeenCalled()
    })
  })

  test("renders custom classNames as passed", async () => {
    render(<Navigation className="my-custom-class" />)
    expect(screen.getByRole("navigation")).toHaveClass("my-custom-class")
  })

  test("renders all props as passed", async () => {
    render(<Navigation data-lol="Prop goes here" />)
    expect(screen.getByRole("navigation")).toHaveAttribute("data-lol", "Prop goes here")
  })
})
