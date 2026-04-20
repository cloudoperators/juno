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

  const { data: serviceData } = useQuery({
    queryKey: [FETCH_EXPOSED_SERVICES_CACHE_KEY, user.organization, filterSettings],
    queryFn: () =>
      fetchExposedServices({
        apiClient,
        namespace: user.organization,
        filterSettings,
      }),
  })

  if (!serviceData || serviceData.length === 0) {
    return <EmptyDataGridRow colSpan={colSpan}>No exposed services found.</EmptyDataGridRow>
  }

  const NO_VALUE_DEFAULT = "--"

  return (
    <>
      {serviceData.map((service) => {
        const clusterName = service.spec?.clusterName || NO_VALUE_DEFAULT
        const pluginName = service.metadata?.name || NO_VALUE_DEFAULT
        const supportGroup = service.metadata?.labels?.[SUPPORT_GROUP_LABEL] || NO_VALUE_DEFAULT
        const exposedServices = service.status?.exposedServices || {}

        return (
          <DataGridRow key={`${pluginName}`}>
            {Object.entries(exposedServices).map(([url, serviceData]) => (
              <React.Fragment key={url}>
                {/* Name */}
                <DataGridCell className="inline-block">
                  {url ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${serviceData.name} in a new tab`}
                      className="cursor-pointer"
                    >
                      <div className="inline-block mr-2">{serviceData.name || ""}</div>
                      <Icon size="18" icon="openInNew" className="inline-block" />
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
              </React.Fragment>
            ))}
          </DataGridRow>
        )
      })}
    </>
  )
}
