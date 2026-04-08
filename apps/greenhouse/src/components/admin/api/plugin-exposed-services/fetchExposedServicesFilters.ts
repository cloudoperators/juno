/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Filter } from "../../common/types"
import { FILTER_IDS } from "../../constants"
import { PluginPreset } from "../../types/k8sTypes"

const getClusterValues = (services: PluginPreset[]) =>
  Array.from(
    new Set(
      services.map((service) => {
        return service.metadata?.labels?.["greenhouse.sap/cluster"] //CORRECT?
      })
    )
  ).filter((value): value is string => !!value)

const getSupportGroupValues = (services: PluginPreset[]) =>
  Array.from(
    new Set(
      services.map((service) => {
        return service.metadata?.labels?.["greenhouse.sap/owned-by"] //CORRECT?
      })
    )
  ).filter((value): value is string => !!value)

const extractPluginPresetFilters = (pluginservices: PluginPreset[]) => {
  return [
    {
      id: FILTER_IDS.CLUSTER,
      label: "Cluster",
      values: getClusterValues(pluginservices),
    },
    {
      id: FILTER_IDS.SUPPORT_GROUP,
      label: "Support Group",
      values: getSupportGroupValues(pluginservices),
    },
  ]
}

export const FETCH_EXPOSED_SERVICES_FILTERS_CACHE_KEY = "exposedServicesFilters"

export const fetchExposedServicesFilters = async ({
  apiClient,
  namespace,
}: {
  apiClient: any
  namespace: string
}): Promise<Filter[]> => {
  // Filter only by plugins that have exposed services
  const labelSelector = "greenhouse.sap/plugin-exposed-services=true"

  const response = await apiClient.get(`/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/plugins`, {
    params: {
      labelSelector,
    },
  })
  return Array.isArray(response?.items) ? extractPluginPresetFilters(response.items) : []
}
