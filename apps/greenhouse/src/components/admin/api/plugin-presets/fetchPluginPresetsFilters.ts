/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Filter } from "../../common/types"
import { FILTER_IDS, SUPPORT_GROUP_LABEL } from "../../constants"
import { PluginPreset } from "../../types/k8sTypes"

const getPluginPresetDefinitionValues = (presets: PluginPreset[]) =>
  Array.from(
    new Set(
      presets.map((preset) => {
        return preset.spec?.plugin?.pluginDefinitionRef.name || preset.spec?.plugin?.pluginDefinition
      })
    )
  ).filter((value): value is string => !!value)

const getSupportGroupValues = (presets: PluginPreset[]) =>
  Array.from(
    new Set(
      presets.map((preset) => {
        return preset.metadata?.labels?.[SUPPORT_GROUP_LABEL]
      })
    )
  ).filter((value): value is string => !!value)

const extractPluginPresetFilters = (pluginPresets: PluginPreset[]) => {
  return [
    {
      id: FILTER_IDS.PLUGIN_PRESET_DEFINITION,
      label: "Plugin Preset Definition",
      values: getPluginPresetDefinitionValues(pluginPresets),
    },
    {
      id: FILTER_IDS.SUPPORT_GROUP,
      label: "Support Group",
      values: getSupportGroupValues(pluginPresets),
    },
  ]
}

export const FETCH_PLUGIN_PRESETS_FILTERS_CACHE_KEY = "pluginPresetsFilters"

export const fetchPluginPresetsFilters = async ({
  apiClient,
  namespace,
}: {
  apiClient: any
  namespace: string
}): Promise<Filter[]> => {
  const response = await apiClient.get(`/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/pluginpresets`)
  return Array.isArray(response?.items) ? extractPluginPresetFilters(response.items) : []
}
