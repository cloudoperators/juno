/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { AppShellProvider, CodeBlock } from "@cloudoperators/juno-ui-components"
import AppContent from "./AppContent"
import styles from "./styles.css?inline"
import { StoreProvider } from "./components/StoreProvider"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import CustomAppShell from "./components/CustomAppShell"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ErrorBoundary } from "react-error-boundary"
import useUrlState from "./hooks/useUrlState"
import useUrlQueryState from "./hooks/useUrlQueryState"
import { z } from "zod"
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

function App() {
  return (
    <ErrorBoundary fallbackRender={fallbackRender}>
      <MessagesProvider>
        <CustomAppShell>
          <QueryClientProvider client={queryClient}>
            <AppContent />
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
