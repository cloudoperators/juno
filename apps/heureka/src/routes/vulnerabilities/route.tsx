/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createFileRoute, Outlet } from "@tanstack/react-router"
import { LoaderWithCrumb } from "../-types"

export const Route = createFileRoute("/vulnerabilities")({
  loader: (): LoaderWithCrumb => ({
    crumb: {
      label: "Vulnerabilities",
      icon: "home",
    },
  }),
  component: Outlet,
}) 