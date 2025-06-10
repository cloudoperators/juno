/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react"
import { ApolloQueryResult } from "@apollo/client"
import { getRouteApi } from "@tanstack/react-router"
import { Spinner } from "@cloudoperators/juno-ui-components"
import { MessagesProvider, Messages } from "@cloudoperators/juno-messages-provider"
import { ServiceImageVersions } from "../common/ServiceImageVersions"
import { ImageVersionDetailsPanel } from "./ImageVersionDetailsPanel"
import { GetServiceImageVersionsQuery, GetServicesQuery } from "../../generated/graphql"
import { ServiceDetails } from "./ServiceDetails"

type ServiceProps = {
  selectedService: string
  selectedImageVersion?: string
  servicePromise: Promise<ApolloQueryResult<GetServicesQuery>>
  imageVersionsPromise: Promise<ApolloQueryResult<GetServiceImageVersionsQuery>>
}

export const Service = ({
  selectedService,
  selectedImageVersion,
  servicePromise,
  imageVersionsPromise,
}: ServiceProps) => {
  const routeApi = getRouteApi("/services/$service")
  const navigate = routeApi.useNavigate()

  return (
    <MessagesProvider>
      <Messages className="mb-4" />
      <Suspense fallback={<Spinner className="mt-4" />}>
        <ServiceDetails servicePromise={servicePromise} />
      </Suspense>
      <ServiceImageVersions
        displayActions={false}
        selectedImageVersion={selectedImageVersion}
        imageVersionsPromise={imageVersionsPromise}
        onImageVersionItemClick={(iv) => {
          navigate({
            to: "/services/$service",
            params: { service: selectedService },
            search: { imageVersion: iv.version },
          })
        }}
      />
      <Suspense>
        <ImageVersionDetailsPanel
          selectedService={selectedService}
          selectedImageVersion={selectedImageVersion}
          imageVersionsPromise={imageVersionsPromise}
          onClose={() => {
            navigate({
              to: "/services/$service",
              params: { service: selectedService },
            })
          }}
        />
      </Suspense>
    </MessagesProvider>
  )
}
