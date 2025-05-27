/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { FilterSelect } from "./FilterSelect"
import { AppShellProvider } from "@cloudoperators/juno-ui-components/index"

const mockFilters = [
  {
    displayName: "Category",
    filterName: "category",
    values: ["Finance", "Health", "Education"],
  },
  {
    displayName: "Status",
    filterName: "status",
    values: ["Active", "Inactive", "Pending"],
  },
  {
    displayName: "Region",
    filterName: "region",
    values: ["America", "Europe", "Asia"],
  },
]

const mockOnChange = vi.fn()

describe("FiltersSelect", () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it("should render the component with filter select dropdown", () => {
    render(
      <AppShellProvider shadowRoot={false}>
        <FilterSelect filters={mockFilters} onChange={mockOnChange} />
      </AppShellProvider>
    )

    const filterSelect = screen.getByTestId("select-filterValue")
    expect(filterSelect).toBeInTheDocument()

    const valueComboBox = screen.getByTestId("combobox-filterValue")
    expect(valueComboBox).toBeInTheDocument()
  })

  it("displays all filter options in the select dropdown", () => {
    render(
      <AppShellProvider shadowRoot={false}>
        <FilterSelect filters={mockFilters} onChange={mockOnChange} />
      </AppShellProvider>
    )

    expect(screen.getByTestId("category")).toBeInTheDocument()
    expect(screen.getByTestId("status")).toBeInTheDocument()
    expect(screen.getByTestId("region")).toBeInTheDocument()
  })

  it("should show values in combobox when filter is selected", async () => {
    const user = userEvent.setup()
    render(
      <AppShellProvider shadowRoot={false}>
        <FilterSelect filters={mockFilters} onChange={mockOnChange} />
      </AppShellProvider>
    )

    const filterSelect = screen.getByTestId("select-filterValue")
    await user.click(filterSelect)
    await user.click(screen.getByTestId("region"))

    const valueComboBox = screen.getByTestId("combobox-filterValue").getElementsByClassName("juno-combobox-toggle")[0]
    await user.click(valueComboBox)

    expect(screen.getByTestId("Asia")).toBeInTheDocument()
    expect(screen.getByTestId("America")).toBeInTheDocument()
    expect(screen.getByTestId("Europe")).toBeInTheDocument()
  })
})
