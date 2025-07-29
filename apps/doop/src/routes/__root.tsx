/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createRootRouteWithContext, Outlet } from "@tanstack/react-router"
import { QueryClient } from "@tanstack/react-query"
import { AppProps } from "../App"

export type RouteContext = {
  appProps: AppProps
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouteContext>()({
  component: Outlet,
})
