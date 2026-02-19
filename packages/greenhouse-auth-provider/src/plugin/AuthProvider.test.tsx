import React from "react"
import { render, screen } from "@testing-library/react"
import { AuthProvider, useAuth } from "./AuthProvider"
import type { EmbeddedAuth } from "../shared/auth-contract"

const TestComponent = () => {
  const state = useAuth()
  return <div>{state.status}</div>
}

const TestComponentWithDetails = () => {
  const state = useAuth()
  if (state.status === "authenticated") {
    return (
      <div>
        <div data-testid="status">{state.status}</div>
        <div data-testid="token">{state.token}</div>
        <div data-testid="userId">{state.userId}</div>
        <div data-testid="username">{state.userName}</div>
      </div>
    )
  }
  return <div data-testid="status">{state.status}</div>
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
      getSnapshot: () => ({ status: "authenticated", token: "jwt", userId: "user1", userName: "johndoe" }),
    }

    render(
      <AuthProvider auth={mockAuth} embedded={true}>
        <TestComponent />
      </AuthProvider>
    )

    expect(screen.getByText("authenticated")).toBeInTheDocument()
  })

  it("renders authenticated state with token, userId and userName", () => {
    const mockAuth: EmbeddedAuth = {
      getSnapshot: () => ({ status: "authenticated", token: "test-token", userId: "test-user", userName: "testuser" }),
    }

    render(
      <AuthProvider auth={mockAuth} embedded={true}>
        <TestComponentWithDetails />
      </AuthProvider>
    )

    expect(screen.getByTestId("status")).toHaveTextContent("authenticated")
    expect(screen.getByTestId("token")).toHaveTextContent("test-token")
    expect(screen.getByTestId("userId")).toHaveTextContent("test-user")
    expect(screen.getByTestId("username")).toHaveTextContent("testuser")
  })

  it("renders children in standalone mode", () => {
    render(
      <AuthProvider embedded={false}>
        <div data-testid="child">Standalone Content</div>
      </AuthProvider>
    )

    expect(screen.getByTestId("child")).toHaveTextContent("Standalone Content")
  })

  it("renders children in standalone mode without embedded prop", () => {
    render(
      <AuthProvider>
        <div data-testid="child">Standalone Content</div>
      </AuthProvider>
    )

    expect(screen.getByTestId("child")).toHaveTextContent("Standalone Content")
  })

  it("throws error when useAuth is called outside AuthProvider", () => {
    const TestComponentOutside = () => {
      useAuth()
      return <div>Test</div>
    }

    // Suppress console.error for this test since we expect an error
    const consoleError = console.error
    console.error = () => {}

    expect(() => {
      render(<TestComponentOutside />)
    }).toThrow("useAuth must be used inside AuthProvider")

    console.error = consoleError
  })

  it("calls getSnapshot when rendering", () => {
    const getSnapshot = vi.fn(() => ({ status: "anonymous" as const }))
    const mockAuth: EmbeddedAuth = { getSnapshot }

    render(
      <AuthProvider auth={mockAuth} embedded={true}>
        <TestComponent />
      </AuthProvider>
    )

    expect(getSnapshot).toHaveBeenCalled()
  })

  it("provides different auth states to multiple children", () => {
    const mockAuth: EmbeddedAuth = {
      getSnapshot: () => ({ status: "authenticated", token: "shared-token", userId: "user1", userName: "shareduser" }),
    }

    const Child1 = () => {
      const auth = useAuth()
      return <div data-testid="child1">{auth.status}</div>
    }

    const Child2 = () => {
      const auth = useAuth()
      if (auth.status === "authenticated") {
        return <div data-testid="child2">{auth.userName}</div>
      }
      return <div data-testid="child2">anonymous</div>
    }

    render(
      <AuthProvider auth={mockAuth} embedded={true}>
        <Child1 />
        <Child2 />
      </AuthProvider>
    )

    expect(screen.getByTestId("child1")).toHaveTextContent("authenticated")
    expect(screen.getByTestId("child2")).toHaveTextContent("shareduser")
  })

  it("handles nested components accessing auth", () => {
    const mockAuth: EmbeddedAuth = {
      getSnapshot: () => ({
        status: "authenticated",
        token: "nested-token",
        userId: "nested-user",
        userName: "nesteduser",
      }),
    }

    const DeepNestedComponent = () => {
      const auth = useAuth()
      return <div data-testid="deep">{auth.status}</div>
    }

    const NestedComponent = () => (
      <div>
        <DeepNestedComponent />
      </div>
    )

    render(
      <AuthProvider auth={mockAuth} embedded={true}>
        <NestedComponent />
      </AuthProvider>
    )

    expect(screen.getByTestId("deep")).toHaveTextContent("authenticated")
  })
})
