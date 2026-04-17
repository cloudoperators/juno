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

const PERSES_DEFAULT_CONFIG = {
  id: "perses",
  name: "perses",
  props: {
    endpoint: "https://prometheus.greenhouse.global.cloud.sap",
    theme: "theme-dark",
  },
}

export const Route = createFileRoute("/perses")({
  component: RouteComponent,
  errorComponent: ErrorComponent,
})

function RouteComponent() {
  const config = usePlugin().config()
  const { pluginAuth } = useAuth()
  const { appProps } = Route.useRouteContext()
  const appConfig = config["perses"] ?? PERSES_DEFAULT_CONFIG

  return <Extension id="perses" config={appConfig} appProps={appProps} pluginAuth={pluginAuth} />
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
