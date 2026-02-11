/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react"
import { createFileRoute, Outlet, useMatchRoute } from "@tanstack/react-router"
import { z } from "zod"
import { ImageDetails } from "../../../../components/Service/ImageDetails"
import { fetchImages } from "../../../../api/fetchImages"
import { Spinner } from "@cloudoperators/juno-ui-components"
import { ErrorBoundary } from "../../../../components/common/ErrorBoundary"

const imageDetailsSearchSchema = z.object({
  vulnerabilitiesList: z.enum(["active", "remediated"]).default("active"),
  vulRemediations: z.string().optional(),
})

export type ImageDetailsSearchParams = z.infer<typeof imageDetailsSearchSchema>

export const Route = createFileRoute("/services/$service/images/$image")({
  validateSearch: imageDetailsSearchSchema,
  shouldReload: false,
  loader: ({ context, params: { service, image } }) => {
    const { queryClient, apiClient } = context
    // create a promise to fetch the images for this service
    const imagesPromise = fetchImages({
      queryClient,
      apiClient,
      filter: {
        service: [service],
        repository: [image],
      },
      firstVersions: 100, // Fetch versions for the image
    })

    return {
      imagesPromise,
      crumb: {
        label: image,
      },
    }
  },
  component: ImageDetailsPage,
})

function ImageDetailsPage() {
  const { imagesPromise } = Route.useLoaderData()
  const { service, image } = Route.useParams()
  const search = Route.useSearch()
  const matchRoute = useMatchRoute()
  const isOnVersionDetailsPage = matchRoute({ to: "/services/$service/images/$image/versions/$version" })

  // If we're on a child route (version details), just render the outlet
  if (isOnVersionDetailsPage) {
    return <Outlet />
  }

  const vulnerabilitiesTab = search.vulnerabilitiesList
  const vulRemediations = search.vulRemediations

  // Otherwise, render the image details
  return (
    <ErrorBoundary displayErrorMessage>
      <Suspense fallback={<Spinner className="mt-4" />}>
        <ImageDetails
          imagesPromise={imagesPromise}
          imageRepository={image}
          service={service}
          vulnerabilitiesTab={vulnerabilitiesTab}
          vulRemediations={vulRemediations}
        />
      </Suspense>
    </ErrorBoundary>
  )
}
