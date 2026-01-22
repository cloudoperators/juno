import React from "react"
import { render, screen } from "@testing-library/react"
// write tests on vitest for WelcomeView
import AppContent from "./AppContent"

test("renders welcome message", () => {
  render(<AppContent />)

  const welcomeMessage = screen.getByText("Welcome to the Juno Template App!")
  expect(welcomeMessage).toBeInTheDocument()
})
