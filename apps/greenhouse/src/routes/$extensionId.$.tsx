/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"
import { createFileRoute } from "@tanstack/react-router"
import { useActions } from "@cloudoperators/juno-messages-provider"
import { usePlugin } from "../components/StoreProvider"
import { useAuth } from "../components/AuthProvider"
import Extension from "../components/Extension"

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
    throw new Error(`No such "${extensionId}" plugin found`)
  }

  return <Extension id={extensionId} config={appConfig} appProps={appProps} pluginAuth={pluginAuth} />
}

function ErrorComponent({ error }: { error: Error }) {
  const { addMessage, removeMessage } = useActions()
  const normalizedError = error instanceof Error ? error : new Error("Unknown error")
  useEffect(() => {
    const messageId = addMessage({
      variant: "error",
      text: normalizedError.message,
      dismissible: false,
    })

    return () => removeMessage(messageId)
  }, [addMessage, removeMessage, normalizedError])

  return null
}
