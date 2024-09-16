/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { cleanup, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { TopNavigation } from "../TopNavigation/index"
import { TopNavigationItem } from "./index"

const mockOnClick = vi.fn()

describe("TopNavigationItem", () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  test("renders a ToppNavigationItem", async () => {
    await waitFor(() => render(<TopNavigationItem data-testid="top-nav-item" />))
    expect(screen.getByTestId("top-nav-item")).toBeInTheDocument()
    expect(screen.getByTestId("top-nav-item")).toHaveClass("juno-topnavigation-item")
  })

  test("renders a label as passed", async () => {
    await waitFor(() => render(<TopNavigationItem label="My Label" />))
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("My Label")
  })

  test("renders children as passed", async () => {
    await waitFor(() => render(<TopNavigationItem>The Item Is A Child</TopNavigationItem>))
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("The Item Is A Child")
  })

  test("redners an aria-label attribute as passed", async () => {
    await waitFor(() => render(<TopNavigationItem ariaLabel="My ARIA-Label" />))
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveAttribute("aria-label", "My ARIA-Label")
  })

  test("renders a disabled item as passed", async () => {
    await waitFor(() => render(<TopNavigationItem disabled />))
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeDisabled()
    expect(screen.getByRole("button")).toHaveAttribute("aria-disabled", "true")
  })

  test("renders an icon as passed", async () => {
    await waitFor(() => render(<TopNavigationItem icon="warning" />))
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "warning")
  })

  test("renders as a link when a href prop is passed", async () => {
    await waitFor(() => render(<TopNavigationItem href="#" />))
    expect(screen.getByRole("link")).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveClass("juno-topnavigation-item")
  })

  test("renders as a button when an onClick prop is passed", async () => {
    await waitFor(() =>
      render(
        <TopNavigationItem
          onClick={() => {
            console.log("click")
          }}
        />
      )
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-topnavigation-item")
  })

  test("renders an active ToppNavigationItem as passed", async () => {
    await waitFor(() => render(<TopNavigationItem data-testid="top-nav-item" active />))
    expect(screen.getByTestId("top-nav-item")).toBeInTheDocument()
    expect(screen.getByTestId("top-nav-item")).toHaveClass("juno-topnavigation-item")
    expect(screen.getByTestId("top-nav-item")).toHaveClass("juno-navigation-item-active")
  })

  test("renders an aria-label as passed", async () => {
    await waitFor(() => render(<TopNavigationItem href="#" ariaLabel="hey nav item!" />))
    expect(screen.getByRole("link")).toHaveAttribute("aria-label", "hey nav item!")
  })

  test("executes an onClick handler as passed", async () => {
    await waitFor(() =>
      render(
        <TopNavigation>
          <TopNavigationItem onClick={mockOnClick} label="My Item" />
        </TopNavigation>
      )
    )
    expect(screen.getByRole("button", { name: "My Item" })).toBeInTheDocument()
    await waitFor(() => userEvent.click(screen.getByRole("button", { name: "My Item" })))
    expect(mockOnClick).toHaveBeenCalled()
  })

  test("renders custom classNames as passed", async () => {
    await waitFor(() => render(<TopNavigationItem data-testid="top-nav-item" className="my-custom-class" />))
    expect(screen.getByTestId("top-nav-item")).toHaveClass("my-custom-class")
  })

  test("renders all props as passed", async () => {
    await waitFor(() => render(<TopNavigationItem data-testid="top-nav-item" data-lol="Prop goes here" />))
    expect(screen.getByTestId("top-nav-item")).toHaveAttribute("data-lol", "Prop goes here")
  })
})
