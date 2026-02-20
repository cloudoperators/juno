/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const annotateResource = async ({
  apiClient,
  resourceType,
  resourceName,
  namespace,
  annotations,
}: {
  apiClient: any
  resourceType: string
  resourceName: string
  namespace: string
  annotations: Record<string, string>
}): Promise<any> => {
  const apiGroup = "greenhouse.sap"
  const apiVersion = "v1alpha1"
  const url = `/apis/${apiGroup}/${apiVersion}/namespaces/${namespace}/${resourceType}/${resourceName}`

  const patchData = {
    metadata: {
      annotations: annotations,
    },
  }

  return await apiClient.patch(url, patchData)
}
