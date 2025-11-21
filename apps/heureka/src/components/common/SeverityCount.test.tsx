/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { SeverityCount } from "./SeverityCount"

describe("SeverityCount", () => {
  it("renders with count and shows icon", () => {
    render(
      <SeverityCount
        showDashIfZero
        icon="severityCritical"
        count={5}
        color="text-theme-severity-critical"
        tooltipContent="Critical Issues"
      />
    )

    // Check if the count is rendered
    const count = screen.getByText("5")
    expect(count).toBeInTheDocument()
  })

  it("renders without count and shows dash in single mode", () => {
    render(
      <SeverityCount
        showDashIfZero
        icon="severityCritical"
        count={0}
        color="text-theme-severity-critical"
        tooltipContent="Critical Issues"
      />
    )

    // Check if dash is rendered instead of icon and count
    const dash = screen.getByText("—")
    expect(dash).toBeInTheDocument()
  })

  it("renders with zero count and shows '0' in all mode", () => {
    render(<SeverityCount icon="severityCritical" count={0} color="text-theme-severity-critical" tooltipContent="Critical Issues" />)

    // Check if the count "0" is rendered
    const count = screen.getByText("0")
    expect(count).toBeInTheDocument()
  })

  it("renders with positive count in all mode", () => {
    render(<SeverityCount icon="severityCritical" count={3} color="text-theme-severity-critical" tooltipContent="Critical Issues" />)

    // Check if the count is rendered
    const count = screen.getByText("3")
    expect(count).toBeInTheDocument()
  })
})
