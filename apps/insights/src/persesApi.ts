import { generateChartsTheme, getTheme } from "@perses-dev/components"
import type { GlobalDatasourceResource } from "@perses-dev/core"
import { type DatasourceApi } from "@perses-dev/dashboards"
import { QueryClient } from "@tanstack/react-query"

const globalDatasource: GlobalDatasourceResource = {
  kind: "GlobalDatasource",
  metadata: {
    name: "default datasource",
  },
  spec: {
    default: true,
    plugin: {
      kind: "PrometheusDatasource",
      spec: {
        directUrl: "https://prometheus.demo.prometheus.io",
      },
    },
  },
}

export const datasourceApi: DatasourceApi = {
  buildProxyUrl: () => "",
  getGlobalDatasource: async () => globalDatasource,
  listGlobalDatasources: async () => [],
  listDatasources: async () => [],
  getDatasource: async () => undefined,
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
})

export const muiTheme = getTheme("light")
export const chartsTheme = generateChartsTheme(muiTheme, {})
