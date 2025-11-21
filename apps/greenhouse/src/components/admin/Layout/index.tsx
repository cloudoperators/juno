/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Container } from "@cloudoperators/juno-ui-components"
import { Breadcrumb } from "./Breadcrumb"
import { Navigation } from "./Navigation"
import { ErrorMessage } from "../common/ErrorBoundary/ErrorMessage"
import { Outlet } from "@tanstack/react-router"

type LayoutProps = {
  error?: Error
}

export const Layout = ({ error }: LayoutProps) => (
  <>
    <Navigation />
    <Container py px>
      <Breadcrumb />
      {/*
        This ensures that if an error was not caught by a sub-route,
        it is caught and displayed here keeping breadcrumb and the navigation visible,
        providing a consistent layout for error handling.
      */}
      {error ? (
        <ErrorMessage error={error} />
      ) : (
        <Container px={false}>
          <Outlet />
        </Container>
      )}
    </Container>
  </>
)
