/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { SeverityCount } from "./SeverityCount"

describe("SeverityCount", () => {
  it("renders with count and shows badge", () => {
    render(
      <SeverityCount displayMode="single" icon="danger" count={5} variant="danger" tooltipContent="Critical Issues" />
    )

    // Check if the badge is rendered with the count
    const badge = screen.getByText("5")
    expect(badge).toBeInTheDocument()
  })

  it("renders without count and shows dash in single mode", () => {
    render(
      <SeverityCount displayMode="single" icon="danger" count={0} variant="danger" tooltipContent="Critical Issues" />
    )

    // Check if dash is rendered instead of a badge
    const dash = screen.getByText("—")
    expect(dash).toBeInTheDocument()
  })

  it("renders with zero count and shows '0' in all mode", () => {
    render(
      <SeverityCount displayMode="all" icon="danger" count={0} variant="danger" tooltipContent="Critical Issues" />
    )

    // Check if the badge is rendered with "0"
    const badge = screen.getByText("0")
    expect(badge).toBeInTheDocument()
  })

  it("renders with positive count in all mode", () => {
    render(
      <SeverityCount displayMode="all" icon="danger" count={3} variant="danger" tooltipContent="Critical Issues" />
    )

    // Check if the badge is rendered with the count
    const badge = screen.getByText("3")
    expect(badge).toBeInTheDocument()
  })
})
