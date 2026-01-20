/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react"
import { createFileRoute } from "@tanstack/react-router"
import { ImageVersionDetails } from "../../../../../../components/Service/ImageVersionDetails"
import { fetchImageVersions } from "../../../../../../api/fetchImageVersions"
import { Spinner } from "@cloudoperators/juno-ui-components"
import { ErrorBoundary } from "../../../../../../components/common/ErrorBoundary"
import { getShortSha256 } from "../../../../../../utils"

export const Route = createFileRoute("/services/$service/images/$image/versions/$version")({
  shouldReload: false,
  loader: ({ context, params: { service, image, version } }) => {
    const { queryClient, apiClient } = context
    // create a promise to fetch the image versions for this service, image, and version
    const imageVersionsPromise = fetchImageVersions({
      queryClient,
      apiClient,
      filter: {
        service: [service],
        repository: [image],
        version: [version],
      },
      firstVulnerabilities: 20,
      firstOccurences: 100,
    })

    return {
      imageVersionsPromise,
      crumb: {
        label: getShortSha256(version),
      },
    }
  },
  component: ImageVersionDetailsPage,
})

function ImageVersionDetailsPage() {
  const { imageVersionsPromise } = Route.useLoaderData()
  const { service, image, version } = Route.useParams()

  return (
    <ErrorBoundary displayErrorMessage>
      <Suspense fallback={<Spinner className="mt-4" />}>
        <ImageVersionDetails
          imageVersionsPromise={imageVersionsPromise}
          imageVersion={version}
          service={service}
          imageRepository={image}
        />
      </Suspense>
    </ErrorBoundary>
  )
}
