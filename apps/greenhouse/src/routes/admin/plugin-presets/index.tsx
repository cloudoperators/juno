/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"
import { PluginPresets } from "../../../components/admin/PluginPresets"
import { SELECTED_FILTER_PREFIX } from "../../../components/admin/constants"
import { extractFilterSettingsFromSearchParams } from "../../../components/admin/utils"

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

export const Route = createFileRoute("/admin/plugin-presets/")({
  component: PluginPresets,
  validateSearch: (search: Record<string, unknown>) => searchParamsSchema.parse(search),
  loaderDeps: (search) => ({
    ...search,
  }),
  loader: ({ deps: { search } }) => ({
    filterSettings: extractFilterSettingsFromSearchParams(search),
  }),
})
