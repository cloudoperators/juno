/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useLayoutEffect } from "react"

import { AppShellProvider, ContentHeading } from "@cloudoperators/juno-ui-components"
import AppContent from "./components/AppContent"
import styles from "./styles.scss?inline"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import StoreProvider from "./components/StoreProvider"
import AsyncWorker from "./components/AsyncWorker"
import { AppShell } from "@cloudoperators/juno-ui-components"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { useGlobalsActions } from "./components/StoreProvider"

const App = (props = {}) => {
  const { setEndpoint } = useGlobalsActions()

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        meta: {
          endpoint: props.apiEndpoint,
        },
      },
    },
  })

  // on load application save the props to be used in oder components
  useLayoutEffect(() => {
    setEndpoint(window.location.origin)
  }, [])

  return (
    <MessagesProvider>
      <AppShell pageHeader={`Doop`} embedded={props.embedded === true}>
        <ContentHeading
          heading={`Decentralized Observer of Policies  ${props.displayName ? ` - ${props.displayName}` : ""}`}
        />
        <AsyncWorker consumerId={props.id || "doop"} />
        <QueryClientProvider client={queryClient}>
          <AppContent id={props?.id} showDebugSeverities={props.showDebugSeverities} />
        </QueryClientProvider>
      </AppShell>
    </MessagesProvider>
  )
}

const StyledApp = (props) => {
  return (
    <AppShellProvider>
      {/* load styles inside the shadow dom */}
      <style>{styles.toString()}</style>
      <StoreProvider options={props}>
        <App {...props} />
      </StoreProvider>
    </AppShellProvider>
  )
}

export default StyledApp
