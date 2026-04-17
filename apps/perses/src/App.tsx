/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AppShell, AppShellProvider, Container } from "@cloudoperators/juno-ui-components"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Dashboard } from "./components/Dashboard"
import styles from "./styles.css?inline"
import alertsDashboard from "./resources/dashboards/alerts.json"
import { DashboardResource } from "@perses-dev/core"

export interface AppProps {
  theme?: "theme-light" | "theme-dark"
  embedded?: boolean
  endpoint?: string
}

const queryClient = new QueryClient()

const App = (props: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppShellProvider theme={props.theme || "theme-dark"}>
        <style>{styles.toString()}</style>
        <AppShell pageHeader="Perses" embedded={props.embedded || false}>
          <Container px={!props.embedded} py={!props.embedded}>
            <Dashboard
              dashboardResource={alertsDashboard as DashboardResource}
              theme={props.theme}
              endpoint={props.endpoint}
            />
          </Container>
        </AppShell>
      </AppShellProvider>
    </QueryClientProvider>
  )
}

export default App
