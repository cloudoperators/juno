import React from "react"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { createFileRoute } from "@tanstack/react-router"
import AlertDetail from "../components/alerts/AlertDetail"
import RegionsList from "../components/regions/RegionsList"
import AlertsTab from "../components/alerts/AlertsTab"

export const Route = createFileRoute("/alerts")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <MessagesProvider>
        <AlertDetail />
      </MessagesProvider>
      <RegionsList />
      <AlertsTab />
    </>
  )
}
