/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useLayoutEffect } from "react"

import { AppShellProvider, ContentHeading } from "@cloudoperators/juno-ui-components"
import AppContent from "./components/AppContent"
import styles from "./styles.css?inline"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import StoreProvider from "./components/StoreProvider"
import AsyncWorker from "./components/AsyncWorker"
import { AppShell } from "@cloudoperators/juno-ui-components"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { useGlobalsActions } from "./components/StoreProvider"

const App = (props = {}) => {
  // @ts-expect-error TS(2339) FIXME: Property 'setEndpoint' does not exist on type '{}'.
  const { setEndpoint } = useGlobalsActions()

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        meta: {
          // @ts-expect-error TS(2339) FIXME: Property 'apiEndpoint' does not exist on type '{}'... Remove this comment to see the full error message
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
      {/* @ts-expect-error TS(2339): Property 'embedded' does not exist on type '{}'. // @ts-expect-error TS(2339) FIXME: */}
      <AppShell pageHeader={`Doop`} embedded={props.embedded === true}>
        <ContentHeading
          // @ts-expect-error TS(2339) FIXME: Property 'displayName' does not exist on type '{}'... Remove this comment to see the full error message
          heading={`Decentralized Observer of Policies  ${props.displayName ? ` - ${props.displayName}` : ""}`}
        />
        {/* @ts-expect-error TS(2339): Property 'id' does not exist on type '{}'. // @ts-expect-error TS(2339) FIXME: */}
        <AsyncWorker consumerId={props.id || "doop"} />
        <QueryClientProvider client={queryClient}>
          {/* @ts-expect-error TS(2339): Property 'id' does not exist on type '{}'. // @ts-expect-error TS(2339) FIXME: */}
          <AppContent id={props?.id} showDebugSeverities={props.showDebugSeverities} />
        </QueryClientProvider>
      </AppShell>
    </MessagesProvider>
  )
}

const StyledApp = (props: any) => {
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
