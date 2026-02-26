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
import { PluginInstances } from "./PluginInstances"
import { mockPlugins, MockPluginsResponse } from "../../__mocks__/plugins"

const renderComponent = async (mockPromise: Promise<MockPluginsResponse | unknown>) => {
  const rootRoute = createRootRoute({
    component: () => <Outlet />,
  })
  const testRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/admin/plugin-presets/$pluginPresetName",
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
        <PluginInstances />
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
      initialEntries: ["/admin/plugin-presets/test-preset"],
    }),
  })
  return await act(async () => render(<RouterProvider router={router} />))
}

describe("PluginInstances", () => {
  it("should render plugin instances table", async () => {
    await renderComponent(new Promise<MockPluginsResponse>((resolve) => resolve(mockPlugins)))

    expect(screen.getByText("Plugin Instances")).toBeInTheDocument()
    expect(screen.getByText("Plugin Name")).toBeInTheDocument()
    expect(screen.getByText("Cluster")).toBeInTheDocument()
    expect(screen.getByText("Status")).toBeInTheDocument()
    expect(screen.getByText("plugin-1")).toBeInTheDocument()
    expect(screen.getByText("plugin-2")).toBeInTheDocument()
  })
})
