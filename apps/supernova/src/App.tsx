/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {
  createBrowserHistory,
  createHashHistory,
  createRouter,
  parseSearchWith,
  RouterProvider,
} from "@tanstack/react-router"
import { z } from "zod"
import { ErrorBoundary } from "react-error-boundary"
import { decodeV2, encodeV2 } from "@cloudoperators/juno-url-state-provider"
import { AppShellProvider, CodeBlock } from "@cloudoperators/juno-ui-components"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import styles from "./styles.css?inline"
import { StoreProvider } from "./components/StoreProvider"
import { routeTree } from "./routeTree.gen"
import { extractSearchStringFromHashFragment } from "./lib/urlStateUtils"

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
      // If the app is using hashed routing, we need to correctly extract the search string from the hash fragment
      const searchStringToDecode = !props.enableHashedRouting
        ? searchString
        : extractSearchStringFromHashFragment(searchString)

      // If the search string is empty, return an empty object
      if (!searchStringToDecode) return {}

      // If the search string contains old state with key "__s", we need special handling:
      // - We shouldn't use decodeV2 directly on the full string
      // - Instead, we extract the "__s" parameter separately
      // - The "__s" parameter contains state encoded by the old package format
      // - We'll handle parsing it separately on index route
      const searchParams = new URLSearchParams(searchStringToDecode)
      const oldState = searchParams.get("__s") // This is used to extract the search params from the hash fragment
      if (oldState !== null) {
        searchParams.delete("__s") // Remove the old state from the search params
      }

      // convert searchParams to search string
      const searchStringWithoutOldState = searchParams.toString()

      return { ...decodeV2(searchStringWithoutOldState), oldState: oldState || undefined }
    },
  })

  return (
    <ErrorBoundary fallbackRender={fallbackRender}>
      <MessagesProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider basepath={props.basePath || "/"} router={router} />
        </QueryClientProvider>
      </MessagesProvider>
    </ErrorBoundary>
  )
}

const StyledApp = (props: any) => {
  const theme = AppShellTheme.safeParse(props.theme).success ? props.theme : "theme-dark"

  return (
    <AppShellProvider theme={theme}>
      {/* load appstyles inside the shadow dom */}
      <style>{styles.toString()}</style>
      <StoreProvider options={props}>
        <App {...props} />
      </StoreProvider>
    </AppShellProvider>
  )
}

export default StyledApp
