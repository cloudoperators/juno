/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { isReady } from "../../utils"
import { FilterSettings } from "../../common/types"
import { Cluster } from "../../types/k8sTypes"
import { CLUSTER_TYPE_LABEL, FILTER_IDS, REGION_LABEL, SUPPORT_GROUP_LABEL } from "../../constants"

// Dynamic filtering. Maps a filter ID to the cluster metadata label it filters on.
const CLUSTER_FILTER_LABELS: Record<string, string> = {
  [FILTER_IDS.CLUSTER_TYPE]: CLUSTER_TYPE_LABEL,
  [FILTER_IDS.REGION]: REGION_LABEL,
  [FILTER_IDS.SUPPORT_GROUP]: SUPPORT_GROUP_LABEL,
}

const applyFilterSettings = (clusters: Cluster[], filterSettings?: FilterSettings): Cluster[] => {
  let result = clusters

  if (filterSettings?.selectedFilters?.length) {
    const valuesByFilterId = filterSettings.selectedFilters.reduce<Record<string, string[]>>((acc, filter) => {
      ;(acc[filter.id] ||= []).push(filter.value)
      return acc
    }, {})

    for (const [filterId, label] of Object.entries(CLUSTER_FILTER_LABELS)) {
      const values = valuesByFilterId[filterId]
      if (!values?.length) continue
      result = result.filter((cluster) => {
        const labelValue = cluster.metadata?.labels?.[label]
        return !!labelValue && values.includes(labelValue)
      })
    }
  }

  // filter by search term
  if (filterSettings?.searchTerm) {
    const searchTerm = filterSettings.searchTerm.toLowerCase()
    result = result.filter((cluster) => (cluster.metadata?.name?.toLowerCase() || "").includes(searchTerm))
  }

  return result
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
