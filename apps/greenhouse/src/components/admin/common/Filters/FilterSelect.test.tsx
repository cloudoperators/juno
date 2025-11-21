/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { AppShellProvider } from "@cloudoperators/juno-ui-components/index"
import { FilterSelect } from "./FilterSelect"
import { Filter } from "./types"

const mockFiltersPromise = Promise.resolve([
  {
    id: "category",
    label: "Category",
    values: ["Finance", "Health", "Education"],
  },
  {
    id: "status",
    label: "Status",
    values: ["Active", "Inactive", "Pending"],
  },
  {
    id: "region",
    label: "Region",
    values: ["America", "Europe", "Asia"],
  },
] satisfies Filter[])

const mockOnChange = vi.fn()

describe("FiltersSelect", () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it.skip("should render the component with filter select dropdown", async () => {
    render(
      <AppShellProvider shadowRoot={false}>
        <FilterSelect filtersPromise={mockFiltersPromise} onChange={mockOnChange} />
      </AppShellProvider>
    )

    const filterSelect = await screen.findByTestId("select-filterValue")
    expect(filterSelect).toBeInTheDocument()

    const valueComboBox = await screen.findByTestId("combobox-filterValue")
    expect(valueComboBox).toBeInTheDocument()
  })

  it.skip("displays all filter options in the select dropdown", async () => {
    render(
      <AppShellProvider shadowRoot={false}>
        <FilterSelect filtersPromise={mockFiltersPromise} onChange={mockOnChange} />
      </AppShellProvider>
    )

    expect(await screen.findByTestId("category")).toBeInTheDocument()
    expect(await screen.findByTestId("status")).toBeInTheDocument()
    expect(await screen.findByTestId("region")).toBeInTheDocument()
  })

  it.skip("should show values in combobox when filter is selected", async () => {
    const user = userEvent.setup({ delay: 0 })
    render(
      <AppShellProvider shadowRoot={false}>
        <FilterSelect filtersPromise={mockFiltersPromise} onChange={mockOnChange} />
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
