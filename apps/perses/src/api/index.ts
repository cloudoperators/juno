import { generateChartsTheme, getTheme } from "@perses-dev/components"
import { type DatasourceApi } from "@perses-dev/core"
import { createDatasourceConfig } from "../utils/configLoader"

export function createDatasourceApi(endpoint?: string): DatasourceApi {
  const datasource = createDatasourceConfig(endpoint)
  return {
    buildProxyUrl: () => "",
    getGlobalDatasource: async () => datasource,
    listGlobalDatasources: async () => [],
    listDatasources: async () => [],
    getDatasource: async () => undefined,
  }
}

// Create theme functions that accept the theme mode
export const createPersesMuiTheme = (mode: "light" | "dark" = "dark") => getTheme(mode)
export const createPersesChartsTheme = (muiTheme: any) => generateChartsTheme(muiTheme, {})
