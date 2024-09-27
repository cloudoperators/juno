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
    expect(document.getElementById("juno-portal-root")).toBeInTheDocument()
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

  // ("removes the parent element when the portalled content unmounts")
  // ("renders individual .juno-portal containers for multiple portalled components")
  // ("keep parent ref in context")
})
