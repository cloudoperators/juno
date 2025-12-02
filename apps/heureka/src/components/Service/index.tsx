/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, useEffect, useState } from "react"
import { useLoaderData, useNavigate, useParams, useRouteContext, useSearch } from "@tanstack/react-router"
import { Spinner } from "@cloudoperators/juno-ui-components"
import { ApolloQueryResult } from "@apollo/client"
import { ServiceImageVersions } from "../common/ServiceImageVersions"
import { ImageVersionDetailsPanel } from "./ImageVersionDetailsPanel"
import { ServiceDetails } from "./ServiceDetails"
import { fetchImages } from "../../api/fetchImages"
import { GetImagesQuery } from "../../generated/graphql"
import { ErrorBoundary } from "../common/ErrorBoundary"

export const Service = () => {
  const navigate = useNavigate()
  const { queryClient, apiClient } = useRouteContext({ from: "/services/$service" })
  const { servicePromise } = useLoaderData({ from: "/services/$service" })
  const { service } = useParams({ from: "/services/$service" })
  const { image: selectedImageRepository } = useSearch({ from: "/services/$service" })
  const [pageCursor, setPageCursor] = useState<string | null | undefined>(undefined)
  const [imagesPromise, setImagesPromise] = useState<Promise<ApolloQueryResult<GetImagesQuery>> | undefined>(undefined)

  // refetch images only when the page cursor changes
  useEffect(() => {
    const promise = fetchImages({
      queryClient,
      apiClient,
      filter: {
        service: [service],
      },
      after: pageCursor,
    })
    setImagesPromise(promise)
  }, [pageCursor, service, queryClient, apiClient])

  return (
    <>
      <ErrorBoundary displayErrorMessage>
        <Suspense fallback={<Spinner className="mt-4" />}>
          <ServiceDetails servicePromise={servicePromise} />
        </Suspense>
      </ErrorBoundary>
      {imagesPromise && (
        <>
          <ServiceImageVersions
            selectedImage={selectedImageRepository}
            imagesPromise={imagesPromise}
            onImageItemClick={(image) => {
              navigate({
                to: "/services/$service",
                params: { service },
                search: { image: image.repository },
              })
            }}
            goToPage={setPageCursor}
          />
          <ErrorBoundary>
            <Suspense>
              <ImageVersionDetailsPanel imagesPromise={imagesPromise} />
            </Suspense>
          </ErrorBoundary>
        </>
      )}
    </>
  )
}
