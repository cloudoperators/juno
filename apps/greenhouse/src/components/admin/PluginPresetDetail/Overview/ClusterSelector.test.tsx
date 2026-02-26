/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { ClusterSelector } from "./ClusterSelector"
import { PluginPreset } from "../../types/k8sTypes"

describe("ClusterSelector", () => {
  it("should render cluster selector heading", () => {
    const mockPluginPreset: PluginPreset = {
      metadata: { name: "test-preset" },
      spec: {
        clusterSelector: {
          matchLabels: { environment: "production" },
        },
        deletionPolicy: "Delete",
        plugin: {
          pluginDefinitionRef: { name: "test-plugin" },
          deletionPolicy: "Delete",
          pluginDefinition: "test-plugin",
        },
      },
    }

    render(<ClusterSelector pluginPreset={mockPluginPreset} />)

    expect(screen.getByText("Cluster Selector")).toBeInTheDocument()
  })
})
