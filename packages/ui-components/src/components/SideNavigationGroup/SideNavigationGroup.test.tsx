/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, cleanup, fireEvent } from "@testing-library/react"
import { SideNavigationGroup } from "./SideNavigationGroup.component"
import { SideNavigationItem } from "../SideNavigationItem"

describe("SideNavigationGroup", () => {
  afterEach(() => {
    cleanup()
  })

  test("renders the SideNavigationGroup with a label", () => {
    render(<SideNavigationGroup label="Group Label" />)
    expect(screen.getByText("Group Label")).toBeInTheDocument()
  })

  test("renders children when the group is open", () => {
    render(
      <SideNavigationGroup label="Open Group" open>
        <SideNavigationItem label="Child Item 1" />
        <SideNavigationItem label="Child Item 2" />
      </SideNavigationGroup>
    )

    expect(screen.getByText("Child Item 1")).toBeInTheDocument()
    expect(screen.getByText("Child Item 2")).toBeInTheDocument()
  })

  test("does not render children when the group is closed", () => {
    render(
      <SideNavigationGroup label="Closed Group">
        <SideNavigationItem label="Child Item 1" />
        <SideNavigationItem label="Child Item 2" />
      </SideNavigationGroup>
    )

    expect(screen.queryByText("Child Item 1")).not.toBeInTheDocument()
    expect(screen.queryByText("Child Item 2")).not.toBeInTheDocument()
  })

  test("toggles open state when expand button is clicked", () => {
    render(
      <SideNavigationGroup label="Toggle Group">
        <SideNavigationItem label="Child Item 1" />
        <SideNavigationItem label="Child Item 2" />
      </SideNavigationGroup>
    )

    const expandButton = screen.getByRole("button")
    fireEvent.click(expandButton)

    expect(screen.getByText("Child Item 1")).toBeInTheDocument()
    expect(screen.getByText("Child Item 2")).toBeInTheDocument()

    fireEvent.click(expandButton)

    expect(screen.queryByText("Child Item 1")).not.toBeInTheDocument()
    expect(screen.queryByText("Child Item 2")).not.toBeInTheDocument()
  })

  test("renders the group as a button with aria-expanded when it has children", () => {
    render(
      <SideNavigationGroup label="Group with children">
        <SideNavigationItem label="Child Item" />
      </SideNavigationGroup>
    )

    const group = screen.getByRole("button", { name: /Group with children/ })
    expect(group.tagName).toBe("BUTTON")
    expect(group).toHaveAttribute("aria-expanded", "false")
  })

  test("renders the group as a non-button element when it has no children", () => {
    render(<SideNavigationGroup label="Childless Group" />)

    expect(screen.queryByRole("button")).not.toBeInTheDocument()
    expect(screen.getByText("Childless Group")).toBeInTheDocument()
  })

  test("sets a title attribute on the group when label is a string", () => {
    render(
      <SideNavigationGroup label="A very long group label that may overflow">
        <SideNavigationItem label="Child Item" />
      </SideNavigationGroup>
    )

    const group = screen.getByRole("button")
    expect(group).toHaveAttribute("title", "A very long group label that may overflow")
  })

  test("does not set a title attribute when label is a ReactNode", () => {
    render(
      <SideNavigationGroup label={<span>Node label</span>}>
        <SideNavigationItem label="Child Item" />
      </SideNavigationGroup>
    )

    const group = screen.getByRole("button")
    expect(group).not.toHaveAttribute("title")
  })

  test("does not apply a level-* class to the group label", () => {
    render(
      <SideNavigationGroup label="Top" open>
        <SideNavigationItem label="Leaf" />
      </SideNavigationGroup>
    )

    const label = screen.getByText("Top")
    expect(label.className).not.toMatch(/\blevel-\d+\b/)
  })

  test("does not increment the level for its children (groups are top-level only)", () => {
    render(
      <SideNavigationGroup label="Outer" open>
        <SideNavigationItem label="Leaf" />
      </SideNavigationGroup>
    )

    expect(screen.getByText("Leaf")).toHaveClass("level-1")
  })

  test("renders as a <li> so it is a valid direct child of a <ul>", () => {
    const { container } = render(<SideNavigationGroup label="Group" />)
    const root = container.firstElementChild
    expect(root?.tagName).toBe("LI")
  })

  test("wraps expanded children in a nested <ul> with only <li> direct children", () => {
    const { container } = render(
      <SideNavigationGroup label="Group" open>
        <SideNavigationItem label="Child A" />
        <SideNavigationItem label="Child B" />
      </SideNavigationGroup>
    )

    const nestedUls = container.querySelectorAll("ul")
    expect(nestedUls.length).toBe(1)
    for (const ul of nestedUls) {
      for (const child of Array.from(ul.children)) {
        expect(child.tagName).toBe("LI")
      }
    }
  })

  test("does not render a nested <ul> when the group has no children", () => {
    const { container } = render(<SideNavigationGroup label="Childless Group" open />)
    expect(container.querySelector("ul")).toBeNull()
  })

  test("fires onToggle with true on first click of a closed group", () => {
    const onToggle = vi.fn()
    render(
      <SideNavigationGroup label="Group" onToggle={onToggle}>
        <SideNavigationItem label="Child Item" />
      </SideNavigationGroup>
    )

    fireEvent.click(screen.getByRole("button"))
    expect(onToggle).toHaveBeenCalledTimes(1)
    expect(onToggle).toHaveBeenCalledWith(true)
  })

  test("fires onToggle with false when clicked while open", () => {
    const onToggle = vi.fn()
    render(
      <SideNavigationGroup label="Group" open onToggle={onToggle}>
        <SideNavigationItem label="Child Item" />
      </SideNavigationGroup>
    )

    fireEvent.click(screen.getByRole("button", { name: /Group/ }))
    expect(onToggle).toHaveBeenCalledWith(false)
  })

  test("toggles internal state when onToggle is omitted", () => {
    render(
      <SideNavigationGroup label="Group">
        <SideNavigationItem label="Child Item" />
      </SideNavigationGroup>
    )

    fireEvent.click(screen.getByRole("button"))
    expect(screen.getByText("Child Item")).toBeInTheDocument()
  })

  test("re-syncs internal state when the open prop changes", () => {
    const { rerender } = render(
      <SideNavigationGroup label="Group">
        <SideNavigationItem label="Child Item" />
      </SideNavigationGroup>
    )
    expect(screen.queryByText("Child Item")).not.toBeInTheDocument()

    rerender(
      <SideNavigationGroup label="Group" open>
        <SideNavigationItem label="Child Item" />
      </SideNavigationGroup>
    )
    expect(screen.getByText("Child Item")).toBeInTheDocument()
  })
})
