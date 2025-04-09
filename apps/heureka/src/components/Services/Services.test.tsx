/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, act } from "@testing-library/react"
import { Services } from "./index"
import { TestProvider } from "../../mocks/TestProvider"

describe("Services", () => {
  it.skip("should render correctly", async () => {
    await act(async () => {
      render(
        <TestProvider>
          <Services />
        </TestProvider>
      )
    })

    expect(await screen.findByText("alpha")).toBeInTheDocument()
  })
})
