/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createFileRoute, useNavigate } from "@tanstack/react-router"
import { usePlugin } from "../components/StoreProvider"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  const activeApps = usePlugin().active()
  const navigate = useNavigate({ from: "/" })

  // Navigate to the active app by keeping the current search params
  return activeApps.length > 0 ? navigate({ to: `/${activeApps[0]}`, search: (prev) => ({ ...prev }) }) : null
}
