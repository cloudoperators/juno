import React from "react"
import { createFileRoute, useNavigate } from "@tanstack/react-router"
import { usePlugin } from "../components/StoreProvider"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  const activeApps = usePlugin().active()
  const navigate = useNavigate({ from: "/" })

  React.useEffect(() => {
    if (activeApps.length > 0) {
      // Navigate to the active app by keeping the current search params
      navigate({ to: `/${activeApps[0]}/*`, search: (prev) => ({ ...prev }) })
    }
  }, [navigate])
}
