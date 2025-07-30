/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { createBrowserHistory, createHashHistory, createRouter, RouterProvider } from "@tanstack/react-router"
import { decodeV2, encodeV2 } from "@cloudoperators/juno-url-state-provider"
import { AppShellProvider, CodeBlock } from "@cloudoperators/juno-ui-components"
import styles from "./styles.css?inline"
import { StoreProvider } from "./components/StoreProvider"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import CustomAppShell from "./components/CustomAppShell"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ErrorBoundary } from "react-error-boundary"
import useUrlState from "./hooks/useUrlState"
import useUrlQueryState from "./hooks/useUrlQueryState"
import { z } from "zod"
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
  endpoint: string
  filterLabels: string[]
  initialFilters: Record<string, any>
  predefinedFilters: Record<string, any>
  silenceExcludedLabels: string[]
  silenceTemplates: any[]
  theme: "theme-dark" | "theme-light"
  username: string
  enableHashedRouting?: boolean
  basePath?: string
}

const AppShellTheme = z.enum(["theme-dark", "theme-light"])

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 5 * 60 * 1000, // 5 minutes
    },
    mutations: {
      // Add mutation defaults if needed
    },
  },
})

const preErrorClasses = `
    custom-error-pre
    border-theme-error
    border
    h-full
    w-full
    `

const fallbackRender = ({ error }: any) => {
  return (
    <div className="w-1/2">
      <CodeBlock className={preErrorClasses} copy={false}>
        {error?.message || error?.toString() || "An error occurred"}
      </CodeBlock>
    </div>
  )
}

function App(props: AppProps) {
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

  return (
    <ErrorBoundary fallbackRender={fallbackRender}>
      <MessagesProvider>
        <CustomAppShell>
          <QueryClientProvider client={queryClient}>
            <RouterProvider basepath={props.basePath || "/"} router={router} />
          </QueryClientProvider>
        </CustomAppShell>
      </MessagesProvider>
    </ErrorBoundary>
  )
}

const AppWithOldUrlStructure = (props: any) => {
  // syncs navigation relevant states with the url for deep links
  // gets the state from the URL in the beginning
  // sets the URL from state information
  useUrlState()
  return <App {...props} />
}

const AppWithNewUrlStructure = (props: any) => {
  /**
   * [TODO]
   * move the URL state changes closer to the origins of the change
   * so the whole app does not unnecessarily re-render.
   */
  useUrlQueryState()
  return <App {...props} />
}

const StyledApp = (props: any) => {
  const theme = AppShellTheme.safeParse(props.theme).success ? props.theme : "theme-dark"

  return (
    <AppShellProvider theme={theme}>
      {/* load appstyles inside the shadow dom */}
      <style>{styles.toString()}</style>
      <StoreProvider options={props}>
        {props?.enableNewUrlStructure ? <AppWithNewUrlStructure {...props} /> : <AppWithOldUrlStructure {...props} />}
      </StoreProvider>
    </AppShellProvider>
  )
}

export default StyledApp
