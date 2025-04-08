/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { Navigation } from "./Navigation"
import { UserView } from "../../store/StoreProvider/types"

describe("Navigation", () => {
  it("should render correctly", () => {
    render(<Navigation activeItem={UserView.Services} onChange={() => {}} />)
    expect(screen.getByText("Services")).toBeInTheDocument()
  })
})
