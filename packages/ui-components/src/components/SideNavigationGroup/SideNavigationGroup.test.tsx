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
})
