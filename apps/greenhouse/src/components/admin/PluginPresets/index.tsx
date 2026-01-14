/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Container, ContentHeading, DataGridToolbar, Button, Stack } from "@cloudoperators/juno-ui-components"
import { useLoaderData, useRouter } from "@tanstack/react-router"
import { PluginPresetsDataGrid } from "./PluginPresetsDataGrid"
import { PluginPresetsFilters } from "./PluginPresetsFilters"
import { PluginPresetsStats } from "./PluginPresetsStats"

export const PluginPresets = () => {
  const router = useRouter()
  const { pluginPresetsPromise, statsPromise, lastUpdatedAt } = useLoaderData({ from: "/admin/plugin-presets" })

  const handleRefresh = () => {
    router.invalidate()
  }

  return (
    <>
      <Container px={false} py>
        <ContentHeading>Plugin Presets Overview</ContentHeading>
        <p>Manage and monitor plugin preset configurations across all clusters</p>
      </Container>
      <Container px={false} py>
        <PluginPresetsStats statsPromise={statsPromise} />
      </Container>
      <Container px={false} py>
        <PluginPresetsFilters />
        <DataGridToolbar>
          <Stack>
            <Stack alignment="center">
              {lastUpdatedAt && `Last update: ${new Date(lastUpdatedAt).toLocaleString()}`}
              <Button size="small" label="Refresh" className="ml-4" onClick={handleRefresh} variant="subdued" />
            </Stack>
          </Stack>
        </DataGridToolbar>
        <PluginPresetsDataGrid pluginPresetsPromise={pluginPresetsPromise} />
      </Container>
    </>
  )
}
