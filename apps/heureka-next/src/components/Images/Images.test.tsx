/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import Images from "./Images"

describe("Images", () => {
  it("should render correctly", () => {
    render(<Images />)
    expect(screen.getByText("render images here...")).toBeInTheDocument()
  })
})
