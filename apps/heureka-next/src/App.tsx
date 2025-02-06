/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { AppShellProvider } from "@cloudoperators/juno-ui-components"
import { ErrorBoundary } from "./components/ErrorBoundary"
import { Shell } from "./components/Shell"

export type AppProps = {
  theme?: "theme-dark" | "theme-light"
  embedded?: boolean
}

const App = (props: AppProps) => (
  <AppShellProvider theme={`${props.theme ? props.theme : "theme-dark"}`}>
    <ErrorBoundary>
      <Shell {...props} />
    </ErrorBoundary>
  </AppShellProvider>
)

export default App
