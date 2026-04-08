/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
// import {
//   fetchExposedServicesStats,
//   FETCH_PLUGIN_PRESETS_STATS_CACHE_KEY,
// } from "../api/exposed-services/fetchExposedServicesStats"
import { useRouteContext } from "@tanstack/react-router"
import { Stats } from "../common/Stats/Stats"

export const ExposedServicesStats = () => {
  const { apiClient, user } = useRouteContext({ from: "/admin/exposed-services" })

  return (
    <Stats
      title="PluginPreset Health Distribution"
      // queryKey={[FETCH_PLUGIN_PRESETS_STATS_CACHE_KEY, user.organization]}
      // queryFn={() => fetchExposedServicesStats({ apiClient, namespace: user.organization })}
    />
  )
}
