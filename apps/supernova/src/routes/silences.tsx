import React from "react"
import { createFileRoute } from "@tanstack/react-router"
import SilencesList from "../components/silences/SilencesList"

export const Route = createFileRoute("/silences")({
  component: RouteComponent,
})

function RouteComponent() {
  return <SilencesList />
}
