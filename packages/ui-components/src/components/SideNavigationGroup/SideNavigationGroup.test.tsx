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

  test("toggles open state when expand icon is clicked", () => {
    render(
      <SideNavigationGroup label="Toggle Group">
        <SideNavigationItem label="Child Item 1" />
        <SideNavigationItem label="Child Item 2" />
      </SideNavigationGroup>
    )

    const expandIcon = screen.getByRole("button")
    fireEvent.click(expandIcon)

    expect(screen.getByText("Child Item 1")).toBeInTheDocument()
    expect(screen.getByText("Child Item 2")).toBeInTheDocument()

    fireEvent.click(expandIcon)

    expect(screen.queryByText("Child Item 1")).not.toBeInTheDocument()
    expect(screen.queryByText("Child Item 2")).not.toBeInTheDocument()
  })

  test("does not toggle open state when disabled", () => {
    render(
      <SideNavigationGroup label="Disabled Group" disabled>
        <SideNavigationItem label="Child Item 1" />
      </SideNavigationGroup>
    )

    const expandIcon = screen.getByRole("button")
    fireEvent.click(expandIcon)

    expect(screen.queryByText("Child Item 1")).not.toBeInTheDocument()
  })

  test("disables interaction and applies disabled styles", () => {
    render(
      <SideNavigationGroup label="Disabled Group" disabled>
        <SideNavigationItem label="Child Item" />
      </SideNavigationGroup>
    )

    const groupContainer = screen.getByText("Disabled Group").closest("div")

    expect(groupContainer).toBeInTheDocument()
    expect(groupContainer).toHaveClass("jn:opacity-50 jn:cursor-not-allowed")
  })
})
