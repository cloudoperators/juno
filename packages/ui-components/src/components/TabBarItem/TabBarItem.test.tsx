/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, cleanup, waitFor } from "@testing-library/react"
import { TabBarItem } from "./index"
import { TabBar } from "../TabBar/index"

const mockOnClick = vi.fn()

describe("TabBarItem", () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  test("renders a TabBarItem", () => {
    render(<TabBarItem data-testid="tab-bar-item" />)
    expect(screen.getByTestId("tab-bar-item")).toBeInTheDocument()
    expect(screen.getByTestId("tab-bar-item")).toHaveClass("juno-tabbar-item")
  })

  test("renders a label as passed", () => {
    render(<TabBarItem data-testid="tab-bar-item" label="Item" />)
    expect(screen.getByTestId("tab-bar-item")).toHaveTextContent("Item")
  })

  test("renders children as passed", () => {
    render(<TabBarItem>The Item Is A Child</TabBarItem>)
    expect(screen.getByRole("button")).toHaveTextContent("The Item Is A Child")
  })

  test("renders an aria-label as passed", () => {
    render(<TabBarItem ariaLabel="My ARIA-Label" />)
    expect(screen.getByRole("button")).toHaveAttribute("aria-label", "My ARIA-Label")
  })

  test("renders a disabled tab bar item as passed", () => {
    render(<TabBarItem data-testid="tab-bar-item" disabled />)
    expect(screen.getByTestId("tab-bar-item")).toBeDisabled()
    expect(screen.getByTestId("tab-bar-item")).toHaveAttribute("aria-disabled", "true")
  })

  test("renders an icon as passed", () => {
    render(<TabBarItem icon="warning" />)
    expect(screen.getByRole("img")).toHaveAttribute("alt", "warning")
  })

  test("renders as a link when a href prop is passed", () => {
    render(<TabBarItem href="#" />)
    expect(screen.getByRole("link")).toHaveClass("juno-tabbar-item")
  })

  test("renders an active item as passed", () => {
    render(<TabBarItem active />)
    expect(screen.getByRole("button")).toHaveClass("juno-tabbar-item")
    expect(screen.getByRole("button")).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button")).toHaveAttribute("aria-selected", "true")
  })

  test("rerenders the active attribute", () => {
    const { rerender } = render(<TabBarItem data-testid="tab-bar-item" active={true} />)
    expect(screen.getByRole("button")).toHaveClass("juno-navigation-item-active")
    rerender(<TabBarItem data-testid="tab-bar-item" active={false} />)
    expect(screen.getByRole("button")).not.toHaveClass("juno-navigation-item-active")
  })

  test("executes an onClick handler as passed", async () => {
    render(
      <TabBar>
        <TabBarItem data-testid="tab-bar-item" onClick={mockOnClick} />
      </TabBar>
    )
    await waitFor(() => {
      screen.getByTestId("tab-bar-item").click()
    })
    expect(mockOnClick).toHaveBeenCalled()
  })

  test("renders main appearance items by default inside a TabBar", () => {
    render(
      <TabBar>
        <TabBarItem label="Item 1" />
      </TabBar>
    )
    expect(screen.getByRole("button", { name: "Item 1" })).toHaveClass("juno-tabbar-main-item")
  })

  test("renders content appearance items as passed to the parent TabBar via appearance prop", () => {
    render(
      <TabBar appearance="content">
        <TabBarItem label="Item 1" />
      </TabBar>
    )
    expect(screen.getByRole("button", { name: "Item 1" })).toHaveClass("juno-tabbar-content-item")
  })

  test("renders content appearance items as passed to the parent TabBar via deprecated tabStyle prop", () => {
    render(
      <TabBar tabStyle="content">
        <TabBarItem label="Item 1" />
      </TabBar>
    )
    expect(screen.getByRole("button", { name: "Item 1" })).toHaveClass("juno-tabbar-content-item")
  })

  test("renders a custom className as passed", () => {
    render(<TabBarItem data-testid="tab-bar-item" className="my-custom-class" />)
    expect(screen.getByTestId("tab-bar-item")).toHaveClass("my-custom-class")
  })

  test("renders all props as passed", () => {
    render(<TabBarItem data-testid="tab-bar-item" data-lol="lol-1-2-3" />)
    expect(screen.getByTestId("tab-bar-item")).toHaveAttribute("data-lol", "lol-1-2-3")
  })
})
