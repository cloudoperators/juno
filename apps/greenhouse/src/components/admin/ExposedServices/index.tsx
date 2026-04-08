/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Container, ContentHeading, DataGridToolbar, Button, Stack } from "@cloudoperators/juno-ui-components"
import { useIsFetching, useQueryClient } from "@tanstack/react-query"
import { FETCH_EXPOSED_SERVICES_CACHE_KEY } from "../api/plugin-exposed-services/fetchExposedServices"
import { ExposedServicesDataGrid } from "./ExposedServicesDataGrid"
import { ExposedServicesFilters } from "./ExposedServicesFilters"
import { ExposedServicesStats } from "./ExposedServices"

export const ExposedServices = () => {
  const [lastUpdatedAt, setLastUpdatedAt] = useState<number>(Date.now())
  const isFetching = useIsFetching({ queryKey: [FETCH_EXPOSED_SERVICES_CACHE_KEY] })
  const queryClient = useQueryClient()

  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: [FETCH_EXPOSED_SERVICES_CACHE_KEY] })
    setLastUpdatedAt(Date.now())
  }

  return (
    <>
      <Container px={false} py={false}>
        <ContentHeading>Exposed Services Overview</ContentHeading>
        <p>Monitor exposed services</p>
      </Container>
      <Container px={false} py>
        <ExposedServicesFilters />
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
        <ExposedServicesDataGrid />
      </Container>
    </>
  )
}
