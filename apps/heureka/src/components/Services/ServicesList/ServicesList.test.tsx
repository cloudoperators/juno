/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, act, fireEvent } from "@testing-library/react"
import { ServicesList } from "./ServicesList"
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

describe("ServicesList", () => {
  it("should render correctly", async () => {
    await act(async () => {
      render(
          <TestProvider>
            <ServicesList
              loading={false}
              services={[]}
              totalNumberOfPages={0}
              goToPage={() => {}}
            />
          </TestProvider>
      )
    })


    // Check for the presence of the service list headers
    expect(await screen.findByText("Service")).toBeInTheDocument()
    expect(await screen.findByText("Issues count")).toBeInTheDocument()
    expect(await screen.findByText("Service details")).toBeInTheDocument()
    expect(await screen.findByText("No services found")).toBeInTheDocument()
  })

  it("should render service panel when clicking on a service", async () => {
    await act(async () => {
      render(
        <TestProvider>
          <ServicesList loading={false} services={[mockService]} totalNumberOfPages={1} goToPage={() => {}} />
        </TestProvider>
      )
    })

    // Find and click the service row
    const serviceRow = await screen.findByText(mockService.name)
    fireEvent.click(serviceRow)

    // Check if the panel is rendered with the service name
    expect(screen.getByText(`${mockService.name} Service Overview`)).toBeInTheDocument()

    // Click again to close the panel
    fireEvent.click(serviceRow)
    expect(screen.queryByText(`${mockService.name} Service Overview`)).not.toBeInTheDocument()
  })
})
