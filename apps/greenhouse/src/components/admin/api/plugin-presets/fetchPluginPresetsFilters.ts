/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Filter } from "../../common/Filters/types"
import { PluginPreset } from "../../types/k8sTypes"

const getPluginPresetDefinitionValues = (presets: PluginPreset[]) =>
  Array.from(
    new Set(
      presets.map((preset) => {
        return preset.spec?.plugin?.pluginDefinitionRef.name || preset.spec?.plugin?.pluginDefinition
      })
    )
  ).filter((value): value is string => !!value)

const extractPluginPresetFilters = (pluginPresets: PluginPreset[]) => {
  return [
    {
      id: "pluginPresetDefinition",
      label: "Plugin Preset Definition",
      values: getPluginPresetDefinitionValues(pluginPresets),
    },
  ]
}

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
