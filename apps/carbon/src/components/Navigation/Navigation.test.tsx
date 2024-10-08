import React from "react"
import { render, screen } from "@testing-library/react"
import Navigation from "./Navigation"

const getElementByRole = (name: string, role = "button") => screen.getByRole(role, { name })

describe("Navigation", () => {
  test("renders apps", () => {
    render(<Navigation />)
    expect(getElementByRole("Alerts")).toBeInTheDocument()
    expect(getElementByRole("Doop")).toBeInTheDocument()
    expect(getElementByRole("Heureka")).toBeInTheDocument()
  })
})
