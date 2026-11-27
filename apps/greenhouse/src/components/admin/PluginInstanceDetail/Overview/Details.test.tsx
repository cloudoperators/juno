/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { act } from "react"
import { createMemoryHistory, createRootRoute, createRouter, RouterProvider } from "@tanstack/react-router"
import { render, screen } from "@testing-library/react"
import { Details } from "./Details"
import { Plugin } from "../../types/k8sTypes"

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
    releaseName: "Release",
  },
  status: {
    helmChart: {
      name: "my-chart",
      repository: "https://charts.example.com",
      version: "3.1.4",
    },
  },
}

// Details renders router Links, so it must be rendered inside a RouterProvider.
const renderComponent = async () => {
  const rootRoute = createRootRoute({ component: () => <Details plugin={mockPlugin} /> })
  const router = createRouter({
    routeTree: rootRoute,
    history: createMemoryHistory({ initialEntries: ["/"] }),
  })
  return await act(async () => render(<RouterProvider router={router} />))
}

describe("Details", () => {
  it("should render plugin details", async () => {
    await renderComponent()

    expect(screen.getByText("Details")).toBeInTheDocument()
    expect(screen.getByText("test-plugin")).toBeInTheDocument()
    expect(screen.getAllByText("test-preset").length).toBeGreaterThan(0)
    expect(screen.getByText("test-plugin-def")).toBeInTheDocument()
    expect(screen.getAllByText("test-team").length).toBeGreaterThan(0)
    expect(screen.getByText("test-cluster")).toBeInTheDocument()
    expect(screen.getByText("Release")).toBeInTheDocument()
    expect(screen.getByText("my-chart")).toBeInTheDocument()
    expect(screen.getByText("3.1.4")).toBeInTheDocument()
  })

  it("renders the cluster and plugin preset as navigation links", async () => {
    await renderComponent()

    const clusterLink = screen.getByRole("link", { name: "test-cluster" })
    expect(clusterLink).toHaveAttribute("href", "/admin/clusters/test-cluster")

    const presetLink = screen.getByRole("link", { name: "test-preset" })
    expect(presetLink).toHaveAttribute("href", "/admin/plugin-presets/test-preset")
  })
})
