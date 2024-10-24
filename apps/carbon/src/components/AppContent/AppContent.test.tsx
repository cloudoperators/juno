/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import AppContent from "./AppContent"

const extensions = [
  {
    name: "extension1",
    title: "Extension 1",
    url: "/extension1",
  },
  {
    name: "extension2",
    title: "Extension 2",
    url: "/extension2",
  },
  {
    name: "extension3",
    title: "Extension 3",
    url: "/extension3",
  },
]

const setup = () => {
  return {
    user: userEvent.setup(),
    ...render(<AppContent extensions={extensions} />),
  }
}

describe("AppContent", () => {
  it("should render the first extension as default", () => {
    setup()
    const extensionContainer = screen.getByTestId("extension-container")
    expect(within(extensionContainer).getByText("Extension 1")).toBeInTheDocument()
  })

  it("should navigate to an other extension", async () => {
    const { user } = setup()
    await user.click(screen.getByRole("link", { name: "Extension 2" }))
    const extensionContainer = screen.getByTestId("extension-container")
    expect(within(extensionContainer).getByText("Extension 2")).toBeInTheDocument()
  })
})
