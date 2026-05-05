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
import { ClustersDataGrid } from "./index"
import { mockClusters, MockClusterResponse } from "../../__mocks__/clusters"

const renderComponent = async (mockPromise: Promise<MockClusterResponse | unknown>) => {
  const rootRoute = createRootRoute({
    component: () => <Outlet />,
  })
  const testRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/admin/clusters/",
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
        <ClustersDataGrid />
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
      initialEntries: ["/admin/clusters/"],
    }),
  })
  return await act(async () => render(<RouterProvider router={router} />))
}

describe("ClustersDataGrid", () => {
  it("should render plugin presets", async () => {
    await renderComponent(new Promise<MockClusterResponse>((resolve) => resolve(mockClusters)))

    // Check for column headers
    expect(screen.getByText("Name")).toBeInTheDocument()
    expect(screen.getByText("Version")).toBeInTheDocument()
    expect(screen.getByText("Cluster Type")).toBeInTheDocument()
    expect(screen.getByText("Region")).toBeInTheDocument()
    expect(screen.getByText("Connectivity")).toBeInTheDocument()
    expect(screen.getByText("Message")).toBeInTheDocument()
    expect(screen.getByText("Support Group")).toBeInTheDocument()

    // Check for data - verify all 5 presets are rendered
    expect(screen.getByText("demo")).toBeInTheDocument()
    expect(screen.getByText("demo-2")).toBeInTheDocument()
    expect(screen.getByText("demo-3")).toBeInTheDocument()
  })

  it("should render the error message while fetching data", async () => {
    await renderComponent(new Promise((_, reject) => reject(new Error("Something went wrong"))))
    // Wait for error to appear
    expect(await screen.findByText("Error: Something went wrong")).toBeInTheDocument()
  })
})
