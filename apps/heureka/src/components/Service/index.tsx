/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react"
import { useLoaderData, useNavigate, useParams, useSearch } from "@tanstack/react-router"
import { Spinner } from "@cloudoperators/juno-ui-components"
import { MessagesProvider, Messages } from "@cloudoperators/juno-messages-provider"
import { ServiceImageVersions } from "../common/ServiceImageVersions"
import { ImageVersionDetailsPanel } from "./ImageVersionDetailsPanel"
import { ServiceDetails } from "./ServiceDetails"

export const Service = () => {
  const navigate = useNavigate()
  const { servicePromise, imageVersionsPromise } = useLoaderData({ from: "/services/$service" })
  const { service } = useParams({ from: "/services/$service" })
  const { imageVersion } = useSearch({ from: "/services/$service" })

  return (
    <MessagesProvider>
      <Messages className="mb-4" />
      <Suspense fallback={<Spinner className="mt-4" />}>
        <ServiceDetails servicePromise={servicePromise} />
      </Suspense>
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
      />
      <Suspense>
        <ImageVersionDetailsPanel />
      </Suspense>
    </MessagesProvider>
  )
}
