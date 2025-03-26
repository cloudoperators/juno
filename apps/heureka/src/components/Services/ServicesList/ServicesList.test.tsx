/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { ServicesList } from "./ServicesList"
import { TestProvider } from "../../../mocks/TestProvider"
import { ServiceType } from "../Services"
import { capitalizeFirstLetter } from "../../common/Helpers/helpers"

const mockService: ServiceType = {
  id: "1",
  name: "test-service",
  issuesCount: {
    critical: 1,
    high: 2,
    medium: 0,
    low: 0,
    none: 0,
  },
  serviceDetails: {
    supportGroups: ["group1", "group2"],
  },
  components: 3,
  remediationDate: "2024-01-01",
  serviceOwners: ["owner1", "owner2"],
}

const renderServicesList = (services: ServiceType[] = []) => ({
  user: userEvent.setup(),
  ...render(
    <TestProvider>
      <MessagesProvider>
        <ServicesList
          loading={false}
          services={services}
          totalNumberOfPages={services.length > 0 ? 1 : 0}
          goToPage={() => {}}
          onShowDetails={() => {}}
      />
      </MessagesProvider>
    </TestProvider>
  ),
})

describe("ServicesList", () => {
  it("should render correctly", async () => {
    renderServicesList()

    // Check for the presence of the service list headers
    expect(await screen.findByText("Service")).toBeInTheDocument()
    expect(await screen.findByText("Issues count")).toBeInTheDocument()
    expect(await screen.findByText("Service details")).toBeInTheDocument()
    expect(await screen.findByText("No services found")).toBeInTheDocument()
  })

  it("should render service panel when clicking on a service", async () => {
    const { user } = renderServicesList([mockService])

    // Find and click the service row
    const serviceRow = await screen.findByText(mockService.name)
    await user.click(serviceRow)

    // Check if the panel is rendered with the service name
    expect(screen.getByText(`${capitalizeFirstLetter(mockService.name)} Overview`)).toBeInTheDocument()

    // Click again to close the panel
    await user.click(serviceRow)
    expect(screen.queryByText(`${capitalizeFirstLetter(mockService.name)} Overview`)).not.toBeInTheDocument()
  })
})
