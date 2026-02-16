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
import { PluginPresetDetail } from "./index"
import { mockPluginPresets } from "../__mocks__/pluginPresets"

const renderComponent = async (mockPromise: Promise<unknown>) => {
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
        <PluginPresetDetail />
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
      organization: "test-org",
    },
    history: createMemoryHistory({
      initialEntries: ["/admin/plugin-presets/preset-1"],
    }),
  })
  return await act(async () => render(<RouterProvider router={router} />))
}

describe("PluginPresetDetail", () => {
  it("should render plugin preset detail with tabs", async () => {
    const mockPreset = mockPluginPresets.items[0]
    await renderComponent(new Promise((resolve) => resolve(mockPreset)))

    expect(screen.getByRole("heading", { name: "preset-1" })).toBeInTheDocument()
    expect(await screen.findByText("Overview")).toBeInTheDocument()
    expect(screen.getByText("Configuration")).toBeInTheDocument()
    expect(screen.getByText("YAML")).toBeInTheDocument()
  })
})
