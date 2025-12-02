/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from "react"
import { useNavigate, useRouteContext, useSearch } from "@tanstack/react-router"
import { Panel, PanelBody } from "@cloudoperators/juno-ui-components"
import { capitalizeFirstLetter } from "../../../utils"
import { ServiceImageVersions } from "../../common/ServiceImageVersions"
import { ServiceImage } from "../utils"
import { fetchImages } from "../../../api/fetchImages"
import { ErrorBoundary } from "../../common/ErrorBoundary"

export const ServicePanel = () => {
  const navigate = useNavigate()
  const { queryClient, apiClient } = useRouteContext({ from: "/services/" })
  const { service } = useSearch({ from: "/services/" })
  const [currentPageCursor, setCurrentPageCursor] = React.useState<string | null | undefined>(undefined)

  // create a promise to fetch images
  const imagesPromise = service
    ? fetchImages({
        queryClient,
        apiClient,
        filter: {
          service: [service],
        },
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
    (image?: ServiceImage) => {
      if (service) {
        navigate({
          to: "/services/$service",
          params: { service: service },
          search: { imageVersion: image?.repository },
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
          {service && imagesPromise && (
            <ServiceImageVersions
              displayActions
              imagesPromise={imagesPromise}
              onDetailsButtonClick={goToServiceDetailsPage}
              goToPage={setCurrentPageCursor}
            />
          )}
        </ErrorBoundary>
      </PanelBody>
    </Panel>
  )
}
