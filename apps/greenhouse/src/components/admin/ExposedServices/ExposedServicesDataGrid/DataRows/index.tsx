/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { useSuspenseQuery } from "@tanstack/react-query"
import { useRouteContext, useSearch } from "@tanstack/react-router"
import { DataGridRow, DataGridCell, Icon } from "@cloudoperators/juno-ui-components"

import { NO_VALUE_DEFAULT } from "../../../constants"
import {
  fetchExposedServices,
  FETCH_EXPOSED_SERVICES_CACHE_KEY,
} from "../../../api/exposed-services/fetchExposedServices"
import { EmptyDataGridRow } from "../../../common/EmptyDataGridRow"
import { extractFilterSettingsFromSearchParams } from "../../../utils"
import { ExternalLink } from "../../../common/ExternalLink"

interface DataRowsProps {
  colSpan: number
}

export const DataRows = ({ colSpan }: DataRowsProps) => {
  const { apiClient, user } = useRouteContext({ from: "/admin/exposed-services" })
  const search = useSearch({ from: "/admin/exposed-services" })
  const filterSettings = extractFilterSettingsFromSearchParams(search)

  const { data: flattenedExposedServices } = useSuspenseQuery({
    queryKey: [FETCH_EXPOSED_SERVICES_CACHE_KEY, user.organization, filterSettings],
    queryFn: () =>
      fetchExposedServices({
        apiClient,
        namespace: user.organization,
        filterSettings,
      }),
  })

  if (!flattenedExposedServices || flattenedExposedServices.length === 0) {
    return <EmptyDataGridRow colSpan={colSpan}>No exposed services found.</EmptyDataGridRow>
  }

  return (
    <>
      {flattenedExposedServices.map((service, index) => (
        <DataGridRow key={`${service.serviceName}-${index}`}>
          <DataGridCell className="inline-block">
            {<ExternalLink url={service.serviceUrl} label={service.serviceName} />}
          </DataGridCell>
          <DataGridCell>{service.clusterName || NO_VALUE_DEFAULT}</DataGridCell>
          <DataGridCell>{service.pluginName || NO_VALUE_DEFAULT}</DataGridCell>
          <DataGridCell>{service.supportGroup || NO_VALUE_DEFAULT}</DataGridCell>
        </DataGridRow>
      ))}
    </>
  )
}
