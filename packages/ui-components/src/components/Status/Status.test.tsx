/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render } from "@testing-library/react"
import { Status } from "./Status.component"

describe("Status", () => {
  it("renders", () => {
    render(<Status />)
    expect(document.querySelector(".juno-status")).toBeInTheDocument()
  })
})
