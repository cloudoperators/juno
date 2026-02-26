/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PluginPreset } from "../../types/k8sTypes"

export const FETCH_PLUGIN_PRESET_CACHE_KEY = "pluginPreset"

export const fetchPluginPreset = async ({
  apiClient,
  namespace,
  pluginPresetName,
}: {
  apiClient: any
  namespace: string
  pluginPresetName: string
}): Promise<PluginPreset> =>
  apiClient.get(`/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/pluginpresets/${pluginPresetName}`)
