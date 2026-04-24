/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Filter } from "../../common/types"
import { PluginsWithExposedServices } from "../../types/k8sTypes"
import { FILTER_IDS, SUPPORT_GROUP_LABEL, EXPOSED_SERVICES_LABEL_SELECTOR } from "../../constants"

const getClusterValues = (pluginWithExposedServices: PluginsWithExposedServices[]) =>
  Array.from(
    new Set(
      pluginWithExposedServices.map((plugin) => {
        return plugin.spec?.clusterName
      })
    )
  ).filter((value): value is string => !!value)

const getPluginValues = (pluginWithExposedServices: PluginsWithExposedServices[]) =>
  Array.from(
    new Set(
      pluginWithExposedServices.map((plugin) => {
        return plugin.metadata?.name
      })
    )
  ).filter((value): value is string => !!value)

const getSupportGroupValues = (pluginWithExposedServices: PluginsWithExposedServices[]) =>
  Array.from(
    new Set(
      pluginWithExposedServices.map((plugin) => {
        return plugin.metadata?.labels?.[SUPPORT_GROUP_LABEL]
      })
    )
  ).filter((value): value is string => !!value)

const extractFilters = (pluginsWithExposedServices: PluginsWithExposedServices[]) => {
  return [
    {
      id: FILTER_IDS.CLUSTER,
      label: "Cluster",
      values: getClusterValues(pluginsWithExposedServices),
    },
    {
      id: FILTER_IDS.PLUGIN,
      label: "Plugin",
      values: getPluginValues(pluginsWithExposedServices),
    },
    {
      id: FILTER_IDS.SUPPORT_GROUP,
      label: "Support Group",
      values: getSupportGroupValues(pluginsWithExposedServices),
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
      labelSelector: EXPOSED_SERVICES_LABEL_SELECTOR,
    },
  })
  return Array.isArray(response?.items) ? extractFilters(response.items) : []
}
