/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react"
import { act, render, screen } from "@testing-library/react"
import { ObservableQuery } from "@apollo/client"
import { RemediatedIssuesDataRows } from "./index"
import { GetImagesQuery, GetRemediationsQuery } from "../../../../../generated/graphql"

// --------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------

function makeImagesPromise(cveNames: string[]): Promise<ObservableQuery.Result<GetImagesQuery>> {
  return Promise.resolve({
    data: {
      Images: {
        edges: cveNames.length
          ? [
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
            ]
          : [],
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

const emptyImagesPromise = makeImagesPromise([])
const emptyRemediationsPromise = makeRemediationsPromise([])

// --------------------------------------------------------------------------
// Tests
// --------------------------------------------------------------------------

describe("RemediatedIssuesDataRows", () => {
  it("renders empty state when there are no remediated vulnerabilities", async () => {
    await act(async () => {
      render(
        <Suspense fallback={<div>Loading...</div>}>
          <RemediatedIssuesDataRows
            issuesPromise={emptyImagesPromise}
            remediationsPromise={emptyRemediationsPromise}
            selectedVulnerabilityName={null}
            onSelectVulnerability={() => {}}
          />
        </Suspense>
      )
    })
    expect(await screen.findByText("No remediated vulnerabilities found!")).toBeInTheDocument()
  })

  it("shows a vulnerability that has a remediation record (false positive)", async () => {
    const issuesPromise = makeImagesPromise(["CVE-2024-1234"])
    const remediationsPromise = makeRemediationsPromise(["CVE-2024-1234"])

    await act(async () => {
      render(
        <Suspense fallback={<div>Loading...</div>}>
          <RemediatedIssuesDataRows
            issuesPromise={issuesPromise}
            remediationsPromise={remediationsPromise}
            selectedVulnerabilityName={null}
            onSelectVulnerability={() => {}}
          />
        </Suspense>
      )
    })

    expect(await screen.findByText("CVE-2024-1234")).toBeInTheDocument()
  })

  it("hides a vulnerability that has been reverted (no remediation record)", async () => {
    // Vulnerability exists in the images data but has no remediation → was reverted
    const issuesPromise = makeImagesPromise(["CVE-2024-1234"])
    const remediationsPromise = makeRemediationsPromise([]) // remediation was deleted

    await act(async () => {
      render(
        <Suspense fallback={<div>Loading...</div>}>
          <RemediatedIssuesDataRows
            issuesPromise={issuesPromise}
            remediationsPromise={remediationsPromise}
            selectedVulnerabilityName={null}
            onSelectVulnerability={() => {}}
          />
        </Suspense>
      )
    })

    expect(screen.queryByText("CVE-2024-1234")).not.toBeInTheDocument()
    expect(await screen.findByText("No remediated vulnerabilities found!")).toBeInTheDocument()
  })

  it("only shows the remediated CVE when multiple vulnerabilities are present", async () => {
    const issuesPromise = makeImagesPromise(["CVE-2024-1234", "CVE-2024-5678"])
    const remediationsPromise = makeRemediationsPromise(["CVE-2024-1234"]) // only the first is remediated

    await act(async () => {
      render(
        <Suspense fallback={<div>Loading...</div>}>
          <RemediatedIssuesDataRows
            issuesPromise={issuesPromise}
            remediationsPromise={remediationsPromise}
            selectedVulnerabilityName={null}
            onSelectVulnerability={() => {}}
          />
        </Suspense>
      )
    })

    // Remediated CVE must appear in the Remediated tab
    expect(await screen.findByText("CVE-2024-1234")).toBeInTheDocument()
    // Non-remediated CVE must NOT appear here
    expect(screen.queryByText("CVE-2024-5678")).not.toBeInTheDocument()
  })
})
