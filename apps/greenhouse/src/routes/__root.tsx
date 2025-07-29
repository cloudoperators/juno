/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router"
import { useActions } from "@cloudoperators/juno-messages-provider"
import { AppProps } from "../Shell"
import ShellLayout from "../components/layout/ShellLayout"
import useApi from "../hooks/useApi"
import { usePlugin } from "../components/StoreProvider"
import useUrlState from "../hooks/useUrlState"

export type RouteContext = {
  appProps: AppProps
}

export const Route = createRootRouteWithContext<RouteContext>()({
  component: RootComponent,
})

function RootComponent() {
  useUrlState()
  const { getPluginConfigs } = useApi()
  const requestConfig = usePlugin().requestConfig
  const receiveConfig = usePlugin().receiveConfig
  const receiveError = usePlugin().receiveError
  const isFetching = usePlugin().isFetching()
  const { addMessage } = useActions()

  useEffect(() => {
    if (!getPluginConfigs) return
    requestConfig()
    // fetch configs from kubernetes
    getPluginConfigs()
      .then((kubernetesConfig: any) => {
        receiveConfig(kubernetesConfig)
      })
      .catch((error: any) => {
        // error fetching configs
        receiveError(error.message)
        addMessage({
          variant: "error",
          text: error.message,
        })
      })
  }, [getPluginConfigs])

  return <ShellLayout>{isFetching ? <div>Loading...</div> : <Outlet />}</ShellLayout>
}
