/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExposedServices } from "../types/k8sTypes"

export type MockExposedServicesResponse = {
  items: ExposedServices[]
}

// The standalone mock data can remain as ExposedServices[]
export const mockExposedServices: ExposedServices[] = [
  {
    apiVersion: "greenhouse.sap/v1alpha1",
    kind: "Plugin",
    metadata: {
      name: "multi-service-demo",
      namespace: "sci",
      labels: {
        "greenhouse.sap/cluster": "demo",
      },
    },
    spec: {
      clusterName: "demo",
      deletionPolicy: "Delete",
      pluginDefinitionRef: {
        kind: "PluginDefinition",
        name: "multi-service-feature",
      },
      releaseName: "multi-service",
      releaseNamespace: "multi-service",
    },
    status: {
      description: "A test plugin with multiple services exposed via Greenhouse",
      exposedServices: {
        "https://demo-service1.sci.greenhouse-qa.eu-nl-1.cloud.sap": {
          name: "service1",
          namespace: "multi-service",
          port: 8080,
          type: "service",
        },
        "https://demo-service2.sci.greenhouse-qa.eu-nl-1.cloud.sap": {
          name: "service2",
          namespace: "multi-service",
          port: 9090,
          type: "service",
        },
      },
      helmChart: {
        name: "multi-service",
        repository: "oci://ghcr.io/cloudoperators/greenhouse-extensions/charts",
        version: "2.1.7",
      },
      helmReleaseStatus: {
        firstDeployed: "2026-03-16T14:49:09Z",
        lastDeployed: "2026-03-19T23:10:25Z",
        pluginOptionChecksum: "abcdefgh123456789",
        status: "deployed",
      },
    },
  },
]

export const mockExposedServicesResponse: MockExposedServicesResponse = {
  items: mockExposedServices,
}
