/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"
import { Service } from "../../components/Service"
import { LoaderWithCrumb } from "../-types"
import { sanitizeSearchParam } from "../../utils"
import { fetchImageVersions } from "../../api/fetchImageVersions"
import { fetchService } from "../../api/fetchService"

const serviceSearchSchema = z.object({
  imageVersion: z
    .string()
    .transform((val) => sanitizeSearchParam(val))
    .optional(),
})

export const Route = createFileRoute("/services/$service")({
  validateSearch: serviceSearchSchema,
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
