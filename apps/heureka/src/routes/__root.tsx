/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router"
import { Container } from "@cloudoperators/juno-ui-components/index"
import { Breadcrumb } from "../components/common/Breadcrumb"
import { Navigation } from "../components/common/Navigation"
import { RouteContext } from "./-types"
import { ErrorMessage } from "../components/common/ErrorBoundary/ErrorMessage"

export const Route = createRootRouteWithContext<RouteContext>()({
  component: Root,
  errorComponent: Root,
})

function Root({ error }: { error?: Error }) {
  return (
    <>
      <Navigation />
      <Container py px>
        <Breadcrumb />
        {error ? <ErrorMessage error={error} /> : <Outlet />}
      </Container>
    </>
  )
}
