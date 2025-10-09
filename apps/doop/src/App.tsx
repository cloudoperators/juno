/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { StrictMode, useLayoutEffect } from "react"

import { AppShellProvider, ContentHeading } from "@cloudoperators/juno-ui-components"
import { RouterProvider, createBrowserHistory, createHashHistory, createRouter } from "@tanstack/react-router"
import { decodeV2, encodeV2, registerConsumer } from "@cloudoperators/juno-url-state-provider"
import styles from "./styles.css?inline"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import StoreProvider from "./components/StoreProvider"
import { AppShell } from "@cloudoperators/juno-ui-components"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { useGlobalsActions } from "./components/StoreProvider"
import { routeTree } from "./routeTree.gen"
import { convertAppStateToUrlState, extractSearchStringFromHashFragment, readLegacyUrlState } from "./lib/urlStateUtils"

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    appProps: undefined!,
    queryClient: undefined!,
  },
})

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

export type AppProps = {
  id?: string
  theme?: "theme-dark" | "theme-light"
  apiEndpoint?: string
  embedded?: boolean
  basePath?: string
  enableHashedRouting?: boolean
  showDebugSeverities?: boolean
  initialFilters?: Record<string, string[]>
}

const urlStateManager = registerConsumer("doop")

const App = (props: AppProps = {}) => {
  // @ts-expect-error TS(2339) FIXME: Property 'setEndpoint' does not exist on type '{}'.
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

  /*
   * Dynamically change the type of history on the router
   * based on the enableHashedRouting prop. This ensures that
   * the correct history type is used when A Shell app does not
   * want the app to use browser history.
   */
  router.update({
    routeTree,
    context: { appProps: props, queryClient },
    history: props.enableHashedRouting ? createHashHistory() : createBrowserHistory(),
    stringifySearch: encodeV2,
    parseSearch: (searchString) => {
      // If the app is using hashed routing, we need to correctly extract the search string from the hash fragment
      const searchStringToDecode = !props.enableHashedRouting
        ? searchString
        : extractSearchStringFromHashFragment(searchString)

      // If the search string is empty, return an empty object
      if (!searchStringToDecode) return {}

      /**
       * To make new URL state compatible with the legacy URL state,
       * we need to extract the legacy URL state from the search string
       * and convert it to the new URL state format.
       */
      const searchParams = new URLSearchParams(searchStringToDecode)
      const legacyUrlState = searchParams.get("__s") // This is used to extract the search params from the hash fragment
      let newUrlState = {}
      if (legacyUrlState !== null) {
        newUrlState = convertAppStateToUrlState(readLegacyUrlState(urlStateManager.currentState()))
        searchParams.delete("__s") // Remove the old state from the search params
      }

      const searchStringWithoutLegacyUrlState = searchParams.toString()

      return { ...decodeV2(searchStringWithoutLegacyUrlState), ...newUrlState, legacyUrlState }
    },
  })

  // on load application save the props to be used in oder components
  useLayoutEffect(() => {
    setEndpoint(window.location.origin)
  }, [])

  return (
    <MessagesProvider>
      <AppShell pageHeader={`Doop`} embedded={props.embedded === true}>
        <QueryClientProvider client={queryClient}>
          <StrictMode>
            <RouterProvider basepath={props.basePath || "/"} router={router} />
          </StrictMode>
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
