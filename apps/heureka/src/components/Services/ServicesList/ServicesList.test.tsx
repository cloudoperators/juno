/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, act } from "@testing-library/react"
import { ServicesList } from "./ServicesList"
import { TestProvider } from "../../../mocks/TestProvider"
import { PortalProvider } from "@cloudoperators/juno-ui-components"

describe("ServicesList", () => {
  it("should render correctly", async () => {
    await act(async () => {
      render(
        <PortalProvider>
          <TestProvider>
            <ServicesList
              loading={false}
              services={[]}
              totalNumberOfPages={0}
              goToPage={() => {}}
            />
          </TestProvider>
        </PortalProvider>
      )
    })

    // Check for the presence of the service list headers
    expect(await screen.findByText("Service")).toBeInTheDocument()
    expect(await screen.findByText("Issues count")).toBeInTheDocument()
    expect(await screen.findByText("Service details")).toBeInTheDocument()
  })
})
