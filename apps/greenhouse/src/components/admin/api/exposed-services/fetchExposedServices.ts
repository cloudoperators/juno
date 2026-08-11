/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FilterSettings } from "../../common/types"
import { PluginsWithExposedServices } from "../../types/k8sTypes"
import { NO_VALUE_DEFAULT, FILTER_IDS, SUPPORT_GROUP_LABEL, EXPOSED_SERVICES_LABEL_SELECTOR } from "../../constants"

export const FETCH_EXPOSED_SERVICES_CACHE_KEY = "exposedServices"

export interface FlattenedExposedServices {
  serviceUrl: string // URL of the exposed service
  serviceName: string
  clusterName: string
  pluginName: string
  supportGroup: string
}

// Function to flatten plugins and extract exposed services
const flattenExposedServices = (plugins: PluginsWithExposedServices[]): FlattenedExposedServices[] => {
  const flattenedServices: FlattenedExposedServices[] = []

  plugins.forEach((plugin) => {
    const clusterName = plugin.spec?.clusterName || NO_VALUE_DEFAULT
    const pluginName = plugin.metadata?.name || NO_VALUE_DEFAULT
    const supportGroup = plugin.metadata?.labels?.[SUPPORT_GROUP_LABEL] || NO_VALUE_DEFAULT
    const exposedServices = plugin.status?.exposedServices || {}

    Object.entries(exposedServices).forEach(([url, service]) => {
      flattenedServices.push({
        serviceUrl: url,
        serviceName: service.name || NO_VALUE_DEFAULT,
        clusterName: clusterName,
        pluginName: pluginName,
        supportGroup: supportGroup,
      })
    })
  })

  return flattenedServices
}

// Apply filter settings and sort services
const applyFilterAndSortSettings = (
  flattenedServices: FlattenedExposedServices[],
  filterSettings?: FilterSettings
): FlattenedExposedServices[] => {
  if (filterSettings?.selectedFilters) {
    // Filter by cluster
    const clusterValues = filterSettings.selectedFilters.filter((f) => f.id === FILTER_IDS.CLUSTER).map((f) => f.value)
    if (clusterValues.length > 0) {
      flattenedServices = flattenedServices.filter((service) => clusterValues.includes(service.clusterName))
    }

    // Filter by plugin name
    const pluginValues = filterSettings.selectedFilters.filter((f) => f.id === FILTER_IDS.PLUGIN).map((f) => f.value)
    if (pluginValues.length > 0) {
      flattenedServices = flattenedServices.filter((service) => pluginValues.includes(service.pluginName))
    }

    // Filter by support group
    const supportGroupValues = filterSettings.selectedFilters
      .filter((f) => f.id === FILTER_IDS.SUPPORT_GROUP)
      .map((f) => f.value)
    if (supportGroupValues.length > 0) {
      flattenedServices = flattenedServices.filter((service) => supportGroupValues.includes(service.supportGroup))
    }
  }

  // Filter by search term
  if (filterSettings?.searchTerm) {
    const searchTerm = filterSettings.searchTerm.toLowerCase()
    flattenedServices = flattenedServices.filter((service) => service.serviceName.toLowerCase().includes(searchTerm))
  }

  // Sort services alphabetically by service name
  flattenedServices.sort((a, b) => a.serviceName.localeCompare(b.serviceName))

  return flattenedServices
}

export const fetchExposedServices = async ({
  apiClient,
  namespace,
  filterSettings,
}: {
  apiClient: any
  namespace: string
  filterSettings?: FilterSettings
}): Promise<FlattenedExposedServices[]> => {
  const response = await apiClient.get(`/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/plugins`, {
    params: {
      labelSelector: EXPOSED_SERVICES_LABEL_SELECTOR,
    },
  })

  const flattenedServices = flattenExposedServices(Array.isArray(response?.items) ? response.items : [])

  return applyFilterAndSortSettings(flattenedServices, filterSettings)
}
