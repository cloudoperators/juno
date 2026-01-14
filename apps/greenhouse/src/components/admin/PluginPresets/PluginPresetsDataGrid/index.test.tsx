/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { act } from "react"
import { render, screen } from "@testing-library/react"
import { PluginPresetsDataGrid } from "./index"
import { mockPluginPresets } from "../../__mocks__/pluginPresets"

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
