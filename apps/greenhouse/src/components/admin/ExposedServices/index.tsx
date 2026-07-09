/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { useRouteContext, useSearch } from "@tanstack/react-router"
import { useIsFetching, useQuery, useQueryClient } from "@tanstack/react-query"
import { Container, ContentHeading, Button, Stack, DataGridToolbar } from "@cloudoperators/juno-ui-components"

import { extractFilterSettingsFromSearchParams } from "../utils"
import { ExposedServicesFilters } from "./ExposedServicesFilters"
import { ExposedServicesDataGrid } from "./ExposedServicesDataGrid"
import { FETCH_EXPOSED_SERVICES_CACHE_KEY, fetchExposedServices } from "../api/exposed-services/fetchExposedServices"

export const ExposedServices = () => {
  const [lastUpdatedAt, setLastUpdatedAt] = useState<number>(Date.now())
  const isFetching = useIsFetching({ queryKey: [FETCH_EXPOSED_SERVICES_CACHE_KEY] })
  const queryClient = useQueryClient()
  const { apiClient, user } = useRouteContext({ from: "/admin/exposed-services" })
  const search = useSearch({ from: "/admin/exposed-services" })
  const filterSettings = extractFilterSettingsFromSearchParams(search)

  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: [FETCH_EXPOSED_SERVICES_CACHE_KEY] })
    setLastUpdatedAt(Date.now())
  }

  const { data: exposedServices } = useQuery({
    queryKey: [FETCH_EXPOSED_SERVICES_CACHE_KEY, user.organization, filterSettings],
    queryFn: () =>
      fetchExposedServices({
        apiClient,
        namespace: user.organization,
        filterSettings,
      }),
  })

  const total = exposedServices?.length ?? 0

  return (
    <>
      <Container px={false} py={false}>
        <ContentHeading>Exposed Services Overview</ContentHeading>
        <p>Monitor exposed services for all plugins</p>
      </Container>
      <Container px={false} py>
        <ExposedServicesFilters />
        <DataGridToolbar className="text-theme-light">
          <Stack>
            <div>
              <span className="text-theme-default pr-2">{`${total} exposed services`}</span>
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
        </DataGridToolbar>
        <ExposedServicesDataGrid />
      </Container>
    </>
  )
}
