/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, act } from "@testing-library/react"
import { createMemoryHistory, createRootRoute, createRoute, Outlet, RouterProvider } from "@tanstack/react-router"
import { PortalProvider } from "@cloudoperators/juno-ui-components/index"
import { Vulnerabilities } from "./index"
import { Filter, FilterSettings } from "../common/Filters/types"
import { getTestRouter } from "../../mocks/getTestRouter"
import { mockVulnerabilitiesPromise } from "../../mocks/promises"

const mockFilters: Filter[] = [
  {
    displayName: "Support Group",
    filterName: "supportGroup",
    values: ["containers", "platform", "network"],
  },
  {
    displayName: "Severity",
    filterName: "severity",
    values: ["Critical", "High", "Medium", "Low", "None"],
  },
]

const mockFilterSettings: FilterSettings = {
  searchTerm: "",
  selectedFilters: [],
}

const renderComponent = () => {
  const rootRoute = createRootRoute({
    component: () => <Outlet />,
  })
  const testRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/vulnerabilities/",
    loader: async () => ({
      vulnerabilitiesPromise: mockVulnerabilitiesPromise,
      filters: mockFilters,
      filterSettings: mockFilterSettings,
    }),
    component: () => (
      <PortalProvider>
        <Vulnerabilities />
      </PortalProvider>
    ),
  })
  const routeTree = rootRoute.addChildren([testRoute])
  const router = getTestRouter({
    routeTree,
    history: createMemoryHistory({
      initialEntries: ["/vulnerabilities/"],
    }),
  })

  return {
    ...render(<RouterProvider router={router} />),
    router,
  }
}

describe("Vulnerabilities", () => {
  it("should render correctly", async () => {
    await act(async () => renderComponent())
    expect(await screen.findByText("CVE-2024-1234")).toBeInTheDocument()
  })
})
