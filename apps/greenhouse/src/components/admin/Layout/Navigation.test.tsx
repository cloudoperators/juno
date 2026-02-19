/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { createMemoryHistory, createRootRoute, createRouter, RouterProvider } from "@tanstack/react-router"
import { Navigation } from "./Navigation"

describe("Navigation", () => {
  it("renders all navigation items", async () => {
    const rootRoute = createRootRoute({
      component: () => <Navigation />,
    })

    const routeTree = rootRoute.addChildren([])

    const router = createRouter({
      routeTree,
      history: createMemoryHistory({
        initialEntries: ["/"],
      }),
    })

    render(<RouterProvider router={router} />)

    // Check that all navigation items are rendered
    expect(await screen.findByText("Clusters")).toBeInTheDocument()
    expect(screen.getByText("Plugin Presets")).toBeInTheDocument()
  })
})
