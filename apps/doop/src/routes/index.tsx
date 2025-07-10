/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { createFileRoute } from "@tanstack/react-router"
import AppContent from "../components/AppContent"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  const { appProps } = Route.useRouteContext()

  return (
    <>
      <AppContent id={appProps?.id} showDebugSeverities={appProps.showDebugSeverities} />
    </>
  )
}
