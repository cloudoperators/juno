/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Plugin } from "../../types/k8sTypes"

export const FETCH_PLUGIN_CACHE_KEY = "plugin"

export const fetchPlugin = async ({
  apiClient,
  namespace,
  pluginName,
}: {
  apiClient: any
  namespace: string
  pluginName: string
}): Promise<Plugin> => apiClient.get(`/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/plugins/${pluginName}`)
