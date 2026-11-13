/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, useCallback, useState } from "react"
import { DataGrid, DataGridRow, DataGridHeadCell } from "@cloudoperators/juno-ui-components"
import { ServicePanel } from "./ServicePanel"
import { ServicesDataRows } from "./ServicesDataRows"
import { CursorPagination } from "../../common/CursorPagination"
import { useLoaderData, useRouteContext } from "@tanstack/react-router"
import { fetchServices } from "../../../api/fetchServices"
import { getNormalizedServicesResponse } from "../utils"
import { ErrorBoundary } from "../../common/ErrorBoundary"
import { LoadingDataRow } from "../../common/LoadingDataRow"
import { getErrorDataRowComponent } from "../../common/getErrorDataRow"

const COLUMN_SPAN = 7

export const ServicesList = () => {
  const { queryClient, apiClient } = useRouteContext({ from: "/services/" })
  const { servicesPromise: pageLevelServicesPromise, filterSettings } = useLoaderData({ from: "/services/" })
  const [servicesPromise, setServicesPromise] = useState(pageLevelServicesPromise)
  const [prevPageLevelPromise, setPrevPageLevelPromise] = useState(pageLevelServicesPromise)
  if (prevPageLevelPromise !== pageLevelServicesPromise) {
    setPrevPageLevelPromise(pageLevelServicesPromise)
    setServicesPromise(pageLevelServicesPromise)
  }

  // fetch services for a specific page
  const goToPage = useCallback(
    (after?: string | null) => {
      const promise = fetchServices({
        queryClient,
        apiClient,
        filterSettings,
        after,
      })
      setServicesPromise(promise)
    },
    [setServicesPromise, queryClient, apiClient, filterSettings]
  )

  return (
    <div className="datagrid-hover">
      <DataGrid minContentColumns={[1, 2, 3, 4, 5, 7]} columns={COLUMN_SPAN}>
        <DataGridRow>
          <DataGridHeadCell>Service</DataGridHeadCell>
          <DataGridHeadCell colSpan={5} className="whitespace-nowrap">
            Vulnerability Counts
          </DataGridHeadCell>
          <DataGridHeadCell>Support Group</DataGridHeadCell>
        </DataGridRow>
        <ErrorBoundary
          displayErrorMessage
          fallbackRender={getErrorDataRowComponent({ colspan: COLUMN_SPAN })}
          resetKeys={[servicesPromise]}
        >
          <Suspense fallback={<LoadingDataRow colSpan={COLUMN_SPAN} />}>
            <ServicesDataRows servicesPromise={servicesPromise} />
          </Suspense>
        </ErrorBoundary>
      </DataGrid>
      <ErrorBoundary>
        <Suspense>
          <CursorPagination
            dataPromise={servicesPromise}
            goToPage={goToPage}
            dataNormalizationMethod={getNormalizedServicesResponse}
          />
        </Suspense>
      </ErrorBoundary>
      <ServicePanel />
    </div>
  )
}
