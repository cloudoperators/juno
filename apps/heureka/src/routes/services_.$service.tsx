import React from "react"
import { createFileRoute, getRouteApi } from "@tanstack/react-router"
import { z } from "zod"
import { ServiceDetails } from "../components/ServiceDetails"

const serviceSearchSchema = z.object({
  imageVersion: z.string().optional(),
})

export const Route = createFileRoute("/services_/$service")({
  component: RouteComponent,
  validateSearch: serviceSearchSchema,
})

function RouteComponent() {
  const routeApi = getRouteApi("/services_/$service")
  const { imageVersion } = routeApi.useSearch()
  const { service } = routeApi.useParams()
  return <ServiceDetails serviceName={service} imageVersion={imageVersion} />
}
