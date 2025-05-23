/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Button, DataGridCell, DataGridHeadCell, DataGridRow, Stack } from "@cloudoperators/juno-ui-components"
import React from "react"
// @ts-expect-error TS(2792): Cannot find module '../types/types'. Did you mean ... Remove this comment to see the full error message
import { Plugin } from "../types/types"

interface ClusterPluginListProps {
  // cluster: Cluster;
  plugins: Plugin[]
}

const ClusterPluginList: React.FC<ClusterPluginListProps> = (props: ClusterPluginListProps) => {
  let pluginNames = ""

  props.plugins.map((plugin: Plugin) => {
    pluginNames += plugin.metadata!.name + ", "
  })
  return (
    props.plugins.length > 0 && (
      <DataGridRow>
        <DataGridHeadCell>Enabled Plugins</DataGridHeadCell>
        <DataGridCell>
          <Stack gap="2" alignment="start" wrap={true}>
            {props.plugins.map((plugin: Plugin) => {
              return (
                <Button
                  key={plugin.metadata!.name}
                  style={{ cursor: "default" }}
                  size="small"
                  onClick={() => console.debug("go to plugin config page of " + plugin.metadata!.name)}
                >
                  {plugin.metadata!.name}
                </Button>
              )
            })}
          </Stack>
        </DataGridCell>
      </DataGridRow>
    )
  )
}

export default ClusterPluginList
