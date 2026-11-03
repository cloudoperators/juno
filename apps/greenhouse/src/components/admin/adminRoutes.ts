/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const ADMIN_ROUTES = {
  PLUGIN_PRESETS: "/admin/plugin-presets",
  CLUSTERS: "/admin/clusters",
  EXPOSED_SERVICES: "/admin/exposed-services",
} as const

export type AdminRoute = (typeof ADMIN_ROUTES)[keyof typeof ADMIN_ROUTES]
