import React from "react"
import { createFileRoute, getRouteApi } from "@tanstack/react-router"
import { z } from "zod"
import { ServiceDetails } from "../../components/ServiceDetails"
import { Crumb, LoaderWithCrumb } from "../__root"

const serviceSearchSchema = z.object({
  imageVersion: z.string().optional(),
})

export const Route = createFileRoute("/services/$service")({
  validateSearch: serviceSearchSchema,
  loader: ({ params }): LoaderWithCrumb => ({
    crumb: {
      label: params.service,
    },
  }),

  component: RouteComponent,
})

function RouteComponent() {
  const routeApi = getRouteApi("/services/$service")
  const { imageVersion } = routeApi.useSearch()
  const { service } = routeApi.useParams()
  return <ServiceDetails serviceName={service} imageVersion={imageVersion} />
}
