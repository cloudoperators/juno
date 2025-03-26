/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Navigation } from "./Navigation"
import { UserView } from "../../store/StoreProvider/types"

describe("Navigation", () => {
  it("should render correctly", () => {
    render(<Navigation activeItem={UserView.Services} onChange={() => {}} />)
    expect(screen.getByText("Services")).toBeInTheDocument()
    expect(screen.getByText("Issues")).toBeInTheDocument()
  })

  it("should call onChange", async () => {
    //setup
    const user = userEvent.setup()
    const onChange = vitest.fn()
    //arrange
    render(<Navigation activeItem={UserView.Services} onChange={onChange} />)
    await user.click(screen.getByRole("link", { name: "issues" }))
    //assert
    expect(onChange).toHaveBeenCalledWith("issues")
  })
})
