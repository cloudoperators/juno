/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import {
  DataGrid,
  DataGridRow,
  DataGridHeadCell,
  DataGridCell,
  Pill,
  Stack,
  ContentHeading,
} from "@cloudoperators/juno-ui-components"

import { formatAge } from "../../utils"
import YamlViewer from "../../common/YamlViewer"
import { Cluster } from "../../types/k8sTypes"
import { CONNECTIVITY_LABEL, NO_VALUE_DEFAULT, SUPPORT_GROUP_LABEL } from "../../constants"

interface DetailsProps {
  clusters: Cluster
}

interface NodesStatus {
  ready: number
  total: number
}

const NodeStatus: React.FC<{ nodes: NodesStatus }> = ({ nodes }) => {
  const { ready, total } = nodes
  const notReady = total - ready

  // If not ready nodes exist, make the text red
  const notReadyColor = notReady > 1 ? "text-theme-danger" : ""

  return (
    <div className="inline-block">
      {total} nodes ({ready} ready, <span className={notReadyColor}>{notReady} not ready</span>)
    </div>
  )
}

export const Details: React.FC<DetailsProps> = ({ clusters }) => (
  <Stack gap="4" direction="vertical" className="flex-1">
    <ContentHeading>Details</ContentHeading>
    <DataGrid columns={2} minContentColumns={[0]}>
      <DataGridRow>
        <DataGridHeadCell nowrap>Name</DataGridHeadCell>
        <DataGridCell>{clusters.metadata?.name ?? NO_VALUE_DEFAULT}</DataGridCell>
      </DataGridRow>
      <DataGridRow>
        <DataGridHeadCell nowrap>Age</DataGridHeadCell>
        <DataGridCell>{formatAge(clusters.metadata?.creationTimestamp || 0) ?? NO_VALUE_DEFAULT}</DataGridCell>
      </DataGridRow>
      <DataGridRow>
        <DataGridHeadCell nowrap>Version</DataGridHeadCell>
        <DataGridCell>{clusters.status?.kubernetesVersion ?? NO_VALUE_DEFAULT}</DataGridCell>
      </DataGridRow>
      <DataGridRow>
        <DataGridHeadCell nowrap>Connectivity</DataGridHeadCell>
        <DataGridCell>{clusters.metadata?.annotations?.[CONNECTIVITY_LABEL]}</DataGridCell>
      </DataGridRow>
      <DataGridRow>
        <DataGridHeadCell nowrap>Support Group</DataGridHeadCell>
        <DataGridCell>{clusters.metadata?.labels?.[SUPPORT_GROUP_LABEL] ?? NO_VALUE_DEFAULT}</DataGridCell>
      </DataGridRow>
      {clusters.metadata?.labels && Object.keys(clusters.metadata.labels).length > 0 && (
        <DataGridRow>
          <DataGridHeadCell nowrap>Labels</DataGridHeadCell>
          <DataGridCell>
            <Stack gap="2" wrap={true}>
              {Object.entries(clusters.metadata.labels).map(([key, value], index) => (
                <Pill key={key} pillKey={key} pillValue={value} />
              ))}
            </Stack>
          </DataGridCell>
        </DataGridRow>
      )}
      <DataGridRow>
        <DataGridHeadCell nowrap>Annotations</DataGridHeadCell>
        <DataGridCell>
          {clusters.metadata?.annotations && Object.keys(clusters.metadata.annotations).length > 0 ? (
            <YamlViewer value={clusters.metadata?.annotations} />
          ) : (
            "No Annotations"
          )}
        </DataGridCell>
      </DataGridRow>
      <DataGridRow>
        <DataGridHeadCell nowrap>Nodes</DataGridHeadCell>
        <DataGridCell>
          <NodeStatus
            nodes={{
              ready: clusters?.status?.nodes?.ready ?? 0,
              total: clusters?.status?.nodes?.total ?? 0,
            }}
          />
        </DataGridCell>
      </DataGridRow>
    </DataGrid>
  </Stack>
)
