/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import {
  AppShell,
  AppShellProvider,
  CodeBlock,
} from "@cloudoperators/juno-ui-components"
import StoreProvider from "./components/StoreProvider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AppContent from "./AppContent"
import styles from "./styles.scss"
import { ErrorBoundary } from "react-error-boundary"

const App = (props = {}) => {
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
    <QueryClientProvider client={queryClient}>
      <AppShell
        pageHeader="Converged Cloud | App Template"
        embedded={props.embedded === "true" || props.embedded === true}
      >
        <ErrorBoundary fallbackRender={fallbackRender}>
          <AppContent props={props} />
        </ErrorBoundary>
      </AppShell>
    </QueryClientProvider>
  )
}

App.propTypes = {
  theme: PropTypes.string,
  embedded: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  endpoint: PropTypes.string,
  currentHost: PropTypes.string,
}

const StyledApp = (props) => {
  return (
    <AppShellProvider theme={`${props.theme ? props.theme : "theme-dark"}`}>
      {/* load styles inside the shadow dom */}
      <style>{styles.toString()}</style>
      <StoreProvider options={props}>
        <App {...props} />
      </StoreProvider>
    </AppShellProvider>
  )
}

StyledApp.propTypes = {
  theme: PropTypes.string,
  embedded: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  endpoint: PropTypes.string,
  currentHost: PropTypes.string,
}

export default StyledApp
