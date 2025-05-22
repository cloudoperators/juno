/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router"
import { AppShell, Container, PageHeader } from "@cloudoperators/juno-ui-components/index"
import { Messages, MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { Breadcrumb } from "../components/common/Breadcrumb"
import { RouteContext } from "./-types"

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
