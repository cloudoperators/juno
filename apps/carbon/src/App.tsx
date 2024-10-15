/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { AppShell, AppShellProvider, CodeBlock } from "@cloudoperators/juno-ui-components"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ErrorBoundary } from "react-error-boundary"

import styles from "./styles.scss?inline"
import AppContent from "./components/AppContent"
import Navigation from "./components/Navigation"

interface AppProps {
  theme?: string
  embedded?: string | boolean
  endpoint?: string
  currentHost?: string
}

export const App = (props: AppProps) => {
  const preErrorClasses = `
    custom-error-pre
    border-theme-error
    border
    h-full
    w-full
    `

  // Create query client which it can be used from overall in the app
  // set default endpoint to fetch data

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        meta: {
          endpoint: props.endpoint || props.currentHost || "",
        },
      },
    },
  })

  const fallbackRender = ({ error }: { error: { message: string } }) => {
    return (
      <div className="w-1/2">
        <CodeBlock className={preErrorClasses} copy={false}>
          {error?.message || error?.toString() || "An error occurred"}
        </CodeBlock>
      </div>
    )
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AppShell embedded sideNavigation={<Navigation />}>
        <ErrorBoundary fallbackRender={fallbackRender}>
          <AppContent />
        </ErrorBoundary>
      </AppShell>
    </QueryClientProvider>
  )
}

type StyledAppProps = AppProps

const StyledApp = (props: StyledAppProps) => {
  return (
    <AppShellProvider theme={`${props.theme ? props.theme : "theme-dark"}`}>
      {/* load styles inside the shadow dom */}
      <style>{styles.toString()}</style>
      <App theme={props.theme} embedded={props.embedded} endpoint={props.endpoint} currentHost={props.currentHost} />
    </AppShellProvider>
  )
}

export default StyledApp
