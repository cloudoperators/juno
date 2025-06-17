/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, act } from "@testing-library/react"
import { createMemoryHistory, createRootRoute, createRoute, Outlet, RouterProvider } from "@tanstack/react-router"
import { PortalProvider } from "@cloudoperators/juno-ui-components/index"
import { Services } from "./index"
import { Filter, FilterSettings } from "../common/Filters/types"
import { getTestRouter } from "../../mocks/getTestRouter"
import { mockServicesPromise } from "../../mocks/promises"

const mockFilters: Filter[] = [
  {
    displayName: "Support Group",
    filterName: "support_group",
    values: ["containers", "platform", "network"],
  },
  {
    displayName: "Environment",
    filterName: "environment",
    values: ["prod", "dev", "test"],
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
    path: "/services/",
    loader: async () => ({
      servicesPromise: mockServicesPromise,
      filters: mockFilters,
      filterSettings: mockFilterSettings,
    }),
    component: () => (
      <PortalProvider>
        <Services />
      </PortalProvider>
    ),
  })
  const routeTree = rootRoute.addChildren([testRoute])
  const router = getTestRouter({
    routeTree,
    history: createMemoryHistory({
      initialEntries: ["/services/"],
    }),
  })

  return {
    ...render(<RouterProvider router={router} />),
    router,
  }
}

describe("Services", () => {
  it("should render correctly", async () => {
    await act(async () => renderComponent())
    expect(screen.getByText("alpha")).toBeInTheDocument()
  })
})
