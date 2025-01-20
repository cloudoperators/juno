/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { AppShell, AppShellProvider } from "@cloudoperators/juno-ui-components"
import styles from "./styles.scss?inline"
import AppContent from "./components/AppContent/AppContent"
import ErrorBoundary from "./components/ErrorBoundary"

type AppProps = {
  theme?: string
  embedded?: string | boolean
}

// TODO: load extensions dynamically
const extensions = [
  {
    name: "alerts",
    title: "Alerts",
    url: "/alerts",
  },
  {
    name: "doop",
    title: "Doop",
    url: "/doop",
  },
  {
    name: "heureka",
    title: "Heureka",
    url: "/heureka",
  },
]

const App = (props: AppProps) => (
  <ErrorBoundary>
    <AppShellProvider theme={`${props.theme ? props.theme : "theme-dark"}`}>
      <AppShell embedded>
        {/* load styles inside the shadow dom */}
        <style>{styles.toString()}</style>
        <AppContent extensions={extensions} />
      </AppShell>
    </AppShellProvider>
  </ErrorBoundary>
)

export default App
