/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, useState } from "react"
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
import { getNormalizedImageVersionIssuesResponse, ServiceImageVersion } from "../../../Services/utils"
import { fetchImageVersionIssues } from "../../../../api/fetchImageVersionIssues"
import { IssuesDataRows } from "./IssuesDataRows"
import { CursorPagination } from "../../../common/CursorPagination"

type ImageVersionIssuesListProps = {
  service: string
  imageVersion: ServiceImageVersion
}

export const ImageVersionIssuesList = ({ service, imageVersion }: ImageVersionIssuesListProps) => {
  const { apiClient, queryClient } = useRouteContext({ from: "/services/$service" })
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined)
  const [pageCursor, setPageCursor] = useState<string | null | undefined>(undefined)

  const issuesPromise = fetchImageVersionIssues({
    apiClient,
    queryClient,
    service,
    imageVersion: imageVersion.version,
    searchTerm,
    after: pageCursor,
  })

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
          <CursorPagination
            dataPromise={issuesPromise}
            dataNormalizationMethod={getNormalizedImageVersionIssuesResponse}
            goToPage={setPageCursor}
          />
        </Suspense>
      )}
    </>
  )
}
