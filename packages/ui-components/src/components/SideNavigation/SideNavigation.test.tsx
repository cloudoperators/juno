/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { SideNavigation } from "./SideNavigation.component"
import { SideNavigationItem } from "../SideNavigationItem"

describe("SideNavigation", () => {
  it("renders correctly without children", () => {
    render(<SideNavigation ariaLabel="Test Navigation" />)
    const navigationElement = screen.getByRole("navigation")
    expect(navigationElement).toBeInTheDocument()
  })

  it("renders children correctly", () => {
    render(
      <SideNavigation ariaLabel="Test Navigation">
        <SideNavigationItem label="Home" />
        <SideNavigationItem label="Messages" />
      </SideNavigation>
    )

    expect(screen.getByText("Home")).toBeInTheDocument()
    expect(screen.getByText("Messages")).toBeInTheDocument()
  })

  it("applies provided className", () => {
    render(
      <SideNavigation ariaLabel="Test Navigation" className="custom-class">
        <SideNavigationItem label="Home" />
      </SideNavigation>
    )

    const navigationElement = screen.getByRole("navigation")
    expect(navigationElement).toHaveClass("custom-class")
  })

  it("calls onActiveItemChange when item is clicked", () => {
    const handleActiveItemChange = vi.fn((_activeItem: ReactNode): void => {})

    render(
      <SideNavigation ariaLabel="Test Navigation" onActiveItemChange={handleActiveItemChange}>
        <SideNavigationItem label="Item 1" onClick={() => handleActiveItemChange("Item 1")} />
        <SideNavigationItem label="Item 2" onClick={() => handleActiveItemChange("Item 2")} />
      </SideNavigation>
    )

    const item1 = screen.getByText("Item 1")
    fireEvent.click(item1)
    expect(handleActiveItemChange).toHaveBeenCalledWith("Item 1")

    const item2 = screen.getByText("Item 2")
    fireEvent.click(item2)
    expect(handleActiveItemChange).toHaveBeenCalledWith("Item 2")
  })

  it("does not call onActiveItemChange if navigation is disabled", () => {
    const handleActiveItemChange = vi.fn()

    render(
      <SideNavigation ariaLabel="Test Navigation" disabled onActiveItemChange={handleActiveItemChange}>
        <SideNavigationItem label="Item 1" />
      </SideNavigation>
    )

    const item = screen.getByText("Item 1")
    fireEvent.click(item)
    expect(handleActiveItemChange).not.toHaveBeenCalled()
  })

  it("renders with correct aria-label", () => {
    const ariaLabel = "Custom Navigation Label"
    render(
      <SideNavigation ariaLabel={ariaLabel}>
        <SideNavigationItem label="Home" />
      </SideNavigation>
    )

    const navigationElement = screen.getByRole("navigation")
    expect(navigationElement).toHaveAttribute("aria-label", ariaLabel)
  })
})
