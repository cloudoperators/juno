/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react"
import { Stack } from "@cloudoperators/juno-ui-components"
import { useSuspenseQuery } from "@tanstack/react-query"
import { StatCard } from "./StatCard"

interface StatData {
  label: string
  value: number | string
  subtext?: string
  variant?: "success" | "warning" | "danger" | "default"
}

interface StatsContentProps {
  queryKey: unknown[]
  queryFn: () => Promise<StatData[]>
}

const StatsContent: React.FC<StatsContentProps> = ({ queryKey, queryFn }) => {
  const { data: stats } = useSuspenseQuery({
    queryKey,
    queryFn,
  })

  return stats.map((stat) => (
    <StatCard key={stat.label} label={stat.label} value={stat.value} subtext={stat.subtext} variant={stat.variant} />
  ))
}

type StatsProps =
  | {
      title: string
      data: StatData[]
      queryKey?: never
      queryFn?: never
    }
  | {
      title: string
      data?: never
      queryKey: unknown[]
      queryFn: () => Promise<StatData[]>
    }

export const Stats: React.FC<StatsProps> = ({ title, data, queryKey, queryFn }) => (
  <Stack direction="vertical" gap="4">
    <h3>{title}</h3>
    <Stack direction="horizontal" gap="4" className="w-full">
      {data ? (
        data.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            subtext={stat.subtext}
            variant={stat.variant}
          />
        ))
      ) : (
        <Suspense fallback="Loading...">
          <StatsContent queryKey={queryKey!} queryFn={queryFn!} />
        </Suspense>
      )}
    </Stack>
  </Stack>
)
