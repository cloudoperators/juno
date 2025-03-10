/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Shell } from "./Shell"
import { TestProvider } from "../../mocks/TestProvider"

const renderShell = () => ({
  user: userEvent.setup(),
  ...render(
    <TestProvider>
      <Shell />
    </TestProvider>
  ),
})

describe("Shell", () => {
  it("should allow switching to other view", async () => {
    const { user } = renderShell()
    await user.click(screen.getByText("Issues"))
    expect(screen.getByText("render issues here...")).toBeInTheDocument()
    expect(screen.queryByText("alpha")).not.toBeInTheDocument()
  })
})
