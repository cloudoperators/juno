import * as React from "react"
import { render, screen } from "@testing-library/react"
import { PortalProvider } from "./"

describe("PortalProvider", () => {
  test("renders a portal root container", async () => {
    render(<PortalProvider />)
    expect(document.getElementById("juno-portal-root")).toBeInTheDocument()
  })

  test("renders children wrapped into a .juno-portal container into a portal", async () => {
    render(
      <PortalProvider>
        <PortalProvider.Portal>
          <button>Test</button>
        </PortalProvider.Portal>
      </PortalProvider>
    )
    expect(document.getElementById("juno-portal-root")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
    const parentElement = screen.getByRole("button").parentElement
    expect(parentElement).toHaveClass("juno-portal")
  })
})
