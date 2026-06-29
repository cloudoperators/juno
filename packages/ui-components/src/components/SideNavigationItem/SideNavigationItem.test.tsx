/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, cleanup, fireEvent } from "@testing-library/react"
import { SideNavigationItem } from "./SideNavigationItem.component"

describe("SideNavigationItem", () => {
  afterEach(() => {
    cleanup()
  })

  it("renders with default properties", () => {
    render(<SideNavigationItem label="Home" />)
    const itemElement = screen.getByText("Home")
    expect(itemElement).toBeInTheDocument()
  })

  it("applies disabled styles when disabled", () => {
    render(<SideNavigationItem label="Home" disabled />)
    const itemElement = screen.getByRole("button")
    expect(itemElement).toHaveClass("jn:opacity-50 jn:cursor-not-allowed")
  })

  it("executes onClick handler when clicked", () => {
    const handleClick = vi.fn()
    render(<SideNavigationItem label="Clickable Item" onClick={handleClick} />)
    const clickableElement = screen.getByRole("button")

    fireEvent.click(clickableElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("renders as a link with href and navigates correctly", () => {
    const href = "http://example.com"
    render(<SideNavigationItem label="External Link" href={href} />)
    const linkElement = screen.getByRole("link")
    expect(linkElement).toHaveAttribute("href", href)
  })

  test("toggles open state when clicked", () => {
    render(
      <SideNavigationItem label="Messages" open={false}>
        <SideNavigationItem label="Inbox" />
      </SideNavigationItem>
    )

    const expandButton = screen.getByLabelText("Expand section")
    fireEvent.click(expandButton)

    const childElement = screen.getByText("Inbox")
    expect(childElement).toBeInTheDocument()
  })

  it("does not toggle if disabled", () => {
    render(
      <SideNavigationItem label="Disabled Messages" disabled>
        <SideNavigationItem label="Inbox" />
      </SideNavigationItem>
    )

    const expandButton = screen.getAllByRole("button")[0] // To ensure correct element targeting
    fireEvent.click(expandButton)

    const childElement = screen.queryByText("Inbox")
    expect(childElement).not.toBeInTheDocument()
  })

  it("renders with selected styles when selected", () => {
    render(<SideNavigationItem label="Selected Item" selected />)
    const itemElement = screen.getByRole("button")
    expect(itemElement).toHaveClass("juno-sidenavigation-item-selected")
  })

  it("renders an icon when icon prop is provided", () => {
    render(<SideNavigationItem label="Item with Icon" icon="home" />)
    // Ensure the icon is correctly displayed
    const iconElement = screen.getByRole("img", { hidden: true })
    expect(iconElement).toBeInTheDocument()
  })

  it("handles aria-label correctly", () => {
    render(<SideNavigationItem label="Aria Item" ariaLabel="Custom Aria Label" />)
    const itemElement = screen.getByRole("button")
    expect(itemElement).toHaveAttribute("aria-label", "Custom Aria Label")
  })

  it("sets a title attribute on the rendered button when label is a string", () => {
    render(<SideNavigationItem label="A very long label that may overflow" />)
    const itemElement = screen.getByRole("button")
    expect(itemElement).toHaveAttribute("title", "A very long label that may overflow")
  })

  it("falls back to string children for the title when label is not provided", () => {
    render(<SideNavigationItem>Children-only label</SideNavigationItem>)
    const itemElement = screen.getByRole("button")
    expect(itemElement).toHaveAttribute("title", "Children-only label")
  })

  it("does not set a title attribute when label is a ReactNode", () => {
    render(<SideNavigationItem label={<span>Node label</span>} />)
    const itemElement = screen.getByRole("button")
    expect(itemElement).not.toHaveAttribute("title")
  })

  it("applies the top-level class at the root", () => {
    render(<SideNavigationItem label="Top" />)
    expect(screen.getByText("Top")).toHaveClass("level-1")
  })

  it("applies the second-level class when nested once", () => {
    render(
      <SideNavigationItem label="Parent" open>
        <SideNavigationItem label="Child" />
      </SideNavigationItem>
    )
    expect(screen.getByText("Child")).toHaveClass("level-2")
  })

  it("renders as a <li> so it is a valid direct child of a <ul>", () => {
    const { container } = render(<SideNavigationItem label="Item" />)
    const root = container.firstElementChild
    expect(root?.tagName).toBe("LI")
  })

  it("wraps expanded children in a nested <ul> with only <li> direct children", () => {
    const { container } = render(
      <SideNavigationItem label="Parent" open>
        <SideNavigationItem label="Child A" />
        <SideNavigationItem label="Child B" />
      </SideNavigationItem>
    )

    const nestedUls = container.querySelectorAll("ul")
    expect(nestedUls.length).toBe(1)
    for (const ul of nestedUls) {
      for (const child of Array.from(ul.children)) {
        expect(child.tagName).toBe("LI")
      }
    }
  })

  it("does not render a nested <ul> when expanded without children", () => {
    const { container } = render(<SideNavigationItem label="Lonely" open />)
    expect(container.querySelector("ul")).toBeNull()
  })

  it("fires onToggle with the next state when the chevron is clicked", () => {
    const onToggle = vi.fn()
    render(
      <SideNavigationItem label="Messages" onToggle={onToggle}>
        <SideNavigationItem label="Inbox" />
      </SideNavigationItem>
    )

    fireEvent.click(screen.getByLabelText("Expand section"))
    expect(onToggle).toHaveBeenCalledTimes(1)
    expect(onToggle).toHaveBeenCalledWith(true)

    fireEvent.click(screen.getByLabelText("Collapse section"))
    expect(onToggle).toHaveBeenCalledTimes(2)
    expect(onToggle).toHaveBeenLastCalledWith(false)
  })

  it("does not fire onToggle when the label is clicked", () => {
    const onToggle = vi.fn()
    const onClick = vi.fn()
    render(
      <SideNavigationItem label="Messages" onClick={onClick} onToggle={onToggle}>
        <SideNavigationItem label="Inbox" />
      </SideNavigationItem>
    )

    // The label button is the first button; the chevron is the second.
    const buttons = screen.getAllByRole("button")
    fireEvent.click(buttons[0])
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onToggle).not.toHaveBeenCalled()
  })

  it("does not fire onToggle when the chevron is clicked while disabled", () => {
    const onToggle = vi.fn()
    render(
      <SideNavigationItem label="Messages" disabled onToggle={onToggle}>
        <SideNavigationItem label="Inbox" />
      </SideNavigationItem>
    )

    fireEvent.click(screen.getByLabelText("Expand section"))
    expect(onToggle).not.toHaveBeenCalled()
  })

  it("toggles internal state when onToggle is omitted", () => {
    render(
      <SideNavigationItem label="Messages">
        <SideNavigationItem label="Inbox" />
      </SideNavigationItem>
    )
    fireEvent.click(screen.getByLabelText("Expand section"))
    expect(screen.getByText("Inbox")).toBeInTheDocument()
  })

  it("re-syncs internal state when the open prop changes", () => {
    const { rerender } = render(
      <SideNavigationItem label="Messages">
        <SideNavigationItem label="Inbox" />
      </SideNavigationItem>
    )
    expect(screen.queryByText("Inbox")).not.toBeInTheDocument()

    rerender(
      <SideNavigationItem label="Messages" open>
        <SideNavigationItem label="Inbox" />
      </SideNavigationItem>
    )
    expect(screen.getByText("Inbox")).toBeInTheDocument()
  })
})
