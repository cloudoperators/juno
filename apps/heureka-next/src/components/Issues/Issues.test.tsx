/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { Issues } from "./Issues"

describe("Issues", () => {
  it("should render correctly", () => {
    render(<Issues />)
    expect(screen.getByText("render issues here...")).toBeInTheDocument()
  })
})
