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

  it("should render the component with filter select dropdown", async () => {
    render(
      <AppShellProvider shadowRoot={false}>
        <FilterSelect filters={mockFilters} onChange={mockOnChange} />
      </AppShellProvider>
    )

    const filterSelect = await screen.findByTestId("select-filterValue")
    expect(filterSelect).toBeInTheDocument()

    const valueComboBox = await screen.findByTestId("combobox-filterValue")
    expect(valueComboBox).toBeInTheDocument()
  })

  it("displays all filter options in the select dropdown", async () => {
    render(
      <AppShellProvider shadowRoot={false}>
        <FilterSelect filters={mockFilters} onChange={mockOnChange} />
      </AppShellProvider>
    )

    expect(await screen.findByTestId("category")).toBeInTheDocument()
    expect(await screen.findByTestId("status")).toBeInTheDocument()
    expect(await screen.findByTestId("region")).toBeInTheDocument()
  })

  it("should show values in combobox when filter is selected", async () => {
    const user = userEvent.setup({ delay: 0 })
    render(
      <AppShellProvider shadowRoot={false}>
        <FilterSelect filters={mockFilters} onChange={mockOnChange} />
      </AppShellProvider>
    )

    const filterSelect = await screen.findByTestId("select-filterValue")
    await user.click(filterSelect)
    await user.click(await screen.findByTestId("region"))

    const valueComboBox = await screen.findByTestId("combobox-filterValue")
    await user.click(valueComboBox.getElementsByClassName("juno-combobox-toggle")[0])

    expect(await screen.findByTestId("Asia")).toBeInTheDocument()
    expect(await screen.findByTestId("America")).toBeInTheDocument()
    expect(await screen.findByTestId("Europe")).toBeInTheDocument()
  })
})
