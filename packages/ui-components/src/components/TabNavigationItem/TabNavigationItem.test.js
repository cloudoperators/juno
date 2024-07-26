/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, cleanup } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { TabNavigationItem } from "./index"
import { TabNavigation } from "../TabNavigation/index"

const mockOnClick = jest.fn()

describe("TabNavigationItem", () => {
  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test("renders a TabNavigationItem", async () => {
    render(<TabNavigationItem data-testid={"tab-nav-item"} />)
    expect(screen.getByTestId("tab-nav-item")).toBeInTheDocument()
    expect(screen.getByTestId("tab-nav-item")).toHaveClass("juno-tabnavigation-item")
  })

  test("renders a label as passed", async () => {
    render(<TabNavigationItem data-testid={"tab-nav-item"} label="Item" />)
    expect(screen.getByTestId("tab-nav-item")).toBeInTheDocument()
    expect(screen.getByTestId("tab-nav-item")).toHaveTextContent("Item")
  })

  test("renders children as passed", async () => {
    render(<TabNavigationItem>The Item Is A Child</TabNavigationItem>)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("The Item Is A Child")
  })

  test("renders an aria-label as passed", async () => {
    render(<TabNavigationItem ariaLabel="My ARIA-Label" />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveAttribute("aria-label", "My ARIA-Label")
  })

  test("renders a disabled tab navigation item as passed", async () => {
    render(<TabNavigationItem data-testid={"tab-nav-item"} disabled />)
    expect(screen.getByTestId("tab-nav-item")).toBeInTheDocument()
    expect(screen.getByTestId("tab-nav-item")).toBeDisabled()
    expect(screen.getByTestId("tab-nav-item")).toHaveAttribute("aria-disabled", "true")
  })

  test("renders an icon as passed", async () => {
    render(<TabNavigationItem icon="warning" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "warning")
  })

  test("renders as a link when a href prop is passed", async () => {
    render(<TabNavigationItem href="#" />)
    expect(screen.getByRole("link")).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveClass("juno-tabnavigation-item")
  })

  test("renders an active navigation item as passed", async () => {
    render(<TabNavigationItem active />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-tabnavigation-item")
    expect(screen.getByRole("button")).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button")).toHaveAttribute("aria-selected", "true")
  })

  test("rerenders the active attribute of the TabNavigationItem", async () => {
    const { rerender } = render(<TabNavigationItem data-testid="tab-nav-item" active={true} />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-navigation-item-active")
    rerender(<TabNavigationItem data-testid="tab-nav-item" active={false} />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).not.toHaveClass("juno-navigation-item-active")
  })

  test("executes an onClick handler as passed", async () => {
    render(
      <TabNavigation>
        <TabNavigationItem data-testid={"tab-nav-item"} onClick={mockOnClick} />
      </TabNavigation>
    )
    expect(screen.getByTestId("tab-nav-item")).toBeInTheDocument()
    await userEvent.click(screen.getByTestId("tab-nav-item"))
    expect(mockOnClick).toHaveBeenCalled()
  })

  test("renders main style tab navigation items by default inside a TabNavigation", async () => {
    render(
      <TabNavigation>
        <TabNavigationItem label="Item 1" />
      </TabNavigation>
    )
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).toHaveClass("juno-tabnavigation-main-item")
  })

  test("renders content style tab navigation items as passed to the parent TabNavigation", async () => {
    render(
      <TabNavigation tabStyle="content">
        <TabNavigationItem label="Item 1" />
      </TabNavigation>
    )
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 1" })).toHaveClass("juno-tabnavigation-content-item")
  })

  test("renders a className as passed", async () => {
    render(<TabNavigationItem data-testid={"tab-nav-item"} className="my-custom-class" />)
    expect(screen.getByTestId("tab-nav-item")).toBeInTheDocument()
    expect(screen.getByTestId("tab-nav-item")).toHaveClass("my-custom-class")
  })

  test("renders all props as passed", async () => {
    render(<TabNavigationItem data-testid={"tab-nav-item"} data-lol="lol-1-2-3" />)
    expect(screen.getByTestId("tab-nav-item")).toBeInTheDocument()
    expect(screen.getByTestId("tab-nav-item")).toHaveAttribute("data-lol", "lol-1-2-3")
  })
})
