/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Plugin } from "../types/k8sTypes"

export type MockPluginsResponse = {
  items: Plugin[]
}

export const mockPlugins: MockPluginsResponse = {
  items: [
    {
      metadata: {
        name: "plugin-1",
        labels: {
          "greenhouse.sap/pluginpreset": "test-preset",
        },
      },
      spec: {
        clusterName: "cluster-1",
        deletionPolicy: "Delete",
        pluginDefinition: "plugin-def-1",
        pluginDefinitionRef: { name: "plugin-def-1" },
      },
      status: {
        statusConditions: {
          conditions: [
            {
              type: "Ready",
              status: "True",
              lastTransitionTime: "2026-01-01T00:00:00Z",
            },
          ],
        },
      },
    },
    {
      metadata: {
        name: "plugin-2",
        labels: {
          "greenhouse.sap/pluginpreset": "test-preset",
        },
      },
      spec: {
        clusterName: "cluster-2",
        deletionPolicy: "Delete",
        pluginDefinition: "plugin-def-1",
        pluginDefinitionRef: { name: "plugin-def-1" },
      },
      status: {
        statusConditions: {
          conditions: [
            {
              type: "Ready",
              status: "False",
              lastTransitionTime: "2026-01-01T00:00:00Z",
              message: "Plugin not ready",
            },
          ],
        },
      },
    },
  ],
}
