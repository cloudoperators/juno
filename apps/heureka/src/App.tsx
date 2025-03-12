/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { AppShellProvider } from "@cloudoperators/juno-ui-components"
import styles from "./styles.scss?inline"
import { ErrorBoundary } from "./components/ErrorBoundary"
import { Shell } from "./components/Shell"
import { ApolloProvider } from "@apollo/client"
import { getClient } from "./apollo-client"

export type AppProps = {
  theme?: "theme-dark" | "theme-light"
  apiEndpoint?: string
  embedded?: boolean
}

const App = (props: AppProps) => (
  <ApolloProvider client={getClient({ uri: props.apiEndpoint })}>
    <AppShellProvider theme={`${props.theme ? props.theme : "theme-dark"}`}>
      {/* load styles inside the shadow dom */}
      <style>{styles.toString()}</style>
      <ErrorBoundary>
        <Shell {...props} />
      </ErrorBoundary>
    </AppShellProvider>
  </ApolloProvider>
)

export default App
