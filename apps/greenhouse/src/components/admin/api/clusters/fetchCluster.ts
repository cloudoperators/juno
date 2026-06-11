/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Cluster } from "../../types/k8sTypes"

export const FETCH_CLUSTER_CACHE_KEY = "cluster"

export const fetchCluster = async ({
  apiClient,
  namespace,
  clusterName,
}: {
  apiClient: any
  namespace: string
  clusterName: string
}): Promise<Cluster> => apiClient.get(`/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/clusters/${clusterName}`)
