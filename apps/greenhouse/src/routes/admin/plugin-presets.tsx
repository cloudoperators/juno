/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"
import { Crumb } from "../-types"
import { PluginPresets } from "../../components/admin/PluginPresets"
import { fetchPluginPresets } from "../../components/admin/api/plugin-presets/fetchPluginPresets"

const searchParamsSchema = z.object({
  searchTerm: z.string().optional(),
})

export const Route = createFileRoute("/admin/plugin-presets")({
  component: PluginPresets,
  validateSearch: (search: Record<string, unknown>) => {
    return searchParamsSchema.parse(search)
  },
  loaderDeps: (search) => ({
    ...search,
  }),
  loader: async ({ context: { apiClient, organization }, deps: { search } }) => {
    const crumb: Crumb = {
      label: "Plugin Presets",
    }
    const filterSettings = {
      searchTerm: search.searchTerm,
    }
    const pluginPresetsPromise = fetchPluginPresets({ apiClient, namespace: organization, filterSettings })

    return {
      crumb,
      pluginPresetsPromise: pluginPresetsPromise,
      filterSettings,
    }
  },
})
