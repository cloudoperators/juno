/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { PluginPresetStats } from "./PluginPresetStats"
import { PluginPreset } from "../../types/k8sTypes"

describe("PluginPresetStats", () => {
  it("should render plugin statistics", () => {
    const mockPluginPreset: PluginPreset = {
      metadata: { name: "test-preset" },
      spec: {
        clusterSelector: {},
        deletionPolicy: "Delete",
        plugin: {
          pluginDefinitionRef: { name: "test-plugin" },
          deletionPolicy: "Delete",
          pluginDefinition: "test-plugin",
        },
      },
      status: {
        totalPlugins: 5,
        readyPlugins: 3,
        failedPlugins: 1,
      },
    }

    render(<PluginPresetStats pluginPreset={mockPluginPreset} />)

    expect(screen.getByText("Plugin Instance Health Distribution")).toBeInTheDocument()
    expect(screen.getByText("Total Plugins")).toBeInTheDocument()
    expect(screen.getByText("5")).toBeInTheDocument()
  })
})
