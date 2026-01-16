/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PluginPreset } from "../types/k8sTypes"

export const mockPluginPresets: PluginPreset[] = [
  {
    metadata: {
      name: "preset-1",
    },
    spec: {
      clusterSelector: {},
      deletionPolicy: "Delete",
      plugin: {
        pluginDefinitionRef: {
          name: "plugin-def-1",
        },
        deletionPolicy: "Delete",
        pluginDefinition: "plugin-def-1",
      },
    },
    status: {
      readyPlugins: 2,
      totalPlugins: 3,
      statusConditions: {
        conditions: [
          {
            lastTransitionTime: "2024-10-01T12:00:00Z",
            type: "Ready",
            status: "True",
            message: "",
          },
        ],
      },
    },
  },
  {
    metadata: {
      name: "preset-2",
    },
    spec: {
      clusterSelector: {},
      deletionPolicy: "Delete",
      plugin: {
        pluginDefinitionRef: {
          name: "plugin-def-2",
        },
        deletionPolicy: "Delete",
        pluginDefinition: "plugin-def-2",
      },
    },
    status: {
      readyPlugins: 0,
      totalPlugins: 2,
      statusConditions: {
        conditions: [
          {
            lastTransitionTime: "2024-10-01T12:00:00Z",
            type: "Ready",
            status: "False",
            message: "Some error occurred",
          },
        ],
      },
    },
  },
]
