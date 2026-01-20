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
  Tabs,
  TabList,
  Tab,
  TabPanel,
} from "@cloudoperators/juno-ui-components"
import { getNormalizedImageVulnerabilitiesResponse, ServiceImage } from "../../../Services/utils"
import { fetchImages } from "../../../../api/fetchImages"
import { fetchRemediations } from "../../../../api/fetchRemediations"
import { IssuesDataRows } from "./IssuesDataRows"
import { RemediatedIssuesDataRows } from "./RemediatedIssuesDataRows"
import { CursorPagination } from "../../../common/CursorPagination"
import { ErrorBoundary } from "../../../common/ErrorBoundary"
import { getErrorDataRowComponent } from "../../../common/getErrorDataRow"
import { LoadingDataRow } from "../../../common/LoadingDataRow"

type ImageIssuesListProps = {
  service: string
  image: ServiceImage
}

export const ImageIssuesList = ({ service, image }: ImageIssuesListProps) => {
  const { apiClient, queryClient } = useRouteContext({ from: "/services/$service" })
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined)
  const [pageCursor, setPageCursor] = useState<string | null | undefined>(undefined)
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  const vulFilter = searchTerm ? { search: [searchTerm] } : undefined

  const issuesPromise = fetchImages({
    apiClient,
    queryClient,
    filter: {
      service: [service],
      repository: [image.repository],
    },
    firstVulnerabilities: 20,
    afterVulnerabilities: pageCursor,
    vulFilter,
  })

  const remediationsPromise = fetchRemediations({
    apiClient,
    queryClient,
    filter: {
      service: [service],
      image: [image.repository],
    },
  })

  return (
    <>
      <Tabs selectedIndex={selectedTabIndex} onSelect={setSelectedTabIndex} variant="content">
        <TabList>
          <Tab label="Vulnerabilities" />
          <Tab label="Remediated Vulnerabilities" />
        </TabList>
        <TabPanel>
          <Stack gap="2" className="mb-4 mt-4">
            <SearchInput
              placeholder="Search for CVE number"
              className="w-96 ml-auto"
              onSearch={(search) => setSearchTerm(search || "")}
              onClear={() => {
                setSearchTerm("")
              }}
            />
          </Stack>
          <DataGrid columns={5} minContentColumns={[0, 1, 2, 4]} cellVerticalAlignment="top">
            <DataGridRow>
              <DataGridHeadCell>
                <Icon icon="monitorHeart" />
              </DataGridHeadCell>
              <DataGridHeadCell>Vulnerability</DataGridHeadCell>
              <DataGridHeadCell>Target Date</DataGridHeadCell>
              <DataGridHeadCell>Description</DataGridHeadCell>
              <DataGridHeadCell>Actions</DataGridHeadCell>
            </DataGridRow>

            {issuesPromise && (
              <ErrorBoundary
                displayErrorMessage
                fallbackRender={getErrorDataRowComponent({ colspan: 5 })}
                resetKeys={[issuesPromise]}
              >
                <Suspense fallback={<LoadingDataRow colSpan={5} />}>
                  <IssuesDataRows issuesPromise={issuesPromise} service={service} image={image.repository} />
                </Suspense>
              </ErrorBoundary>
            )}
          </DataGrid>
          {issuesPromise && (
            <ErrorBoundary resetKeys={[issuesPromise]}>
              <Suspense>
                <CursorPagination
                  dataPromise={issuesPromise}
                  dataNormalizationMethod={getNormalizedImageVulnerabilitiesResponse}
                  goToPage={setPageCursor}
                />
              </Suspense>
            </ErrorBoundary>
          )}
        </TabPanel>
        <TabPanel>
          <div className="mb-4 mt-4" />
          <DataGrid columns={4} minContentColumns={[0, 1, 3]} cellVerticalAlignment="top">
            <DataGridRow>
              <DataGridHeadCell>
                <Icon icon="monitorHeart" />
              </DataGridHeadCell>
              <DataGridHeadCell>Vulnerability</DataGridHeadCell>
              <DataGridHeadCell>Description</DataGridHeadCell>
              <DataGridHeadCell>Actions</DataGridHeadCell>
            </DataGridRow>

            {remediationsPromise && (
              <ErrorBoundary
                displayErrorMessage
                fallbackRender={getErrorDataRowComponent({ colspan: 4 })}
                resetKeys={[remediationsPromise]}
              >
                <Suspense fallback={<LoadingDataRow colSpan={4} />}>
                  <RemediatedIssuesDataRows remediationsPromise={remediationsPromise} />
                </Suspense>
              </ErrorBoundary>
            )}
          </DataGrid>
        </TabPanel>
      </Tabs>
    </>
  )
}
