/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { useNavigate, useSearch } from "@tanstack/react-router"
import { Select, SelectOption, Stack } from "@cloudoperators/juno-ui-components"
import type { TrendsSearchParams } from "../../routes/trends/index"

export const GranularitySelect = () => {
  const navigate = useNavigate()
  const { granularity } = useSearch({ from: "/trends/" })

  const handleChange = (value?: string | number | string[]) => {
    const raw = Array.isArray(value) ? value[0] : value
    if (raw !== "DAILY" && raw !== "WEEKLY" && raw !== "MONTHLY") return
    void navigate({
      to: "/trends",
      search: (prev) => ({ ...(prev as TrendsSearchParams), granularity: raw }),
    })
  }

  return (
    <Stack alignment="center" gap="2" className="py-2 px-4">
      <span className="text-sm text-theme-default">Granularity:</span>
      <Select value={granularity} onChange={handleChange} width="auto">
        <SelectOption value="DAILY" label="Daily" />
        <SelectOption value="WEEKLY" label="Weekly" />
        <SelectOption value="MONTHLY" label="Monthly" />
      </Select>
    </Stack>
  )
}
