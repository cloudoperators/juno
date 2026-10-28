/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createFileRoute, Outlet } from "@tanstack/react-router"
import { LoaderWithCrumb } from "../-types"

export const Route = createFileRoute("/trends")({
  loader: (): LoaderWithCrumb => ({
    crumb: {
      label: "Trends",
      icon: "home",
    },
  }),
  component: Outlet,
})
