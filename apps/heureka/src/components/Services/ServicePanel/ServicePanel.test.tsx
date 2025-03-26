/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { vi } from "vitest"
import { ServicePanel } from "./ServicePanel"
import { TestProvider } from "../../../mocks/TestProvider"
import { ServiceType } from "../Services"
import { ServiceImageVersion } from "../common/ServiceImageVersions"

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
  const mockOnClose = vi.fn()
  const mockOnShowDetails = vi.fn()
  const user = userEvent.setup()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("should render correctly", async () => {
    render(
      <TestProvider>
        <ServicePanel 
          service={mockService} 
          onClose={mockOnClose}
          onShowDetails={mockOnShowDetails} 
        />
      </TestProvider>
    )

    // Check if panel header is rendered
    expect(await screen.findByText("Test-service Overview")).toBeInTheDocument()

    // Check if table headers are rendered
    expect(await screen.findByText("Image Name")).toBeInTheDocument()
    expect(await screen.findByText("Tag")).toBeInTheDocument()
    expect(await screen.findByText("Critical")).toBeInTheDocument()
    expect(await screen.findByText("High")).toBeInTheDocument()
    expect(await screen.findByText("Medium")).toBeInTheDocument()
    expect(await screen.findByText("Low")).toBeInTheDocument()
  })

  it("should handle Full Details button click and navigate to service details", async () => {
    render(
      <TestProvider>
        <ServicePanel 
          service={mockService} 
          onClose={mockOnClose}
          onShowDetails={mockOnShowDetails} 
        />
      </TestProvider>
    )

    const fullDetailsButton = await screen.findByText("Full Details")
    await user.click(fullDetailsButton)

    expect(mockOnClose).toHaveBeenCalled()
    expect(mockOnShowDetails).toHaveBeenCalledWith(mockService, expect.any(Object))
  })

  it("should handle details icon click and navigate to version details", async () => {
    const mockVersion: ServiceImageVersion = {
      imageName: "test-image",
      imageVersion: "1.0.0",
      imageTag: "latest",
      issueCounts: {
        critical: 1,
        high: 2,
        medium: 3,
        low: 4,
        none: 0
      },
      serviceName: "test-service"
    }

    render(
      <TestProvider>
        <ServicePanel 
          service={mockService} 
          onClose={mockOnClose}
          onShowDetails={mockOnShowDetails} 
        />
      </TestProvider>
    )

    // Wait for the icon to be rendered and click it
    const detailsIcon = await screen.findByRole('img', { name: /description/i })
    await user.click(detailsIcon)

    expect(mockOnClose).toHaveBeenCalled()
    expect(mockOnShowDetails).toHaveBeenCalledWith(mockService, expect.any(Object))
  })
})
