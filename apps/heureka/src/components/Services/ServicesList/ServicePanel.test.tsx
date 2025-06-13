/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { act } from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { createMemoryHistory, createRootRoute, createRoute, Outlet, RouterProvider } from "@tanstack/react-router"
import { PortalProvider } from "@cloudoperators/juno-ui-components/index"
import { ServicePanel } from "./ServicePanel"
import { getTestRouter } from "../../../mocks/getTestRouter"
import { mockImageVersionsPromise, mockServicesPromise } from "../../../mocks/promises"
import * as fetchImageVersions from "../../../api/fetchImageVersions"

const renderComponent = () => {
  const rootRoute = createRootRoute({
    component: () => <Outlet />,
  })
  const testRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/services/",
    loader: async () => ({
      servicesPromise: mockServicesPromise,
    }),
    component: () => (
      <PortalProvider>
        <ServicePanel />
      </PortalProvider>
    ),
  })
  const routeTree = rootRoute.addChildren([testRoute])
  const router = getTestRouter({
    routeTree,
    history: createMemoryHistory({
      initialEntries: ["/services?service=alpha"],
    }),
  })

  return {
    ...render(<RouterProvider router={router} />),
    router,
    user: userEvent.setup({ delay: 0 }),
  }
}

describe("ServicePanel", () => {
  beforeEach(() => {
    vitest.spyOn(fetchImageVersions, "fetchImageVersions").mockReturnValue(mockImageVersionsPromise)
  })

  afterEach(() => {
    vitest.clearAllMocks()
  })

  it("should render correctly", async () => {
    await act(() => renderComponent())
    // expect that the panel has correct service name in the heading
    expect(screen.getByText("Alpha Overview")).toBeInTheDocument()
    // expect that the image version is displayed
    expect(await screen.findByText("repo1")).toBeInTheDocument()
  })

  it("should navigate to service details with no image version selected", async () => {
    const { user, router } = await act(() => renderComponent())
    await user.click(screen.getByText("Full Details"))
    expect(router.state.location.href).toBe("/services/alpha")
  })

  it("should navigate to service details page with image version selected", async () => {
    const { user, router } = await act(() => renderComponent())
    await user.click(screen.getAllByText("Show Details")[0])
    expect(router.state.location.href).toBe("/services/alpha?imageVersion=1.0.0")
  })
})
