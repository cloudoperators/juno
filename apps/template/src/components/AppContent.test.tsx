/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
// write tests on vitest for WelcomeView
import AppContent from "./AppContent"

test("renders welcome message", () => {
  render(<AppContent />)

  const welcomeMessage = screen.getByText("Welcome to the Juno Template App!")
  expect(welcomeMessage).toBeInTheDocument()
})
