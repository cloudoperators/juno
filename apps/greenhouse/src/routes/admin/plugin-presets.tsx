/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"
import { Crumb } from "../-types"
import { PluginPresets } from "../../components/admin/PluginPresets"
import { fetchPluginPresets } from "../../components/admin/api/plugin-presets/fetchPluginPresets"
import { fetchPluginPresetsFilters } from "../../components/admin/api/plugin-presets/fetchPluginPresetsFilters"
import { fetchPluginPresetsStats } from "../../components/admin/api/plugin-presets/fetchPluginPresetsStats"
import { SELECTED_FILTER_PREFIX } from "../../components/admin/constants"
import { extractFilterSettingsFromSearchParams } from "../../components/admin/utils"

const searchParamsSchema = z
  .object({
    searchTerm: z.string().optional(),
  })
  .catchall(
    z.preprocess(
      (val, ctx) => {
        if (ctx.path.length > 0 && typeof ctx.path[0] === "string" && !ctx.path[0].startsWith(SELECTED_FILTER_PREFIX)) {
          return undefined
        }
        return val
      },
      z.union([z.string(), z.array(z.string()), z.undefined()])
    )
  )

export type PluginPresetSearchParams = z.infer<typeof searchParamsSchema>

export const Route = createFileRoute("/admin/plugin-presets")({
  component: PluginPresets,
  validateSearch: (search: Record<string, unknown>) => searchParamsSchema.parse(search),
  loaderDeps: (search) => ({
    ...search,
  }),
  loader: async ({ context: { apiClient, organization }, deps: { search } }) => {
    const crumb: Crumb = {
      label: "Plugin Presets",
    }
    const filterSettings = extractFilterSettingsFromSearchParams(search)
    const pluginPresetsPromise = fetchPluginPresets({ apiClient, namespace: organization, filterSettings })
    const filtersPromise = fetchPluginPresetsFilters({ apiClient, namespace: organization })
    const statsPromise = fetchPluginPresetsStats({ apiClient, namespace: organization })

    return {
      crumb,
      pluginPresetsPromise,
      filtersPromise,
      statsPromise,
      filterSettings,
      lastUpdatedAt: Date.now(),
    }
  },
})
