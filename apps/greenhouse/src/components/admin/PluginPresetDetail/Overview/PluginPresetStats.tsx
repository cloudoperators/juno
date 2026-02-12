/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from "react"
import { Stats } from "../../common/Stats/Stats"
import { PluginPreset } from "../../types/k8sTypes"

interface StatData {
  label: string
  value: number | string
  subtext?: string
  variant?: "success" | "warning" | "danger" | "default"
}

const calculatePluginPresetStats = (pluginPreset: PluginPreset): StatData[] => {
  const totalPlugins = pluginPreset.status?.totalPlugins || 0
  const readyPlugins = pluginPreset.status?.readyPlugins || 0
  const failedPlugins = pluginPreset.status?.failedPlugins || 0
  const pendingPlugins = totalPlugins - readyPlugins - failedPlugins
  const clusterCount = pluginPreset.status?.pluginStatuses?.length || 0

  return [
    {
      label: "Total Plugins",
      value: totalPlugins,
      subtext: clusterCount > 0 ? `across ${clusterCount} cluster${clusterCount !== 1 ? "s" : ""}` : undefined,
      variant: "default",
    },
    {
      label: "Ready Plugins",
      value: readyPlugins,
      variant: "success",
    },
    {
      label: "Failed Plugins",
      value: failedPlugins,
      variant: "danger",
    },
    {
      label: "Pending Plugins",
      value: pendingPlugins,
      variant: "warning",
    },
  ]
}

export const PluginPresetStats = ({ pluginPreset }: { pluginPreset: PluginPreset }) => {
  const stats = useMemo(() => calculatePluginPresetStats(pluginPreset), [pluginPreset])

  return <Stats title="Plugin Instance Health Distribution" data={stats} />
}
