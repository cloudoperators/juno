/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import peaksData from "./peaks.json"

export type BadgeVariantType = "default" | "info" | "success" | "warning" | "danger" | "error"

export interface Safety {
  status: string
  variant: BadgeVariantType
  recommendation: string
  common_hazards?: string
}

export interface FirstAscent {
  date?: string
  by?: string
}

export interface AdditionalInfo {
  prominence?: string
  coordinates?: string
  geologic_origin?: string
  climbing_routes?: string[]
  notable_ascents?: string[]
  mythological_meaning?: string
  park_status?: string
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
  first_ascent?: FirstAscent
  additional_info?: AdditionalInfo
}

export const peaks: Peak[] = peaksData as Peak[]

export default {
  peaks,
}
