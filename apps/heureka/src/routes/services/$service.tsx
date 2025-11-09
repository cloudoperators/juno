/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"
import { Service } from "../../components/Service"
import { fetchService } from "../../api/fetchService"

const serviceSearchSchema = z.object({
  imageVersion: z.string().optional(),
})

export const Route = createFileRoute("/services/$service")({
  validateSearch: serviceSearchSchema,
  shouldReload: false,
  loaderDeps: ({ search }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { imageVersion, ...rest } = search // we're omitting 'imageVersion' from the deps so route does not reload when it changes
    return { ...rest }
  },
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
