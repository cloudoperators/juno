/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { Details } from "./Details"
import { PluginPreset } from "../../types/k8sTypes"

describe("Details", () => {
  it("should render plugin preset details", () => {
    const mockPluginPreset: PluginPreset = {
      metadata: {
        name: "test-preset",
        labels: {
          "greenhouse.sap/owned-by": "test-team",
        },
      },
      spec: {
        clusterSelector: {},
        deletionPolicy: "Delete",
        plugin: {
          pluginDefinitionRef: { name: "test-plugin-def" },
          deletionPolicy: "Delete",
          pluginDefinition: "test-plugin-def",
        },
      },
    }

    render(<Details pluginPreset={mockPluginPreset} />)

    expect(screen.getByText("Details")).toBeInTheDocument()
    expect(screen.getByText("test-preset")).toBeInTheDocument()
    expect(screen.getByText("test-plugin-def")).toBeInTheDocument()
  })
})
