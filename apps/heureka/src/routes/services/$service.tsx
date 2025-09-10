/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createFileRoute, retainSearchParams } from "@tanstack/react-router"
import { z } from "zod"
import { Service } from "../../components/Service"
import { LoaderWithCrumb } from "../-types"
import { fetchService } from "../../api/fetchService"

const serviceSearchSchema = z.object({
  org: z.string().optional(),
  imageVersion: z.string().optional(),
})

export const Route = createFileRoute("/services/$service")({
  validateSearch: serviceSearchSchema,
  search: {
    /**
     * TODO: remove it when no longer needed
     * but we need to keep "org" search parameter due to it's significance in the shell app.
     */
    middlewares: [retainSearchParams(["org"])],
  },
  shouldReload: false,
  loaderDeps: ({ search }) => {
    const { imageVersion, ...rest } = search
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
