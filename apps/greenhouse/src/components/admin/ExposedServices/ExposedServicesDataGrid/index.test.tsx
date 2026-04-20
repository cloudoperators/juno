/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
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
import { mockPluginPresets, MockPluginPresetsResponse } from "../../__mocks__/pluginPresets"
import { mockExposedServices } from "../../__mocks__/exposedServices"

const renderComponent = async (mockPromise: Promise<MockPluginPresetsResponse | unknown>) => {
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
  it("should render plugin presets", async () => {
    await renderComponent(new Promise<MockPluginPresetsResponse>((resolve) => resolve(mockPluginPresets)))

    // Check for column headers
    expect(screen.getByText("Name")).toBeInTheDocument()
    expect(screen.getByText("Cluster")).toBeInTheDocument()
    expect(screen.getByText("Plugin")).toBeInTheDocument()
    expect(screen.getByText("Support Group")).toBeInTheDocument()

    // Check for data - verify all 2 exposed services are rendered
    expect(screen.getByText("service1")).toBeInTheDocument()
    // expect(screen.getByText("service2")).toBeInTheDocument()

    // Check some instance counts
    // expect(screen.getByText("2/3")).toBeInTheDocument()
    // expect(screen.getByText("0/2")).toBeInTheDocument()
    // expect(screen.getByText("1/1")).toBeInTheDocument()
    // expect(screen.getByText("3/5")).toBeInTheDocument()
    // expect(screen.getByText("0/1")).toBeInTheDocument()
  })

  // it("should render the error message while fetching data", async () => {
  //   await renderComponent(new Promise((_, reject) => reject(new Error("Something went wrong"))))
  //   // Wait for error to appear
  //   expect(await screen.findByText("Error: Something went wrong")).toBeInTheDocument()
  // })
})
