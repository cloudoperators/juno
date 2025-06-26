/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { act } from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { createMemoryHistory, createRootRoute, createRoute, Outlet, RouterProvider } from "@tanstack/react-router"
import { PortalProvider } from "@cloudoperators/juno-ui-components/index"
import * as fetchImageVersions from "../../../api/fetchImageVersions"
import { ServicesList } from "./index"
import { getTestRouter } from "../../../mocks/getTestRouter"
import { mockImageVersionsPromise, mockServicesPromise } from "../../../mocks/promises"

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
        <ServicesList />
      </PortalProvider>
    ),
  })
  const routeTree = rootRoute.addChildren([testRoute])
  const router = getTestRouter({
    routeTree,
    history: createMemoryHistory({
      initialEntries: ["/services/"],
    }),
  })

  return {
    ...render(<RouterProvider router={router} />),
    router,
    user: userEvent.setup({ delay: 0 }),
  }
}

describe("ServicesList", () => {
  it("should render correctly", async () => {
    await act(() => renderComponent())
    expect(await screen.findByText("alpha")).toBeInTheDocument()
  })

  it("should render service panel when clicking on a service", async () => {
    vitest.spyOn(fetchImageVersions, "fetchImageVersions").mockReturnValue(mockImageVersionsPromise)
    const { user, router } = await act(() => renderComponent())

    //click on the service
    await user.click(await screen.findByText("alpha"))

    //expect the url to change
    expect(router.state.location.href).toBe("/services?service=alpha")

    // expect the service panel to be opened
    expect(await screen.findByText("Alpha Overview")).toBeInTheDocument()

    // expect the image version to be displayed
    expect(await screen.findByText("repo1")).toBeInTheDocument()
  })
})
