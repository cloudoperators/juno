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
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { ClusterDetail } from "./index"
import { mockClusters } from "../__mocks__/clusters"

const renderComponent = async (mockPromise: Promise<unknown>) => {
  const rootRoute = createRootRoute({
    component: () => <Outlet />,
  })
  const testRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/admin/clusters/$clusterName",
    component: () => (
      <MessagesProvider>
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
          <ClusterDetail />
        </QueryClientProvider>
      </MessagesProvider>
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
      initialEntries: ["/admin/clusters/cluster-1"],
    }),
  })
  return await act(async () => render(<RouterProvider router={router} />))
}

describe("ClusterDetail", () => {
  it("should render clusters detail with tabs", async () => {
    const mockPreset = mockClusters.items[0]
    await renderComponent(new Promise((resolve) => resolve(mockPreset)))

    expect(screen.getByRole("heading", { name: "cluster-1" })).toBeInTheDocument()
    expect(await screen.findByText("Overview")).toBeInTheDocument()
    expect(screen.getByText("YAML")).toBeInTheDocument()
  })
})
