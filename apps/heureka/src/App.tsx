/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { StrictMode } from "react"
import { AppShellProvider } from "@cloudoperators/juno-ui-components"
import { createRouter, RouterProvider, createHashHistory, createBrowserHistory } from "@tanstack/react-router"
import { ApolloProvider } from "@apollo/client"
import styles from "./styles.css?inline"
import { ErrorBoundary } from "./components/common/ErrorBoundary"
import { getClient } from "./apollo-client"
import { routeTree } from "./routeTree.gen"

export type InitialFilters = {
  support_group?: string[]
}

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
  },
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const App = (props: AppProps) => {
  /*
   * Dynamically change the type of history on the router
   * based on the enableHashedRouting prop. This ensures that
   * the correct history type is used when A Shell app does not
   * want the app to use browser history.
   */
  router.update({
    routeTree,
    context: { appProps: props },
    history: props.enableHashedRouting ? createHashHistory() : createBrowserHistory(),
  })

  return (
    <ApolloProvider client={getClient({ uri: props.apiEndpoint })}>
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
  )
}

export default App
