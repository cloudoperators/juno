/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PluginPreset } from "../../types/k8sTypes"
import { isReady } from "../../utils"

export interface PluginPresetStat {
  label: string
  value: number | string
  subtext?: string
  variant?: "success" | "warning" | "danger" | "default"
}

const getPluginPresetDefinitionValues = (presets: PluginPreset[]) =>
  Array.from(
    new Set(
      presets.map((preset) => {
        return preset.spec?.plugin?.pluginDefinitionRef.name || preset.spec?.plugin?.pluginDefinition
      })
    )
  ).filter((value): value is string => !!value)

export const FETCH_PLUGIN_PRESETS_STATS_CACHE_KEY = "pluginPresetsStats"

export const fetchPluginPresetsStats = async ({
  apiClient,
  namespace,
}: {
  apiClient: any
  namespace: string
}): Promise<PluginPresetStat[]> => {
  const response = await apiClient.get(`/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/pluginpresets`)
  const pluginPresets: PluginPreset[] = Array.isArray(response?.items) ? response.items : []

  const totalPresets = pluginPresets.length
  const uniqueDefinitions = getPluginPresetDefinitionValues(pluginPresets).length
  const readyPresets = pluginPresets.filter((preset) => isReady(preset)).length
  const failingPresets = pluginPresets.filter((preset) => !isReady(preset)).length

  return [
    { label: "Total Presets", value: totalPresets, variant: "default" },
    { label: "Plugin Definitions", value: uniqueDefinitions, variant: "default" },
    { label: "Ready Presets", value: readyPresets, subtext: `of ${totalPresets}`, variant: "success" },
    { label: "Failing Presets", value: failingPresets, subtext: `of ${totalPresets}`, variant: "danger" },
  ]
}
