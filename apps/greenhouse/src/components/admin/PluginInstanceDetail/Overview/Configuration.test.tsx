/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { Configuration } from "./Configuration"
import { Plugin } from "../../types/k8sTypes"

describe("Configuration", () => {
  it("should render configuration values and filter out injected values", () => {
    const mockPlugin: Plugin = {
      metadata: {
        name: "test-plugin",
      },
      spec: {
        pluginDefinition: "test-definition",
        pluginDefinitionRef: { name: "test-definition" },
        deletionPolicy: "Delete",
        optionValues: [
          {
            name: "customValue",
            value: "test-value",
          },
          {
            name: "global.greenhouse.injectedValue",
            value: "should-be-filtered",
          },
          {
            name: "anotherValue",
            value: 123,
          },
        ],
      },
    }

    render(<Configuration plugin={mockPlugin} />)

    expect(screen.getByText("Configuration")).toBeInTheDocument()
    expect(screen.getByText("customValue")).toBeInTheDocument()
    expect(screen.getByText("test-value")).toBeInTheDocument()
    expect(screen.getByText("anotherValue")).toBeInTheDocument()
    expect(screen.getByText("123")).toBeInTheDocument()
    // Injected value should not be rendered
    expect(screen.queryByText("global.greenhouse.injectedValue")).not.toBeInTheDocument()
    expect(screen.queryByText("should-be-filtered")).not.toBeInTheDocument()
  })
})
