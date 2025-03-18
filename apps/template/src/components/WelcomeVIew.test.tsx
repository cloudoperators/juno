/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
// write tests on vitest for WelcomeView
import WelcomeView from "./WelcomeView"

test("renders welcome message", () => {
  render(<WelcomeView />)

  const welcomeMessage = screen.getByText("Welcome to the template app with zustand")
  expect(welcomeMessage).toBeInTheDocument()
})
