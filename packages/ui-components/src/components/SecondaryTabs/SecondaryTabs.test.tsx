/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test, vi } from "vitest"
import { SecondaryTabs } from "./SecondaryTabs.component"
import { SecondaryTab } from "../SecondaryTab/SecondaryTab.component"
import { SecondaryTabPanel } from "../SecondaryTabPanel/SecondaryTabPanel.component"

const renderTabs = (props = {}) =>
  render(
    <SecondaryTabs defaultTab="a" {...props}>
      <SecondaryTab value="a">Tab A</SecondaryTab>
      <SecondaryTab value="b">Tab B</SecondaryTab>
      <SecondaryTab value="c" disabled>
        Tab C
      </SecondaryTab>
      <SecondaryTabPanel value="a">Panel A</SecondaryTabPanel>
      <SecondaryTabPanel value="b">Panel B</SecondaryTabPanel>
    </SecondaryTabs>
  )

describe("SecondaryTabs", () => {
  describe("Basic Rendering", () => {
    test("renders a tablist", () => {
      renderTabs()
      expect(screen.getByRole("tablist")).toBeInTheDocument()
    })

    test("renders juno-secondary-tabs class on tablist", () => {
      renderTabs()
      expect(screen.getByRole("tablist")).toHaveClass("juno-secondary-tabs")
    })

    test("renders all tabs", () => {
      renderTabs()
      expect(screen.getAllByRole("tab")).toHaveLength(3)
    })

    test("renders tabpanels", () => {
      renderTabs()
      expect(screen.getAllByRole("tabpanel", { hidden: true })).toHaveLength(2)
    })

    test("applies custom className", () => {
      renderTabs({ className: "my-class" })
      expect(screen.getByRole("tablist")).toHaveClass("my-class")
    })

    test("forwards additional props", () => {
      renderTabs({ "data-custom": "test" })
      expect(screen.getByRole("tablist")).toHaveAttribute("data-custom", "test")
    })
  })

  describe("Uncontrolled mode", () => {
    test("activates defaultTab on mount", () => {
      renderTabs()
      expect(screen.getByRole("tab", { name: "Tab A" })).toHaveAttribute("aria-selected", "true")
      expect(screen.getByRole("tab", { name: "Tab B" })).toHaveAttribute("aria-selected", "false")
    })

    test("switches tab on click", async () => {
      renderTabs()
      await userEvent.click(screen.getByRole("tab", { name: "Tab B" }))
      expect(screen.getByRole("tab", { name: "Tab B" })).toHaveAttribute("aria-selected", "true")
      expect(screen.getByRole("tab", { name: "Tab A" })).toHaveAttribute("aria-selected", "false")
    })

    test("shows the active panel", () => {
      renderTabs()
      expect(screen.getByText("Panel A")).toBeVisible()
      expect(screen.getByText("Panel B")).not.toBeVisible()
    })
  })

  describe("Controlled mode", () => {
    test("respects activeTab prop", () => {
      renderTabs({ activeTab: "b", defaultTab: undefined })
      expect(screen.getByRole("tab", { name: "Tab B" })).toHaveAttribute("aria-selected", "true")
    })

    test("calls onTabChange when tab is clicked", async () => {
      const onTabChange = vi.fn()
      renderTabs({ activeTab: "a", onTabChange })
      await userEvent.click(screen.getByRole("tab", { name: "Tab B" }))
      expect(onTabChange).toHaveBeenCalledWith("b")
    })
  })

  describe("Disabled", () => {
    test("disables all tabs when disabled prop is set", () => {
      renderTabs({ disabled: true, defaultTab: undefined })
      screen.getAllByRole("tab").forEach((tab) => {
        expect(tab).toBeDisabled()
      })
    })

    test("does not switch tab when disabled tab is clicked", async () => {
      renderTabs()
      await userEvent.click(screen.getByRole("tab", { name: "Tab C" }))
      expect(screen.getByRole("tab", { name: "Tab A" })).toHaveAttribute("aria-selected", "true")
    })
  })

  describe("Keyboard navigation", () => {
    test("ArrowRight moves focus and activates next tab", async () => {
      renderTabs()
      screen.getByRole("tab", { name: "Tab A" }).focus()
      await userEvent.keyboard("{ArrowRight}")
      expect(screen.getByRole("tab", { name: "Tab B" })).toHaveFocus()
      expect(screen.getByRole("tab", { name: "Tab B" })).toHaveAttribute("aria-selected", "true")
    })

    test("ArrowLeft moves focus and activates previous tab", async () => {
      renderTabs({ defaultTab: "b" })
      screen.getByRole("tab", { name: "Tab B" }).focus()
      await userEvent.keyboard("{ArrowLeft}")
      expect(screen.getByRole("tab", { name: "Tab A" })).toHaveFocus()
      expect(screen.getByRole("tab", { name: "Tab A" })).toHaveAttribute("aria-selected", "true")
    })

    test("ArrowRight wraps from last to first enabled tab", async () => {
      renderTabs({ defaultTab: "b" })
      screen.getByRole("tab", { name: "Tab B" }).focus()
      await userEvent.keyboard("{ArrowRight}")
      expect(screen.getByRole("tab", { name: "Tab A" })).toHaveFocus()
    })

    test("Home moves focus to first enabled tab", async () => {
      renderTabs({ defaultTab: "b" })
      screen.getByRole("tab", { name: "Tab B" }).focus()
      await userEvent.keyboard("{Home}")
      expect(screen.getByRole("tab", { name: "Tab A" })).toHaveFocus()
    })

    test("End moves focus to last enabled tab", async () => {
      renderTabs()
      screen.getByRole("tab", { name: "Tab A" }).focus()
      await userEvent.keyboard("{End}")
      expect(screen.getByRole("tab", { name: "Tab B" })).toHaveFocus()
    })

    test("skips disabled tabs during keyboard navigation", async () => {
      renderTabs({ defaultTab: "b" })
      screen.getByRole("tab", { name: "Tab B" }).focus()
      await userEvent.keyboard("{ArrowRight}")
      // Tab C is disabled — wraps to Tab A
      expect(screen.getByRole("tab", { name: "Tab A" })).toHaveFocus()
    })
  })
})
