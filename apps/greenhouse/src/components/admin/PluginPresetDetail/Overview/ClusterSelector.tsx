/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack, ContentHeading } from "@cloudoperators/juno-ui-components"
import { PluginPreset } from "../../types/k8sTypes"
import YamlViewer from "../../common/YamlViewer"

interface ClusterSelectorProps {
  pluginPreset: PluginPreset
}

export const ClusterSelector: React.FC<ClusterSelectorProps> = ({ pluginPreset }) => {
  const clusterSelector = pluginPreset.spec?.clusterSelector

  return (
    <Stack gap="4" direction="vertical" className="flex-1">
      <ContentHeading>Cluster Selector</ContentHeading>
      {clusterSelector ? <YamlViewer value={clusterSelector} /> : <p>No cluster selector configured</p>}
    </Stack>
  )
}
