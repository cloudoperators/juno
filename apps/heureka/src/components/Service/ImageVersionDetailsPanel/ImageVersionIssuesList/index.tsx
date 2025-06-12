/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, useEffect, useState } from "react"
import { ApolloQueryResult } from "@apollo/client"
import { useRouteContext } from "@tanstack/react-router"
import {
  DataGrid,
  DataGridRow,
  DataGridHeadCell,
  Icon,
  Stack,
  Spinner,
  SearchInput,
  ContentHeading,
} from "@cloudoperators/juno-ui-components"
import { EmptyDataGridRow } from "../../../common/EmptyDataGridRow"
import { ServiceImageVersion } from "../../../Services/utils"
import { GetServiceImageVersionIssuesQuery } from "../../../../generated/graphql"
import { fetchImageVersionIssues } from "../../../../api/fetchImageVersionIssues"
import { IssuesDataRows } from "./IssuesDataRows"
import { IssuesPagination } from "./IssuesPagination"

type ImageVersionIssuesListProps = {
  service: string
  imageVersion: ServiceImageVersion
}

export const ImageVersionIssuesList = ({ service, imageVersion }: ImageVersionIssuesListProps) => {
  const { apiClient, queryClient } = useRouteContext({ from: "/services/$service" })
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined)
  const [issuesPromise, setIssuesPromise] = useState<
    Promise<ApolloQueryResult<GetServiceImageVersionIssuesQuery>> | undefined
  >(undefined)

  // we need to recreate promise to fetch issues when search term changes
  useEffect(() => {
    if (service && imageVersion) {
      const promise = fetchImageVersionIssues({
        apiClient,
        queryClient,
        service,
        imageVersion: imageVersion.version,
        searchTerm,
      })
      setIssuesPromise(promise)
    }
  }, [service, imageVersion, searchTerm])

  return (
    <>
      <Stack gap="2" className="mb-4 mt-8">
        <ContentHeading>Issues</ContentHeading>
        <SearchInput
          placeholder="Search for CVE number"
          className="w-96 ml-auto"
          onSearch={(search) => setSearchTerm(search || "")}
          onClear={() => {
            setSearchTerm("")
          }}
        />
      </Stack>
      <DataGrid columns={4} minContentColumns={[0, 1, 2]} cellVerticalAlignment="top">
        <DataGridRow>
          <DataGridHeadCell>
            <Icon icon="monitorHeart" />
          </DataGridHeadCell>
          <DataGridHeadCell>Issue</DataGridHeadCell>
          <DataGridHeadCell>Target Date</DataGridHeadCell>
          <DataGridHeadCell>Description</DataGridHeadCell>
        </DataGridRow>

        {issuesPromise && (
          <Suspense
            fallback={
              <EmptyDataGridRow colSpan={4}>
                <Stack gap="2" alignment="center">
                  <div>Loading issues</div>
                  <Spinner variant="primary"></Spinner>
                </Stack>
              </EmptyDataGridRow>
            }
          >
            <IssuesDataRows issuesPromise={issuesPromise} />
          </Suspense>
        )}
      </DataGrid>
      {issuesPromise && (
        <Suspense>
          <IssuesPagination issuesPromise={issuesPromise} />
        </Suspense>
      )}
    </>
  )
}
