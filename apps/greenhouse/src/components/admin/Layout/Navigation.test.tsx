/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router"
import { Navigation } from "./Navigation"
import { hasAdminTabBeenVisited, resetAdminTabState } from "../adminTabState"
import { ADMIN_ROUTES } from "../adminRoutes"

const buildRouter = (initialEntry: string) => {
  const rootRoute = createRootRoute({
    component: () => (
      <>
        <Navigation />
        <Outlet />
      </>
    ),
  })

  const pluginPresetsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/admin/plugin-presets",
    component: () => <div>PluginPresets page</div>,
  })

  const clustersRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/admin/clusters",
    component: () => <div>Clusters page</div>,
  })

  const clusterDetailRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/admin/clusters/$clusterName",
    component: () => <div>Cluster detail page</div>,
  })

  const exposedServicesRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/admin/exposed-services",
    component: () => <div>Exposed Services page</div>,
  })

  const routeTree = rootRoute.addChildren([pluginPresetsRoute, clustersRoute, clusterDetailRoute, exposedServicesRoute])

  return createRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: [initialEntry] }),
  })
}

describe("Navigation", () => {
  beforeEach(() => {
    resetAdminTabState()
  })

  it("renders all navigation items", async () => {
    const router = buildRouter("/admin/plugin-presets")
    render(<RouterProvider router={router} />)

    expect(await screen.findByText("Clusters")).toBeInTheDocument()
    expect(screen.getByText("PluginPresets")).toBeInTheDocument()
    expect(screen.getByText("Exposed Services")).toBeInTheDocument()
  })

  it("restores saved search params when switching back to a previously visited tab", async () => {
    const router = buildRouter("/admin/plugin-presets?f_supportGroup=sci-admin&f_pluginPresetDefinition=alerts")
    render(<RouterProvider router={router} />)

    await screen.findByText("PluginPresets page")

    // Navigate to Clusters
    await userEvent.click(screen.getByText("Clusters"))
    await screen.findByText("Clusters page")

    // Navigate back to PluginPresets — should restore the saved search params
    await userEvent.click(screen.getByText("PluginPresets"))
    await screen.findByText("PluginPresets page")

    await waitFor(() => {
      expect(router.state.location.search).toMatchObject({
        f_supportGroup: "sci-admin",
        f_pluginPresetDefinition: "alerts",
      })
    })
  })

  it("does not bleed search params from one tab into another", async () => {
    const router = buildRouter("/admin/plugin-presets?f_supportGroup=sci-admin&f_pluginPresetDefinition=alerts")
    render(<RouterProvider router={router} />)

    await screen.findByText("PluginPresets page")

    // Navigate to Clusters — should not carry over PluginPresets filters
    await userEvent.click(screen.getByText("Clusters"))
    await screen.findByText("Clusters page")

    await waitFor(() => {
      expect(router.state.location.search).not.toHaveProperty("f_pluginPresetDefinition")
    })
  })

  it("persists visitedPages state across component remounts", async () => {
    const router = buildRouter("/admin/plugin-presets?f_supportGroup=sci-admin&f_pluginPresetDefinition=alerts")
    const { unmount } = render(<RouterProvider router={router} />)

    await screen.findByText("PluginPresets page")

    // Navigate to Clusters to trigger saving of PluginPresets state into visitedPages
    await userEvent.click(screen.getByText("Clusters"))
    await screen.findByText("Clusters page")

    // Simulate Navigation unmounting and remounting (as happens when leaving admin section)
    unmount()
    render(<RouterProvider router={router} />)
    await screen.findByText("Clusters page")

    // Navigate back to PluginPresets — visitedPages survives unmount, so filters are restored
    await userEvent.click(screen.getByText("PluginPresets"))
    await screen.findByText("PluginPresets page")

    await waitFor(() => {
      expect(router.state.location.search).toMatchObject({
        f_supportGroup: "sci-admin",
        f_pluginPresetDefinition: "alerts",
      })
    })
  })

  it("does not mark a tab as visited when navigating away from a detail route", async () => {
    // Start on a cluster detail page — the list's beforeLoad has never run
    const router = buildRouter("/admin/clusters/my-cluster")
    render(<RouterProvider router={router} />)

    await screen.findByText("Cluster detail page")

    // Switch to another tab — this must NOT mark clusters as visited
    await userEvent.click(screen.getByText("PluginPresets"))
    await screen.findByText("PluginPresets page")

    expect(hasAdminTabBeenVisited(ADMIN_ROUTES.CLUSTERS)).toBe(false)
  })
})
