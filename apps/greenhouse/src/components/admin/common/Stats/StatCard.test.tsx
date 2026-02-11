/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { StatCard } from "./StatCard"

describe("StatCard", () => {
  it("should render label and value correctly", () => {
    render(<StatCard label="Total Items" value={42} />)
    expect(screen.getByText("Total Items")).toBeInTheDocument()
    expect(screen.getByText("42")).toBeInTheDocument()
  })
})
