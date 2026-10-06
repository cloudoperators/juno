/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// This entire file can be removed when TabNavigationItem is removed.

import React from "react"
import { render, screen, cleanup } from "@testing-library/react"
import { TabNavigation } from "../TabBar/TabNavigation.deprecated"
import { TabNavigationItem } from "./TabNavigationItem.deprecated"

describe("TabNavigationItem (deprecated backwards-compat classes)", () => {
  afterEach(() => {
    cleanup()
  })

  test("renders with the deprecated juno-tabnavigation-item class", () => {
    render(<TabNavigationItem data-testid="item" />)
    expect(screen.getByTestId("item")).toHaveClass("juno-tabnavigation-item")
  })

  test("renders with juno-tabnavigation-main-item class by default", () => {
    render(
      <TabNavigation>
        <TabNavigationItem data-testid="item" />
      </TabNavigation>
    )
    expect(screen.getByTestId("item")).toHaveClass("juno-tabnavigation-main-item")
  })

  test("renders with juno-tabnavigation-content-item class when parent appearance is content", () => {
    render(
      <TabNavigation appearance="content">
        <TabNavigationItem data-testid="item" />
      </TabNavigation>
    )
    expect(screen.getByTestId("item")).toHaveClass("juno-tabnavigation-content-item")
  })

  test("renders a custom className alongside the deprecated classes", () => {
    render(<TabNavigationItem data-testid="item" className="my-custom-class" />)
    expect(screen.getByTestId("item")).toHaveClass("juno-tabnavigation-item")
    expect(screen.getByTestId("item")).toHaveClass("my-custom-class")
  })

  test("emits a deprecation warning", () => {
    const warnSpy = vi.spyOn(console, "warn")
    render(<TabNavigationItem />)
    expect(warnSpy).toHaveBeenCalled()
    warnSpy.mockRestore()
  })
})
