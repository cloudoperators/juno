/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { createFileRoute, getRouteApi } from "@tanstack/react-router"
import { z } from "zod"
import { Services } from "../../components/Services"
import { sanitizeSearchParam } from "../../utils"

const servicesSearchSchema = z.object({
  service: z
    .string()
    .transform((val) => sanitizeSearchParam(val))
    .optional(),
})

export const Route = createFileRoute("/services/")({
  validateSearch: servicesSearchSchema,
  component: RouteComponent,
})

function RouteComponent() {
  const routeApi = getRouteApi("/services/")
  const { appProps } = routeApi.useRouteContext()
  const { service } = routeApi.useSearch()

  return <Services defaultSelectService={service} initialFilters={appProps.initialFilters} />
}
