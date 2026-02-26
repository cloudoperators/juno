/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { LoadingDataRow } from "./LoadingDataRow"

describe("LoadingDataRow", () => {
  it("should correctly render", () => {
    render(<LoadingDataRow colSpan={5} />)
    const loadingText = screen.getByText("Loading...")
    expect(loadingText).toBeInTheDocument()
  })
})
