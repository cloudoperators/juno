/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/admin/plugin-presets")({
  loader: () => ({
    crumb: {
      label: "Plugin Presets",
      icon: "home",
    },
  }),
  component: Outlet,
})
