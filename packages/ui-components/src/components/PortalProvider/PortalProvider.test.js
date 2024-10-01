import * as React from "react"
import { createPortal } from "react-dom"
import { useContext } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import { PortalContext, PortalProvider, usePortalRef } from "./"

// A test component that uses the usePortalRef hook to render content in a portal in portal root:
const TestComponent = () => {
  const portalRef = usePortalRef()
  if (!portalRef) return null
  return createPortal(<button>Test</button>, portalRef)
}

// A test component to consume the portal context and render the className of the portal root:
const TestConsumer = () => {
  const portalRef = useContext(PortalContext)
  if (!portalRef) return null
  return (
    <>
      portalRef?.current && (<div data-testid="portal-root-ref-id">{portalRef.current.className}</div>)
    </>
  )
}

describe("PortalProvider", () => {
  test("renders a portal root container", async () => {
    render(<PortalProvider />)
    const portalRoot = document.getElementById("juno-portal-root")
    expect(portalRoot).toBeInTheDocument()
    expect(portalRoot).toHaveClass("juno-portal-root")
  })

  test("renders children wrapped into a .juno-portal container into a portal using PortalProvider.Portal", async () => {
    render(
      <PortalProvider>
        <PortalProvider.Portal>
          <button>Test</button>
        </PortalProvider.Portal>
      </PortalProvider>
    )
    expect(document.getElementById("juno-portal-root")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
    const parentEl = screen.getByRole("button").parentElement
    expect(parentEl).toHaveClass("juno-portal")
    expect(parentEl.parentElement).toHaveClass("juno-portal-root")
  })

  test("renders a portal root container with an id as passed", async () => {
    render(<PortalProvider id="portal-provider-test-id" />)
    expect(document.getElementById("portal-provider-test-id")).toBeInTheDocument()
  })

  test("renders children wrapped into a .juno-portal-container into a portal using usePortalRef", async () => {
    render(
      <PortalProvider>
        <TestComponent />
      </PortalProvider>
    )
    expect(document.getElementById("juno-portal-root")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
    const parentEl = screen.getByRole("button").parentElement
    expect(parentEl).toHaveClass("juno-portal")
    expect(parentEl.parentElement).toHaveClass("juno-portal-root")
  })

  test("renders individual juno portal containers for multiple portals", async () => {
    render(
      <PortalProvider>
        <PortalProvider.Portal>
          <button>Test 1</button>
        </PortalProvider.Portal>
        <PortalProvider.Portal>
          <button>Test 2</button>
        </PortalProvider.Portal>
        <PortalProvider.Portal>
          <button>Test 3</button>
        </PortalProvider.Portal>
      </PortalProvider>
    )
    const portalContainers = document.querySelectorAll(".juno-portal")
    expect(portalContainers.length).toBe(3)
  })

  test("removes the portal root container when unmounting", async () => {
    const { unmount } = render(
      <PortalProvider>
        <TestComponent />
      </PortalProvider>
    )
    expect(document.querySelector("#juno-portal-root")).toBeInTheDocument()
    unmount()
    expect(document.querySelector("#juno-portal-root")).not.toBeInTheDocument()
  })

  test("removes the juno portal container when a child component unmounts while leaving the portal root intact", async () => {
    const { rerender } = render(
      <PortalProvider>
        <TestComponent />
      </PortalProvider>
    )
    const portalRoot = document.querySelector("#juno-portal-root")
    expect(portalRoot).toBeInTheDocument()
    const portalContainer = document.querySelector(".juno-portal")
    expect(portalContainer).toBeInTheDocument()
    // Remove children, assert root element is still there, container elements rendered for child component is removed:
    rerender(<PortalProvider />)
    expect(portalRoot).toBeInTheDocument()
    expect(document.querySelector(".juno-portal")).not.toBeInTheDocument()
  })

  test("provides a ref to the rendered portal root container in context", async () => {
    render(
      <PortalProvider>
        <TestConsumer />
      </PortalProvider>
    )
    const portalRefId = screen.getByTestId("portal-root-ref-id")
    await waitFor(() => {
      expect(portalRefId).toHaveTextContent("juno-portal-root")
      expect(document.querySelector(".juno-portal-root")).toBeInTheDocument()
    })
  })

  test("logs a warning to the console when used outside of a PortalProvider", async () => {
    let consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation(() => {})
    render(<TestComponent />)
    await waitFor(() => {
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        "usePortalRef must be called inside a PortalProvider. You are probably using a component that renders a portal, e.g. Modal or Select. Make sure your app is wrapped in an AppShellProvider. Alternatively, a PortalProvider can be included manually."
      )
    })
    consoleWarnSpy.mockRestore()
  })

  test("renders an additional custom className to the portal root as passed", async () => {
    render(<PortalProvider className="my-custom-class" />)
    const portalRoot = document.getElementById("juno-portal-root")
    expect(portalRoot).toBeInTheDocument()
    expect(portalRoot).toHaveClass("juno-portal-root")
    expect(portalRoot).toHaveClass("my-custom-class")
  })
})
