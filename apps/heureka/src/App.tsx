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
import styles from "./styles.css?inline"
import { ErrorBoundary } from "./components/common/ErrorBoundary"
import { getClient } from "./apollo-client"
import { routeTree } from "./routeTree.gen"
import { InitialFiltersProvider } from "./store/InitialFiltersContext"

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
    parseSearch: (searchString) => {
      if (!props.enableHashedRouting) {
        return decodeV2(searchString)
      }

      /*
       * In case of hashed routing Tanstack router returns URL search params of the entire URL rather than just from the hashed part.
       * We'll have to extract the query part from the hash because otherwise in embedded mode the app will be taking search params from the shell app as well.
       * Sanitize the search string by extracting the substring between the first '?' and the next '?' (if any), keeping the first '?'.
       * https://github.com/TanStack/router/issues/4370
       * http://localhost:3000/?preHashParam=prehashtest#/services?postHashParam1=test1?preHashParam=prehashtest
       * searchString = "?postHashParam1=test1?preHashParam=prehashtest"
       * searchStringFromHash = "?postHashParam1=test1"
       */
      const postHashParams = searchString.indexOf("?")
      if (postHashParams === -1) return {} // If no query part is found, return an empty object
      const preHashParams = searchString.indexOf("?", postHashParams + 1)
      const searchStringFromHash = searchString.slice(postHashParams, preHashParams === -1 ? undefined : preHashParams)

      return decodeV2(searchStringFromHash)
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={apiClient}>
        <AppShellProvider theme={`${props.theme ? props.theme : "theme-dark"}`}>
          {/* load styles inside the shadow dom */}
          <style>{styles.toString()}</style>
          <ErrorBoundary>
            <StrictMode>
              <InitialFiltersProvider>
                <RouterProvider basepath={props.basePath || "/"} router={router} />
              </InitialFiltersProvider>
            </StrictMode>
          </ErrorBoundary>
        </AppShellProvider>
      </ApolloProvider>
    </QueryClientProvider>
  )
}

export default App
