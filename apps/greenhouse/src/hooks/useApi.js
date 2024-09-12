/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useMemo } from "react"
import { createClient } from "sapcc-k8sclient"
import { useAuthData, useGlobalsApiEndpoint } from "../components/StoreProvider"
import { createPluginConfig } from "../lib/plugin"

// get plugin configs from k8s api
const useApi = () => {
  const authData = useAuthData()
  const apiEndpoint = useGlobalsApiEndpoint()

  const namespace = useMemo(() => {
    if (!authData?.raw?.groups) return null
    const orgString = authData?.raw?.groups.find((g) => g.indexOf("organization:") === 0)
    if (!orgString) return null
    return orgString.split(":")[1]
  }, [authData?.raw?.groups])

  const client = useMemo(() => {
    if (!apiEndpoint || !authData?.JWT) return null
    return createClient({ apiEndpoint, token: authData?.JWT })
  }, [apiEndpoint, authData?.JWT])

  const getPluginConfigs = useCallback(() => {
    if (!client || !namespace) return Promise.resolve({})
    // plugin configs
    return client
      .get(`/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/plugins`, {
        limit: 500,
      })
      .then((configs) => {
        // console.log("::::::::::::::::::::::::configs", configs.items)

        // create config map
        const config = {}
        configs.items.forEach((conf) => {
          const id = conf.metadata?.name
          const name = conf.status?.uiApplication?.name
          const displayName = conf.spec?.displayName
          const weight = conf.status?.weight
          const version = conf.status?.uiApplication?.version
          const url = conf.status?.uiApplication?.url

          const newConf = createPluginConfig({
            id,
            name,
            displayName,
            weight,
            version,
            url,
            props: conf.spec?.optionValues?.reduce((map, item) => {
              map[item.name] = item.value
              return map
            }, {}),
          })
          if (newConf) config[id] = newConf
        })

        console.log("==========================", config)

        return config
      })
  }, [client, namespace])

  return { client, getPluginConfigs }
}

export default useApi
