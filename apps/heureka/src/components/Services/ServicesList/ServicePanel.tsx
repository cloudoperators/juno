/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useMemo, useState } from "react"
import { useNavigate, useRouteContext, useSearch } from "@tanstack/react-router"
import { Panel, PanelBody } from "@cloudoperators/juno-ui-components"
import { ServiceImages } from "../../common/ServiceImages"
import { fetchImages } from "../../../api/fetchImages"
import { ErrorBoundary } from "../../common/ErrorBoundary"
import { ServiceImage } from "../utils"

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const ServicePanel = () => {
  const navigate = useNavigate()
  const { queryClient, apiClient } = useRouteContext({ from: "/services/" })
  const { service } = useSearch({ from: "/services/" })
  const [currentPageCursor, setCurrentPageCursor] = useState<string | null | undefined>(undefined)

  // Create a promise for images that changes with pagination
  const imagesPromise = useMemo(() => {
    if (service) {
      return fetchImages({
        queryClient,
        apiClient,
        filter: {
          service: [service],
        },
        after: currentPageCursor,
      })
    }
    return undefined
  }, [service, currentPageCursor, queryClient, apiClient])

  const closeServiceOverviewPanel = useCallback(() => {
    navigate({
      to: "/services",
      search: (prev) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { service, ...rest } = prev // we're omitting 'service' from the deps so route does not reload when it changes
        return { ...rest }
      },
    })
  }, [navigate])

  const goToServiceDetailsPage = useCallback(
    (image?: ServiceImage) => {
      if (service) {
        if (image) {
          // Navigate to image details page
          navigate({
            to: "/services/$service/images/$image",
            params: { service: service, image: image.repository },
          })
        } else {
          // Navigate to service details page (no specific image)
          navigate({
            to: "/services/$service",
            params: { service: service },
          })
        }
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
        <ErrorBoundary displayErrorMessage>
          {service && imagesPromise && (
            <ServiceImages
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
