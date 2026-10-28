/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import React from "react"
import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"
import { Trends } from "../../components/Trends"
import { fetchTrends } from "../../api/fetchTrends"
import { defaultTrendsAfter, defaultTrendsBefore } from "../../components/Trends/utils"

const trendsSearchSchema = z.object({
  granularity: z.enum(["DAILY", "WEEKLY", "MONTHLY"]).default("WEEKLY"),
  after: z.string().default(defaultTrendsAfter),
  before: z.string().default(defaultTrendsBefore),
})

export type TrendsSearchParams = z.infer<typeof trendsSearchSchema>

export const Route = createFileRoute("/trends/")({
  validateSearch: trendsSearchSchema,
  loaderDeps: ({ search }) => search,
  shouldReload: false,
  loader: ({ context, deps }) => {
    const { queryClient, apiClient } = context
    return {
      trendsPromise: fetchTrends({
        queryClient,
        apiClient,
        granularity: deps.granularity,
        after: deps.after,
        before: deps.before,
      }),
    }
  },
  component: () => <Trends />,
})
