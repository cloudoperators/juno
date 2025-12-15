/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PluginPreset } from "../types/k8sTypes"

export const fetchPluginPresets = async (client: any, namespace: string): Promise<PluginPreset[]> => {
  const response = await client.get(`/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/pluginpresets`)

  return response.items || []
}
