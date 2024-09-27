import * as React from "react"
import { createPortal } from "react-dom"
import { render, screen } from "@testing-library/react"
import { PortalProvider, usePortalRef } from "./"

const TestComponent = () => {
  const portalRef = usePortalRef()
  if (!portalRef) return null
  return createPortal(<button>Test</button>, portalRef)
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

  test("renders an additional custom className as passed", async () => {
    render(<PortalProvider className="my-custom-class" />)
    const portalRoot = document.getElementById("juno-portal-root")
    expect(portalRoot).toBeInTheDocument()
    expect(portalRoot).toHaveClass("juno-portal-root")
    expect(portalRoot).toHaveClass("my-custom-class")
  })
})
