import { ViewDashboard } from "@perses-dev/dashboards"

import { ThemeProvider } from "@emotion/react"
import { Typography } from "@mui/material"
import { ChartsProvider, ErrorAlert, ErrorBoundary } from "@perses-dev/components"
import { PluginRegistry } from "@perses-dev/plugin-system"
import { QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import { QueryParamProvider } from "use-query-params"
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6"
import { sampleDashboard } from "../dashboard-sample"
import { chartsTheme, datasourceApi, muiTheme, queryClient } from "../persesApi"
import { pluginLoader } from "./PersesPluginRegistry"

export function PersesDashboardWrapper() {
  return (
    <>
      <h1>Plugin Embedding - Dashboard</h1>
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        Below is an example of embedding a Perses dashboard in a React application.
      </Typography>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
      </BrowserRouter>
    </>
  )
}
