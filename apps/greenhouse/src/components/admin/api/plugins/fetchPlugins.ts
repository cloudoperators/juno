/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Plugin } from "../../types/k8sTypes"

export const FETCH_PLUGINS_CACHE_KEY = "plugins"

export const fetchPlugins = async ({
  apiClient,
  namespace,
  pluginPresetName,
}: {
  apiClient: any
  namespace: string
  pluginPresetName: string
}): Promise<Plugin[]> => {
  const response = await apiClient.get(`/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/plugins`, {
    params: {
      labelSelector: `greenhouse.sap/pluginpreset=${pluginPresetName}`,
    },
  })
  return Array.isArray(response?.items) ? response.items : []
}
