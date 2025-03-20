/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback } from "react"
import useClient from "./useClient"
import { usePluginActions, useNamespace } from "../components/StoreProvider"

import { getResourceStatusFromKubernetesConditions } from "../../../../utils/resourceStatus"

// Extracts the external services from the object and creates links which are used in the plugin list / detail

// Creates a flat object from the plugin config data
export const createPluginConfig = (items: any) => {
  let allPlugins: any = []

  items.forEach((item: any) => {
    // unknown is used as a last fallback, should not happen
    const id = item?.metadata?.name ? item.metadata?.name : "Unknown"
    const name = item?.spec?.displayName ? item.spec.displayName : id
    const disabled = item?.spec?.disabled
    const version = item?.status?.version
    const clusterName = item?.spec?.clusterName
    // build urls and name in a array of objects
    // @ts-expect-error TS(2304): Cannot find name 'buildExternalServicesUrls'.
    const externalServicesUrls = buildExternalServicesUrls(item?.status?.exposedServices)
    const statusConditions = item?.status?.statusConditions?.conditions
    // get a status object with icon and text for the plugin from imported function
    const readyStatus = statusConditions ? getResourceStatusFromKubernetesConditions(statusConditions) : null
    const optionValues = item?.spec?.optionValues
    const raw = item

    allPlugins.push({
      id,
      name,
      version,
      clusterName,
      externalServicesUrls,
      statusConditions,
      readyStatus,
      optionValues,
      raw,
      disabled,
    })
  })
  return allPlugins
}

export const useAPI = () => {
  const namespace = useNamespace()
  const { client } = useClient()
  // @ts-ignore
  const { addPluginConfigItems, modifyPluginConfigItems, deletePluginConfigItems } = usePluginActions()

  const getPlugins = useCallback(() => {
    if (!client || !namespace) return
    const watch = client
      .watch(`/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/plugins`)
      .on(client.WATCH_ERROR, () => console.log("ERROR"))
      .on(client.WATCH_ADDED, (items: any) => {
        addPluginConfigItems(items)
      })
      .on(client.WATCH_MODIFIED, (items: any) => {
        modifyPluginConfigItems(items)
      })
      .on(client.WATCH_DELETED, (items: any) => {
        deletePluginConfigItems(items)
      })

    watch.start()
    return watch.cancel
  }, [client, namespace])

  return { getPlugins }
}

export default useAPI
