import { ViewDashboard } from "@perses-dev/dashboards"

import { ThemeProvider } from "@emotion/react"
import { ChartsProvider, ErrorAlert, ErrorBoundary } from "@perses-dev/components"
import { PluginRegistry } from "@perses-dev/plugin-system"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import { QueryParamProvider } from "use-query-params"
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6"
import { sampleDashboard } from "../dashboard-sample"
import { createPersesChartsTheme, createPersesMuiTheme, datasourceApi } from "../persesApi"
import { pluginLoader } from "./PersesPluginRegistry"

interface PersesDashboardWrapperProps {
  theme?: "theme-dark" | "theme-light"
}

export function PersesDashboardWrapper({ theme = "theme-dark" }: PersesDashboardWrapperProps) {
  // Convert Juno theme naming to Material-UI theme naming
  const muiThemeMode = theme === "theme-dark" ? "dark" : "light"
  const muiTheme = createPersesMuiTheme(muiThemeMode)
  const chartsTheme = createPersesChartsTheme(muiTheme)

  return (
    <>
      <BrowserRouter>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <ThemeProvider theme={muiTheme}>
            <ChartsProvider chartsTheme={chartsTheme}>
              <ErrorBoundary FallbackComponent={ErrorAlert}>
                <PluginRegistry pluginLoader={pluginLoader}>
                  <ViewDashboard
                    dashboardResource={sampleDashboard}
                    datasourceApi={datasourceApi}
                    isReadonly={true}
                    isVariableEnabled={true}
                    isEditing={false}
                    isCreating={false}
                    isDatasourceEnabled={true}
                  />
                </PluginRegistry>
              </ErrorBoundary>
            </ChartsProvider>
          </ThemeProvider>
        </QueryParamProvider>
      </BrowserRouter>
    </>
  )
}
