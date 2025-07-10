/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { StrictMode, useLayoutEffect } from "react"

import { AppShellProvider, ContentHeading } from "@cloudoperators/juno-ui-components"
import { RouterProvider, createBrowserHistory, createHashHistory, createRouter } from "@tanstack/react-router"
import { decodeV2, encodeV2 } from "@cloudoperators/juno-url-state-provider"
import styles from "./styles.css?inline"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import StoreProvider from "./components/StoreProvider"
import AsyncWorker from "./components/AsyncWorker"
import { AppShell } from "@cloudoperators/juno-ui-components"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { useGlobalsActions } from "./components/StoreProvider"
import { routeTree } from "./routeTree.gen"

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
}

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

  // on load application save the props to be used in oder components
  useLayoutEffect(() => {
    setEndpoint(window.location.origin)
  }, [])

  return (
    <MessagesProvider>
      <AppShell pageHeader={`Doop`} embedded={props.embedded === true}>
        <ContentHeading
          // @ts-expect-error TS(2339) FIXME: Property 'displayName' does not exist on type '{}'... Remove this comment to see the full error message
          heading={`Decentralized Observer of Policies  ${props.displayName ? ` - ${props.displayName}` : ""}`}
        />
        <AsyncWorker consumerId={props.id || "doop"} />
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
