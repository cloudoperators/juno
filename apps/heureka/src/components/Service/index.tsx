/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, useState, useMemo } from "react"
import { Outlet, useLoaderData, useMatchRoute, useNavigate, useParams, useRouteContext } from "@tanstack/react-router"
import { Spinner } from "@cloudoperators/juno-ui-components"
import { ServiceImages } from "../common/ServiceImages"
import { ServiceDetails } from "./ServiceDetails"
import { fetchImages } from "../../api/fetchImages"
import { ErrorBoundary } from "../common/ErrorBoundary"

export const Service = () => {
  const navigate = useNavigate()
  const { queryClient, apiClient } = useRouteContext({ from: "/services/$service" })
  const { servicePromise } = useLoaderData({ from: "/services/$service" })
  const { service } = useParams({ from: "/services/$service" })
  const [pageCursor, setPageCursor] = useState<string | null | undefined>(undefined)

  // Check if we're on a child route (image details page or version details page)
  const matchRoute = useMatchRoute()
  const isOnImageDetailsPage = matchRoute({ to: "/services/$service/images/$image" })
  const isOnVersionDetailsPage = matchRoute({ to: "/services/$service/images/$image/versions/$version" })

  const imagesPromise = useMemo(() => {
    if (isOnVersionDetailsPage) return undefined
    return fetchImages({
      queryClient,
      apiClient,
      filter: {
        service: [service],
      },
      after: pageCursor,
    })
  }, [pageCursor, service, queryClient, apiClient, isOnVersionDetailsPage])

  // If we're on a child route (image details or version details), just render the outlet
  if (isOnImageDetailsPage || isOnVersionDetailsPage) {
    return <Outlet />
  }

  // Otherwise, render the service details and images list
  return (
    <>
      <ErrorBoundary displayErrorMessage>
        <Suspense fallback={<Spinner className="mt-4" />}>
          <ServiceDetails servicePromise={servicePromise} />
        </Suspense>
      </ErrorBoundary>
      {imagesPromise && (
        <ServiceImages
          imagesPromise={imagesPromise}
          onImageItemClick={(image) => {
            void navigate({
              to: "/services/$service/images/$image",
              params: { service, image: image.repository },
            })
          }}
          goToPage={setPageCursor}
        />
      )}
    </>
  )
}
