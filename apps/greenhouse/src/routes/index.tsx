/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useLayoutEffect } from "react"
import { createFileRoute, useNavigate } from "@tanstack/react-router"
import { usePlugin } from "../components/StoreProvider"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  const activeApps = usePlugin().active()
  const navigate = useNavigate({ from: "/" })

  // Before the first render, we want to redirect to the first active app
  useLayoutEffect(() => {
    if (activeApps.length > 0) {
      navigate({ to: `/${activeApps[0]}`, search: (prev) => ({ ...prev }) })
    }
  }, [activeApps])
  return null
}
