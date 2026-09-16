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

const renderComponent = async (
  mockPromise: Promise<MockClusterResponse | unknown>,
  initialPath = "/admin/clusters/"
) => {
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
      initialEntries: [initialPath],
    }),
  })
  return await act(async () => render(<RouterProvider router={router} />))
}

describe("ClustersDataGrid", () => {
  it("should render PluginPresets", async () => {
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
    // "demo" appears in both the Name and Cluster Type cells for the first cluster
    expect(screen.getAllByText("demo")).toHaveLength(2)
    expect(screen.getByText("demo-2")).toBeInTheDocument()
    expect(screen.getByText("demo-3")).toBeInTheDocument()
  })

  it("should filter clusters by cluster type", async () => {
    await renderComponent(
      new Promise<MockClusterResponse>((resolve) => resolve(mockClusters)),
      "/admin/clusters/?f_cluster-type=demo"
    )

    // Only the cluster with cluster-type label "demo" should be visible
    expect(screen.getAllByText("demo")).toHaveLength(2) // name cell + cluster type cell
    expect(screen.queryByText("demo-2")).not.toBeInTheDocument()
    expect(screen.queryByText("demo-3")).not.toBeInTheDocument()
  })

  it("should render the error message while fetching data", async () => {
    await renderComponent(new Promise((_, reject) => reject(new Error("Something went wrong"))))
    // Wait for error to appear
    expect(await screen.findByText("Error: Something went wrong")).toBeInTheDocument()
  })
})
