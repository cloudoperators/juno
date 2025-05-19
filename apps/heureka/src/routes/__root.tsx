import React from "react"
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router"
import { AppShell, Container, KnownIcons, PageHeader } from "@cloudoperators/juno-ui-components/index"
import { Messages, MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { AppProps } from "../App"
import { Breadcrumb } from "../components/common/Breadcrumb"

type RouteContext = {
  appProps: AppProps
}

export type Crumb = {
  label: string
  icon?: KnownIcons
}

export type LoaderWithCrumb = {
  crumb: Crumb
}

export const Route = createRootRouteWithContext<RouteContext>()({
  component: Root,
})

function Root() {
  const { appProps } = Route.useRouteContext()
  return (
    <AppShell embedded={appProps.embedded} pageHeader={<PageHeader heading="Heureka" />}>
      <Container py px>
        <MessagesProvider>
          <Messages />
          <Breadcrumb />
          <Outlet />
        </MessagesProvider>
      </Container>
    </AppShell>
  )
}
