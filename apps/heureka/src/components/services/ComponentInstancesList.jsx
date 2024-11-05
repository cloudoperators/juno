/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import {
  ContentHeading,
  Pagination,
  Container,
  Stack,
  DataGrid,
  DataGridRow,
  DataGridCell,
  DataGridHeadCell,
} from "@cloudoperators/juno-ui-components"
import { useGlobalsQueryClientFnReady, useGlobalsQueryOptions, useGlobalsActions } from "../StoreProvider"
import LoadElement from "../shared/LoadElement"
import { severityString, highestSeverity } from "../shared/Helper"

const ComponentInstancesList = ({ serviceCcrn }) => {
  const queryOptions = useGlobalsQueryOptions("ComponentInstancesOfService")
  const { setQueryOptions } = useGlobalsActions()
  const queryClientFnReady = useGlobalsQueryClientFnReady()
  const [currentPage, setCurrentPage] = useState(1)

  const { data, isLoading } = useQuery({
    queryKey: [
      "ComponentInstancesOfService",
      {
        ...queryOptions,
        filter: { serviceCcrn: [serviceCcrn] },
      },
    ],
    enabled: !!queryClientFnReady && !!serviceCcrn,
  })

  const items = useMemo(() => {
    return data?.ComponentInstances?.edges || []
  }, [data])

  const pageInfo = useMemo(() => {
    return data?.ComponentInstances?.pageInfo || {}
  }, [data])

  const totalPages = useMemo(() => {
    if (!pageInfo?.pages) return 0
    return pageInfo.pages.length
  }, [pageInfo])

  const onPaginationChanged = (newPage) => {
    setCurrentPage(newPage)
    if (!pageInfo?.pages) return
    const pages = pageInfo.pages
    const currentPageIndex = pages?.findIndex((page) => page?.pageNumber === parseInt(newPage))
    if (currentPageIndex > -1) {
      const after = pages[currentPageIndex]?.after
      setQueryOptions("ComponentInstancesOfService", {
        ...queryOptions,
        after: `${after}`,
      })
    }
  }

  return (
    <>
      <ContentHeading className="mt-8 mb-2" heading="Component Instances" />
      <DataGrid columns={4}>
        <DataGridRow>
          <DataGridHeadCell>Component</DataGridHeadCell>
          <DataGridHeadCell>Version</DataGridHeadCell>
          <DataGridHeadCell>Total Number of Issues</DataGridHeadCell>
          <DataGridHeadCell>Highest Severity</DataGridHeadCell>
        </DataGridRow>
        {isLoading ? (
          <DataGridRow>
            <DataGridCell colSpan={4}>
              <Container py>
                <LoadElement />
              </Container>
            </DataGridCell>
          </DataGridRow>
        ) : (
          items.map((componentInstance, i) => (
            <DataGridRow key={i}>
              <DataGridCell>{componentInstance?.node?.ccrn}</DataGridCell>
              <DataGridCell className="break-all overflow-hidden">
                {componentInstance?.node?.componentVersion?.version}
              </DataGridCell>
              <DataGridCell>{componentInstance?.node?.issueMatches?.totalCount}</DataGridCell>
              <DataGridCell>
                {severityString(highestSeverity(componentInstance?.node?.issueMatches?.edges))}
              </DataGridCell>
            </DataGridRow>
          ))
        )}
      </DataGrid>

      <Container py px={false}>
        <Stack className="flex justify-end">
          <Pagination
            currentPage={currentPage}
            isFirstPage={currentPage === 1}
            isLastPage={currentPage === totalPages}
            onPressNext={() => onPaginationChanged(currentPage + 1)}
            onPressPrevious={() => onPaginationChanged(currentPage - 1)}
            onKeyPress={(oKey) => {
              if (oKey.code === "Enter") {
                onPaginationChanged(parseInt(oKey.currentTarget.value))
              }
            }}
            onSelectChange={onPaginationChanged}
            pages={totalPages}
            variant="input"
          />
        </Stack>
      </Container>
    </>
  )
}

export default ComponentInstancesList
