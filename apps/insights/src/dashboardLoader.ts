import { DashboardResource } from "@perses-dev/core"
import greenhouseDashboard from "./dashboards/greenhouse.json"

/**
 * Loads and types a JSON dashboard configuration
 * @param dashboardJson - Imported JSON object
 * @returns Typed dashboard resource
 */
export function loadDashboardConfig(dashboardJson: unknown): DashboardResource {
  return dashboardJson as DashboardResource
}

export const dashboard = loadDashboardConfig(greenhouseDashboard)
