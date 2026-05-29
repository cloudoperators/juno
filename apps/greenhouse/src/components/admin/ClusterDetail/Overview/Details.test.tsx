/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { Details } from "./Details"
import { Cluster } from "../../types/k8sTypes"

describe("Details", () => {
  it("should render cluster details", () => {
    const mockCluster: Cluster = {
      apiVersion: "greenhouse.sap/v1alpha1",
      kind: "Cluster",
      metadata: {
        name: "test-cluster",
        creationTimestamp: "2026-01-01T00:00:00Z",
        labels: {
          "greenhouse.sap/owned-by": "test-team",
        },
        annotations: {
          "greenhouse.sap/cluster-connectivity": "test-oidc",
        },
      },
      spec: {
        accessMode: "direct",
        kubeConfig: {
          maxTokenValidity: 72,
        },
      },
      status: {
        kubernetesVersion: "v1.20.0",
        nodes: {
          ready: 1,
          total: 1,
        },
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
    }

    render(<Details clusters={mockCluster} />)

    expect(screen.getByText("Details")).toBeInTheDocument()
    expect(screen.getByText("test-cluster")).toBeInTheDocument()
    expect(screen.getByText("v1.20.0")).toBeInTheDocument()
  })
})
