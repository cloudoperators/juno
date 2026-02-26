/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { createMemoryHistory, createRootRoute, createRoute, Outlet, RouterProvider } from "@tanstack/react-router"
import { PortalProvider } from "@cloudoperators/juno-ui-components"
import { RemediationHistoryPanel } from "./index"
import { getTestRouter } from "../../../../../mocks/getTestRouter"

const renderPanel = (vulnerability: string | null = null) => {
  const rootRoute = createRootRoute({
    component: () => <Outlet />,
  })
  const testRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/services/$service",
    component: () => (
      <RemediationHistoryPanel service="my-service" image="my-image" vulnerability={vulnerability} onClose={() => {}} />
    ),
  })
  const routeTree = rootRoute.addChildren([testRoute])
  const router = getTestRouter({
    routeTree,
    history: createMemoryHistory({
      initialEntries: ["/services/my-service"],
    }),
  })
  return render(
    <PortalProvider>
      <RouterProvider router={router} />
    </PortalProvider>
  )
}

describe("RemediationHistoryPanel", () => {
  it("renders without crashing when vulnerability is null (panel closed)", () => {
    renderPanel(null)
    expect(screen.queryByText("Revert False Positive")).not.toBeInTheDocument()
  })
})
