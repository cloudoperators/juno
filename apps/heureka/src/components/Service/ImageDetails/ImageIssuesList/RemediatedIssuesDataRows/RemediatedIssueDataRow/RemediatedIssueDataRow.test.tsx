/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { createMemoryHistory, createRootRoute, createRoute, Outlet, RouterProvider } from "@tanstack/react-router"
import { AuthProvider } from "@cloudoperators/greenhouse-auth-provider"
import { RemediatedIssueDataRow } from "./index"
import type { ImageVulnerability } from "../../../../../Services/utils"
import { getTestRouter } from "../../../../../../mocks/getTestRouter"

const mockAuth = { getSnapshot: () => ({ status: "anonymous" as const }) }

const mockIssue: ImageVulnerability = {
  id: "vul-1",
  name: "CVE-2024-1234",
  severity: "High",
  earliestTargetRemediationDate: "2024-12-31T00:00:00Z",
  description: "A test vulnerability description.",
  sourceUrl: "https://nvd.nist.gov/vuln/detail/CVE-2024-1234",
}

function renderWithRouter(props: Partial<React.ComponentProps<typeof RemediatedIssueDataRow>> = {}) {
  const rootRoute = createRootRoute({ component: () => <Outlet /> })
  const testRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/services/$service",
    component: () => (
      <RemediatedIssueDataRow issue={mockIssue} service="my-service" image="my-image" onSelect={() => {}} {...props} />
    ),
  })
  const routeTree = rootRoute.addChildren([testRoute])
  const router = getTestRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: ["/services/my-service"] }),
  })
  return render(
    <AuthProvider embedded auth={mockAuth}>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

describe("RemediatedIssueDataRow", () => {
  it("renders issue name and description", async () => {
    renderWithRouter()
    expect(await screen.findByText("CVE-2024-1234")).toBeInTheDocument()
    expect(screen.getByText("A test vulnerability description.")).toBeInTheDocument()
  })

  it("calls onSelect when row is clicked", async () => {
    const onSelect = vi.fn()
    const user = userEvent.setup()
    renderWithRouter({ onSelect })
    await user.click(await screen.findByText("CVE-2024-1234"))
    expect(onSelect).toHaveBeenCalledTimes(1)
  })

  it("returns null when issue has no name", async () => {
    const rootRoute = createRootRoute({ component: () => <Outlet /> })
    const testRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/services/$service",
      component: () => (
        <RemediatedIssueDataRow
          issue={{ ...mockIssue, name: "" }}
          service="my-service"
          image="my-image"
          onSelect={() => {}}
        />
      ),
    })
    const routeTree = rootRoute.addChildren([testRoute])
    const router = getTestRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ["/services/my-service"] }),
    })
    const { container } = render(
      <AuthProvider embedded auth={mockAuth}>
        <RouterProvider router={router} />
      </AuthProvider>
    )
    // The component returns null when issue.name is empty; wait for the router
    // to finish initialising before asserting the absence of rendered content.
    await waitFor(() => {
      expect(screen.queryByText("CVE-2024-1234")).not.toBeInTheDocument()
    })
    expect(container.querySelector("[data-testid]")).toBeNull()
  })
})
