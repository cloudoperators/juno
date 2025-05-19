import React from "react"
import { createFileRoute, getRouteApi } from "@tanstack/react-router"
import { z } from "zod"
import { Services } from "../components/Services"

const servicesSearchSchema = z.object({
  service: z.string().optional(),
})

export const Route = createFileRoute("/services")({
  validateSearch: servicesSearchSchema,
  component: RouteComponent,
})

function RouteComponent() {
  const routeApi = getRouteApi("/services")
  const { appProps } = routeApi.useRouteContext()
  const { service } = routeApi.useSearch()
  return <Services defaultSelectService={service} initialFilters={appProps.initialFilters} />
}
