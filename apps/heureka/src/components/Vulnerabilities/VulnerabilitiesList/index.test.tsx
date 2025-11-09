/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { act } from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { createMemoryHistory, createRootRoute, createRoute, Outlet, RouterProvider } from "@tanstack/react-router"
import { PortalProvider } from "@cloudoperators/juno-ui-components/index"
import { VulnerabilitiesList } from "./index"
import { getTestRouter } from "../../../mocks/getTestRouter"
import { mockVulnerabilitiesPromise } from "../../../mocks/promises"

const renderComponent = () => {
  const rootRoute = createRootRoute({
    component: () => <Outlet />,
  })
  const testRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/vulnerabilities/",
    loader: async () => ({
      vulnerabilitiesPromise: mockVulnerabilitiesPromise,
    }),
    component: () => (
      <PortalProvider>
        <VulnerabilitiesList />
      </PortalProvider>
    ),
  })
  const routeTree = rootRoute.addChildren([testRoute])
  const router = getTestRouter({
    routeTree,
    history: createMemoryHistory({
      initialEntries: ["/vulnerabilities/"],
    }),
  })

  return {
    ...render(<RouterProvider router={router} />),
    router,
    user: userEvent.setup({ delay: 0 }),
  }
}

describe("VulnerabilitiesList", () => {
  it("should render correctly", async () => {
    await act(() => renderComponent())
    expect(await screen.findByText("CVE-2024-1234")).toBeInTheDocument()
  })

  it("should render all vulnerabilities in the list", async () => {
    await act(() => renderComponent())

    // expect both vulnerabilities to be displayed
    expect(await screen.findByText("CVE-2024-1234")).toBeInTheDocument()
    expect(await screen.findByText("CVE-2024-5678")).toBeInTheDocument()
  })
})
