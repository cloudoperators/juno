/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, cleanup, act, fireEvent } from "@testing-library/react"
import { SideNavigation } from "../SideNavigation/SideNavigation.component"
import { SideNavigationItem } from "./SideNavigationItem.component"

const mockOnClick = vi.fn()

describe("SideNavigationItem", () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  test("renders a SideNavigationItem", () => {
    render(<SideNavigationItem data-testid="side-nav-item" />)
    expect(screen.getByTestId("side-nav-item")).toBeInTheDocument()
    expect(screen.getByTestId("side-nav-item")).toHaveClass("juno-sidenavigation-item")
  })

  test("renders a label as passed", () => {
    render(<SideNavigationItem label="My Label" />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("My Label")
  })

  test("renders children as passed", () => {
    render(<SideNavigationItem>The Item Is A Child</SideNavigationItem>)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("The Item Is A Child")
  })

  test("renders an aria-label as passed", () => {
    render(<SideNavigationItem ariaLabel="My ARIA-Label" />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveAttribute("aria-label", "My ARIA-Label")
  })

  test("renders an aria-label as passed, role link", () => {
    render(<SideNavigationItem href="#" ariaLabel="hey nav item!" />)
    expect(screen.getByRole("link")).toHaveAttribute("aria-label", "hey nav item!")
  })

  test("renders a disabled item as passed", () => {
    render(<SideNavigationItem disabled />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeDisabled()
    expect(screen.getByRole("button")).toHaveAttribute("aria-disabled", "true")
  })

  test("renders an icon as passed", () => {
    render(<SideNavigationItem icon="warning" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "warning")
  })

  test("renders as a link when a href prop is passed", () => {
    render(<SideNavigationItem href="#" />)
    expect(screen.getByRole("link")).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveClass("juno-sidenavigation-item")
  })

  test("renders as a button when an onClick prop is passed", () => {
    render(
      <SideNavigationItem
        onClick={() => {
          console.log("click")
        }}
      />
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-sidenavigation-item")
  })

  test("renders an active NavigationItem as passed", () => {
    render(<SideNavigationItem data-testid="side-nav-item" selected />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-sidenavigation-item")
    expect(screen.getByRole("button")).toHaveClass("juno-sidenavigation-item-selected")
    expect(screen.getByRole("button")).toHaveAttribute("aria-selected", "true")
  })

  test("rerenders the active attribute of a navigation item", () => {
    const { rerender } = render(<SideNavigationItem data-testid="side-nav-item" selected={true} />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-sidenavigation-item-selected")
    rerender(<SideNavigationItem data-testid="side-nav-item" selected={false} />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).not.toHaveClass("juno-sidenavigation-item-selected")
  })

  test("executes an onClick handler as passed", () => {
    render(
      <SideNavigation>
        <SideNavigationItem onClick={mockOnClick} label="My Item" />
      </SideNavigation>
    )
    expect(screen.getByRole("button", { name: "My Item" })).toBeInTheDocument()
    act(() => {
      screen.getByRole("button", { name: "My Item" }).click()
    })
    expect(mockOnClick).toHaveBeenCalled()
  })

  test("renders custom classNames as passed", () => {
    render(<SideNavigationItem data-testid="side-nav-item" className="my-custom-class" />)
    expect(screen.getByTestId("side-nav-item")).toHaveClass("my-custom-class")
  })

  test("renders all props as passed", () => {
    render(<SideNavigationItem data-testid="side-nav-item" data-lol="Prop goes here" />)
    expect(screen.getByTestId("side-nav-item")).toHaveAttribute("data-lol", "Prop goes here")
  })

  // test("handles href navigation when href is provided", () => {
  //   // Spy on window.location.assign method
  //   const locationSpy = jest.spyOn(window, "location", "get")
  //   const assignSpy = jest.fn()
  //   locationSpy.mockReturnValue({
  //     assign: assignSpy,
  //   })

  //   render(<SideNavigationItem href="https://example.com" label="My Link Item" />)
  //   const linkItem = screen.getByRole("link", { name: "My Link Item" })

  //   fireEvent.click(linkItem)

  //   expect(assignSpy).toHaveBeenCalledWith("https://example.com") // Check navigation call

  //   // Clean up spies
  //   locationSpy.mockRestore()
  // })

  test("handles onClick when no href is provided", () => {
    const mockOnClick = vi.fn()

    render(<SideNavigationItem onClick={mockOnClick} label="My Click Item" />)
    const buttonItem = screen.getByRole("button", { name: "My Click Item" })

    fireEvent.click(buttonItem)
    expect(mockOnClick).toHaveBeenCalled()
  })

  test("prioritizes href over onClick if both are provided", () => {
    const mockOnClick = vi.fn()

    render(<SideNavigationItem href="https://example.com" onClick={mockOnClick} label="My Item" />)
    const linkItem = screen.getByRole("link", { name: "My Item" })

    fireEvent.click(linkItem)
    expect(window.location.href).toBe("https://example.com")
    expect(mockOnClick).not.toHaveBeenCalled() // Ensure onClick is not triggered
  })

  test("renders expand icon for children and toggles open state", () => {
    render(
      <SideNavigationItem label="Parent Item">
        <SideNavigationItem label="Child Item" />
      </SideNavigationItem>
    )

    const expandIcon = screen.getByRole("button", {
      // Assumes aria-label or similar identifier for the icon
      name: /expandMore|chevronRight/i,
    })

    expect(expandIcon).toBeInTheDocument()

    // Initially closed, expect children not in view
    expect(screen.queryByText("Child Item")).not.toBeInTheDocument()

    fireEvent.click(expandIcon)

    // Check if children appear after click
    expect(screen.getByText("Child Item")).toBeInTheDocument()
  })

  test("does not collapse when item label is clicked if open", () => {
    render(
      <SideNavigationItem label="Parent Item" open>
        <SideNavigationItem label="Child Item" />
      </SideNavigationItem>
    )

    const item = screen.getByRole("button", { name: "Parent Item" })
    fireEvent.click(item)

    // Ensure item is still open after label click
    expect(screen.getByText("Child Item")).toBeInTheDocument()
  })

  test("restricts children beyond level 3", () => {
    render(
      <SideNavigationItem label="Level 1">
        <SideNavigationItem label="Level 2">
          <SideNavigationItem label="Level 3">
            <SideNavigationItem label="Level 4" />
          </SideNavigationItem>
        </SideNavigationItem>
      </SideNavigationItem>
    )

    expect(screen.getByText("Level 1")).toBeInTheDocument()
    expect(screen.getByText("Level 2")).toBeInTheDocument()
    expect(screen.getByText("Level 3")).toBeInTheDocument()
    expect(screen.queryByText("Level 4")).not.toBeInTheDocument()
  })

  test("ignores non-SideNavigationItem children", () => {
    render(
      <SideNavigationItem label="Parent Item">
        <span>Invalid Child</span>
        <SideNavigationItem label="Valid Child" />
      </SideNavigationItem>
    )

    expect(screen.getByText("Parent Item")).toBeInTheDocument()
    expect(screen.getByText("Valid Child")).toBeInTheDocument()
    expect(screen.queryByText("Invalid Child")).not.toBeInTheDocument()
  })

  test("applies css styles by level", () => {
    render(
      <SideNavigationItem label="Level 1">
        <SideNavigationItem label="Level 2">
          <SideNavigationItem label="Level 3" />
        </SideNavigationItem>
      </SideNavigationItem>
    )

    const level1 = screen.getByText("Level 1")
    const level2 = screen.getByText("Level 2")
    const level3 = screen.getByText("Level 3")

    expect(level1).toHaveClass("juno-sidenavigation-item-content level-1")
    expect(level2).toHaveClass("juno-sidenavigation-item-content level-2")
    expect(level3).toHaveClass("juno-sidenavigation-item-content level-3")
  })
})
