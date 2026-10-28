/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { useNavigate, useSearch } from "@tanstack/react-router"
import { DateTimePicker, Stack } from "@cloudoperators/juno-ui-components"
import type { TrendsSearchParams } from "../../routes/trends/index"
import { toRFC3339, defaultTrendsAfter, defaultTrendsBefore } from "./utils"

const tomorrow = (() => {
  const d = new Date()
  return toRFC3339(new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 1)))
})()

export const DateRangeSelect = () => {
  const navigate = useNavigate()
  const { after, before } = useSearch({ from: "/trends/" })

  const handleAfterChange = (dates: Date[] | undefined) => {
    if (!dates?.[0]) return
    void navigate({
      to: "/trends",
      search: (prev) => ({ ...(prev as TrendsSearchParams), after: toRFC3339(dates[0]) }),
    })
  }

  const handleBeforeChange = (dates: Date[] | undefined) => {
    if (!dates?.[0]) return
    void navigate({
      to: "/trends",
      search: (prev) => ({ ...(prev as TrendsSearchParams), before: toRFC3339(dates[0]) }),
    })
  }

  const handleClear = () => {
    void navigate({
      to: "/trends",
      search: (prev) => ({
        ...(prev as TrendsSearchParams),
        after: defaultTrendsAfter(),
        before: defaultTrendsBefore(),
      }),
    })
  }

  return (
    <Stack alignment="center" gap="4" className="py-2 px-4">
      <Stack alignment="center" gap="2">
        <span className="text-sm text-theme-default">From:</span>
        <DateTimePicker
          value={after ? new Date(after) : undefined}
          onChange={handleAfterChange}
          onClear={handleClear}
          maxDate={before}
          width="auto"
        />
      </Stack>
      <Stack alignment="center" gap="2">
        <span className="text-sm text-theme-default">To:</span>
        <DateTimePicker
          value={before ? new Date(before) : undefined}
          onChange={handleBeforeChange}
          onClear={handleClear}
          minDate={after}
          maxDate={tomorrow}
          width="auto"
        />
      </Stack>
    </Stack>
  )
}
