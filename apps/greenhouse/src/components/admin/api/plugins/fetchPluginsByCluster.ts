/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Plugin } from "../../types/k8sTypes"

export const FETCH_PLUGINS_BY_CLUSTER_CACHE_KEY = "pluginsByCluster"

export const fetchPluginsByCluster = async ({
  apiClient,
  namespace,
  clusterName,
}: {
  apiClient: any
  namespace: string
  clusterName: string
}): Promise<Plugin[]> => {
  const encodedClusterLabel = `greenhouse.sap/cluster=${encodeURIComponent(clusterName)}`
  const response = await apiClient.get(`/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/plugins`, {
    params: {
      labelSelector: encodedClusterLabel,
    },
  })
  return Array.isArray(response?.items) ? response.items : []
}
