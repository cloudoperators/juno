/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createFileRoute } from "@tanstack/react-router"
import { Service } from "../../components/Service"
import { fetchService } from "../../api/fetchService"
import { NetworkStatus } from "@apollo/client"
import { GetServicesQueryResult } from "../../generated/graphql"

export const Route = createFileRoute("/services/$service")({
  shouldReload: false,
  loader: ({ context, params: { service }, location }) => {
    const { queryClient, apiClient } = context

    // Skip fetching service if we're on the image details page or version details page
    // Check if the pathname includes "/images/" which indicates we're on an image details or version details route
    const isOnImageOrVersionDetailsPage = location.pathname.includes("/images/")

    // Return a no-op promise if on image or version details page to avoid unnecessary fetch
    // ServiceDetails component won't render on these pages, so this promise won't be used
    const servicePromise: Promise<GetServicesQueryResult> = isOnImageOrVersionDetailsPage
      ? Promise.resolve({
          data: { Services: { edges: [], totalCount: 0, pageInfo: null } },
          loading: false,
          networkStatus: NetworkStatus.ready,
          partial: false,
        } as unknown as GetServicesQueryResult)
      : fetchService({
          queryClient,
          apiClient,
          service,
        })

    return {
      servicePromise,
      crumb: {
        label: service,
      },
    }
  },
  component: Service,
})
