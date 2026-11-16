/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { AppProps } from "../Shell"
import type { AuthStore } from "@cloudoperators/greenhouse-auth-provider"
import { usePluginLoader, type PluginLoaderConfig } from "../hooks/usePluginLoader"

type ExtensionProps = {
  id: string
  config: PluginLoaderConfig
  appProps: AppProps
  pluginAuth: AuthStore
}

function Extension({ id, config, appProps, pluginAuth }: ExtensionProps) {
  // Suspends while the plugin loads (handled by the <Suspense> in the route) and throws to the
  // route's <PluginErrorBoundary> on failure; renders the mount container once ready.
  const { containerRef } = usePluginLoader({
    pluginName: config.name,
    config,
    appProps,
    pluginAuth,
  })

  return <div key={id} ref={containerRef}></div>
}

export default Extension
