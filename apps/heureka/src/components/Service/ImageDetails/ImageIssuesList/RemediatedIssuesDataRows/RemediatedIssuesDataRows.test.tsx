/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react"
import { act, render, screen } from "@testing-library/react"
import { ObservableQuery } from "@apollo/client"
import { RemediatedIssuesDataRows } from "./index"
import { GetImagesQuery, GetRemediationsQuery } from "../../../../../generated/graphql"

const emptyImagesPromise = Promise.resolve({
  data: {
    Images: {
      edges: [],
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

const emptyRemediationsPromise = Promise.resolve({
  data: {
    Remediations: {
      edges: [],
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
})
