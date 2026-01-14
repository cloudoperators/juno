/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { SeverityCount } from "./SeverityCount"

describe("SeverityCount", () => {
  it("renders with count and shows icon", () => {
    render(<SeverityCount severity="critical" count={5} tooltipContent="Critical Issues" />)

    // Check if the count is rendered
    const count = screen.getByText("5")
    expect(count).toBeInTheDocument()
    // Check if icon is rendered
    const icon = screen.getByRole("img")
    expect(icon).toBeInTheDocument()
  })

  it("renders with zero count and shows icon with dash", () => {
    render(<SeverityCount severity="critical" count={0} tooltipContent="Critical Issues" />)

    // Check if dash is rendered
    const dash = screen.getByText("—")
    expect(dash).toBeInTheDocument()
    // Check if icon is also rendered
    const icon = screen.getByRole("img")
    expect(icon).toBeInTheDocument()
  })

  it("renders with positive count", () => {
    render(<SeverityCount severity="high" count={3} tooltipContent="High Issues" />)

    // Check if the count is rendered
    const count = screen.getByText("3")
    expect(count).toBeInTheDocument()
    // Check if icon is rendered
    const icon = screen.getByRole("img")
    expect(icon).toBeInTheDocument()
  })

  it("maps severity to correct icon and color", () => {
    const { rerender } = render(<SeverityCount severity="critical" count={1} tooltipContent="Test" />)
    let icon = screen.getByRole("img")
    expect(icon).toHaveClass("juno-icon-severityCritical")

    rerender(<SeverityCount severity="medium" count={1} tooltipContent="Test" />)
    icon = screen.getByRole("img")
    expect(icon).toHaveClass("juno-icon-severityMedium")
  })
})
