/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FilterSettings } from "../../PluginPresets/PluginPresetsFilter"
import { PluginPreset } from "../../types/k8sTypes"
import { isReady } from "../../utils"

const applyFilterSettings = (pluginPresets: PluginPreset[], filterSettings?: FilterSettings): PluginPreset[] => {
  // filter plugin presets by search term
  if (filterSettings?.searchTerm) {
    return pluginPresets.filter((preset) => {
      if (!filterSettings?.searchTerm) return true

      const searchTerm = filterSettings.searchTerm.toLowerCase()
      const presetName = preset.metadata?.name?.toLowerCase() || ""
      const pluginDefinition = (
        preset.spec?.plugin?.pluginDefinitionRef?.name ||
        preset.spec?.plugin?.pluginDefinition ||
        ""
      ).toLowerCase()

      return presetName.includes(searchTerm) || pluginDefinition.includes(searchTerm)
    })
  }
  return pluginPresets
}

const applySortting = (pluginPresets: PluginPreset[], sortBy?: string, sortOrder?: "asc" | "desc"): PluginPreset[] => {
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
