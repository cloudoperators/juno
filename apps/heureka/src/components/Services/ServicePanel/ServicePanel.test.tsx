/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { ServicePanel } from "./ServicePanel"
import { TestProvider } from "../../../mocks/TestProvider"
import { ServiceType } from "../Services"

const mockService: ServiceType = {
  id: "1",
  name: "test-service",
  issuesCount: {
    critical: 1,
    high: 2,
  },
  serviceDetails: {
    supportGroups: ["group1", "group2"],
  },
  components: 3,
  remediationDate: "2024-01-01",
  serviceOwners: ["owner1", "owner2"],
}

describe("ServicePanel", () => {
  it.skip("should render correctly", async () => {
    render(
      <TestProvider>
        <ServicePanel service={mockService} onClose={() => {}} />
      </TestProvider>
    )

    // Check if panel header is rendered
    expect(await screen.findByText("Test-service Service Overview")).toBeInTheDocument()

    // Check if table headers are rendered
    expect(await screen.findByText("Image Name")).toBeInTheDocument()
    expect(await screen.findByText("Version")).toBeInTheDocument()
    expect(await screen.findByText("Critical")).toBeInTheDocument()
    expect(await screen.findByText("High")).toBeInTheDocument()
    expect(await screen.findByText("Medium")).toBeInTheDocument()
    expect(await screen.findByText("Low")).toBeInTheDocument()
    expect(await screen.findByText("Actions")).toBeInTheDocument()
  })

  it.skip("should render image version details", async () => {
    render(
      <TestProvider>
        <ServicePanel service={mockService} onClose={() => {}} />
      </TestProvider>
    )

    // Check if image details are rendered
    expect(await screen.findByText("test-image")).toBeInTheDocument()
    expect(await screen.findByText("1.0.0")).toBeInTheDocument()
    expect(await screen.findByText("1")).toBeInTheDocument() // Critical issues
    expect(await screen.findByText("2")).toBeInTheDocument() // High issues
    expect(await screen.findByText("3")).toBeInTheDocument() // Medium issues
    expect(await screen.findByText("4")).toBeInTheDocument() // Low issues

    // Check if action buttons are present
    expect(await screen.findAllByText("Show Details")).toHaveLength(1)
    expect(await screen.findByText("Full Details")).toBeInTheDocument()
  })
})
