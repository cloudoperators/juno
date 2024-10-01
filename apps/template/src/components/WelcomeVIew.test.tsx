import React from "react"
import { render, screen } from "@testing-library/react"
// write tests on vitest for WelcomeView
import WelcomeView from "./WelcomeView"

test("renders welcome message", () => {
  render(<WelcomeView />)

  const welcomeMessage = screen.getByText("Welcome to the template app with zustand")
  expect(welcomeMessage).toBeInTheDocument()
})
