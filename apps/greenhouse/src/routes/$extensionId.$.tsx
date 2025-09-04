/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"

import { usePlugin } from "../components/StoreProvider"
import { useAuth } from "../components/AuthProvider"
import Extension from "../components/Extension"

const searchSchema = z.object({
  /**
   * TODO: remove it when no longer needed
   * but we need to keep "org" search parameter due to it's significance in the shell app.
   */
  org: z.string().optional(),
})

export const Route = createFileRoute("/$extensionId/$")({
  validateSearch: searchSchema,
  component: RouteComponent,
})

function RouteComponent() {
  const config = usePlugin().config()
  // @ts-expect-error TS(2339): Property 'data' does not exist on type 'unknown'.
  const { data: auth } = useAuth()
  const { extensionId } = Route.useParams()
  const { appProps } = Route.useRouteContext()
  const appConfig = config[extensionId]

  if (!appConfig) {
    return null
  }

  return <Extension id={extensionId} config={appConfig} auth={auth} appProps={appProps} />
}
