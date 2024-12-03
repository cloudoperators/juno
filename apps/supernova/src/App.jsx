/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { AppShellProvider, CodeBlock } from "@cloudoperators/juno-ui-components"
import AppContent from "./AppContent"
import styles from "./styles.scss?inline"
import { StoreProvider } from "./components/StoreProvider"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import CustomAppShell from "./components/CustomAppShell"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ErrorBoundary } from "react-error-boundary"

const queryClient = new QueryClient()

function App(props = {}) {
  const preErrorClasses = `
    custom-error-pre
    border-theme-error
    border
    h-full
    w-full
    `

  const fallbackRender = ({ error }) => {
    return (
      <div className="w-1/2">
        <CodeBlock className={preErrorClasses} copy={false}>
          {error?.message || error?.toString() || "An error occurred"}
        </CodeBlock>
      </div>
    )
  }

  return (
    <MessagesProvider>
      <CustomAppShell>
        <ErrorBoundary fallbackRender={fallbackRender}>
          <QueryClientProvider client={queryClient}>
            <AppContent props={props} />
          </QueryClientProvider>
        </ErrorBoundary>
      </CustomAppShell>
    </MessagesProvider>
  )
}

const StyledApp = (props) => {
  return (
    <AppShellProvider theme={`${props.theme ? props.theme : "theme-dark"}`}>
      {/* load appstyles inside the shadow dom */}
      <style>{styles.toString()}</style>
      <StoreProvider options={props}>
        <App {...props} />
      </StoreProvider>
    </AppShellProvider>
  )
}

export default StyledApp
