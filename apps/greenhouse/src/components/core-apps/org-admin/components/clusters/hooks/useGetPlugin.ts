/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback } from "react"

import useClient from "./useClient"
import { Cluster, Plugin } from "../../../types/types"
import useStore from "../store"

export const useGetPlugins = () => {
  const namespace = useStore((state: any) => state.namespace)
  const { client: client } = useClient()
  const getPluginsforCluster = useCallback(
    async (cluster: Cluster): Promise<Plugin[]> => {
      let plugins: Plugin[] = []
      const greenhouseClusterLabelKey = "greenhouse.sap/cluster"

      if (!client || !namespace || !cluster?.metadata?.namespace) {
        return plugins
      }
      const labelselector = `${greenhouseClusterLabelKey}=${cluster.metadata!.name}`

      plugins = await client
        .get(`/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/plugins`, {
          params: {
            labelSelector: labelselector,
          },
        })
        .then((res: any) => {
          if (res.kind !== "PluginList") {
            console.debug("ERROR: Failed to get Plugins for cluster, did not get PluginList")
            return [] as Plugin[]
          }
          return res.items as Plugin[]
        })

      return plugins
    },
    [client, namespace]
  )

  return {
    getPluginsforCluster: getPluginsforCluster,
  }
}

export default useGetPlugins
