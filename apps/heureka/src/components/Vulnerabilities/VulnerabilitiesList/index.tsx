/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, useCallback, useEffect, useState } from "react"
import { useRouteContext, useLoaderData } from "@tanstack/react-router"
import { DataGrid, DataGridRow, DataGridHeadCell, Icon } from "@cloudoperators/juno-ui-components"
import { getNormalizedVulnerabilitiesResponse } from "../utils"
import { fetchVulnerabilities } from "../../../api/fetchVulnerabilities"
import { VulnerabilitiesDataRows } from "./VulnerabilitiesDataRows"
import { CursorPagination } from "../../common/CursorPagination"
import { VulnerabilityPanel } from "./VulnerabilityDetailsPanel"
import { LoadingDataRow } from "../../common/LoadingDataRow"
import { ErrorBoundary } from "../../common/ErrorBoundary"
import { getErrorDataRowComponent } from "../../common/getErrorDataRow"

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
    <div className="datagrid-hover">
      <DataGrid columns={5} minContentColumns={[0, 1, 2, 3]} cellVerticalAlignment="top">
        <DataGridRow>
          <DataGridHeadCell>
            <Icon icon="monitorHeart" />
          </DataGridHeadCell>
          <DataGridHeadCell>Vulnerability</DataGridHeadCell>
          <DataGridHeadCell>Services</DataGridHeadCell>
          <DataGridHeadCell>Target Date</DataGridHeadCell>
          <DataGridHeadCell>Description</DataGridHeadCell>
        </DataGridRow>
        <ErrorBoundary
          displayErrorMessage
          resetKeys={[vulnerabilitiesPromise]}
          fallbackRender={getErrorDataRowComponent({ colspan: 5 })}
        >
          <Suspense fallback={<LoadingDataRow colSpan={5} />}>
            <VulnerabilitiesDataRows vulnerabilitiesPromise={vulnerabilitiesPromise} />
          </Suspense>
        </ErrorBoundary>
      </DataGrid>
      <ErrorBoundary>
        <Suspense>
          <CursorPagination
            dataPromise={vulnerabilitiesPromise}
            goToPage={goToPage}
            dataNormalizationMethod={getNormalizedVulnerabilitiesResponse}
          />
        </Suspense>
      </ErrorBoundary>
      <VulnerabilityPanel />
    </div>
  )
}
