/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useContext } from "react"
import { render, screen, cleanup, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { TabBar, TabNavigation } from "./index"
import { TabBarContext, TabBarContextType } from "./TabBar.component"
import { TabBarItem } from "../TabBarItem/index"

const mockOnActiveItemChange = vi.fn()

describe("TabBar", () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  test("renders a TabBar", async () => {
    await waitFor(() => render(<TabBar />))
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.getByRole("navigation")).toHaveClass("juno-tabbar")
  })

  test("renders children as passed", async () => {
    await waitFor(() =>
      render(
        <TabBar>
          <TabBarItem>Item 1</TabBarItem>
          <TabBarItem>Item 2</TabBarItem>
          <TabBarItem>Item 3</TabBarItem>
        </TabBar>
      )
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 2" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Item 3" })).toBeInTheDocument()
  })

  test("renders an aria-label as passed", async () => {
    await waitFor(() => render(<TabBar ariaLabel="the relevance of the navigation" />))
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.getByRole("navigation")).toHaveAttribute("aria-label", "the relevance of the navigation")
  })

  test("renders disabled children as passed", async () => {
    await waitFor(() =>
      render(
        <TabBar disabled>
          <TabBarItem label="Item 1" />
          <TabBarItem label="Item 2" />
        </TabBar>
      )
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(2)
    expect(screen.getByRole("button", { name: "Item 1" })).toBeDisabled()
    expect(screen.getByRole("button", { name: "Item 1" })).toHaveAttribute("aria-disabled", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toBeDisabled()
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-disabled", "true")
  })

  test("renders a disabled class when disabled", () => {
    render(<TabBar disabled />)
    expect(screen.getByRole("navigation")).toHaveClass("juno-tabbar-disabled")
  })

  test("renders an active tab as passed by label", async () => {
    await waitFor(() =>
      render(
        <TabBar activeItem="Item 2">
          <TabBarItem label="Item 1" />
          <TabBarItem label="Item 2" />
        </TabBar>
      )
    )
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-current")
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-current", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
  })

  test("renders an active tab as passed by value", async () => {
    await waitFor(() =>
      render(
        <TabBar activeItem="item-2">
          <TabBarItem value="item-1" label="Item 1" />
          <TabBarItem value="item-2" label="Item 2" />
        </TabBar>
      )
    )
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-current")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-current", "true")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
  })

  test("renders the active tab as passed to the parent if conflicting with active prop passed to child item", async () => {
    await waitFor(() =>
      render(
        <TabBar activeItem="Item 2">
          <TabBarItem label="Item 1" active />
          <TabBarItem label="Item 2" />
        </TabBar>
      )
    )
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveAttribute("aria-current")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveAttribute("aria-current", "true")
  })

  test("rerenders the active item as passed to the parent", async () => {
    const { rerender } = await waitFor(() =>
      render(
        <TabBar activeItem="Item 2">
          <TabBarItem label="Item 1" active />
          <TabBarItem label="Item 2" />
        </TabBar>
      )
    )
    expect(screen.getByRole("button", { name: "Item 1" })).not.toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).toHaveClass("juno-navigation-item-active")
    await waitFor(() =>
      rerender(
        <TabBar activeItem="Item 1">
          <TabBarItem label="Item 1" />
          <TabBarItem label="Item 2" />
        </TabBar>
      )
    )
    expect(screen.getByRole("button", { name: "Item 1" })).toHaveClass("juno-navigation-item-active")
    expect(screen.getByRole("button", { name: "Item 2" })).not.toHaveClass("juno-navigation-item-active")
  })

  test("changes the active tab when the user clicks", async () => {
    await waitFor(() =>
      render(
        <TabBar activeItem="Item 1">
          <TabBarItem label="Item 1" />
          <TabBarItem label="Item 2" />
        </TabBar>
      )
    )
    const tab1 = screen.getByRole("button", { name: "Item 1" })
    const tab2 = screen.getByRole("button", { name: "Item 2" })
    expect(tab1).toHaveAttribute("aria-current", "true")
    expect(tab2).not.toHaveAttribute("aria-current")
    await waitFor(() => userEvent.click(tab2))
    expect(tab1).not.toHaveAttribute("aria-current")
    expect(tab2).toHaveAttribute("aria-current", "true")
  })

  test("executes a handler as passed when the selected tab changes", async () => {
    await waitFor(() =>
      render(
        <TabBar activeItem="Item 1" onActiveItemChange={mockOnActiveItemChange}>
          <TabBarItem label="Item 1" />
          <TabBarItem label="Item 2" />
        </TabBar>
      )
    )
    const tab2 = screen.getByRole("button", { name: "Item 2" })
    await waitFor(() => userEvent.click(tab2))
    expect(mockOnActiveItemChange).toHaveBeenCalled()
  })

  test("renders main appearance by default", async () => {
    await waitFor(() =>
      render(
        <TabBar>
          <TabBarItem label="Item 1" />
        </TabBar>
      )
    )
    expect(screen.getByRole("navigation")).toHaveClass("juno-tabbar-main")
  })

  test("renders content appearance as passed via appearance prop", async () => {
    await waitFor(() =>
      render(
        <TabBar appearance="content">
          <TabBarItem label="Item 1" />
        </TabBar>
      )
    )
    expect(screen.getByRole("navigation")).toHaveClass("juno-tabbar-content")
  })

  test("renders buttons appearance as passed via appearance prop", async () => {
    await waitFor(() =>
      render(
        <TabBar appearance="buttons">
          <TabBarItem label="Item 1" />
        </TabBar>
      )
    )
    expect(screen.getByRole("navigation")).toHaveClass("juno-tabbar-buttons")
  })

  // Can be removed when TabNavigation is removed:
  test("renders content appearance as passed via deprecated tabStyle prop", async () => {
    await waitFor(() =>
      render(
        <TabBar tabStyle="content">
          <TabBarItem label="Item 1" />
        </TabBar>
      )
    )
    expect(screen.getByRole("navigation")).toHaveClass("juno-tabbar-content")
  })

  // Can be removed when TabNavigation is removed:
  test("appearance prop takes precedence over tabStyle", async () => {
    await waitFor(() =>
      render(
        <TabBar appearance="main" tabStyle="content">
          <TabBarItem label="Item 1" />
        </TabBar>
      )
    )
    expect(screen.getByRole("navigation")).toHaveClass("juno-tabbar-main")
    expect(screen.getByRole("navigation")).not.toHaveClass("juno-tabbar-content")
  })

  test("provides appearance in context", () => {
    let ctx: TabBarContextType | undefined
    const Consumer = () => {
      ctx = useContext(TabBarContext)
      return null
    }
    render(
      <TabBar appearance="content">
        <Consumer />
      </TabBar>
    )
    expect(ctx?.appearance).toBe("content")
  })

  // Can be removed when TabNavigation is removed:
  test("provides tabStyle in context equal to appearance for backwards compat", () => {
    let ctx: TabBarContextType | undefined
    const Consumer = () => {
      ctx = useContext(TabBarContext)
      return null
    }
    render(
      <TabBar appearance="content">
        <Consumer />
      </TabBar>
    )
    expect(ctx?.tabStyle).toBe("content")
  })

  // Can be removed when TabNavigation is removed:
  test("provides tabStyle in context when set via deprecated tabStyle prop", () => {
    let ctx: TabBarContextType | undefined
    const Consumer = () => {
      ctx = useContext(TabBarContext)
      return null
    }
    render(
      <TabBar tabStyle="content">
        <Consumer />
      </TabBar>
    )
    expect(ctx?.tabStyle).toBe("content")
  })

  test("renders a custom className as passed", async () => {
    await waitFor(() => render(<TabBar className="my-custom-class" />))
    expect(screen.getByRole("navigation")).toHaveClass("my-custom-class")
  })

  test("renders all other props", async () => {
    await waitFor(() => render(<TabBar data-lolol="13" />))
    expect(screen.getByRole("navigation")).toHaveAttribute("data-lolol", "13")
  })
})

describe("TabNavigation (deprecated alias)", () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  test("renders a TabNavigation using the deprecated alias", async () => {
    await waitFor(() => render(<TabNavigation />))
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.getByRole("navigation")).toHaveClass("juno-tabbar")
  })

  test("emits a deprecation warning when rendered", async () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {})
    await waitFor(() => render(<TabNavigation />))
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining("TabNavigation is deprecated"))
    warnSpy.mockRestore()
  })

  // Can be removed when TabNavigation is removed:
  test("renders the correct appearance via the deprecated tabStyle prop", async () => {
    await waitFor(() =>
      render(
        <TabNavigation tabStyle="content">
          <TabBarItem label="Item 1" />
        </TabNavigation>
      )
    )
    expect(screen.getByRole("navigation")).toHaveClass("juno-tabbar-content")
  })
})
