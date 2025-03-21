import React from "react"
import { render, screen, act } from "@testing-library/react"
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
  it("should render correctly", async () => {
    await act(async () => {
      render(
        <TestProvider>
          <ServicePanel service={mockService} onClose={() => {}} />
        </TestProvider>
      )
    })

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
})
