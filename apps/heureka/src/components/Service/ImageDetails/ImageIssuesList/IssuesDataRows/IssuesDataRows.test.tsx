/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react"
import { act, render, screen } from "@testing-library/react"
import { ObservableQuery } from "@apollo/client"
import { createMemoryHistory, createRootRoute, createRoute, Outlet, RouterProvider } from "@tanstack/react-router"
import { IssuesDataRows } from "./index"
import { GetImagesQuery, GetRemediationsQuery } from "../../../../../generated/graphql"
import { getTestRouter } from "../../../../../mocks/getTestRouter"

// --------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------

/**
 * Builds an images promise containing a single image with the given vulnerabilities.
 * Each vulnerability is identified by its CVE name (e.g. "CVE-2024-1234").
 */
function makeImagesPromise(cveNames: string[]): Promise<ObservableQuery.Result<GetImagesQuery>> {
  return Promise.resolve({
    data: {
      Images: {
        edges: [
          {
            node: {
              id: "img-1",
              repository: "repo/image",
              imageRegistryUrl: "https://registry.example.com/repo/image",
              vulnerabilityCounts: {
                critical: 0,
                high: cveNames.length,
                medium: 0,
                low: 0,
                none: 0,
                total: cveNames.length,
                __typename: "SeverityCounts",
              },
              vulnerabilities: {
                edges: cveNames.map((name, i) => ({
                  node: {
                    id: `vul-${i}`,
                    name,
                    severity: "High",
                    earliestTargetRemediationDate: "2025-12-31T00:00:00Z",
                    description: `Description for ${name}`,
                    sourceUrl: `https://nvd.nist.gov/vuln/detail/${name}`,
                    __typename: "Vulnerability",
                  },
                  __typename: "VulnerabilityEdge",
                })),
                pageInfo: { pageNumber: 1, pages: [], __typename: "PageInfo" },
                __typename: "VulnerabilityConnection",
              },
              versions: { edges: [], __typename: "ComponentVersionConnection" },
              __typename: "Image",
            },
            __typename: "ImageEdge",
          },
        ],
        pageInfo: { pageNumber: 1, pages: [], __typename: "PageInfo" },
        __typename: "ImageConnection",
      },
    },
    loading: false,
    networkStatus: 7,
    error: undefined,
    partial: false,
    dataState: "complete" as const,
  }) as unknown as Promise<ObservableQuery.Result<GetImagesQuery>>
}

/**
 * Builds a remediations promise for the given CVE names.
 * An empty array means no remediations exist.
 */
function makeRemediationsPromise(remediatedCves: string[]): Promise<ObservableQuery.Result<GetRemediationsQuery>> {
  return Promise.resolve({
    data: {
      Remediations: {
        edges: remediatedCves.map((cve, i) => ({
          node: {
            id: `rem-${i}`,
            vulnerability: cve,
            __typename: "Remediation",
          },
          __typename: "RemediationEdge",
        })),
        pageInfo: { pageNumber: 1, pages: [], __typename: "PageInfo" },
        __typename: "RemediationConnection",
      },
    },
    loading: false,
    networkStatus: 7,
    error: undefined,
    partial: false,
    dataState: "complete" as const,
  }) as unknown as Promise<ObservableQuery.Result<GetRemediationsQuery>>
}

/**
 * Wraps the component in a RouterProvider so that IssuesDataRow's useRouteContext works.
 */
function renderWithRouter(
  issuesPromise: Promise<ObservableQuery.Result<GetImagesQuery>>,
  remediationsPromise: Promise<ObservableQuery.Result<GetRemediationsQuery>>
) {
  const rootRoute = createRootRoute({ component: () => <Outlet /> })
  const testRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/services/$service",
    component: () => (
      <Suspense fallback={<div>Loading...</div>}>
        <IssuesDataRows
          issuesPromise={issuesPromise}
          remediationsPromise={remediationsPromise}
          service="my-service"
          image="repo/image"
          onFalsePositiveSuccess={() => {}}
        />
      </Suspense>
    ),
  })
  const routeTree = rootRoute.addChildren([testRoute])
  const router = getTestRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: ["/services/my-service"] }),
  })
  return render(<RouterProvider router={router} />)
}

// --------------------------------------------------------------------------
// Tests
// --------------------------------------------------------------------------

describe("IssuesDataRows — active/remediated split", () => {
  it("shows a vulnerability when it has no remediation record (active state)", async () => {
    const issuesPromise = makeImagesPromise(["CVE-2024-1234"])
    const remediationsPromise = makeRemediationsPromise([]) // no remediations

    await act(async () => {
      renderWithRouter(issuesPromise, remediationsPromise)
    })

    expect(await screen.findByText("CVE-2024-1234")).toBeInTheDocument()
  })

  it("hides a vulnerability that has been marked as false positive (remediation record exists)", async () => {
    const issuesPromise = makeImagesPromise(["CVE-2024-1234"])
    const remediationsPromise = makeRemediationsPromise(["CVE-2024-1234"]) // this CVE is now remediated

    await act(async () => {
      render(
        <Suspense fallback={<div>Loading...</div>}>
          <IssuesDataRows
            issuesPromise={issuesPromise}
            remediationsPromise={remediationsPromise}
            service="my-service"
            image="repo/image"
            onFalsePositiveSuccess={() => {}}
          />
        </Suspense>
      )
    })

    // CVE is in remediations → must NOT appear in the Active tab
    expect(screen.queryByText("CVE-2024-1234")).not.toBeInTheDocument()
    // And the empty state message should be shown
    expect(await screen.findByText("No vulnerabilities found! 🚀")).toBeInTheDocument()
  })

  it("only hides the remediated CVE when multiple vulnerabilities are present", async () => {
    const issuesPromise = makeImagesPromise(["CVE-2024-1234", "CVE-2024-5678"])
    const remediationsPromise = makeRemediationsPromise(["CVE-2024-1234"]) // only first one is remediated

    await act(async () => {
      renderWithRouter(issuesPromise, remediationsPromise)
    })

    // Remediated CVE must NOT appear in Active tab
    expect(screen.queryByText("CVE-2024-1234")).not.toBeInTheDocument()
    // Non-remediated CVE must still appear in Active tab
    expect(await screen.findByText("CVE-2024-5678")).toBeInTheDocument()
  })

  it("shows empty state when all vulnerabilities have remediation records", async () => {
    const cves = ["CVE-2024-1234", "CVE-2024-5678"]
    const issuesPromise = makeImagesPromise(cves)
    const remediationsPromise = makeRemediationsPromise(cves) // both are remediated

    await act(async () => {
      render(
        <Suspense fallback={<div>Loading...</div>}>
          <IssuesDataRows
            issuesPromise={issuesPromise}
            remediationsPromise={remediationsPromise}
            service="my-service"
            image="repo/image"
            onFalsePositiveSuccess={() => {}}
          />
        </Suspense>
      )
    })

    expect(await screen.findByText("No vulnerabilities found! 🚀")).toBeInTheDocument()
  })
})
