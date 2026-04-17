import { GlobalDatasourceResource } from "@perses-dev/core"
import prometheusDatasource from "../resources/prometheus-datasource.json"

/**
 * Loads and types a JSON global datasource configuration
 * @param datasourceJson - Imported JSON object
 * @returns Typed global datasource resource
 */
export function loadGlobalDatasourceConfig(datasourceJson: unknown): GlobalDatasourceResource {
  return datasourceJson as GlobalDatasourceResource
}

/**
 * Creates a datasource config, optionally overriding the Prometheus endpoint URL.
 * Falls back to the URL defined in prometheus-datasource.json when no endpoint is provided.
 */
export function createDatasourceConfig(endpoint?: string): GlobalDatasourceResource {
  const base = loadGlobalDatasourceConfig(prometheusDatasource)
  if (!endpoint) return base
  return {
    ...base,
    spec: {
      ...base.spec,
      plugin: {
        ...base.spec.plugin,
        spec: { directUrl: endpoint },
      },
    },
  }
}
