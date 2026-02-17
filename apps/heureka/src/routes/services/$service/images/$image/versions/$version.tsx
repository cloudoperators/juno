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
    const decodedService = decodeURIComponent(service)
    const decodedImage = decodeURIComponent(image)
    const decodedVersion = decodeURIComponent(version)
    const imageVersionsPromise = fetchImageVersions({
      queryClient,
      apiClient,
      filter: {
        service: [decodedService],
        repository: [decodedImage],
        version: [decodedVersion],
      },
      firstVulnerabilities: 20,
      firstOccurences: 100,
    })

    return {
      imageVersionsPromise,
      crumb: {
        label: getShortSha256(decodedVersion),
      },
      decodedParams: { service: decodedService, image: decodedImage, version: decodedVersion },
    }
  },
  component: ImageVersionDetailsPage,
})

function ImageVersionDetailsPage() {
  const { imageVersionsPromise, decodedParams } = Route.useLoaderData()
  const { service, image, version } = decodedParams

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
