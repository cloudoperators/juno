/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { StrictMode } from "react"
import { ApolloProvider } from "@apollo/client"
import { createRouter, RouterProvider, createHashHistory, createBrowserHistory } from "@tanstack/react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AppShellProvider } from "@cloudoperators/juno-ui-components"
import { encodeV2, decodeV2 } from "@cloudoperators/juno-url-state-provider"
import styles from "./styles.scss?inline"
import { ErrorBoundary } from "./components/common/ErrorBoundary"
import { getClient } from "./apollo-client"
import { routeTree } from "./routeTree.gen"

export type InitialFilters = {
  support_group?: string[]
}

const queryClient = new QueryClient()

export type AppProps = {
  theme?: "theme-dark" | "theme-light"
  apiEndpoint?: string
  embedded?: boolean
  initialFilters?: InitialFilters
  basePath?: string
  enableHashedRouting?: boolean
}

const router = createRouter({
  routeTree,
  context: {
    appProps: undefined!,
    apiClient: undefined!,
    queryClient: undefined!,
  },
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const App = (props: AppProps) => {
  const apiClient = getClient({
    uri: props.apiEndpoint,
  })

  /*
   * Dynamically change the type of history on the router
   * based on the enableHashedRouting prop. This ensures that
   * the correct history type is used when A Shell app does not
   * want the app to use browser history.
   */
  router.update({
    routeTree,
    context: { appProps: props, apiClient, queryClient },
    history: props.enableHashedRouting ? createHashHistory() : createBrowserHistory(),
    stringifySearch: encodeV2,
    parseSearch: decodeV2,
  })

  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={apiClient}>
        <AppShellProvider theme={`${props.theme ? props.theme : "theme-dark"}`}>
          {/* load styles inside the shadow dom */}
          <style>{styles.toString()}</style>
          <ErrorBoundary>
            <StrictMode>
              <RouterProvider basepath={props.basePath || "/"} router={router} />
            </StrictMode>
          </ErrorBoundary>
        </AppShellProvider>
      </ApolloProvider>
    </QueryClientProvider>
  )
}

export default App
