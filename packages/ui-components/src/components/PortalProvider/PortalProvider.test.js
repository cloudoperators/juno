/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { PortalProvider } from "./index"

/** Tests need to be adjusted once we know how this will look */
describe("PortalProvider", () => {
  test("renders a PortalProvider wrapper div", async () => {
    render(
      <PortalProvider>
        <div>Hello</div>
      </PortalProvider>
    )
    expect(document.querySelector(".juno-portal-container")).toBeInTheDocument()
  })

  test("renders a PortalProvider wrapper div with an id as passed", async () => {
    render(
      <PortalProvider id="my-portal-provider">
        <div>Hello</div>
      </PortalProvider>
    )
    expect(document.querySelector("#my-portal-provider")).toBeInTheDocument()
  })

  test("renders other children as passed", async () => {
    render(
      <PortalProvider id="my-portal-provider">
        <button>Hello</button>
      </PortalProvider>
    )
    expect(document.querySelector(".juno-portal-container")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("Hello")
  })
})
