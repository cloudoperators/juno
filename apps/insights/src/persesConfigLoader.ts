import { DashboardResource, GlobalDatasourceResource } from "@perses-dev/core"
import greenhouseDashboard from "./perses-manifests/greenhouse-dashboard.json"
import prometheusDatasource from "./perses-manifests/prometheus-datasource.json"

/**
 * Loads and types a JSON dashboard configuration
 * @param dashboardJson - Imported JSON object
 * @returns Typed dashboard resource
 */
export function loadDashboardConfig(dashboardJson: unknown): DashboardResource {
  return dashboardJson as DashboardResource
}

export const dashboard = loadDashboardConfig(greenhouseDashboard)

/**
 * Loads and types a JSON global datasource configuration
 * @param datasourceJson - Imported JSON object
 * @returns Typed global datasource resource
 */
export function loadGlobalDatasourceConfig(datasourceJson: unknown): GlobalDatasourceResource {
  return datasourceJson as GlobalDatasourceResource
}

export const globalDatasource = loadGlobalDatasourceConfig(prometheusDatasource)
