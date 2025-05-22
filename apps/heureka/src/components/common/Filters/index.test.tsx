/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { cleanup, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Filters, FiltersProps } from "./index"

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

class ResizeObserver {
  observe() {
    // do nothing
    vi.fn()
  }
  unobserve() {
    // do nothing
    vi.fn()
  }
  disconnect() {
    // do nothing
    vi.fn()
  }
}

window.ResizeObserver = ResizeObserver

describe("Filters", () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it("should select filter and filter value", async () => {
    const onFilterChangeSpy = vi.fn()
    const { user } = renderShell({ filters, filterSettings, onFilterChange: onFilterChangeSpy })

    // get filter toggle button
    const filterToggle = screen.getByRole("button", {
      name: /filter filter/i,
    })
    // expand filter select options
    await waitFor(() => user.click(filterToggle))
    // select filter option
    await user.click(screen.getByText("Region"))

    // get filter value toggle button
    const filterValueToggle = screen.getByRole("button", {
      name: /select… expand more/i,
    })
    // expand filter value select options
    await waitFor(() => user.click(filterValueToggle))
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
