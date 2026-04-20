/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Filter } from "../../common/types"
import { PluginPreset } from "../../types/k8sTypes"
import { FILTER_IDS, SUPPORT_GROUP_LABEL, CLUSTER_LABEL, EXPOSED_SERVICES_LABEL } from "../../constants"

const getClusterValues = (services: PluginPreset[]) =>
  Array.from(
    new Set(
      services.map((service) => {
        return service.metadata?.labels?.[CLUSTER_LABEL]
      })
    )
  ).filter((value): value is string => !!value)

const getSupportGroupValues = (services: PluginPreset[]) =>
  Array.from(
    new Set(
      services.map((service) => {
        return service.metadata?.labels?.[SUPPORT_GROUP_LABEL]
      })
    )
  ).filter((value): value is string => !!value)

const extractFilters = (exposedServices: PluginPreset[]) => {
  return [
    {
      id: FILTER_IDS.CLUSTER,
      label: "Cluster",
      values: getClusterValues(exposedServices),
    },
    {
      id: FILTER_IDS.SUPPORT_GROUP,
      label: "Support Group",
      values: getSupportGroupValues(exposedServices),
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
  const response = await apiClient.get(`/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/plugins`, {
    params: {
      labelSelector: EXPOSED_SERVICES_LABEL,
    },
  })
  return Array.isArray(response?.items) ? extractFilters(response.items) : []
}
