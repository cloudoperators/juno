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
import { PluginPresetsDataGrid } from "./index"
import { mockPluginPresets, MockPluginPresetsResponse } from "../../__mocks__/pluginPresets"

const renderComponent = async (mockPromise: Promise<MockPluginPresetsResponse | unknown>) => {
  const rootRoute = createRootRoute({
    component: () => <Outlet />,
  })
  const testRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/admin/plugin-presets/",
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
        <PluginPresetsDataGrid />
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
      initialEntries: ["/admin/plugin-presets/"],
    }),
  })
  return await act(async () => render(<RouterProvider router={router} />))
}

describe("PluginPresetsDataGrid", () => {
  it("should render plugin presets", async () => {
    await renderComponent(new Promise<MockPluginPresetsResponse>((resolve) => resolve(mockPluginPresets)))

    // Check for column headers
    expect(screen.getByText("Instances")).toBeInTheDocument()
    expect(screen.getByText("Name")).toBeInTheDocument()
    expect(screen.getByText("Plugin Definition")).toBeInTheDocument()
    expect(screen.getByText("Message")).toBeInTheDocument()
    expect(screen.getByText("Actions")).toBeInTheDocument()

    // Check for data - verify all 5 presets are rendered
    expect(screen.getByText("preset-1")).toBeInTheDocument()
    expect(screen.getByText("preset-2")).toBeInTheDocument()
    expect(screen.getByText("preset-3")).toBeInTheDocument()
    expect(screen.getByText("preset-4")).toBeInTheDocument()
    expect(screen.getByText("preset-5")).toBeInTheDocument()

    // Check some instance counts
    expect(screen.getByText("2/3")).toBeInTheDocument()
    expect(screen.getByText("0/2")).toBeInTheDocument()
    expect(screen.getByText("1/1")).toBeInTheDocument()
    expect(screen.getByText("3/5")).toBeInTheDocument()
    expect(screen.getByText("0/1")).toBeInTheDocument()
  })

  it("should render the error message while fetching data", async () => {
    await renderComponent(new Promise((_, reject) => reject(new Error("Something went wrong"))))
    // Wait for error to appear
    expect(await screen.findByText("Error: Something went wrong")).toBeInTheDocument()
  })
})
