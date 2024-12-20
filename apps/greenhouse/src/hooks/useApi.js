/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useMemo } from "react"
import { createClient } from "sapcc-k8sclient"
import { useAuthData, useGlobalsApiEndpoint, useGlobalsAssetsHost } from "../components/StoreProvider"
import { createPluginConfig } from "../lib/plugin"

// get plugin configs from k8s api
const useApi = () => {
  const authData = useAuthData()
  const apiEndpoint = useGlobalsApiEndpoint()
  const assetsHost = useGlobalsAssetsHost()

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

    return client
      .get(`/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/plugins`, {
        limit: 500,
      })
      .then((configs) => {
        // create config map
        const config = {}
        configs.items.forEach((conf) => {
          const id = conf.metadata?.name
          const name = conf.status?.uiApplication?.name
          const displayName = conf.spec?.displayName
          const weight = conf.status?.weight
          const version = conf.status?.uiApplication?.version
          const url = conf.status?.uiApplication?.url

          // temporary fix to forward initialFilters to the Plugins until middleware is implemented
          // Extract username and support group information for appProps
          const appProps = {
            username: authData?.parsed?.fullName,
          }

          // Conditionally add initialFilters if supportGroups exists and is an array
          if (Array.isArray(authData?.parsed?.supportGroups)) {
            appProps.initialFilters = {
              support_group: authData.parsed.supportGroups.map((group) => String(group)),
            }
          }

          const newConf = createPluginConfig({
            id,
            name,
            displayName,
            weight,
            version,
            url,
            props: {
              ...conf.spec?.optionValues?.reduce((map, item) => {
                map[item.name] = item.value
                return map
              }, {}),
              ...appProps,
            },
          })
          if (newConf) config[id] = newConf
        })
        return config
      })
  }, [client, assetsHost, namespace])

  return { client, getPluginConfigs }
}

export default useApi
