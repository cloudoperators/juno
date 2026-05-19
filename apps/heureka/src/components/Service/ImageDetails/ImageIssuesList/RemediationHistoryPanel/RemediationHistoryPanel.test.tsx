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

vi.mock("../../../../../api/fetchRemediations", () => ({
  fetchRemediations: vi.fn(),
}))

import { fetchRemediations } from "../../../../../api/fetchRemediations"

const makeMockRemediationsPromise = (
  edges: Array<{
    id: string
    type: string | null
    description: string | null
    url: string | null
    remediatedBy: string | null
    remediationDate: string | null
    expirationDate: string | null
  }>
) =>
  Promise.resolve({
    data: {
      Remediations: {
        edges: edges.map((node) => ({
          node: {
            ...node,
            service: "my-service",
            image: "my-image",
            vulnerability: "CVE-2024-1234",
          },
        })),
        totalCount: edges.length,
      },
    },
    loading: false,
    networkStatus: 7,
    error: undefined,
  })

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
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("renders without crashing when vulnerability is null (panel closed)", () => {
    renderPanel(null)
    expect(screen.queryByText("Revert False Positive")).not.toBeInTheDocument()
  })

  it("renders Source Ticket column header and cell value when panel is open", async () => {
    vi.mocked(fetchRemediations).mockReturnValue(
      makeMockRemediationsPromise([
        {
          id: "rem-0",
          type: "risk_accepted",
          description: "Some reason",
          url: "JIRA-1",
          remediatedBy: "user-1",
          remediationDate: "2025-01-01T00:00:00Z",
          expirationDate: "2026-01-01T00:00:00Z",
        },
      ])
    )
    renderPanel("CVE-2024-1234")
    // Wait for data row to confirm Suspense resolved, then check header
    expect(await screen.findByText("JIRA-1")).toBeInTheDocument()
    expect(screen.getByText("Source Ticket")).toBeInTheDocument()
  })

  it("shows url value in Source Ticket cell for risk_accepted remediations", async () => {
    vi.mocked(fetchRemediations).mockReturnValue(
      makeMockRemediationsPromise([
        {
          id: "rem-1",
          type: "risk_accepted",
          description: "Accepted for now",
          url: "JIRA-9999",
          remediatedBy: "user-123",
          remediationDate: "2025-01-15T00:00:00Z",
          expirationDate: "2026-01-15T00:00:00Z",
        },
      ])
    )
    renderPanel("CVE-2024-1234")
    expect(await screen.findByText("JIRA-9999")).toBeInTheDocument()
  })

  it("shows -- when risk_accepted remediation has no url", async () => {
    vi.mocked(fetchRemediations).mockReturnValue(
      makeMockRemediationsPromise([
        {
          id: "rem-2",
          type: "risk_accepted",
          description: "No ticket",
          url: null,
          remediatedBy: "user-123",
          remediationDate: "2025-01-15T00:00:00Z",
          expirationDate: "2026-01-15T00:00:00Z",
        },
      ])
    )
    renderPanel("CVE-2024-1234")
    // description and remediatedBy are non-null, dates are non-null → only url cell shows --
    expect(await screen.findByText("--")).toBeInTheDocument()
  })

  it("shows empty Source Ticket cell for non-risk_accepted remediations", async () => {
    vi.mocked(fetchRemediations).mockReturnValue(
      makeMockRemediationsPromise([
        {
          id: "rem-3",
          type: "mitigation",
          description: "Applied patch",
          url: "JIRA-0000",
          remediatedBy: "user-456",
          remediationDate: "2025-03-01T00:00:00Z",
          expirationDate: "2026-03-01T00:00:00Z",
        },
      ])
    )
    renderPanel("CVE-2024-1234")
    expect(await screen.findByText("Applied patch")).toBeInTheDocument()
    // url is set on the node but type is not risk_accepted → Source Ticket cell must be empty
    expect(screen.queryByText("JIRA-0000")).not.toBeInTheDocument()
    // Verify the Source Ticket cell (6th gridcell in the data row) is empty
    const dataCells = screen.getAllByRole("gridcell")
    // gridcells: type(0), expirationDate(1), remediationDate(2), remediatedBy(3), description(4), sourceTicket(5), actions(6)
    expect(dataCells[5].textContent).toBe("")
  })
})
