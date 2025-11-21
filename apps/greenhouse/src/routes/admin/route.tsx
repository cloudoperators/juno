/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { createFileRoute, Outlet } from "@tanstack/react-router"
import { Layout as AdminLayout } from "../../components/admin/Layout"
import { Crumb } from "../-types"

export const Route = createFileRoute("/admin")({
  component: RouteComponent,
  loader: () => {
    const crumb: Crumb = {
      label: "Admin",
      icon: "home",
    }
    return {
      crumb,
    }
  },
})

function RouteComponent() {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  )
}
