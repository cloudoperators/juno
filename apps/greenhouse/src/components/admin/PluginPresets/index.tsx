/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { ContentHeading, Stack } from "@cloudoperators/juno-ui-components"
import { useLoaderData } from "@tanstack/react-router"
import { PluginPresetsDataGrid } from "./PluginPresetsDataGrid"

interface PluginPreset {
  deploymentStatus: string
  status: string
  name: string
  pluginDefinition: string
  message: string
  pluginInstances: string
  lastModified: string
}

export const PluginPresets = () => {
  const { pluginPresetsPromise } = useLoaderData({ from: "/admin/plugin-presets" })

  return (
    <Stack direction="vertical" gap="10">
      <div>
        <ContentHeading>Plugin Presets Overview</ContentHeading>
        <p>Manage and monitor plugin preset configurations across all clusters</p>
      </div>
      <PluginPresetsDataGrid pluginPresetsPromise={pluginPresetsPromise as Promise<PluginPreset[]>} />
    </Stack>
  )
}
