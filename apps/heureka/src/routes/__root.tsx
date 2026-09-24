/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { createRootRouteWithContext, ErrorComponentProps, Outlet } from "@tanstack/react-router"
import { Container } from "@cloudoperators/juno-ui-components/index"
import { Breadcrumb } from "../components/common/Breadcrumb"
import { Navigation } from "../components/common/Navigation"
import { RouteContext } from "./-types"
import { ErrorMessage } from "../components/common/ErrorBoundary/ErrorMessage"

export const Route = createRootRouteWithContext<RouteContext>()({
  component: Root,
  errorComponent: RootError,
})

function Root() {
  return (
    <>
      <Navigation />
      <Container py px>
        <Breadcrumb />
        <Outlet />
      </Container>
    </>
  )
}

function RootError({ error }: ErrorComponentProps) {
  return (
    <>
      <Navigation />
      <Container py px>
        <Breadcrumb />
        <ErrorMessage error={error instanceof Error ? error : new Error(String(error))} />
      </Container>
    </>
  )
}
