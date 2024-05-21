/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import {
  render,
  screen,
  waitFor,
  cleanup,
  rerender,
} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { SideNavigation } from "../SideNavigation/index"
import { SideNavigationItem } from "./index"

const mockOnClick = jest.fn()

describe("SideNavigationItem", () => {
  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test("renders a SideNavigationItem", async () => {
    render(<SideNavigationItem data-testid="side-nav-item" />)
    expect(screen.getByTestId("side-nav-item")).toBeInTheDocument()
    expect(screen.getByTestId("side-nav-item")).toHaveClass(
      "juno-sidenavigation-item"
    )
  })

  test("renders a label as passed", async () => {
    render(<SideNavigationItem label="My Label" />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("My Label")
  })

  test("renders children as passed", async () => {
    render(<SideNavigationItem>The Item Is A Child</SideNavigationItem>)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("The Item Is A Child")
  })

  test("renders an aria-label as passed", async () => {
    render(<SideNavigationItem ariaLabel="My ARIA-Label" />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "My ARIA-Label"
    )
  })

  test("renders a disabled item as passed", async () => {
    render(<SideNavigationItem disabled />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeDisabled()
    expect(screen.getByRole("button")).toHaveAttribute("aria-disabled", "true")
  })

  test("renders an icon as passed", async () => {
    render(<SideNavigationItem icon="warning" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "warning")
  })

  test("renders as a link when a href prop is passed", async () => {
    render(<SideNavigationItem href="#" />)
    expect(screen.getByRole("link")).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveClass("juno-sidenavigation-item")
  })

  test("renders as a button when an onClick prop is passed", async () => {
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

  test("renders an active NavigationItem as passed", async () => {
    render(<SideNavigationItem data-testid="side-nav-item" active />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-sidenavigation-item")
    expect(screen.getByRole("button")).toHaveClass(
      "juno-navigation-item-active"
    )
    expect(screen.getByRole("button")).toHaveAttribute("aria-selected", "true")
  })

  test("rerenders the active attribute of a navigation item", async () => {
    const { rerender } = render(
      <SideNavigationItem data-testid="side-nav-item" active={true} />
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass(
      "juno-navigation-item-active"
    )
    rerender(<SideNavigationItem data-testid="side-nav-item" active={false} />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).not.toHaveClass(
      "juno-sidenavigation-item-active"
    )
  })

  test("renders an aria-label as passed", async () => {
    render(<SideNavigationItem href="#" ariaLabel="hey nav item!" />)
    expect(screen.getByRole("link")).toHaveAttribute(
      "aria-label",
      "hey nav item!"
    )
  })

  test("executes an onClick handler as passed", async () => {
    render(
      <SideNavigation>
        <SideNavigationItem onClick={mockOnClick} label="My Item" />
      </SideNavigation>
    )
    expect(screen.getByRole("button", { name: "My Item" })).toBeInTheDocument()
    await userEvent.click(screen.getByRole("button", { name: "My Item" }))
    expect(mockOnClick).toHaveBeenCalled()
  })

  test("renders custom classNames as passed", async () => {
    render(
      <SideNavigationItem
        data-testid="side-nav-item"
        className="my-custom-class"
      />
    )
    expect(screen.getByTestId("side-nav-item")).toHaveClass("my-custom-class")
  })

  test("renders all props as passed", async () => {
    render(
      <SideNavigationItem
        data-testid="side-nav-item"
        data-lol="Prop goes here"
      />
    )
    expect(screen.getByTestId("side-nav-item")).toHaveAttribute(
      "data-lol",
      "Prop goes here"
    )
  })
})
