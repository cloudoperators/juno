/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { useQuery } from "@tanstack/react-query"
import { useRouteContext, useSearch } from "@tanstack/react-router"
import { DataGridRow, DataGridCell, Icon, Stack } from "@cloudoperators/juno-ui-components"

import { SUPPORT_GROUP_LABEL } from "../../../constants"
import {
  fetchExposedServices,
  FETCH_EXPOSED_SERVICES_CACHE_KEY,
} from "../../../api/exposed-services/fetchExposedServices"
import { EmptyDataGridRow } from "../../../common/EmptyDataGridRow"
import { extractFilterSettingsFromSearchParams } from "../../../utils"

interface DataRowsProps {
  colSpan: number
}

export const DataRows = ({ colSpan }: DataRowsProps) => {
  const { apiClient, user } = useRouteContext({ from: "/admin/exposed-services" })
  const search = useSearch({ from: "/admin/exposed-services" })
  const filterSettings = extractFilterSettingsFromSearchParams(search)

  const { data: ExposedServices } = useQuery({
    queryKey: [FETCH_EXPOSED_SERVICES_CACHE_KEY, user.organization, filterSettings],
    queryFn: () =>
      fetchExposedServices({
        apiClient,
        namespace: user.organization,
        filterSettings,
      }),
  })

  if (!ExposedServices || ExposedServices.length === 0) {
    return <EmptyDataGridRow colSpan={colSpan}>No exposed services found.</EmptyDataGridRow>
  }

  return (
    <>
      {ExposedServices.map((service) => {
        const clusterName = service.spec?.clusterName || ""
        const pluginName = service.metadata?.name || ""
        const supportGroup = service.metadata?.labels?.[SUPPORT_GROUP_LABEL] || ""
        const exposedServices = service.status?.exposedServices

        const serviceUrl = exposedServices ? Object.keys(exposedServices)[0] : ""
        const serviceData = exposedServices ? Object.values(exposedServices)[0] : { name: "", namespace: "" }

        return (
          <DataGridRow key={`${pluginName}-${serviceUrl}`}>
            {/* Name */}
            <DataGridCell>
              {serviceUrl ? (
                <a href={serviceUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  <Stack gap="2">
                    {serviceData.name || ""}
                    {/* Remove onclick - components bug */}
                    <Icon size="18" color="jn-global-text" icon="openInNew" onClick={() => {}} />
                  </Stack>
                </a>
              ) : (
                serviceData.name
              )}
            </DataGridCell>
            {/* Cluster */}
            <DataGridCell>{clusterName}</DataGridCell>
            {/* Plugin */}
            <DataGridCell>{pluginName}</DataGridCell>
            {/* Support Group */}
            <DataGridCell>{supportGroup}</DataGridCell>
          </DataGridRow>
        )
      })}
    </>
  )
}
