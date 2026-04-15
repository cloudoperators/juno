/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { PortalProvider } from "@cloudoperators/juno-ui-components"
import FilterSelect from "./FilterSelect"

// 101 services sorted alphabetically — "limes" lands at index 100, cut off by the old .slice(0, 100)
const SERVICES_WITH_ENTRY_BEYOND_100 = [
  ...Array.from({ length: 100 }, (_, i) => `a-service-${String(i).padStart(2, "0")}`),
  "z-service-beyond-100",
]

// floating-ui's autoUpdate uses ResizeObserver which jsdom doesn't implement
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

vi.mock("@tanstack/react-router", () => ({
  useNavigate: () => vi.fn(),
}))

vi.mock("../StoreProvider", () => ({
  useFilterLabels: () => ["service"],
  useFilterLabelValues: () => ({
    service: { isLoading: false, values: SERVICES_WITH_ENTRY_BEYOND_100 },
  }),
  useFilterActions: () => ({
    addActiveFilter: vi.fn(),
    loadFilterLabelValues: vi.fn(),
    clearFilters: vi.fn(),
    setSearchTerm: vi.fn(),
  }),
  useActiveFilters: () => ({}),
  useSearchTerm: () => "",
}))

describe("FilterSelect", () => {
  describe("combobox search filtering", () => {
    it("shows a service beyond position 100 when user types its name", async () => {
      const user = userEvent.setup()
      render(
        <PortalProvider>
          <FilterSelect />
        </PortalProvider>
      )

      // Open the filter label Select and choose "service"
      // The button's accessible name is "Filter Filter" — both aria-label and ListboxLabel contribute
      await user.click(screen.getByRole("button", { name: "Filter Filter" }))
      await user.click(within(document.body).getByRole("option", { name: "Service" }))

      // Open the ComboBox dropdown
      const comboBoxInput = screen.getByPlaceholderText("Select…")
      await user.click(comboBoxInput)

      // Without a search query, "z-service-beyond-100" is beyond position 100 and not in the dropdown
      expect(within(document.body).queryByRole("option", { name: "z-service-beyond-100" })).not.toBeInTheDocument()

      // Typing "z-service-beyond-100" pre-filters before the slice, so it now passes through
      await user.type(comboBoxInput, "z-service-beyond-100")
      expect(within(document.body).getByRole("option", { name: "z-service-beyond-100" })).toBeInTheDocument()
    })
  })
})
