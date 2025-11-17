/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/admin/plugins")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/plugins"!</div>
}
