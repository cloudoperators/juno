/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from "react"
import { useNavigate, useRouteContext, useSearch } from "@tanstack/react-router"
import { Panel, PanelBody } from "@cloudoperators/juno-ui-components"
import { capitalizeFirstLetter } from "../../../utils"
import { ServiceImageVersions } from "../../common/ServiceImageVersions"
import { ServiceImageVersion } from "../utils"
import { fetchImageVersions } from "../../../api/fetchImageVersions"
import { ErrorBoundary } from "../../common/ErrorBoundary"

export const ServicePanel = () => {
  const navigate = useNavigate()
  const { queryClient, apiClient } = useRouteContext({ from: "/services/" })
  const { service } = useSearch({ from: "/services/" })
  const [currentPageCursor, setCurrentPageCursor] = React.useState<string | null | undefined>(undefined)

  // create a promise to fetch image versions
  const imageVersionsPromise = service
    ? fetchImageVersions({
        queryClient,
        apiClient,
        service: service,
        after: currentPageCursor,
      })
    : undefined

  const closeServiceOverviewPanel = useCallback(() => {
    navigate({
      to: "/services",
      search: (prev) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { service, ...rest } = prev
        return { ...rest }
      },
    })
  }, [navigate])

  const goToServiceDetailsPage = useCallback(
    (imageVersion?: ServiceImageVersion) => {
      if (service) {
        navigate({
          to: "/services/$service",
          params: { service: service },
          search: { imageVersion: imageVersion?.version },
        })
      }
    },
    [navigate, service]
  )

  return (
    <Panel
      heading={!!service ? `${capitalizeFirstLetter(service)} Overview` : undefined}
      opened={!!service}
      onClose={closeServiceOverviewPanel}
      size="large"
    >
      <PanelBody>
        <ErrorBoundary>
          {service && imageVersionsPromise && (
            <ServiceImageVersions
              displayActions
              imageVersionsPromise={imageVersionsPromise}
              onDetailsButtonClick={goToServiceDetailsPage}
              goToPage={setCurrentPageCursor}
            />
          )}
        </ErrorBoundary>
      </PanelBody>
    </Panel>
  )
}
