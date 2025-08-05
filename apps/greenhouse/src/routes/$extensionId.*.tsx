/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { createFileRoute } from "@tanstack/react-router"

import { usePlugin } from "../components/StoreProvider"
import { useAuth } from "../components/AuthProvider"
import Extension from "../components/Extension"

export const Route = createFileRoute("/$extensionId/*")({
  component: RouteComponent,
})

function RouteComponent() {
  const config = usePlugin().config()
  // @ts-expect-error TS(2339): Property 'data' does not exist on type 'unknown'.
  const { data: auth } = useAuth()
  const { extensionId } = Route.useParams()
  const appConfig = config[extensionId]

  if (!appConfig) {
    return null
  }

  return <Extension id={extensionId} config={appConfig} auth={auth} />
}
