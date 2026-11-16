/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react"
import { createFileRoute, ErrorComponentProps } from "@tanstack/react-router"
import { Status } from "@cloudoperators/juno-ui-components"
import { usePlugin } from "../components/StoreProvider"
import { useAuth } from "../components/AuthProvider"
import Extension from "../components/Extension"
import PluginErrorBoundary from "../components/PluginErrorBoundary"
import { clearPluginCache, pluginCacheKey } from "../hooks/usePluginLoader"

export const Route = createFileRoute("/$extensionId/$")({
  component: RouteComponent,
  errorComponent: ErrorComponent,
  // Force the route to remount when extensionId changes
  // This prevents splat/param state from being preserved between different plugins
  remountDeps: ({ params }) => params.extensionId,
})

function RouteComponent() {
  const config = usePlugin().config()
  const { pluginAuth } = useAuth()
  const { extensionId } = Route.useParams()
  const { appProps } = Route.useRouteContext()
  const appConfig = config[extensionId]

  if (!appConfig) {
    return (
      <Status
        code={404}
        status="error"
        title="Plugin Not Found"
        body={`No plugin named "${extensionId}" is available.`}
      />
    )
  }

  const cacheKey = pluginCacheKey({ name: appConfig.name, url: appConfig.url })

  return (
    <PluginErrorBoundary resetKey={cacheKey} onReset={() => clearPluginCache(cacheKey)}>
      <Suspense fallback={<Status status="progress" title={`Loading ${appConfig.displayName ?? extensionId}…`} />}>
        <Extension id={extensionId} config={appConfig} appProps={appProps} pluginAuth={pluginAuth} />
      </Suspense>
    </PluginErrorBoundary>
  )
}

// Fallback for unexpected errors thrown while rendering the route.
function ErrorComponent({ error }: ErrorComponentProps) {
  return <Status status="error" body={error instanceof Error ? error.message : String(error)} />
}
