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
  // PoC: Hardcode template plugin path
  // TODO: Replace with dynamic plugin registry (usePluginConfig hook)
  const pluginPath = config.name === "template" ? "/plugins/template/index.js" : undefined

  const { isLoading, error, containerRef } = usePluginLoader({
    pluginName: config.name,
    config,
    appProps,
    pluginAuth,
    pluginPath,
  })

  if (isLoading) {
    return (
      <div>
        <div>Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <div>Error loading plugin {config.name}: {error.message}</div>
      </div>
    )
  }

  return <div key={id} ref={containerRef}></div>
}

export default Extension
