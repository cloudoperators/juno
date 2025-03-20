/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Cluster } from "../../../types/types"
import useStore from "../store"
import useApi from "./useApi"

export type ClusterApiResponse = {
  ok: boolean
  message: string
  response?: Cluster
}

export const useClusterApi = () => {
  const { get, create, update, deleteObject, watch } = useApi()
  const namespace = useStore((state: any) => state.namespace)
  const modifyClusters = useStore((state: any) => state.modifyClusters)
  const deleteClusters = useStore((state: any) => state.deleteClusters)

  const getCluster = (cluster: Cluster): Promise<ClusterApiResponse> => {
    return get<Cluster>(
      `/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/clusters`,
      cluster
    ) as Promise<ClusterApiResponse>
  }

  const createCluster = (cluster: Cluster): Promise<ClusterApiResponse> => {
    return create<Cluster>(
      `/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/clusters`,
      cluster
    ) as Promise<ClusterApiResponse>
  }

  const updateCluster = (cluster: Cluster): Promise<ClusterApiResponse> => {
    return update<Cluster>(
      `/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/clusters`,
      cluster
    ) as Promise<ClusterApiResponse>
  }

  const deleteCluster = (cluster: Cluster): Promise<ClusterApiResponse> => {
    return deleteObject<Cluster>(
      `/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/clusters`,
      cluster
    ) as Promise<ClusterApiResponse>
  }

  const watchClusters = () => {
    return watch<Cluster>(
      `/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/clusters`,
      "Cluster",
      modifyClusters,
      modifyClusters,
      deleteClusters
    )
  }

  return {
    getCluster,
    createCluster,
    updateCluster,
    deleteCluster,
    watchClusters,
  }
}

export default useClusterApi
