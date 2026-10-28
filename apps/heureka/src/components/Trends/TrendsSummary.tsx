/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use } from "react"
import { useLoaderData } from "@tanstack/react-router"
import { Stack } from "@cloudoperators/juno-ui-components"
import { ApolloQueryResult } from "@apollo/client"
import { GetIssueTrendsQuery, TrendBucketData } from "../../generated/graphql"

type StatTileProps = {
  label: string
  value: string | number
  colorClass?: string
}

const StatTile = ({ label, value, colorClass = "" }: StatTileProps) => (
  <div className="bg-theme-background-lvl-1 rounded px-6 py-4 min-w-[160px]">
    <div className={`text-3xl font-semibold ${colorClass}`}>{value}</div>
    <div className="text-sm text-theme-light mt-1">{label}</div>
  </div>
)

const SummaryContent = ({ trendsPromise }: { trendsPromise: Promise<ApolloQueryResult<GetIssueTrendsQuery>> }) => {
  const result = use(trendsPromise)
  const buckets = (result.data?.IssueTrends?.buckets ?? []) as TrendBucketData[]

  const total = buckets.reduce((sum, b) => sum + b.total, 0)
  const remediated = buckets.reduce((sum, b) => sum + b.remediated, 0)
  const critical = buckets.reduce((sum, b) => sum + b.critical, 0)
  const high = buckets.reduce((sum, b) => sum + b.high, 0)
  const rate = total > 0 ? ((remediated / total) * 100).toFixed(1) : "0.0"

  return (
    <Stack gap="4" wrap={true} className="py-4 px-4">
      <StatTile label="Total Issues" value={total} />
      <StatTile label="Remediated" value={remediated} colorClass="text-theme-success" />
      <StatTile label="Remediation Rate" value={`${rate}%`} colorClass="text-theme-success" />
      <StatTile label="Critical (cumulative)" value={critical} colorClass="text-theme-severity-critical" />
      <StatTile label="High (cumulative)" value={high} colorClass="text-theme-severity-high" />
    </Stack>
  )
}

export const TrendsSummary = () => {
  const { trendsPromise } = useLoaderData({ from: "/trends/" })
  return <SummaryContent trendsPromise={trendsPromise} />
}
