/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"
import { PluginPresets } from "../../components/admin/PluginPresets"
import { SELECTED_FILTER_PREFIX } from "../../components/admin/constants"
import { extractFilterSettingsFromSearchParams } from "../../components/admin/utils"
import { filterSearchParamsByPrefix } from "../../lib/helpers"

const filterValueSchema = z.union([z.string(), z.array(z.string()), z.undefined()])

const searchParamsSchema = z
  .object({
    searchTerm: z.string().optional(),
  })
  .catchall(filterValueSchema)

export type PluginPresetSearchParams = z.infer<typeof searchParamsSchema>

const PLUGIN_PRESETS_KNOWN_KEYS = ["searchTerm"] as const

function validatePluginPresetsSearch(search: Record<string, unknown>): PluginPresetSearchParams {
  const filtered = filterSearchParamsByPrefix(search, [...PLUGIN_PRESETS_KNOWN_KEYS], [SELECTED_FILTER_PREFIX])
  return searchParamsSchema.parse(filtered)
}

export const Route = createFileRoute("/admin/plugin-presets")({
  component: PluginPresets,
  validateSearch: validatePluginPresetsSearch,
  loaderDeps: (search) => ({
    ...search,
  }),
  loader: ({ deps: { search } }) => ({
    crumb: {
      label: "Plugin Presets",
    },
    filterSettings: extractFilterSettingsFromSearchParams(search),
  }),
})
