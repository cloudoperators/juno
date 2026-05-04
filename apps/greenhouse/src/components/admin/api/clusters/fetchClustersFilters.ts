/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Filter } from "../../common/types"
import { PluginPreset } from "../../types/k8sTypes"
import { CLUSTER_TYPE_LABEL, FILTER_IDS, REGION_LABEL, SUPPORT_GROUP_LABEL } from "../../constants"

const getClusterTypeValues = (presets: PluginPreset[]) =>
  Array.from(
    new Set(
      presets.map((preset) => {
        return preset.metadata?.labels?.[CLUSTER_TYPE_LABEL]
      })
    )
  ).filter((value): value is string => !!value)

const getRegionValues = (presets: PluginPreset[]) =>
  Array.from(
    new Set(
      presets.map((preset) => {
        return preset.metadata?.labels?.[REGION_LABEL]
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
      id: FILTER_IDS.CLUSTER_TYPE,
      label: "Cluster",
      values: getClusterTypeValues(pluginPresets),
    },
    {
      id: FILTER_IDS.REGION,
      label: "Region",
      values: getRegionValues(pluginPresets),
    },
    {
      id: FILTER_IDS.SUPPORT_GROUP,
      label: "Support Group",
      values: getSupportGroupValues(pluginPresets),
    },
  ]
}

export const FETCH_CLUSTERS_FILTERS_CACHE_KEY = "clustersFilters"

export const fetchClustersFilters = async ({
  apiClient,
  namespace,
}: {
  apiClient: any
  namespace: string
}): Promise<Filter[]> => {
  const response = await apiClient.get(`/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/clusters`)
  return Array.isArray(response?.items) ? extractPluginPresetFilters(response.items) : []
}
