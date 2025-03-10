/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Filters, FiltersProps } from "./Filters"

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
  ...render(<Filters filters={filters} filterSettings={filterSettings} onFilterChange={onFilterChange} />),
})

describe("Filters", () => {
  it("should select filter and filter value", async () => {
    const onFilterChangeSpy = vi.fn()
    const { user } = renderShell({ filters, filterSettings, onFilterChange: onFilterChangeSpy })
    // select filter
    await user.click(screen.getByText("Region"))
    // select filter value
    await user.click(screen.getByText("Europe"))
    expect(onFilterChangeSpy).toHaveBeenLastCalledWith(
      expect.objectContaining({
        selectedFilters: [{ name: "region", value: "Europe" }],
        searchTerm: "",
      })
    )
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
})
