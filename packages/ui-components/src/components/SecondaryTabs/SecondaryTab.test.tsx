/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { SecondaryTabs } from "./SecondaryTabs.component"
import { SecondaryTab } from "./SecondaryTab.component"
import { SecondaryTabPanel } from "./SecondaryTabPanel.component"

const wrap = (props = {}) =>
  render(
    <SecondaryTabs defaultTab="x">
      <SecondaryTab value="x" {...props}>
        Label
      </SecondaryTab>
    </SecondaryTabs>
  )

describe("SecondaryTab", () => {
  describe("Basic Rendering", () => {
    test("renders a tab button", () => {
      wrap()
      expect(screen.getByRole("tab")).toBeInTheDocument()
    })

    test("has juno-secondary-tab class", () => {
      wrap()
      expect(screen.getByRole("tab")).toHaveClass("juno-secondary-tab")
    })

    test("has juno-secondary-tab-active class when active", () => {
      wrap()
      expect(screen.getByRole("tab")).toHaveClass("juno-secondary-tab-active")
    })

    test("has aria-selected true when active", () => {
      wrap()
      expect(screen.getByRole("tab")).toHaveAttribute("aria-selected", "true")
    })

    test("has aria-controls linking to its panel", () => {
      render(
        <SecondaryTabs defaultTab="x">
          <SecondaryTab value="x">Label</SecondaryTab>
          <SecondaryTabPanel value="x">Content</SecondaryTabPanel>
        </SecondaryTabs>
      )
      const tab = screen.getByRole("tab")
      const panel = screen.getByRole("tabpanel")
      expect(tab.getAttribute("aria-controls")).toBe(panel.id)
    })

    test("has id matching tab id convention", () => {
      wrap()
      expect(screen.getByRole("tab").id).toMatch(/-tab-x$/)
    })

    test("applies custom className", () => {
      wrap({ className: "my-class" })
      expect(screen.getByRole("tab")).toHaveClass("my-class")
    })

    test("forwards additional props", () => {
      wrap({ "data-custom": "val" })
      expect(screen.getByRole("tab")).toHaveAttribute("data-custom", "val")
    })

    test("forwards ref to button element", () => {
      const ref = React.createRef<HTMLButtonElement>()
      render(
        <SecondaryTabs defaultTab="x">
          <SecondaryTab value="x" ref={ref}>
            Label
          </SecondaryTab>
        </SecondaryTabs>
      )
      expect(ref.current).toBe(screen.getByRole("tab"))
    })
  })

  describe("Disabled state", () => {
    test("has aria-disabled when disabled prop is passed", () => {
      wrap({ disabled: true })
      expect(screen.getByRole("tab")).toHaveAttribute("aria-disabled", "true")
    })

    test("has tabIndex -1 when disabled", () => {
      wrap({ disabled: true })
      expect(screen.getByRole("tab")).toHaveAttribute("tabindex", "-1")
    })
  })
})
