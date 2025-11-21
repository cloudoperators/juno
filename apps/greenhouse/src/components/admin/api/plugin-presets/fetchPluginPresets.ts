/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FilterSettings } from "../../common/Filters/types"
import { PluginPreset } from "../../types/k8sTypes"
import { isReady } from "../../utils"

const applyFilterSettings = (pluginPresets: PluginPreset[], filterSettings?: FilterSettings): PluginPreset[] => {
  if (filterSettings?.selectedFilters) {
    // filter by plugin preset definition
    const pluginPresetDefinitionValues = filterSettings.selectedFilters
      .filter((f) => f.id === "pluginPresetDefinition")
      .map((f) => f.value)

    if (pluginPresetDefinitionValues.length > 0) {
      pluginPresets = pluginPresets.filter((preset) => {
        const def = preset.spec?.plugin?.pluginDefinitionRef?.name || preset.spec?.plugin?.pluginDefinition
        return def && pluginPresetDefinitionValues.includes(def)
      })
    }
  }

  // filter by search term
  if (filterSettings?.searchTerm) {
    const searchTerm = filterSettings.searchTerm.toLowerCase()
    return pluginPresets.filter((preset) => {
      const presetName = preset.metadata?.name?.toLowerCase() || ""
      return presetName.includes(searchTerm)
    })
  }

  return pluginPresets
}

const applySortting = (pluginPresets: PluginPreset[]): PluginPreset[] => {
  return pluginPresets.sort((a, b) => {
    // First, sort by ready status (non-ready presets first)
    const aReady = isReady(a)
    const bReady = isReady(b)

    if (aReady !== bReady) {
      return aReady ? 1 : -1
    }

    // Then, sort alphabetically by name
    const aName = a.metadata?.name?.toLowerCase() || ""
    const bName = b.metadata?.name?.toLowerCase() || ""

    if (aName < bName) return -1
    if (aName > bName) return 1
    return 0
  })
}

export const fetchPluginPresets = async ({
  apiClient,
  namespace,
  filterSettings,
}: {
  apiClient: any
  namespace: string
  filterSettings?: FilterSettings
}): Promise<PluginPreset[]> => {
  const response = await apiClient.get(`/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/pluginpresets`)
  return Array.isArray(response?.items) ? applySortting(applyFilterSettings(response.items, filterSettings)) : []
}
