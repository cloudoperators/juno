/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createFileRoute } from "@tanstack/react-router"
import { PluginInstanceDetail } from "../../../../../components/admin/PluginInstanceDetail"

export const Route = createFileRoute("/admin/plugin-presets/$pluginPresetName/plugin-instances/$pluginInstance")({
  component: PluginInstanceDetail,
  loader: ({ params }) => ({
    crumb: {
      label: params.pluginInstance,
    },
  }),
})
