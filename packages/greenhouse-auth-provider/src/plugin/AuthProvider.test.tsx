import React from "react"
import { render, screen } from "@testing-library/react"
import { AuthProvider, useAuth } from "./AuthProvider"
import type { EmbeddedAuth } from "../shared/auth-contract"

const TestComponent = () => {
  const state = useAuth()
  return <div>{state.status}</div>
}

describe("AuthProvider", () => {
  it("renders anonymous state", () => {
    const mockAuth: EmbeddedAuth = {
      getSnapshot: () => ({ status: "anonymous" }),
    }

    render(
      <AuthProvider auth={mockAuth} embedded={true}>
        <TestComponent />
      </AuthProvider>
    )

    expect(screen.getByText("anonymous")).toBeInTheDocument()
  })

  it("renders authenticated state", () => {
    const mockAuth: EmbeddedAuth = {
      getSnapshot: () => ({ status: "authenticated", token: "jwt", userId: "user1" }),
    }

    render(
      <AuthProvider auth={mockAuth} embedded={true}>
        <TestComponent />
      </AuthProvider>
    )

    expect(screen.getByText("authenticated")).toBeInTheDocument()
  })
})
