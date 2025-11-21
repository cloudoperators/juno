/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { act } from "react"
import { render, screen } from "@testing-library/react"
import { PluginPresetsDataGrid } from "./index"
import { PluginPreset } from "../../types/k8sTypes"

const mockPluginPresets: PluginPreset[] = [
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

describe("PluginPresetsDataGrid", () => {
  it("should render loading and column headers while the data is being fetched", async () => {
    const mockPluginPresetsPromise = Promise.resolve(mockPluginPresets)
    render(<PluginPresetsDataGrid pluginPresetsPromise={mockPluginPresetsPromise} />)

    // Loading should be gone
    expect(screen.queryByText("Loading...")).toBeInTheDocument()

    // Check for column headers
    expect(screen.getByText("Instances")).toBeInTheDocument()
    expect(screen.getByText("Name")).toBeInTheDocument()
    expect(screen.getByText("Plugin Definition")).toBeInTheDocument()
    expect(screen.getByText("Message")).toBeInTheDocument()
    expect(screen.getByText("Actions")).toBeInTheDocument()
  })

  it("should render the data", async () => {
    const mockPluginPresetsPromise = Promise.resolve(mockPluginPresets)
    await act(async () => {
      render(<PluginPresetsDataGrid pluginPresetsPromise={mockPluginPresetsPromise} />)
    })

    // Loading should be gone
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument()

    // Check for column headers
    expect(screen.getByText("Instances")).toBeInTheDocument()
    expect(screen.getByText("Name")).toBeInTheDocument()
    expect(screen.getByText("Plugin Definition")).toBeInTheDocument()
    expect(screen.getByText("Message")).toBeInTheDocument()
    expect(screen.getByText("Actions")).toBeInTheDocument()

    // Check for data
    expect(screen.getByText("2/3")).toBeInTheDocument()
    expect(screen.getByText("preset-1")).toBeInTheDocument()
    expect(screen.getByText("preset-2")).toBeInTheDocument()
    expect(screen.getByText("0/2")).toBeInTheDocument()
  })

  it("should render the error message while fetching data", async () => {
    const mockPluginPresetsPromise = Promise.reject(new Error("Something went wrong"))
    await act(async () => {
      render(<PluginPresetsDataGrid pluginPresetsPromise={mockPluginPresetsPromise} />)
    })

    // Loading should be gone
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument()

    // Check for column headers
    expect(screen.getByText("Instances")).toBeInTheDocument()
    expect(screen.getByText("Name")).toBeInTheDocument()
    expect(screen.getByText("Plugin Definition")).toBeInTheDocument()
    expect(screen.getByText("Message")).toBeInTheDocument()
    expect(screen.getByText("Actions")).toBeInTheDocument()

    // Check for error
    expect(screen.getByText("Error: Something went wrong")).toBeInTheDocument()
  })
})
