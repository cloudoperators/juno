import type { DashboardResource } from "@perses-dev/core"

export const sampleDashboard: DashboardResource = {
  kind: "Dashboard",
  metadata: {
    name: "overview",
    createdAt: "2025-06-14T13:17:12.482451269Z",
    updatedAt: "2025-06-14T14:07:07.264648585Z",
    version: 10,
    project: "playground",
  },
  spec: {
    display: {
      name: "Overview",
    },
    panels: {
      PluginWorkloadStatus: {
        kind: "Panel",
        spec: {
          display: {
            name: "Plugin Workload Status",
          },
          plugin: {
            kind: "Table",
            spec: {
              cellSettings: [
                {
                  condition: {
                    kind: "Value",
                    spec: {
                      value: "0",
                    },
                  },
                  text: "Failing",
                },
                {
                  condition: {
                    kind: "Value",
                    spec: {
                      value: "1",
                    },
                  },
                  text: "Ok",
                },
              ],
              columnSettings: [
                {
                  name: "plugin",
                },
                {
                  name: "pluginDefinition",
                },
                {
                  header: "Status",
                  hide: false,
                  name: "value",
                },
                {
                  hide: true,
                  name: "__name__",
                },
                {
                  hide: true,
                  name: "cluster",
                },
                {
                  hide: true,
                  name: "container",
                },
                {
                  hide: true,
                  name: "endpoint",
                },
                {
                  hide: true,
                  name: "instance",
                },
                {
                  hide: true,
                  name: "job",
                },
                {
                  hide: true,
                  name: "pod",
                },
                {
                  hide: true,
                  name: "prometheus",
                },
                {
                  hide: true,
                  name: "region",
                },
                {
                  format: {
                    unit: "weeks",
                  },
                  hide: true,
                  name: "timestamp",
                },
                {
                  hide: true,
                  name: "service",
                },
                {
                  hide: true,
                  name: "organization",
                },
              ],
              density: "standard",
            },
          },
          queries: [
            {
              kind: "TimeSeriesQuery",
              spec: {
                plugin: {
                  kind: "PrometheusTimeSeriesQuery",
                  spec: {
                    datasource: {
                      kind: "PrometheusDatasource",
                      name: "kube-monitoring-prometheus",
                    },
                    query: "greenhouse_plugin_workload_status_up{}",
                    seriesNameFormat: "",
                  },
                },
              },
            },
          ],
        },
      },
      Pluginswithfailingtests: {
        kind: "Panel",
        spec: {
          display: {
            name: "Plugins with failing tests",
          },
          plugin: {
            kind: "Table",
            spec: {
              columnSettings: [
                {
                  header: "Plugin",
                  name: "plugin",
                },
                {
                  name: "pluginDefinition",
                },
                {
                  header: "Retry Attempts",
                  hide: false,
                  name: "value",
                },
                {
                  hide: true,
                  name: "__name__",
                },
                {
                  hide: true,
                  name: "cluster",
                },
                {
                  hide: true,
                  name: "container",
                },
                {
                  hide: true,
                  name: "endpoint",
                },
                {
                  hide: true,
                  name: "instance",
                },
                {
                  hide: true,
                  name: "job",
                },
                {
                  hide: true,
                  name: "pod",
                },
                {
                  hide: true,
                  name: "prometheus",
                },
                {
                  hide: true,
                  name: "region",
                },
                {
                  format: {
                    unit: "weeks",
                  },
                  hide: true,
                  name: "timestamp",
                },
                {
                  hide: true,
                  name: "service",
                },
                {
                  hide: true,
                  name: "organization",
                },
                {
                  header: "Namespace",
                  name: "namespace",
                },
                {
                  hide: true,
                  name: "result",
                },
              ],
              density: "standard",
            },
          },
          queries: [
            {
              kind: "TimeSeriesQuery",
              spec: {
                plugin: {
                  kind: "PrometheusTimeSeriesQuery",
                  spec: {
                    query: 'greenhouse_plugin_chart_test_runs_total{result!="Success", result!="NoTests"}',
                  },
                },
              },
            },
          ],
        },
      },
      TeamMembers: {
        kind: "Panel",
        spec: {
          display: {
            name: "Onboarded Teams Overview",
          },
          plugin: {
            kind: "Table",
            spec: {
              columnSettings: [
                {
                  header: "Team",
                  name: "team",
                },
                {
                  header: "Namespace",
                  name: "namespace",
                },
                {
                  header: "Members Count",
                  name: "value",
                },
                {
                  hide: true,
                  name: "__name__",
                },
                {
                  hide: true,
                  name: "cluster",
                },
                {
                  hide: true,
                  name: "container",
                },
                {
                  hide: true,
                  name: "endpoint",
                },
                {
                  hide: true,
                  name: "instance",
                },
                {
                  hide: true,
                  name: "job",
                },
                {
                  hide: true,
                  name: "organization",
                },
                {
                  hide: true,
                  name: "pod",
                },
                {
                  hide: true,
                  name: "prometheus",
                },
                {
                  hide: true,
                  name: "region",
                },
                {
                  format: {
                    unit: "weeks",
                  },
                  hide: true,
                  name: "timestamp",
                },
                {
                  hide: true,
                  name: "service",
                },
              ],
              density: "standard",
            },
          },
          queries: [
            {
              kind: "TimeSeriesQuery",
              spec: {
                plugin: {
                  kind: "PrometheusTimeSeriesQuery",
                  spec: {
                    query: "greenhouse_teammembership_members_count",
                  },
                },
              },
            },
          ],
        },
      },
    },
    layouts: [
      {
        kind: "Grid",
        spec: {
          display: {
            title: "Overview",
            collapse: {
              open: true,
            },
          },
          items: [
            {
              x: 0,
              y: 0,
              width: 12,
              height: 6,
              content: {
                $ref: "#/spec/panels/PluginWorkloadStatus",
              },
            },
            {
              x: 0,
              y: 6,
              width: 12,
              height: 6,
              content: {
                $ref: "#/spec/panels/TeamMembers",
              },
            },
            {
              x: 12,
              y: 0,
              width: 12,
              height: 6,
              content: {
                $ref: "#/spec/panels/Pluginswithfailingtests",
              },
            },
          ],
        },
      },
    ],
    variables: [],
    duration: "1h",
    refreshInterval: "0s",
  },
}
