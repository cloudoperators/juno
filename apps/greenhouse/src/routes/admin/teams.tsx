/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { createFileRoute } from "@tanstack/react-router"
import { Crumb } from "../-types"

export const Route = createFileRoute("/admin/teams")({
  component: RouteComponent,
  loader: () => {
    const crumb: Crumb = {
      label: "Teams",
    }
    return {
      crumb,
    }
  },
})

function RouteComponent() {
  return <div>Hello "/admin/teams"!</div>
}
