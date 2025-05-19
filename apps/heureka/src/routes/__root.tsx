import React from "react"
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router"
import { AppShell, Container, PageHeader } from "@cloudoperators/juno-ui-components/index"
import { Messages, MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { AppProps } from "../App"

type RouteContext = {
  appProps: AppProps
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
          <Outlet />
        </MessagesProvider>
      </Container>
    </AppShell>
  )
}
