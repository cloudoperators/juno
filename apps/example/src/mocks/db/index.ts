/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import peaksData from "./peaks.json"

export interface Safety {
  status: string
  recommendation: string
  variant: "success" | "warning" | "error" | "info"
  common_hazards?: string
}

export interface Peak {
  id: string
  name: string
  height: string
  region: string
  mainrange: string
  countries: string
  url?: string
  details?: string
  safety: Safety
  climate?: string
  nearest_city?: string
  local_fauna?: string
  easiest_route?: string
  best_climbing_months?: string
  has_snow?: boolean
  permit_required?: boolean
  first_ascent?: { date?: string; by?: string }
  additional_info?: {
    prominence?: string
    coordinates?: string
    geologic_origin?: string
    climbing_routes?: string[]
    notable_ascents?: string[]
  }
}

// @ts-ignore
const peaks: Peak[] = peaksData

export default {
  peaks,
  // can add more mocks here
}
