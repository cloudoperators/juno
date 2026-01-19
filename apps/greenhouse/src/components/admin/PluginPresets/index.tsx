/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Container, ContentHeading, DataGridToolbar, Button, Stack } from "@cloudoperators/juno-ui-components"
import { useIsFetching, useQueryClient } from "@tanstack/react-query"
import { FETCH_PLUGIN_PRESETS_CACHE_KEY } from "../api/plugin-presets/fetchPluginPresets"
import { FETCH_PLUGIN_PRESETS_STATS_CACHE_KEY } from "../api/plugin-presets/fetchPluginPresetsStats"
import { PluginPresetsDataGrid } from "./PluginPresetsDataGrid"
import { PluginPresetsFilters } from "./PluginPresetsFilters"
import { PluginPresetsStats } from "./PluginPresetsStats"

export const PluginPresets = () => {
  const [lastUpdatedAt, setLastUpdatedAt] = useState<number>(Date.now())
  const isFetching = useIsFetching({ queryKey: [FETCH_PLUGIN_PRESETS_CACHE_KEY] })
  const queryClient = useQueryClient()

  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: [FETCH_PLUGIN_PRESETS_CACHE_KEY] })
    queryClient.invalidateQueries({ queryKey: [FETCH_PLUGIN_PRESETS_STATS_CACHE_KEY] })
    setLastUpdatedAt(Date.now())
  }

  return (
    <>
      <Container px={false} py>
        <ContentHeading>Plugin Presets Overview</ContentHeading>
        <p>Manage and monitor plugin preset configurations across all clusters</p>
      </Container>
      <Container px={false} py>
        <PluginPresetsStats />
      </Container>
      <Container px={false} py>
        <PluginPresetsFilters />
        <DataGridToolbar>
          <Stack>
            <Stack alignment="center">
              {lastUpdatedAt && `Last update: ${new Date(lastUpdatedAt).toLocaleString()}`}
              <Button
                size="small"
                label={isFetching > 0 ? "Loading..." : "Refresh"}
                className="ml-4 min-w-[90px]"
                onClick={handleRefresh}
                variant="subdued"
                disabled={isFetching > 0}
              />
            </Stack>
          </Stack>
        </DataGridToolbar>
        <PluginPresetsDataGrid />
      </Container>
    </>
  )
}
