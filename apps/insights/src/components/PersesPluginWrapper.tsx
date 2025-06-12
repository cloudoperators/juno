import { ThemeProvider, Typography } from "@mui/material"
import { ChartsProvider } from "@perses-dev/components"
import { DurationString, PanelDefinition } from "@perses-dev/core"
import { DatasourceStoreProvider, Panel, VariableProvider } from "@perses-dev/dashboards"
import { DataQueriesProvider, PluginRegistry, TimeRangeProvider } from "@perses-dev/plugin-system"

import { QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import { chartsTheme, datasourceApi, muiTheme, queryClient } from "../persesApi"
import { pluginLoader } from "./PersesPluginRegistry"

export function PersesPluginWrapper() {
  const persesTimeRange = {
    pastDuration: "1h" as DurationString,
  }

  const queryDefinitions = [
    {
      kind: "PrometheusTimeSeriesQuery",
      spec: {
        query: "up",
      },
    },
  ]

  const panelDefinition: PanelDefinition = {
    kind: "Panel",
    spec: {
      display: {
        name: "Prometheus Query",
      },
      plugin: {
        kind: "TimeSeriesChart",
        spec: {},
      },
    },
  }

  return (
    <>
      <h1>Plugin Embedding - Single Panel</h1>
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        Below is an example of embedding a Perses panel in a React application.
      </Typography>
      <ThemeProvider theme={muiTheme}>
        <ChartsProvider chartsTheme={chartsTheme}>
          <PluginRegistry pluginLoader={pluginLoader}>
            <QueryClientProvider client={queryClient}>
              <TimeRangeProvider timeRange={persesTimeRange}>
                <VariableProvider>
                  <DatasourceStoreProvider datasourceApi={datasourceApi}>
                    <DataQueriesProvider definitions={queryDefinitions}>
                      <div style={{ width: "500px", height: "200px" }}>
                        <Panel definition={panelDefinition} />
                      </div>
                    </DataQueriesProvider>
                  </DatasourceStoreProvider>
                </VariableProvider>
              </TimeRangeProvider>
            </QueryClientProvider>
          </PluginRegistry>
        </ChartsProvider>
      </ThemeProvider>
    </>
  )
}
