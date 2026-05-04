/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Cluster } from "../types/k8sTypes"

export type MockClusterResponse = {
  items: Cluster[]
}

export const mockClusters: MockClusterResponse = {
  items: [
    {
      apiVersion: "greenhouse.sap/v1alpha1",
      kind: "Cluster",
      metadata: {
        name: "demo",
        namespace: "sci",
        annotations: {
          "greenhouse.sap/cluster-connectivity": "oidc",
          "greenhouse.sap/last-applied-propagator":
            '{"labelKeys":["cluster-type","shoot-grafter.cloudoperators.dev/careinstruction"]}',
        },
        creationTimestamp: "2026-02-23T13:14:14Z",
        labels: {
          "cluster-type": "demo",
          "greenhouse.sap/cluster": "demo",
          "shoot-grafter.cloudoperators.dev/careinstruction": "garden-greenhouse",
        },
      },
      spec: {
        accessMode: "direct",
        kubeConfig: {
          maxTokenValidity: 72,
        },
      },
      status: {
        bearerTokenExpirationTimestamp: "2026-04-29T08:53:18Z",
        kubernetesVersion: "v1.32.13",
        nodes: {
          ready: 2,
          total: 2,
        },
        statusConditions: {
          conditions: [
            {
              lastTransitionTime: "2026-04-22T17:04:33Z",
              type: "Ready",
              status: "True",
            },
          ],
        },
      },
    },
    {
      apiVersion: "greenhouse.sap/v1alpha1",
      kind: "Cluster",
      metadata: {
        name: "demo-2",
        namespace: "sci",
        annotations: {
          "greenhouse.sap/cluster-connectivity": "oidc",
          "greenhouse.sap/last-applied-propagator":
            '{"labelKeys":["shoot-grafter.cloudoperators.dev/careinstruction"]}',
        },
        creationTimestamp: "2026-02-23T13:14:15Z",
        labels: {
          "greenhouse.sap/cluster": "demo-2",
          "shoot-grafter.cloudoperators.dev/careinstruction": "garden-greenhouse",
        },
      },
      spec: {
        accessMode: "direct",
        kubeConfig: {
          maxTokenValidity: 72,
        },
      },
      status: {
        bearerTokenExpirationTimestamp: "2026-04-29T08:43:18Z",
        kubernetesVersion: "v1.33.10",
        nodes: {
          ready: 2,
          total: 2,
        },
        statusConditions: {
          conditions: [
            {
              lastTransitionTime: "2026-04-26T17:33:33Z",
              type: "Ready",
              status: "True",
            },
          ],
        },
      },
    },
    {
      apiVersion: "greenhouse.sap/v1alpha1",
      kind: "Cluster",
      metadata: {
        name: "demo-3",
        namespace: "sci",
        annotations: {
          "greenhouse.sap/cluster-connectivity": "oidc",
          "greenhouse.sap/last-applied-propagator":
            '{"labelKeys":["greenhouse.sap/owned-by","metadata.greenhouse.sap/cluster-type","metadata.greenhouse.sap/region"]}',
        },
        creationTimestamp: "2025-11-25T09:11:53Z",
        labels: {
          "greenhouse.sap/cluster": "obs-eu-de-1",
          "greenhouse.sap/owned-by": "observability",
          "greenhouse.sap/pluginpreset": "true",
          "metadata.greenhouse.sap/cluster-type": "sci-k8s-obs",
          "metadata.greenhouse.sap/region": "eu-de-1",
          "migration-pending": "true",
        },
      },
      spec: {
        accessMode: "direct",
        kubeConfig: {
          maxTokenValidity: 72,
        },
      },
      status: {
        bearerTokenExpirationTimestamp: "2026-04-29T08:43:18Z",
        kubernetesVersion: "v1.34.5",
        nodes: {
          ready: 4,
          total: 4,
        },
        statusConditions: {
          conditions: [
            {
              lastTransitionTime: "2026-04-26T04:49:19Z",
              type: "Ready",
              status: "True",
            },
          ],
        },
      },
    },
  ],
}
