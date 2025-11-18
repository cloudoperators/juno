/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { createFileRoute } from "@tanstack/react-router"
import { Crumb } from "../-types"

export const Route = createFileRoute("/admin/plugin-presets")({
  component: RouteComponent,
  loader: async () => {
    const crumb: Crumb = {
      label: "Plugin Presets",
    }
    return {
      crumb,
    }
  },
})

function RouteComponent() {
  return <div>Hello "/admin/plugins-presets"!</div>
}
