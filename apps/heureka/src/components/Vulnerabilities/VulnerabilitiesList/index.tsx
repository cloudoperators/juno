/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, useCallback, useEffect, useState } from "react"
import { useRouteContext, useLoaderData } from "@tanstack/react-router"
import { DataGrid, DataGridRow, DataGridHeadCell, Icon, Stack, Spinner } from "@cloudoperators/juno-ui-components"
import { EmptyDataGridRow } from "../../common/EmptyDataGridRow"
import { getNormalizedVulnerabilitiesResponse } from "../utils"
import { fetchVulnerabilities } from "../../../api/fetchVulnerabilities"
import { VulnerabilitiesDataRows } from "./VulnerabilitiesDataRows"
import { CursorPagination } from "../../common/CursorPagination"

export const VulnerabilitiesList = () => {
  const { queryClient, apiClient } = useRouteContext({ from: "/vulnerabilities/" })
  const { vulnerabilitiesPromise: pageLevelVulnerabilitiesPromise, filterSettings } = useLoaderData({
    from: "/vulnerabilities/",
  })
  const [vulnerabilitiesPromise, setVulnerabilitiesPromise] = useState(pageLevelVulnerabilitiesPromise)

  // fetch vulnerabilities for a specific page
  const goToPage = useCallback(
    (after?: string | null) => {
      const promise = fetchVulnerabilities({
        queryClient,
        apiClient,
        filterSettings,
        after,
      })
      setVulnerabilitiesPromise(promise)
    },
    [setVulnerabilitiesPromise, queryClient, apiClient, filterSettings]
  )

  /*
   * If pageLevelVulnerabilitiesPromise is changed because of changed filter settings for example,
   * we need to update the vulnerabilitiesPromise state to trigger a re-render.
   * ¯\_(ツ)_/¯
   */
  useEffect(() => {
    setVulnerabilitiesPromise(pageLevelVulnerabilitiesPromise)
  }, [setVulnerabilitiesPromise, pageLevelVulnerabilitiesPromise])

  return (
    <>
      <DataGrid columns={5} minContentColumns={[0, 1, 2, 3]} cellVerticalAlignment="top">
        <DataGridRow>
          <DataGridHeadCell>
            <Icon icon="monitorHeart" />
          </DataGridHeadCell>
          <DataGridHeadCell>Issue</DataGridHeadCell>
          <DataGridHeadCell>Services</DataGridHeadCell>
          <DataGridHeadCell>Target Date</DataGridHeadCell>
          <DataGridHeadCell>Description</DataGridHeadCell>
        </DataGridRow>

        <Suspense
          fallback={
            <EmptyDataGridRow colSpan={5}>
              <Stack gap="2" alignment="center">
                <div>Loading vulnerabilities</div>
                <Spinner variant="primary"></Spinner>
              </Stack>
            </EmptyDataGridRow>
          }
        >
          <VulnerabilitiesDataRows vulnerabilitiesPromise={vulnerabilitiesPromise} />
        </Suspense>
      </DataGrid>
      <Suspense>
        <CursorPagination
          dataPromise={vulnerabilitiesPromise}
          goToPage={goToPage}
          dataNormalizationMethod={getNormalizedVulnerabilitiesResponse}
        />
      </Suspense>
    </>
  )
}
