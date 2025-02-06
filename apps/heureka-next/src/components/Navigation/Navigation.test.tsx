/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Navigation } from "./Navigation"
import { SERVICES } from "../../constants"

describe("Navigation", () => {
  it("should render correctly", () => {
    render(<Navigation activeItem={SERVICES} onChange={() => {}} />)
    expect(screen.getByText("Services")).toBeInTheDocument()
    expect(screen.getByText("Vulnerabilities")).toBeInTheDocument()
    expect(screen.getByText("Images")).toBeInTheDocument()
  })

  it("should call onChange", async () => {
    //setup
    const user = userEvent.setup()
    const onChange = vitest.fn()
    //arrange
    render(<Navigation activeItem={SERVICES} onChange={onChange} />)
    await user.click(screen.getByRole("link", { name: "vulnerabilities" }))
    //assert
    expect(onChange).toHaveBeenCalledWith("vulnerabilities")
  })
})
