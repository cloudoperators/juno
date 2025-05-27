/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { cleanup, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Filters, FiltersProps } from "./index"
import { AppShellProvider } from "@cloudoperators/juno-ui-components/index"

const filters = [
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
    values: ["North America", "Europe", "Asia"],
  },
]

const filterSettings = {
  selectedFilters: [],
  searchTerm: "",
}

const renderShell = ({ filters, filterSettings, onFilterChange }: FiltersProps) => ({
  user: userEvent.setup(),
  ...render(
    <AppShellProvider shadowRoot={false}>
      <Filters filters={filters} filterSettings={filterSettings} onFilterChange={onFilterChange} />
    </AppShellProvider>
  ),
})

describe("Filters", () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it("renders the component with search, select and combobox", () => {
    renderShell({ filters, filterSettings, onFilterChange: vi.fn() })
    expect(screen.getByTestId("select-filterValue")).toBeInTheDocument()
    expect(screen.getByTestId("combobox-filterValue")).toBeInTheDocument()
    expect(screen.getByTestId("searchbar")).toBeInTheDocument()
  })

  it("should allow filtering by text", async () => {
    const onFilterChangeSpy = vi.fn()
    const { user } = renderShell({ filters, filterSettings, onFilterChange: onFilterChangeSpy })
    await user.type(screen.getByRole("searchbox"), "Europe")
    await user.click(screen.getByRole("button", { name: "Search" }))
    expect(onFilterChangeSpy).toHaveBeenLastCalledWith(
      expect.objectContaining({
        selectedFilters: [],
        searchTerm: "Europe",
      })
    )
  })

  it("should select filter and filter value", async () => {
    const onFilterChangeSpy = vi.fn()
    const { user } = renderShell({ filters, filterSettings, onFilterChange: onFilterChangeSpy })

    const filterSelect = screen.getByTestId("select-filterValue")
    await user.click(filterSelect)
    await user.click(screen.getByTestId("region"))

    const valueComboBox = screen.getByTestId("combobox-filterValue").getElementsByClassName("juno-combobox-toggle")[0]
    await user.click(valueComboBox)

    expect(screen.getByTestId("Europe")).toBeInTheDocument()
    await user.click(screen.getByTestId("Europe"))

    expect(onFilterChangeSpy).toHaveBeenLastCalledWith(
      expect.objectContaining({
        selectedFilters: [{ name: "region", value: "Europe" }],
        searchTerm: "",
      })
    )
  })
})
