/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, waitFor, cleanup } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { NavigationItem } from "./index"
import { Navigation } from "../Navigation/index"

const mockOnClick = vi.fn()

describe("NavigationItem", () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  test("renders a NavigationItem button by default even if no context exists", () => {
    render(<NavigationItem />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-navigation-item")
  })

  test("renders a link element when a url is passed", () => {
    render(<NavigationItem href="https://www.sap.com" />)
    expect(screen.getByRole("link")).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveAttribute("href", "https://www.sap.com")
  })

  test("renders an aria-label as passed", () => {
    render(<NavigationItem aria-label="My Item Aria Label" />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    // test whether the attribute will be set correctly
    expect(screen.getByRole("button")).toHaveAttribute("aria-label", "My Item Aria Label")
    // double-check whether the element can be found in the accessibility tree using the aria-label:
    expect(screen.getByLabelText("My Item Aria Label")).toBeInTheDocument()
  })

  test("renders an active navigationItem as passed", () => {
    render(<NavigationItem active />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-navigation-item")
    expect(screen.getByRole("button")).toHaveClass("juno-navigation-item-active")
  })

  test("renders a disabled navigationItem as passed", () => {
    render(<NavigationItem disabled />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-navigation-item")
    expect(screen.getByRole("button")).toBeDisabled()
    expect(screen.getByRole("button")).toHaveClass("juno-navigation-item-disabled")
  })

  test("renders children as passed", () => {
    render(<NavigationItem>My Item</NavigationItem>)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("My Item")
  })

  test("renders a label as passed", () => {
    render(<NavigationItem label="My Label" />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("My Label")
  })

  test("renders the value as navigationItem content when no children or label prop was passed", () => {
    render(<NavigationItem value="my-value" />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("my-value")
  })

  test("renders a data attribute representing the value as passed", () => {
    render(<NavigationItem value="my-value" />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveAttribute("data-value", "my-value")
  })

  test("renders children when both label and children were passed", () => {
    render(<NavigationItem label="My Label">My Item</NavigationItem>)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("My Item")
    expect(screen.getByRole("button")).not.toHaveTextContent("My Label")
  })

  test("renders a classname to the wrapper element as passed", () => {
    render(<NavigationItem wrapperClassName="my-wrapper" />)
    const element = screen.getByRole("button")
    expect(element).toBeInTheDocument()
    const parent = element.parentElement
    expect(parent?.tagName).toBe("LI")
    expect(parent).toHaveClass("my-wrapper")
  })

  test("renders an icon as passed", () => {
    render(<NavigationItem icon="warning" />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "warning")
  })

  test("executes an onClick handler when clicked as passed", async () => {
    render(<NavigationItem onClick={mockOnClick} />)
    const user = userEvent.setup()
    const item = screen.getByRole("button")
    await user.click(item)
    await waitFor(() => {
      expect(mockOnClick).toHaveBeenCalled()
    })
  })

  test("renders a custom className as passed", () => {
    render(<NavigationItem className="my-navigation-item" />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-navigation-item")
    expect(screen.getByRole("button")).toHaveClass("my-navigation-item")
  })

  test("renders all arbitrary props as passed", () => {
    render(<NavigationItem data-lolol="123" />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveAttribute("data-lolol", "123")
  })

  // Test Parent Integration (Execution of callbacks is tested in parent Navigation component test suite):

  test("renders a disabled NavigationItem as per the parent Navigation context", () => {
    render(
      <Navigation disabled>
        <NavigationItem>Test</NavigationItem>
      </Navigation>
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeDisabled()
    expect(screen.getByRole("button")).toHaveClass("juno-navigation-item-disabled")
  })
})
