/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { AppShellProvider, CodeBlock } from "@cloudoperators/juno-ui-components"
import AppContent from "./AppContent"
// @ts-expect-error TS(2792) FIXME: Cannot find module './styles.scss?inline'. Did you... Remove this comment to see the full error message
import styles from "./styles.scss?inline"
import { StoreProvider } from "./components/StoreProvider"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import CustomAppShell from "./components/CustomAppShell"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ErrorBoundary } from "react-error-boundary"
import useUrlState from "./hooks/useUrlState"
import useUrlQueryState from "./hooks/useUrlQueryState"

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

function App(props = {}) {
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

  return (
    <ErrorBoundary fallbackRender={fallbackRender}>
      <MessagesProvider>
        <CustomAppShell>
          <QueryClientProvider client={queryClient}>
            {/* @ts-expect-error TS(2322) FIXME: Type '{ props: {}; }' is not assignable to type 'I... Remove this comment to see the full error message */}
            <AppContent props={props} />
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
  return (
    // @ts-ignore
    <AppShellProvider theme={`${props.theme ? props.theme : "theme-dark"}`}>
      {/* load appstyles inside the shadow dom */}
      <style>{styles.toString()}</style>
      <StoreProvider options={props}>
        {props?.enableNewUrlStructure ? <AppWithNewUrlStructure {...props} /> : <AppWithOldUrlStructure {...props} />}
      </StoreProvider>
    </AppShellProvider>
  )
}

export default StyledApp
