/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { AppShell, AppShellProvider, CodeBlock } from "@cloudoperators/juno-ui-components"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AppContent from "./components/AppContent"
import { ErrorBoundary } from "react-error-boundary"

interface AppProps {
  theme?: "theme-dark" | "theme-light"
  embedded?: string | boolean
  fullWidthContent?: string | boolean
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
          {/* eslint-disable @typescript-eslint/no-base-to-string */}
          {error?.message || error?.toString() || "An error occurred"}
        </CodeBlock>
      </div>
    )
  }

  // ensure that the fullWidthContent prop is a boolean or undefined if not passed
  // TODO: this is a workaround to avoid passing a string to the AppShell component but it is ugly.
  // We should find a better way to normalize the prop to boolean in some central location. The same applies to the embedded prop.
  const calculatedFullWidthContentValue =
    props.fullWidthContent === "true" || props.fullWidthContent === true
      ? true
      : props.fullWidthContent === "false" || props.fullWidthContent === false
        ? false
        : undefined

  return (
    <QueryClientProvider client={queryClient}>
      <AppShell
        pageHeader="Converged Cloud | App Template"
        embedded={props.embedded === "true" || props.embedded === true}
        fullWidthContent={calculatedFullWidthContentValue}
      >
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
      <App theme={props.theme} embedded={props.embedded} endpoint={props.endpoint} currentHost={props.currentHost} />
    </AppShellProvider>
  )
}

export default StyledApp
