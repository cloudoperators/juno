/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { act } from "react"
import { PluginPresetsStats } from "./PluginPresetsStats"
import { PluginPresetStat } from "../api/plugin-presets/fetchPluginPresetsStats"

describe("PluginPresetsStats", () => {
  const mockStats: PluginPresetStat[] = [
    { label: "Total Presets", value: 127, variant: "default" },
    { label: "Ready Presets", value: 98, subtext: "of 127", variant: "success" },
  ]

  test("should render stat value", async () => {
    const mockStatsPromise = Promise.resolve(mockStats)
    await act(async () => {
      render(<PluginPresetsStats statsPromise={mockStatsPromise} />)
    })
    expect(screen.getByText("127")).toBeInTheDocument()
    expect(screen.getByText("98")).toBeInTheDocument()
  })

  test("should render stat subtext", async () => {
    const mockStatsPromise = Promise.resolve(mockStats)
    await act(async () => {
      render(<PluginPresetsStats statsPromise={mockStatsPromise} />)
    })
    expect(screen.getByText("of 127")).toBeInTheDocument()
  })
})
