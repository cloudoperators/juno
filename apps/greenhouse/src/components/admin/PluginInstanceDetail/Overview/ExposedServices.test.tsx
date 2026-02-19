/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { ExposedServices } from "./ExposedServices"
import { Plugin } from "../../types/k8sTypes"

describe("ExposedServices", () => {
  it("should render 'No exposed services' when exposedServices is empty", () => {
    const mockPlugin: Plugin = {
      metadata: {
        name: "test-plugin",
      },
      spec: {
        pluginDefinition: "test-definition",
        pluginDefinitionRef: { name: "test-definition" },
        deletionPolicy: "Delete",
      },
      status: {
        exposedServices: {},
      },
    }

    render(<ExposedServices plugin={mockPlugin} />)

    expect(screen.getByText("Exposed Services")).toBeInTheDocument()
    expect(screen.getByText("No exposed services")).toBeInTheDocument()
  })

  it("should render exposed services in a data grid", () => {
    const mockPlugin: Plugin = {
      metadata: {
        name: "test-plugin",
      },
      spec: {
        pluginDefinition: "test-definition",
        pluginDefinitionRef: { name: "test-definition" },
        deletionPolicy: "Delete",
      },
      status: {
        exposedServices: {
          "https://example.com": {
            name: "example-service",
            namespace: "default",
            type: "ingress",
            protocol: "https",
            port: 443,
          },
          "https://api.example.com": {
            name: "api-service",
            namespace: "api-namespace",
            type: "service",
            protocol: "http",
            port: 8080,
          },
        },
      },
    }

    render(<ExposedServices plugin={mockPlugin} />)

    expect(screen.getByText("Exposed Services")).toBeInTheDocument()

    // Check table headers
    expect(screen.getByText("Service")).toBeInTheDocument()
    expect(screen.getByText("Namespace")).toBeInTheDocument()
    expect(screen.getByText("Port")).toBeInTheDocument()
    expect(screen.getByText("Protocol")).toBeInTheDocument()

    // Check first service
    expect(screen.getByText("example-service")).toBeInTheDocument()
    expect(screen.getByText("default")).toBeInTheDocument()
    expect(screen.getByText("443")).toBeInTheDocument()
    expect(screen.getByText("https")).toBeInTheDocument()

    // Check second service
    expect(screen.getByText("api-service")).toBeInTheDocument()
    expect(screen.getByText("api-namespace")).toBeInTheDocument()
    expect(screen.getByText("8080")).toBeInTheDocument()
    expect(screen.getByText("http")).toBeInTheDocument()
  })
})
