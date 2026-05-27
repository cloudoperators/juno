/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import {
  DataGridRow,
  DataGridCell,
  Icon,
  PopupMenu,
  PopupMenuOptions,
  PopupMenuItem,
} from "@cloudoperators/juno-ui-components"
import { useSuspenseQuery } from "@tanstack/react-query"
import { useRouteContext, useSearch, useNavigate } from "@tanstack/react-router"
import { fetchClusters, FETCH_CLUSTERS_CACHE_KEY } from "../../../api/clusters/fetchClusters"
import { extractFilterSettingsFromSearchParams } from "../../../utils"
import { EmptyDataGridRow } from "../../../common/EmptyDataGridRow"
import { Cluster } from "../../../types/k8sTypes"
import { getReadyCondition, isReady } from "../../../utils"
import {
  CLUSTER_TYPE_LABEL,
  CONNECTIVITY_LABEL,
  NO_VALUE_DEFAULT,
  REGION_LABEL,
  SUPPORT_GROUP_LABEL,
} from "../../../constants"

interface DataRowsProps {
  colSpan: number
}

export const DataRows = ({ colSpan }: DataRowsProps) => {
  const { apiClient, user } = useRouteContext({ from: "/admin/clusters/" })
  const search = useSearch({ from: "/admin/clusters/" })
  const navigate = useNavigate()
  const filterSettings = extractFilterSettingsFromSearchParams(search)

  const { data: clusters } = useSuspenseQuery({
    queryKey: [FETCH_CLUSTERS_CACHE_KEY, user.organization, filterSettings],
    queryFn: () => fetchClusters({ apiClient, namespace: user.organization, filterSettings }),
  })

  if (!clusters || clusters.length === 0) {
    return <EmptyDataGridRow colSpan={colSpan}>No clusters found.</EmptyDataGridRow>
  }

  const handleRowClick = (clusterName: string) => {
    navigate({
      to: "/admin/clusters/$clusterName",
      params: { clusterName: clusterName },
    })
  }

  return (
    <>
      {clusters.map((preset: Cluster, index) => (
        <DataGridRow
          key={`${preset.metadata?.name}-${index}`}
          onClick={() => handleRowClick(preset.metadata?.name || "")}
        >
          {/* Status */}
          <DataGridCell>
            <Icon
              icon={isReady(preset) ? "checkCircle" : "error"}
              color={isReady(preset) ? "text-theme-success" : "text-theme-danger"}
              title={isReady(preset) ? "Ready" : "Not Ready"}
            />
          </DataGridCell>
          {/* Name */}
          <DataGridCell>{preset.metadata?.name || NO_VALUE_DEFAULT}</DataGridCell>
          {/* Region */}
          <DataGridCell>{preset.metadata?.labels?.[REGION_LABEL] || NO_VALUE_DEFAULT}</DataGridCell>
          {/* Cluster Type */}
          <DataGridCell>{preset.metadata?.labels?.[CLUSTER_TYPE_LABEL] || NO_VALUE_DEFAULT}</DataGridCell>
          {/* Support Group */}
          <DataGridCell>{preset.metadata?.labels?.[SUPPORT_GROUP_LABEL] || NO_VALUE_DEFAULT}</DataGridCell>
          {/* Version */}
          <DataGridCell>{preset.status?.kubernetesVersion || NO_VALUE_DEFAULT}</DataGridCell>
          {/* Connectivity */}
          <DataGridCell>{preset.metadata?.annotations?.[CONNECTIVITY_LABEL] || NO_VALUE_DEFAULT}</DataGridCell>
          {/* Message */}
          <DataGridCell>{getReadyCondition(preset)?.message || NO_VALUE_DEFAULT}</DataGridCell>
          {/* Actions */}
          <DataGridCell nowrap>
            <PopupMenu onClick={(e) => e.stopPropagation()}>
              <PopupMenuOptions>
                <PopupMenuItem label="View Details" onClick={() => handleRowClick(preset.metadata?.name || "")} />
              </PopupMenuOptions>
            </PopupMenu>
          </DataGridCell>
        </DataGridRow>
      ))}
    </>
  )
}
