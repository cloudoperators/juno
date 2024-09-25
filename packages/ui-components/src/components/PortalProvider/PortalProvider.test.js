import * as React from "react"
import { render } from "@testing-library/react"
import { PortalProvider } from "./"

describe("PortalProvider", () => {
  test("renders a portal root container", async () => {
    render(<PortalProvider />)
    expect(document.getElementById("juno-portal-root")).toBeInTheDocument()
  })
})
