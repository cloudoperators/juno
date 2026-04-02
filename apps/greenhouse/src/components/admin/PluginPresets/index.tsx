/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Container, ContentHeading, Button, Stack } from "@cloudoperators/juno-ui-components"
import { useIsFetching, useQuery, useQueryClient } from "@tanstack/react-query"
import { useRouteContext, useSearch } from "@tanstack/react-router"
import { fetchPluginPresets, FETCH_PLUGIN_PRESETS_CACHE_KEY } from "../api/plugin-presets/fetchPluginPresets"
import { extractFilterSettingsFromSearchParams, isReady } from "../utils"
import { PluginPresetsDataGrid } from "./PluginPresetsDataGrid"
import { PluginPresetsFilters } from "./PluginPresetsFilters"

export const PluginPresets = () => {
  const [lastUpdatedAt, setLastUpdatedAt] = useState<number>(Date.now())
  const isFetching = useIsFetching({ queryKey: [FETCH_PLUGIN_PRESETS_CACHE_KEY] })
  const queryClient = useQueryClient()
  const { apiClient, user } = useRouteContext({ from: "/admin/plugin-presets/" })
  const search = useSearch({ from: "/admin/plugin-presets/" })
  const filterSettings = extractFilterSettingsFromSearchParams(search)

  const { data: pluginPresets } = useQuery({
    queryKey: [FETCH_PLUGIN_PRESETS_CACHE_KEY, user.organization, filterSettings],
    queryFn: () => fetchPluginPresets({ apiClient, namespace: user.organization, filterSettings }),
  })

  const total = pluginPresets?.length ?? 0
  const ready = pluginPresets?.filter(isReady).length ?? 0
  const notReady = total - ready

  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: [FETCH_PLUGIN_PRESETS_CACHE_KEY] })
    setLastUpdatedAt(Date.now())
  }

  return (
    <>
      <Container px={false} py={false}>
        <ContentHeading>PluginPresets Overview</ContentHeading>
        <p>Manage and monitor PluginPreset configurations across all clusters</p>
      </Container>
      <Container px={false} py>
        <PluginPresetsFilters />
        <Stack alignment="center" className="bg-theme-background-lvl-1 py-1.5 px-4 my-px text-theme-light">
          <div>
            <span className="text-theme-default pr-2">{`${total} pluginpresets`}</span>
            <span>{`(${ready} ready, ${notReady} not ready)`}</span>
          </div>
          <Stack alignment="center" className="ml-auto">
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
        <PluginPresetsDataGrid />
      </Container>
    </>
  )
}
