/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import {
  fetchPluginPresetsStats,
  FETCH_PLUGIN_PRESETS_STATS_CACHE_KEY,
} from "../api/plugin-presets/fetchPluginPresetsStats"
import { useRouteContext } from "@tanstack/react-router"
import { Stats } from "../common/Stats/Stats"

export const PluginPresetsStats = () => {
  const { apiClient, user } = useRouteContext({ from: "/admin/plugin-presets" })

  return (
    <Stats
      title="PluginPreset Health Distribution"
      queryKey={[FETCH_PLUGIN_PRESETS_STATS_CACHE_KEY, user.organization]}
      queryFn={() => fetchPluginPresetsStats({ apiClient, namespace: user.organization })}
    />
  )
}
