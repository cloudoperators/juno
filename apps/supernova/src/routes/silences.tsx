/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { createFileRoute } from "@tanstack/react-router"
import SilencesList from "../components/silences/SilencesList"

export const Route = createFileRoute("/silences")({
  component: RouteComponent,
})

function RouteComponent() {
  return <SilencesList />
}
