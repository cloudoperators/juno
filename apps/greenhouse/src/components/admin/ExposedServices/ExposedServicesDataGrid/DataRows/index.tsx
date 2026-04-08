/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DataGridRow, DataGridCell, Button, Icon, Stack } from "@cloudoperators/juno-ui-components"
import { useQuery, useSuspenseQuery } from "@tanstack/react-query"
import { useRouteContext, useSearch, useNavigate } from "@tanstack/react-router"
import {
  fetchExposedServices,
  FETCH_EXPOSED_SERVICES_CACHE_KEY,
} from "../../../api/plugin-exposed-services/fetchExposedServices"
import { extractFilterSettingsFromSearchParams } from "../../../utils"
import { EmptyDataGridRow } from "../../../common/EmptyDataGridRow"
import { PluginPreset } from "../../../types/k8sTypes"
import { getReadyCondition, isReady } from "../../../utils"
import { SUPPORT_GROUP_LABEL } from "../../../constants"

interface DataRowsProps {
  colSpan: number
}

export const DataRows = ({ colSpan }: DataRowsProps) => {
  const { apiClient, user } = useRouteContext({ from: "/admin/exposed-services" })
  const search = useSearch({ from: "/admin/exposed-services" })
  const navigate = useNavigate()
  const filterSettings = extractFilterSettingsFromSearchParams(search)

  const {
    data: ExposedServices,
    isLoading,
    error,
  } = useQuery({
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

  // const handleRowClick = (presetName: string) => {
  //   navigate({
  //     to: "/admin/plugin-presets/$pluginPresetName",
  //     params: { pluginPresetName: presetName },
  //   })
  // }

  return (
    <>
      {ExposedServices.map((service) => {
        const clusterName = service.spec?.clusterName || ""
        const pluginName = service.metadata?.name || ""
        const ownedBy = service.metadata?.labels?.["greenhouse.sap/owned-by"] || "" // Owned-by field with fallback
        const exposedServices = service.status?.exposedServices

        const serviceUrl = exposedServices ? Object.keys(exposedServices)[0] : ""
        const serviceData = exposedServices ? Object.values(exposedServices)[0] : { name: "", namespace: "" }

        return (
          <DataGridRow key={`${pluginName}-${serviceUrl}`} className="cursor-pointer">
            {/* Name */}
            <DataGridCell>
              <a href={serviceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                <Stack gap="2">
                  <Icon size="18" color="jn-global-text" icon="openInNew" />
                  {serviceData.name || ""}
                </Stack>
              </a>
            </DataGridCell>
            {/* Cluster */}
            <DataGridCell>{clusterName}</DataGridCell>
            {/* Plugin */}
            <DataGridCell>{pluginName}</DataGridCell>
            {/* Owned-by */}
            <DataGridCell>{ownedBy}</DataGridCell>
          </DataGridRow>
        )
      })}
    </>
  )
}
