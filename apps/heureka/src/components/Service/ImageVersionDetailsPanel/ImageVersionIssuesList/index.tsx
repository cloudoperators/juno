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
  SearchInput,
  ContentHeading,
} from "@cloudoperators/juno-ui-components"
import { getNormalizedImageVersionIssuesResponse, ServiceImageVersion } from "../../../Services/utils"
import { fetchImageVersionIssues } from "../../../../api/fetchImageVersionIssues"
import { IssuesDataRows } from "./IssuesDataRows"
import { CursorPagination } from "../../../common/CursorPagination"
import { ErrorBoundary } from "../../../common/ErrorBoundary"
import { getErrorDataRowComponent } from "../../../common/getErrorDataRow"
import { LoadingDataRow } from "../../../common/LoadingDataRow"

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
        <ContentHeading>Vulnerabilities</ContentHeading>
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
          <DataGridHeadCell>Vulnerability</DataGridHeadCell>
          <DataGridHeadCell>Target Date</DataGridHeadCell>
          <DataGridHeadCell>Description</DataGridHeadCell>
        </DataGridRow>

        {issuesPromise && (
          <ErrorBoundary
            displayErrorMessage
            fallbackRender={getErrorDataRowComponent({ colspan: 4 })}
            resetKeys={[issuesPromise]}
          >
            <Suspense fallback={<LoadingDataRow colSpan={4} />}>
              <IssuesDataRows issuesPromise={issuesPromise} />
            </Suspense>
          </ErrorBoundary>
        )}
      </DataGrid>
      {issuesPromise && (
        <ErrorBoundary resetKeys={[issuesPromise]}>
          <Suspense>
            <CursorPagination
              dataPromise={issuesPromise}
              dataNormalizationMethod={getNormalizedImageVersionIssuesResponse}
              goToPage={setPageCursor}
            />
          </Suspense>
        </ErrorBoundary>
      )}
    </>
  )
}
