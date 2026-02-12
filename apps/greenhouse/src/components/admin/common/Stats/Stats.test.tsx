/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { Stats } from "./Stats"

describe("Stats", () => {
  it("should render title and stat cards with static data", () => {
    const mockData = [
      { label: "Total", value: 10, variant: "default" as const },
      { label: "Ready", value: 8, variant: "success" as const },
    ]

    render(<Stats title="Test Statistics" data={mockData} />)

    expect(screen.getByText("Test Statistics")).toBeInTheDocument()
    expect(screen.getByText("Total")).toBeInTheDocument()
    expect(screen.getByText("10")).toBeInTheDocument()
    expect(screen.getByText("Ready")).toBeInTheDocument()
    expect(screen.getByText("8")).toBeInTheDocument()
  })
})
