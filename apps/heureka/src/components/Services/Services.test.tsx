/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, act } from "@testing-library/react"
import { Services } from "./Services"
import { TestProvider } from "../../mocks/TestProvider"

describe("Services", () => {
  it.skip("should render correctly", async () => {
    const mockInitialFilters = {
      support_group: ["test-group-1", "test-group-2"],
    }

  it.skip("should render correctly", async () => {
    await act(async () => {
      render(
        <TestProvider>
          <Services />
        </TestProvider>
      )
    })
    
    // Check for the presence of the service list headers
    expect(await screen.findByText("Service")).toBeInTheDocument()
    expect(await screen.findByText("Issues count")).toBeInTheDocument()
    expect(await screen.findByText("Service details")).toBeInTheDocument()
  })
})
