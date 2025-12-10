/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, cleanup } from "@testing-library/react"
import { SideNavigationList } from "./SideNavigationList.component"
import { SideNavigationItem } from "../SideNavigationItem"

describe("SideNavigationList", () => {
  afterEach(() => {
    cleanup()
  })

  test("renders a SideNavigationList component", () => {
    render(
      <SideNavigationList>
        <SideNavigationItem label="Item 1" />
      </SideNavigationList>
    )

    const list = screen.getByRole("list")
    expect(list).toBeInTheDocument()
    expect(list).toHaveClass("list-none")
    expect(list).toHaveClass("p-0")
    expect(list).toHaveClass("m-0")
    expect(list).toHaveClass("jn:bg-theme-sidenav-list")
    expect(list).toHaveClass("jn:space-y-[0.25rem]")
  })

  test("renders children within the SideNavigationList", () => {
    render(
      <SideNavigationList>
        <SideNavigationItem label="Item 1" />
        <SideNavigationItem label="Item 2" />
      </SideNavigationList>
    )

    const item1 = screen.getByText("Item 1")
    const item2 = screen.getByText("Item 2")

    expect(item1).toBeInTheDocument()
    expect(item1).toHaveClass("level-1")

    expect(item2).toBeInTheDocument()
    expect(item2).toHaveClass("level-1")
  })
})
