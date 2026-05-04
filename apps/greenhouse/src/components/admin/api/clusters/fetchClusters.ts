/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FilterSettings } from "../../common/types"
import { CLUSTER_TYPE_LABEL, FILTER_IDS, REGION_LABEL, SUPPORT_GROUP_LABEL } from "../../constants"
import { PluginPreset } from "../../types/k8sTypes"
import { isReady } from "../../utils"

const applyFilterSettings = (pluginPresets: PluginPreset[], filterSettings?: FilterSettings): PluginPreset[] => {
  if (filterSettings?.selectedFilters) {
    // filter by plugin preset definition
    const clusterTypeValues = filterSettings.selectedFilters
      .filter((f) => f.id === FILTER_IDS.CLUSTER_TYPE)
      .map((f) => f.value)

    if (clusterTypeValues.length > 0) {
      pluginPresets = pluginPresets.filter((preset) => {
        const clusterType = preset.metadata?.labels?.[CLUSTER_TYPE_LABEL]
        return clusterType && clusterTypeValues.includes(clusterType)
      })
    }

    const regionValues = filterSettings.selectedFilters.filter((f) => f.id === FILTER_IDS.REGION).map((f) => f.value)

    if (regionValues.length > 0) {
      pluginPresets = pluginPresets.filter((preset) => {
        const region = preset.metadata?.labels?.[REGION_LABEL]
        return region && regionValues.includes(region)
      })
    }

    // filter by support group
    const supportGroupValues = filterSettings.selectedFilters
      .filter((f) => f.id === FILTER_IDS.SUPPORT_GROUP)
      .map((f) => f.value)

    if (supportGroupValues.length > 0) {
      pluginPresets = pluginPresets.filter((preset) => {
        const supportGroup = preset.metadata?.labels?.[SUPPORT_GROUP_LABEL]
        return supportGroup && supportGroupValues.includes(supportGroup)
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

const applySorting = (pluginPresets: PluginPreset[]): PluginPreset[] => {
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

export const FETCH_CLUSTERS_CACHE_KEY = "clusters"

export const fetchClusters = async ({
  apiClient,
  namespace,
  filterSettings,
}: {
  apiClient: any
  namespace: string
  filterSettings?: FilterSettings
}): Promise<PluginPreset[]> => {
  const response = await apiClient.get(`/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/clusters`)
  return Array.isArray(response?.items) ? applySorting(applyFilterSettings(response.items, filterSettings)) : []
}
