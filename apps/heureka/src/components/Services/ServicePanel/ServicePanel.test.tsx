import React from "react"
import { render, screen } from "@testing-library/react"
import { vi } from "vitest"
import { ServicePanel } from "./ServicePanel"
import { TestProvider } from "../../../mocks/TestProvider"
import { ServiceType } from "../Services"

// Mock the useFetchServiceImageVersions hook
vi.mock("../useFetchServiceImageVersions", () => ({
  useFetchServiceImageVersions: () => ({
    loading: false,
    imageVersions: [
      {
        ccrn: "test-image",
        version: "1.0.0",
        issueCounts: {
          critical: 1,
          high: 2,
          medium: 3,
          low: 4,
        },
      },
    ],
    error: null,
    totalNumberOfPages: 1,
    currentPage: 1,
    goToPage: () => {},
    totalCount: 1,
  }),
}))

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
  it("should render correctly", async () => {
    render(
      <TestProvider>
        <ServicePanel service={mockService} onClose={() => {}} />
      </TestProvider>
    )

    // Check if panel header is rendered
    expect(screen.getByText("Test-service Service Overview")).toBeInTheDocument()

    // Check if table headers are rendered
    expect(screen.getByText("Image Name")).toBeInTheDocument()
    expect(screen.getByText("Version")).toBeInTheDocument()
    expect(screen.getByText("Critical")).toBeInTheDocument()
    expect(screen.getByText("High")).toBeInTheDocument()
    expect(screen.getByText("Medium")).toBeInTheDocument()
    expect(screen.getByText("Low")).toBeInTheDocument()
    expect(screen.getByText("Actions")).toBeInTheDocument()
  })

  it("should render image version details", async () => {
    render(
      <TestProvider>
        <ServicePanel service={mockService} onClose={() => {}} />
      </TestProvider>
    )

    // Check if image details are rendered
    expect(screen.getByText("test-image")).toBeInTheDocument()
    expect(screen.getByText("1.0.0")).toBeInTheDocument()
    expect(screen.getByText("1")).toBeInTheDocument() // Critical issues
    expect(screen.getByText("2")).toBeInTheDocument() // High issues
    expect(screen.getByText("3")).toBeInTheDocument() // Medium issues
    expect(screen.getByText("4")).toBeInTheDocument() // Low issues

    // Check if action buttons are present
    expect(screen.getAllByText("Show Details")).toHaveLength(1)
    expect(screen.getByText("Full Details")).toBeInTheDocument()
  })
})
