/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { Services } from "./Services"
import { TestProvider } from "../../mocks/TestProvider"

describe("Services", () => {
  it("should render correctly", async () => {
    render(
      <TestProvider>
        <Services />
      </TestProvider>
    )
    expect(await screen.findByText("alpha")).toBeInTheDocument()
  })
})
