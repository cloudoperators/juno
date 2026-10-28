/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use } from "react"
import { useLoaderData } from "@tanstack/react-router"
import { ApolloQueryResult } from "@apollo/client"
import { GetIssueTrendsQuery, TrendBucketData } from "../../generated/graphql"

const formatDate = (isoDate: string) => {
  const d = new Date(isoDate)
  return `${d.getUTCMonth() + 1}/${d.getUTCDate()}`
}

const COLS: { key: keyof Row; label: string; className?: string }[] = [
  { key: "date", label: "Date", className: "whitespace-nowrap" },
  { key: "critical", label: "Critical", className: "text-theme-severity-critical" },
  { key: "high", label: "High", className: "text-theme-severity-high" },
  { key: "medium", label: "Medium", className: "text-theme-severity-medium" },
  { key: "low", label: "Low", className: "text-theme-severity-low" },
  { key: "none", label: "None" },
  { key: "total", label: "Total", className: "font-medium" },
  { key: "remediated", label: "Remediated", className: "text-theme-success" },
]

type Row = { date: string } & Pick<
  TrendBucketData,
  "critical" | "high" | "medium" | "low" | "none" | "total" | "remediated"
>

const ChartContent = ({ trendsPromise }: { trendsPromise: Promise<ApolloQueryResult<GetIssueTrendsQuery>> }) => {
  const result = use(trendsPromise)
  const buckets = (result.data?.IssueTrends?.buckets ?? []) as TrendBucketData[]

  if (buckets.length === 0) {
    return <div className="py-4 px-4 text-sm text-theme-light">No trend data available for the selected period.</div>
  }

  const rows: Row[] = buckets.map((b) => ({ ...b, date: formatDate(b.date) }))

  return (
    <div className="py-4 px-4 overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-theme-background-lvl-3">
            {COLS.map((c) => (
              <th key={c.key} className="text-left py-2 px-3 font-medium text-theme-light whitespace-nowrap">
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.date} className="border-b border-theme-background-lvl-2 hover:bg-theme-background-lvl-1">
              {COLS.map((c) => (
                <td key={c.key} className={`py-2 px-3 ${c.className ?? ""}`}>
                  {row[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const TrendsChart = () => {
  const { trendsPromise } = useLoaderData({ from: "/trends/" })
  return <ChartContent trendsPromise={trendsPromise} />
}
