/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react"
import { GranularitySelect } from "./GranularitySelect"
import { DateRangeSelect } from "./DateRangeSelect"
import { TrendsSummary } from "./TrendsSummary"
import { TrendsChart } from "./TrendsChart"
import { ErrorBoundary } from "../common/ErrorBoundary"

export const Trends = () => (
  <ErrorBoundary>
    <GranularitySelect />
    <DateRangeSelect />
    <ErrorBoundary displayErrorMessage>
      <Suspense fallback={<div className="py-4 px-4 text-sm text-theme-light">Loading...</div>}>
        <TrendsSummary />
        <TrendsChart />
      </Suspense>
    </ErrorBoundary>
  </ErrorBoundary>
)
