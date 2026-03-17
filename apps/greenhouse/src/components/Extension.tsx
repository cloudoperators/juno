/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { AppProps } from "../Shell"
import type { AuthStore } from "@cloudoperators/greenhouse-auth-provider"
import { usePluginLoader } from "../hooks/usePluginLoader"

type ExtensionProps = {
  id: string
  config: any
  appProps: AppProps
  pluginAuth: AuthStore
}

function Extension({ id, config, appProps, pluginAuth }: ExtensionProps) {
  const { isLoading, containerRef } = usePluginLoader({
    pluginName: config.name,
    config,
    appProps,
    pluginAuth,
  })

  if (isLoading) {
    return (
      <div>
        <div>Loading...</div>
      </div>
    )
  }

  return <div key={id} ref={containerRef}></div>
}

export default Extension
