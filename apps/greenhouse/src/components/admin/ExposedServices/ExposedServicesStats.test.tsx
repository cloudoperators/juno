/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { act } from "react"
import { render, screen } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router"
import { describe, expect, test } from "vitest"
import { ExposedServicesStats } from "./ExposedServices"
import { mockExposedServices } from "../__mocks__/ExposedServices"

const renderComponent = async (mockPromise: Promise<any>) => {
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
        <ExposedServicesStats />
      </QueryClientProvider>
    ),
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

describe("ExposedServicesStats", () => {
  test("should render stat values", async () => {
    await renderComponent(Promise.resolve(mockExposedServices))
    // Verify all stat labels are rendered
    expect(screen.getByText("Total Presets")).toBeInTheDocument()
    expect(screen.getByText("5")).toBeInTheDocument() // Total Presets
    expect(screen.getByText("Plugin Definitions")).toBeInTheDocument()
    expect(screen.getByText("1")).toBeInTheDocument() // Plugin Definitions
    expect(screen.getByText("Ready Presets")).toBeInTheDocument()
    expect(screen.getByText("3")).toBeInTheDocument() // Ready Presets
    expect(screen.getByText("Failing Presets")).toBeInTheDocument()
    expect(screen.getByText("2")).toBeInTheDocument() // Failing Presets
    expect(screen.getAllByText("of 5").length).toBe(2) // Subtext for Ready and Failing Presets
  })
})
