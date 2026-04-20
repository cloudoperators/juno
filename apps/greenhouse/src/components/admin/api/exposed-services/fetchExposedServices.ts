/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FilterSettings } from "../../common/types"
import { PluginPreset, Plugin } from "../../types/k8sTypes"
import { CLUSTER_LABEL, FILTER_IDS, SUPPORT_GROUP_LABEL, EXPOSED_SERVICES_LABEL } from "../../constants"

export const FETCH_EXPOSED_SERVICES_CACHE_KEY = "exposedServices"

const applyFilterSettings = (exposedServices: PluginPreset[], filterSettings?: FilterSettings): PluginPreset[] => {
  if (filterSettings?.selectedFilters) {
    // Filter by cluster
    const clusterValues = filterSettings.selectedFilters.filter((f) => f.id === FILTER_IDS.CLUSTER).map((f) => f.value)

    if (clusterValues.length > 0) {
      exposedServices = exposedServices.filter((preset) => {
        const def = preset.metadata?.labels?.[CLUSTER_LABEL]
        return def && clusterValues.includes(def)
      })
    }

    // Filter by support group
    const supportGroupValues = filterSettings.selectedFilters
      .filter((f) => f.id === FILTER_IDS.SUPPORT_GROUP)
      .map((f) => f.value)

    if (supportGroupValues.length > 0) {
      exposedServices = exposedServices.filter((preset) => {
        const supportGroup = preset.metadata?.labels?.[SUPPORT_GROUP_LABEL]
        return supportGroup && supportGroupValues.includes(supportGroup)
      })
    }
  }

  // Filter by search term
  if (filterSettings?.searchTerm) {
    const searchTerm = filterSettings.searchTerm.toLowerCase()
    return exposedServices.filter((preset) => {
      const presetName = preset.metadata?.name?.toLowerCase() || ""
      return presetName.includes(searchTerm)
    })
  }

  return exposedServices
}

const applySorting = (exposedServices: PluginPreset[]): PluginPreset[] => {
  return exposedServices.sort((a, b) => {
    // Sort alphabetically by name
    const aName = a.metadata?.name?.toLowerCase() || ""
    const bName = b.metadata?.name?.toLowerCase() || ""

    if (aName < bName) return -1
    if (aName > bName) return 1
    return 0
  })
}

export const fetchExposedServices = async ({
  apiClient,
  namespace,
  filterSettings,
}: {
  apiClient: any
  namespace: string
  filterSettings?: FilterSettings
}): Promise<Plugin[]> => {
  // Filter only by plugins that have exposed services
  const response = await apiClient.get(`/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/plugins`, {
    params: {
      labelSelector: EXPOSED_SERVICES_LABEL,
    },
  })
  return Array.isArray(response?.items) ? applySorting(applyFilterSettings(response.items, filterSettings)) : []
}
