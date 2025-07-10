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
