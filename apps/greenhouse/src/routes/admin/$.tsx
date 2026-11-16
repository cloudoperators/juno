/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { createFileRoute } from "@tanstack/react-router"
import { Status } from "@cloudoperators/juno-ui-components"

// Catch-all for unmatched /admin/* paths so they render the 404 Status within the admin layout,
// instead of falling through to the plugin splat route (which reports "Plugin Not Found").
export const Route = createFileRoute("/admin/$")({
  component: () => <Status status="error" code={404} />,
})
