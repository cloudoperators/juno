/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { isReady } from "../../utils"
import { FilterSettings } from "../../common/types"
import { Cluster } from "../../types/k8sTypes"
import { CLUSTER_TYPE_LABEL, FILTER_IDS, REGION_LABEL, SUPPORT_GROUP_LABEL } from "../../constants"

const applyFilterSettings = (clusters: Cluster[], filterSettings?: FilterSettings): Cluster[] => {
  if (filterSettings?.selectedFilters) {
    // filter by cluster type
    const clusterTypeValues = filterSettings.selectedFilters
      .filter((f) => f.id === FILTER_IDS.CLUSTER_TYPE)
      .map((f) => f.value)
    if (clusterTypeValues.length > 0) {
      clusters = clusters.filter((preset) => {
        const clusterType = preset.metadata?.labels?.[CLUSTER_TYPE_LABEL]
        return clusterType && clusterTypeValues.includes(clusterType)
      })
    }

    // filter by region
    const regionValues = filterSettings.selectedFilters.filter((f) => f.id === FILTER_IDS.REGION).map((f) => f.value)
    if (regionValues.length > 0) {
      clusters = clusters.filter((preset) => {
        const region = preset.metadata?.labels?.[REGION_LABEL]
        return region && regionValues.includes(region)
      })
    }

    // filter by support group
    const supportGroupValues = filterSettings.selectedFilters
      .filter((f) => f.id === FILTER_IDS.SUPPORT_GROUP)
      .map((f) => f.value)
    if (supportGroupValues.length > 0) {
      clusters = clusters.filter((preset) => {
        const supportGroup = preset.metadata?.labels?.[SUPPORT_GROUP_LABEL]
        return supportGroup && supportGroupValues.includes(supportGroup)
      })
    }
  }

  // filter by search term
  if (filterSettings?.searchTerm) {
    const searchTerm = filterSettings.searchTerm.toLowerCase()
    return clusters.filter((preset) => {
      const presetName = preset.metadata?.name?.toLowerCase() || ""
      return presetName.includes(searchTerm)
    })
  }

  return clusters
}

const applySorting = (clusters: Cluster[]): Cluster[] => {
  return clusters.sort((a, b) => {
    // First, sort by ready status (non-ready clusters first)
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
}): Promise<Cluster[]> => {
  const response = await apiClient.get(`/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/clusters`)
  const clusters = Array.isArray(response?.items) ? response.items.slice() : []
  return applySorting(applyFilterSettings(clusters, filterSettings))
}
