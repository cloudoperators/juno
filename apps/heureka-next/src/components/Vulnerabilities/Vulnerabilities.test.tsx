/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { Vulnerabilities } from "./Vulnerabilities"

describe("Vulnerabilities", () => {
  it("should render correctly", () => {
    render(<Vulnerabilities />)
    expect(screen.getByText("render vulnerabilities here...")).toBeInTheDocument()
  })
})
