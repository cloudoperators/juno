/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"

import { AppShell, AppShellProvider } from "@cloudoperators/juno-ui-components"
import StoreProvider from "./components/StoreProvider"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AppContent from "./AppContent"
import styles from "./styles.scss"
import AsyncWorker from "./components/AsyncWorker"
import useStore from "./store"

const App = (props = {}) => {
  const setEndpoint = useStore((state) => state.setEndpoint)

  // Create query client which it can be used from overall in the app
  // set default endpoint to fetch data
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        meta: {
          endpoint: props.endpoint || "",
        },
      },
    },
  })

  // on app initial load save Endpoint
  // used from overall in the application
  useEffect(() => {
    setEndpoint(props.endpoint)
  }, [])

  return (
    <MessagesProvider>
      <QueryClientProvider client={queryClient}>
        <AppShell
          pageHeader="Converged Cloud | Secrets"
          embedded={props.embedded === "true" || props.embedded === true}
        >
          <AsyncWorker />
          <AppContent props={props} />
        </AppShell>
      </QueryClientProvider>
    </MessagesProvider>
  )
}

const StyledApp = (props) => {
  return (
    <AppShellProvider theme={`${props.theme ? props.theme : "theme-dark"}`}>
      {/* load styles inside the shadow dom */}
      <style>{styles.toString()}</style>
      <StoreProvider>
        <App {...props} />
      </StoreProvider>
    </AppShellProvider>
  )
}

export default StyledApp
