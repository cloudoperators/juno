/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AppShell, AppShellProvider } from "@cloudoperators/juno-ui-components"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import Header from "./components/Header"
import { PersesDashboardWrapper } from "./components/PersesDashboardWrapper"
import styles from "./styles.scss?inline"

export interface AppProps {
  theme?: "theme-light" | "theme-dark"
  embedded?: string | boolean
  fullWidthContent?: string | boolean
  endpoint?: string
  currentHost?: string
}

export const App = (props: AppProps) => {
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

  return (
    <QueryClientProvider client={queryClient}>
      <AppShell pageHeader="Greenhouse Insights" embedded={props.embedded === "true" || props.embedded === true}>
        <Header />
        <PersesDashboardWrapper theme={props.theme} />
      </AppShell>
    </QueryClientProvider>
  )
}

type StyledAppProps = AppProps

const StyledApp = (props: StyledAppProps) => {
  return (
    <>
      <AppShellProvider shadowRoot={false}>
        <style>{styles.toString()}</style>
        <App {...props} />
      </AppShellProvider>
    </>
  )
}

export default StyledApp
