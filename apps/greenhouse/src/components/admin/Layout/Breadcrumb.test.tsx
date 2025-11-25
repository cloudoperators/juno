/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router"
import { Breadcrumb } from "./Breadcrumb"

describe("Breadcrumb", () => {
  it("renders breadcrumb items from route loader data", async () => {
    const rootRoute = createRootRoute({
      component: () => <Outlet />,
    })

    const adminRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/admin",
      component: () => (
        <div>
          <Breadcrumb />
        </div>
      ),
      loader: () => ({
        crumb: { label: "Admin" },
      }),
    })

    const routeTree = rootRoute.addChildren([adminRoute])
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({
        initialEntries: ["/admin"],
      }),
    })

    render(<RouterProvider router={router} />)

    expect(await screen.findByText("Admin")).toBeInTheDocument()
  })

  it("renders multiple breadcrumb items for nested routes", async () => {
    const rootRoute = createRootRoute({
      component: () => <Outlet />,
    })

    const adminRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/admin",
      component: () => <Outlet />,
      loader: () => ({
        crumb: { label: "Admin" },
      }),
    })

    const clustersRoute = createRoute({
      getParentRoute: () => adminRoute,
      path: "/clusters",
      component: () => (
        <div>
          <Breadcrumb />
        </div>
      ),
      loader: () => ({
        crumb: { label: "Clusters" },
      }),
    })

    const routeTree = rootRoute.addChildren([adminRoute.addChildren([clustersRoute])])
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({
        initialEntries: ["/admin/clusters"],
      }),
    })

    render(<RouterProvider router={router} />)
    expect(await screen.findByText("Admin")).toBeInTheDocument()
    expect(await screen.findByText("Clusters")).toBeInTheDocument()
  })
})
