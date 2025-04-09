/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { ServicesList } from "./index"
import { TestProvider } from "../../../mocks/TestProvider"

const renderServicesList = () => ({
  user: userEvent.setup(),
  ...render(
    <TestProvider>
      <MessagesProvider>
        <ServicesList
          filterSettings={{
            searchTerm: "",
            selectedFilters: [],
          }}
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
    expect(await screen.findByText("Service details")).toBeInTheDocument()
  })

  it("should render service panel when clicking on a service", async () => {
    const { user } = renderServicesList()

    // Find and click the service row
    const serviceRow = await screen.findByText("alpha")
    await user.click(serviceRow)

    // Check if the panel is rendered with the service name
    expect(screen.getByText(`Alpha Overview`)).toBeInTheDocument()
  })
})
