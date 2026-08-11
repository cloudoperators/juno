/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { Conditions } from "./Conditions"
import { Cluster } from "../../types/k8sTypes"

describe("Conditions", () => {
  it("should render conditions heading and readiness badges", () => {
    const mockCluster: Cluster = {
      apiVersion: "v1",
      kind: "Cluster",
      metadata: { name: "test-cluster", creationTimestamp: "" },
      spec: {
        accessMode: "direct",
        kubeConfig: {
          maxTokenValidity: 72,
        },
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
    }

    render(<Conditions clusters={mockCluster} />)

    expect(screen.getByText("Conditions")).toBeInTheDocument()
    expect(screen.getByText("Ready")).toBeInTheDocument()
  })
})
