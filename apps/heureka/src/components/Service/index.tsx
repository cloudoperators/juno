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
import { fetchImageVersions } from "../../api/fetchImageVersions"
import { GetServiceImageVersionsQuery } from "../../generated/graphql"
import { ErrorBoundary } from "../common/ErrorBoundary"

export const Service = () => {
  const navigate = useNavigate()
  const { queryClient, apiClient } = useRouteContext({ from: "/services/$service" })
  const { servicePromise } = useLoaderData({ from: "/services/$service" })
  const { service } = useParams({ from: "/services/$service" })
  const { imageVersion } = useSearch({ from: "/services/$service" })
  const [pageCursor, setPageCursor] = useState<string | null | undefined>(undefined)
  const [imageVersionsPromise, setImageVersionsPromise] = useState<
    Promise<ApolloQueryResult<GetServiceImageVersionsQuery>> | undefined
  >(undefined)

  // refetch image versions only when the page cursor changes
  useEffect(() => {
    const promise = fetchImageVersions({
      queryClient,
      apiClient,
      service,
      after: pageCursor,
    })
    setImageVersionsPromise(promise)
  }, [pageCursor])

  return (
    <>
      <ErrorBoundary displayErrorMessage>
        <Suspense fallback={<Spinner className="mt-4" />}>
          <ServiceDetails servicePromise={servicePromise} />
        </Suspense>
      </ErrorBoundary>
      {imageVersionsPromise && (
        <>
          <ServiceImageVersions
            selectedImageVersion={imageVersion}
            imageVersionsPromise={imageVersionsPromise}
            onImageVersionItemClick={(iv) => {
              navigate({
                to: "/services/$service",
                params: { service },
                search: { imageVersion: iv.version },
              })
            }}
            goToPage={setPageCursor}
          />
          <ErrorBoundary>
            <Suspense>
              <ImageVersionDetailsPanel imageVersionsPromise={imageVersionsPromise} />
            </Suspense>
          </ErrorBoundary>
        </>
      )}
    </>
  )
}
