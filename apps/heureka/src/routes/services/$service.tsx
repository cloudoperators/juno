/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createFileRoute } from "@tanstack/react-router"
import { Service } from "../../components/Service"
import { fetchService } from "../../api/fetchService"

export const Route = createFileRoute("/services/$service")({
  shouldReload: false,
  loader: ({ context, params: { service } }) => {
    const { queryClient, apiClient } = context
    // create a promise to fetch the service
    const servicePromise = fetchService({
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
