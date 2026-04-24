/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { act } from "react"
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router"
import { render, screen } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ExposedServicesDataGrid } from "./index"
import { mockExposedServices, MockPluginsWithExposedServicesResponse } from "../../__mocks__/exposedServices"

const renderComponent = async (mockPromise: Promise<MockPluginsWithExposedServicesResponse | unknown>) => {
  const rootRoute = createRootRoute({
    component: () => <Outlet />,
  })
  const testRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/admin/exposed-services",
    component: () => (
      <QueryClientProvider
        client={
          new QueryClient({
            defaultOptions: {
              queries: {
                retry: false,
              },
            },
          })
        }
      >
        <ExposedServicesDataGrid />
      </QueryClientProvider>
    ),
    loader: () => ({
      filterSettings: {
        selectedFilters: [],
        searchTerm: "",
      },
    }),
  })
  const routeTree = rootRoute.addChildren([testRoute])
  const router = createRouter({
    routeTree: routeTree,
    defaultPendingMinMs: 0,
    context: {
      apiClient: {
        get() {
          return mockPromise
        },
      },
      user: {
        organization: "test-org",
        supportGroups: [],
      },
    },
    history: createMemoryHistory({
      initialEntries: ["/admin/exposed-services"],
    }),
  })
  return await act(async () => render(<RouterProvider router={router} />))
}

describe("ExposedServicesDataGrid", () => {
  it("should render exposed services", async () => {
    await renderComponent(
      new Promise<MockPluginsWithExposedServicesResponse>((resolve) => resolve(mockExposedServices))
    )

    // Check for column headers
    expect(screen.getByText("Name")).toBeInTheDocument()
    expect(screen.getByText("Cluster")).toBeInTheDocument()
    expect(screen.getByText("Plugin")).toBeInTheDocument()
    expect(screen.getByText("Support Group")).toBeInTheDocument()

    // Verify service texts are in the document
    expect(screen.getByText("service1")).toBeInTheDocument()
    expect(screen.getByText("service2")).toBeInTheDocument()
    expect(screen.getByText("service3")).toBeInTheDocument()

    // Verify service links with correct URLs
    const service1Link = screen.getByRole("link", { name: /service1/i })
    const service2Link = screen.getByRole("link", { name: /service2/i })

    expect(service1Link).toHaveAttribute("href", "https://demo-service1.sci.greenhouse-qa.eu-nl-1.cloud.sap")
    expect(service2Link).toHaveAttribute("href", "https://demo-service2.sci.greenhouse-qa.eu-nl-1.cloud.sap")

    // Ensure no link rendered without URL
    const service3Link = screen.queryByRole("link", { name: /service3/i })
    expect(service3Link).toBeNull()
  })
})
