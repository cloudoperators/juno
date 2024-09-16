/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, cleanup, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { TabNavigation } from "./index"
import { TabNavigationItem } from "../TabNavigationItem/index"

const mockOnActiveItemChange = vi.fn()

describe("TabNavigation", () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  test("renders a TabNavigation", async () => {
    await waitFor(() => render(<TabNavigation />))
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.getByRole("navigation")).toHaveClass("juno-tabnavigation")
  })

  test("renders children as passed", async () => {
    await waitFor(() =>
      render(
        <TabNavigation>
          <TabNavigationItem>Item 1</TabNavigationItem>
          <TabNavigationItem>Item 2</TabNavigationItem>
          <TabNavigationItem>Item 3</TabNavigationItem>
        </TabNavigation>
      )
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
  })

  test("renders an aria-label as passed", async () => {
    await waitFor(() => render(<TabNavigation ariaLabel="the relelvance of the navigation" />))
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.getByRole("navigation")).toHaveAttribute("aria-label", "the relelvance of the navigation")
  })

  test("renders disabled children as passed", async () => {
    await waitFor(() =>
      render(
        <TabNavigation disabled>
          <TabNavigationItem label="Item 1" />
          <TabNavigationItem label="Item 2" />
        </TabNavigation>
      )
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

  test("renders an active tab as passed by label", async () => {
    await waitFor(() =>
      render(
        <TabNavigation activeItem="Item 2">
          <TabNavigationItem label="Item 1" />
          <TabNavigationItem label="Item 2" />
        </TabNavigation>
      )
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

  test("renders an active tab as passed by value", async () => {
    await waitFor(() =>
      render(
        <TabNavigation activeItem="item-2">
          <TabNavigationItem value="item-1" label="Item 1" />
          <TabNavigationItem value="item-2" label="Item 2" />
        </TabNavigation>
      )
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

  test("renders the active tab as passed to the parent if conflicting with active prop passed to child item", async () => {
    await waitFor(() =>
      render(
        <TabNavigation activeItem="Item 2">
          <TabNavigationItem label="Item 1" active />
          <TabNavigationItem label="Item 2" />
        </TabNavigation>
      )
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(2)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-selected")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-selected", "true")
  })

  test("rerenders the active item as passed to the parent if conflicting with new state of active prop passed to child item", async () => {
    const { rerender } = await waitFor(() =>
      render(
        <TabNavigation activeItem="Item 2">
          <TabNavigationItem label="Item 1" active />
          <TabNavigationItem label="Item 2" />
        </TabNavigation>
      )
    )

    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
    await waitFor(() =>
      rerender(
        <TabNavigation activeItem="Item 1">
          <TabNavigationItem label="Item 1" />
          <TabNavigationItem label="Item 2" />
        </TabNavigation>
      )
    )
    expect(screen.getByRole("button", { name: "Item 1" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).not.toHaveClass("juno-navigation-item-active")
  })

  test("rerenders the active item as passed to the parent if conflicting with new state of active prop passed to child item with 3 options", async () => {
    const { rerender } = await waitFor(() =>
      render(
        <TabNavigation activeItem="Item 2">
          <TabNavigationItem label="Item 1" active />
          <TabNavigationItem label="Item 2" />
          <TabNavigationItem label="Item 3" />
        </TabNavigation>
      )
    )
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveClass("juno-navigation-item-active")
    await waitFor(() =>
      rerender(
        <TabNavigation activeItem="Item 2">
          <TabNavigationItem label="Item 1" />
          <TabNavigationItem label="Item 2" />
          <TabNavigationItem label="Item 3" active />
        </TabNavigation>
      )
    )
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 3" })).not.toHaveClass("juno-navigation-item-active")
  })

  test("changes the active tab when the user clicks", async () => {
    await waitFor(() =>
      render(
        <TabNavigation activeItem="Item 1">
          <TabNavigationItem label="Item 1" />
          <TabNavigationItem label="Item 2" />
        </TabNavigation>
      )
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(2)
    const tab1 = screen.getByRole("button", { name: "Item 1" })
    const tab2 = screen.getByRole("button", { name: "Item 2" })
    expect(tab1).toHaveAttribute("aria-selected", "true")
    expect(tab2).not.toHaveAttribute("aria-selected")
    await waitFor(() => userEvent.click(tab2))
    expect(tab1).not.toHaveAttribute("aria-selected")
    expect(tab2).toHaveAttribute("aria-selected", "true")
  })

  test("executes a handler as passed when the selected tab changes", async () => {
    await waitFor(() =>
      render(
        <TabNavigation activeItem="Item 1" onActiveItemChange={mockOnActiveItemChange}>
          <TabNavigationItem label="Item 1" />
          <TabNavigationItem label="Item 2" />
        </TabNavigation>
      )
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(2)
    const tab2 = screen.getByRole("button", { name: "Item 2" })
    await waitFor(() => userEvent.click(tab2))
    expect(mockOnActiveItemChange).toHaveBeenCalled()
  })

  test("renders a main style tab navigation by default", async () => {
    await waitFor(() =>
      render(
        <TabNavigation>
          <TabNavigationItem label="Item 1" />
        </TabNavigation>
      )
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.getByRole("navigation")).toHaveClass("juno-tabnavigation-main")
  })

  test("renders a content style tab navigation by passed", async () => {
    await waitFor(() =>
      render(
        <TabNavigation tabStyle="content">
          <TabNavigationItem label="Item 1" />
        </TabNavigation>
      )
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.getByRole("navigation")).toHaveClass("juno-tabnavigation-content")
  })

  test("renders a custom classNames", async () => {
    await waitFor(() => render(<TabNavigation className="my-custom-class" />))
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.getByRole("navigation")).toHaveClass("my-custom-class")
  })

  test("renders all other props", async () => {
    await waitFor(() => render(<TabNavigation data-lolol="13" />))
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.getByRole("navigation")).toHaveAttribute("data-lolol", "13")
  })
})
