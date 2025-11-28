/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createFileRoute } from "@tanstack/react-router"
import { Crumb } from "../-types"
import { PluginPresets } from "../../components/admin/PluginPresets"
import { fetchPluginPresets } from "../../components/admin/api/plugin-presets"

export const Route = createFileRoute("/admin/plugin-presets")({
  component: PluginPresets,
  loader: async ({ context: { apiClient } }) => {
    const crumb: Crumb = {
      label: "Plugin Presets",
    }
    const pluginPresetsPromise = fetchPluginPresets(apiClient, "ccloud")

    return {
      crumb,
      pluginPresetsPromise: pluginPresetsPromise,
    }
  },
})
