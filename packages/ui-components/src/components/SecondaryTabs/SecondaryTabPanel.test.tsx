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
      <SecondaryTab value="x">Tab</SecondaryTab>
      <SecondaryTabPanel value="x" {...props}>
        Panel content
      </SecondaryTabPanel>
    </SecondaryTabs>
  )

describe("SecondaryTabPanel", () => {
  describe("Basic Rendering", () => {
    test("renders a tabpanel", () => {
      wrap()
      expect(screen.getByRole("tabpanel")).toBeInTheDocument()
    })

    test("has juno-secondary-tabpanel class", () => {
      wrap()
      expect(screen.getByRole("tabpanel")).toHaveClass("juno-secondary-tabpanel")
    })

    test("has id matching panel id convention", () => {
      wrap()
      expect(screen.getByRole("tabpanel").id).toMatch(/-tabpanel-x$/)
    })

    test("has aria-labelledby linking to its tab", () => {
      wrap()
      const tab = screen.getByRole("tab")
      const panel = screen.getByRole("tabpanel")
      expect(panel.getAttribute("aria-labelledby")).toBe(tab.id)
    })

    test("is visible when its value matches the active tab", () => {
      wrap()
      expect(screen.getByText("Panel content")).toBeVisible()
    })

    test("is hidden when its value does not match the active tab", () => {
      render(
        <SecondaryTabs defaultTab="other">
          <SecondaryTab value="other">Other</SecondaryTab>
          <SecondaryTabPanel value="x">Hidden panel</SecondaryTabPanel>
        </SecondaryTabs>
      )
      expect(screen.getByRole("tabpanel", { hidden: true })).not.toBeVisible()
    })

    test("applies custom className", () => {
      wrap({ className: "my-class" })
      expect(screen.getByRole("tabpanel")).toHaveClass("my-class")
    })

    test("forwards ref to div element", () => {
      const ref = React.createRef<HTMLDivElement>()
      render(
        <SecondaryTabs defaultTab="x">
          <SecondaryTab value="x">Tab</SecondaryTab>
          <SecondaryTabPanel value="x" ref={ref}>
            Content
          </SecondaryTabPanel>
        </SecondaryTabs>
      )
      expect(ref.current).toBe(screen.getByRole("tabpanel"))
    })
  })
})
