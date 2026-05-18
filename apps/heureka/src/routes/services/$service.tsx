/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createFileRoute } from "@tanstack/react-router"
import { Service } from "../../components/Service"
import { fetchService } from "../../api/fetchService"

export const Route = createFileRoute("/services/$service")({
  loader: ({ context, params: { service } }) => {
    const { queryClient, apiClient } = context

    return {
      servicePromise: fetchService({
        queryClient,
        apiClient,
        service,
      }),
      crumb: {
        label: service,
      },
    }
  },
  component: Service,
})
