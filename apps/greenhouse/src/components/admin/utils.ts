/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PluginPresetSearchParams } from "../../routes/admin/plugin-presets"
import { FilterSettings } from "./common/types"
import { SELECTED_FILTER_PREFIX } from "./constants"
import { PluginPreset } from "./types/k8sTypes"

// Get the "Ready" condition from a PluginPreset
export const getReadyCondition = (preset: PluginPreset) => {
  return preset.status?.statusConditions?.conditions?.find((condition) => condition.type === "Ready")
}

// Check if a PluginPreset is ready
export const isReady = (preset: PluginPreset) => {
  const readyCondition = getReadyCondition(preset)
  return readyCondition?.type === "Ready" && readyCondition?.status === "True"
}

/**
 * Creates an abbreviation from a string by extracting all capital letters.
 * If there's only one capital letter (single word), returns the whole word.
 * @param text - The text to abbreviate
 * @returns The abbreviation composed of capital letters, or the original text if single word
 * @example
 * createAbbreviation("AllPluginsReady") // returns "APR"
 * @example
 * createAbbreviation("Ready") // returns "Ready"
 */
export const createConditionAbbreviation = (text: string) => {
  const capitals = text.match(/[A-Z]/g)
  if (!capitals || capitals.length <= 1) {
    return text
  }
  return capitals.join("")
}

// Replace _.isEmpty()
export const isEmpty = (value: any): boolean => {
  if (value == null) return true
  if (typeof value === "string" || Array.isArray(value)) return value.length === 0
  if (typeof value === "object") return Object.keys(value).length === 0
  return false
}

// Extract filters from the search parameters, looking for keys that start with SELECTED_FILTER_PREFIX
export const extractFilterSettingsFromSearchParams = (searchParams: PluginPresetSearchParams): FilterSettings => ({
  searchTerm: searchParams.searchTerm,
  selectedFilters: Object.entries(searchParams)
    .filter(([key]) => key.startsWith(SELECTED_FILTER_PREFIX))
    .flatMap(([key, value]) => {
      const id = key.slice(SELECTED_FILTER_PREFIX.length)
      if (Array.isArray(value)) {
        return value.map((v) => ({ id, value: v }))
      }
      return [{ id, value: value as string }]
    }),
})

/**
 * This function converts the selected filters from the FilterSettings into a format that is accepted by the url-state-provider/v2/encode
 * Examples:
 * Input:
 *   filterSettings = {
 *     selectedFilters: [
 *       { name: "region", value: "eu", inactive: false },
 *       { name: "region", value: "us", inactive: false },
 *       { name: "owner", value: "alice", inactive: false }
 *     ]
 *   }
 * Output:
 *   {
 *     "selected_region": ["eu", "us"],
 *     "selected_owner": "alice"
 *   }
 */
export const getFiltersForUrl = (filterSettings: FilterSettings) => {
  const result: Record<string, string | string[] | undefined> = {
    searchTerm: filterSettings.searchTerm || undefined,
  }

  if (filterSettings?.selectedFilters && filterSettings.selectedFilters.length > 0) {
    filterSettings.selectedFilters.forEach((filter) => {
      const key = `${SELECTED_FILTER_PREFIX}${filter.id}`
      if (result[key]) {
        result[key] = Array.isArray(result[key]) ? [...result[key], filter.value] : [result[key], filter.value]
      } else {
        result[key] = filter.value
      }
    })
  }

  return result
}
