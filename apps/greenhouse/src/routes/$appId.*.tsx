import React from "react"
import { createFileRoute } from "@tanstack/react-router"
import Plugin from "../components/Plugin"
import { usePlugin } from "../components/StoreProvider"

export const Route = createFileRoute("/$appId/*")({
  component: RouteComponent,
})

function RouteComponent() {
  const config = usePlugin().config()
  const { appId } = Route.useParams()

  if (!config[appId]) {
    return null
  }

  return <Plugin key={appId} id={appId} config={config[appId]} active />
}
