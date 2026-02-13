/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { JsonViewer, Stack } from "@cloudoperators/juno-ui-components"
import { PluginPreset } from "../../types/k8sTypes"
import YamlData from "../../common/YamlData"

interface ClusterSelectorProps {
  pluginPreset: PluginPreset
}

export const ClusterSelector: React.FC<ClusterSelectorProps> = ({ pluginPreset }) => {
  const clusterSelector = pluginPreset.spec?.clusterSelector

  return (
    <Stack gap="4" direction="vertical" className="flex-1">
      <h3>Cluster Selector</h3>
      {clusterSelector ? <YamlData value={clusterSelector} /> : <p>No cluster selector configured</p>}
    </Stack>
  )
}
