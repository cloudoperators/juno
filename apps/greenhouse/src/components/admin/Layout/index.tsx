/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Container, Stack } from "@cloudoperators/juno-ui-components"
import { Breadcrumb } from "./Breadcrumb"
import { Navigation } from "./Navigation"
import { ErrorMessage } from "../common/ErrorBoundary/ErrorMessage"
import { Outlet, ErrorComponentProps } from "@tanstack/react-router"
import { MessagesProvider, Messages } from "@cloudoperators/juno-messages-provider"

type LayoutProps = {
  error?: unknown
}

export const Layout = (props: LayoutProps | ErrorComponentProps) => {
  const hasError = 'error' in props && props.error !== undefined
  const normalizedError = hasError
    ? props.error instanceof Error
      ? props.error
      : new Error(String(props.error))
    : undefined

  return (
    <>
      <Navigation />
      <Container py px>
        <Breadcrumb />
        <MessagesProvider>
          <Stack direction="vertical" gap="4">
            <Messages />
            {/* If an error from a sub-route reaches this layout, display it inline
                while keeping the navigation and breadcrumb visible for context. */}
            {hasError ? <ErrorMessage error={normalizedError!} /> : <Outlet />}
          </Stack>
        </MessagesProvider>
      </Container>
    </>
  )
}
