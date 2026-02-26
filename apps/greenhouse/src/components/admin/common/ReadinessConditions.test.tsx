/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import ReadinessConditions from "./ReadinessConditions"

describe("ReadinessConditions", () => {
  it("renders conditions correctly", () => {
    const conditions = [
      {
        type: "Ready",
        status: "True",
      },
      {
        type: "AllPluginsReady",
        status: "False",
      },
    ]

    render(<ReadinessConditions conditions={conditions} />)
    expect(screen.getByText("Ready")).toBeInTheDocument()
    expect(screen.getByText("APR")).toBeInTheDocument()
  })
})
