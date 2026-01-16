/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react"
import { Card, Stack, Spinner } from "@cloudoperators/juno-ui-components"
import { PluginPresetStat } from "../api/plugin-presets/fetchPluginPresetsStats"

interface StatCardProps {
  label: string
  value: number | string
  subtext?: string
  variant?: "success" | "warning" | "danger" | "default"
}

const StatCard: React.FC<StatCardProps> = ({ label, value, subtext, variant = "default" }) => {
  const getVariantColor = () => {
    switch (variant) {
      case "success":
        return "text-theme-success"
      case "warning":
        return "text-theme-warning"
      case "danger":
        return "text-theme-danger"
      default:
        return "text-theme-default"
    }
  }

  return (
    <Card padding className="flex-1">
      <Stack direction="vertical" gap="1" className="flex-1">
        <span className="text-theme-light text-sm">{label}</span>
        <Stack direction="horizontal" gap="1" alignment="baseline">
          <span className={`text-2xl font-bold ${getVariantColor()}`}>{value}</span>
          {subtext && <span className="text-xs text-theme-light">{subtext}</span>}
        </Stack>
      </Stack>
    </Card>
  )
}

const PluginPresetsStatsContent: React.FC<{ statsPromise: Promise<PluginPresetStat[]> }> = ({ statsPromise }) => {
  const stats = React.use(statsPromise)

  return stats.map((stat, index) => (
    <StatCard key={index} label={stat.label} value={stat.value} subtext={stat.subtext} variant={stat.variant} />
  ))
}

type PluginPresetsStatsProps = {
  statsPromise: Promise<PluginPresetStat[]>
}

export const PluginPresetsStats: React.FC<PluginPresetsStatsProps> = ({ statsPromise }) => (
  <Stack direction="vertical" gap="4">
    <h3>PluginPreset Health Distribution</h3>
    <Stack direction="horizontal" gap="4" className="w-full">
      <Suspense fallback="Loading...">
        <PluginPresetsStatsContent statsPromise={statsPromise} />
      </Suspense>
    </Stack>
  </Stack>
)
