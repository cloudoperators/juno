/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// This entire file can be removed when TabNavigation is removed.

import React from "react"
import { render, screen, cleanup } from "@testing-library/react"
import { TabNavigation } from "./TabNavigation.deprecated"

describe("TabNavigation (deprecated backwards-compat classes)", () => {
  afterEach(() => {
    cleanup()
  })

  test("renders with the deprecated juno-tabnavigation class", () => {
    render(<TabNavigation />)
    expect(screen.getByRole("navigation")).toHaveClass("juno-tabnavigation")
  })

  test("renders with juno-tabnavigation-main class by default", () => {
    render(<TabNavigation />)
    expect(screen.getByRole("navigation")).toHaveClass("juno-tabnavigation-main")
  })

  test("renders with juno-tabnavigation-content class when appearance is content", () => {
    render(<TabNavigation appearance="content" />)
    expect(screen.getByRole("navigation")).toHaveClass("juno-tabnavigation-content")
  })

  test("renders with juno-tabnavigation-content class when tabStyle is content", () => {
    render(<TabNavigation tabStyle="content" />)
    expect(screen.getByRole("navigation")).toHaveClass("juno-tabnavigation-content")
  })

  test("renders a custom className alongside the deprecated classes", () => {
    render(<TabNavigation className="my-custom-class" />)
    expect(screen.getByRole("navigation")).toHaveClass("juno-tabnavigation")
    expect(screen.getByRole("navigation")).toHaveClass("my-custom-class")
  })

  test("emits a deprecation warning", () => {
    const warnSpy = vi.spyOn(console, "warn")
    render(<TabNavigation />)
    expect(warnSpy).toHaveBeenCalled()
    warnSpy.mockRestore()
  })
})
