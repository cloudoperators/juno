/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { BasicInformation } from "./BasicInformation"
import { Plugin } from "../../types/k8sTypes"

describe("BasicInformation", () => {
  it("should render plugin basic information", () => {
    const mockPlugin: Plugin = {
      metadata: {
        name: "test-plugin",
        labels: {
          "greenhouse.sap/pluginpreset": "test-preset",
          "greenhouse.sap/owned-by": "test-team",
        },
      },
      spec: {
        clusterName: "test-cluster",
        pluginDefinition: "test-plugin-def",
        pluginDefinitionRef: { name: "test-plugin-def" },
        deletionPolicy: "Delete",
      },
    }

    render(<BasicInformation plugin={mockPlugin} />)

    expect(screen.getByText("Basic Information")).toBeInTheDocument()
    expect(screen.getByText("test-plugin")).toBeInTheDocument()
    expect(screen.getAllByText("test-preset").length).toBeGreaterThan(0)
    expect(screen.getByText("test-plugin-def")).toBeInTheDocument()
    expect(screen.getAllByText("test-team").length).toBeGreaterThan(0)
    expect(screen.getByText("test-cluster")).toBeInTheDocument()
  })
})
