/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, useCallback, useEffect, useState } from "react"
import { DataGrid, DataGridRow, DataGridHeadCell, Stack, Spinner } from "@cloudoperators/juno-ui-components"
import { EmptyDataGridRow } from "../../common/EmptyDataGridRow"
import { ServicePanel } from "./ServicePanel"
import { ServicesDataRows } from "./ServicesDataRows"
import { CursorPagination } from "../../common/CursorPagination"
import { useLoaderData, useRouteContext } from "@tanstack/react-router"
import { fetchServices } from "../../../api/fetchServices"
import { getNormalizedServicesResponse } from "../utils"

const COLUMN_SPAN = 8

export const ServicesList = () => {
  const { queryClient, apiClient } = useRouteContext({ from: "/services/" })
  const { servicesPromise: pageLevelServicesPromise, filterSettings } = useLoaderData({ from: "/services/" })
  const [servicesPromise, setServicesPromise] = useState(pageLevelServicesPromise)

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

  /*
   * If pageLevelServicesPromise is changed because of changed filter settings for example,
   * we need to update the servicesPromise state to trigger a re-render.
   * ¯\_(ツ)_/¯
   */
  useEffect(() => {
    setServicesPromise(pageLevelServicesPromise)
  }, [setServicesPromise, pageLevelServicesPromise])

  return (
    <div className="datagrid-hover">
      <DataGrid minContentColumns={[1, 2, 3, 4, 5, 7]} columns={COLUMN_SPAN}>
        <DataGridRow>
          <DataGridHeadCell>Service</DataGridHeadCell>
          <DataGridHeadCell colSpan={5} className="whitespace-nowrap">
            Vulnerability Counts
          </DataGridHeadCell>
          <DataGridHeadCell>Details</DataGridHeadCell>
          <DataGridHeadCell></DataGridHeadCell>
        </DataGridRow>
        <Suspense
          fallback={
            <EmptyDataGridRow colSpan={COLUMN_SPAN}>
              <Stack gap="2" alignment="center">
                <div>Loading</div>
                <Spinner variant="primary"></Spinner>
              </Stack>
            </EmptyDataGridRow>
          }
        >
          <ServicesDataRows servicesPromise={servicesPromise} />
        </Suspense>
      </DataGrid>
      <Suspense>
        <CursorPagination
          dataPromise={servicesPromise}
          goToPage={goToPage}
          dataNormalizationMethod={getNormalizedServicesResponse}
        />
      </Suspense>
      <ServicePanel />
    </div>
  )
}
