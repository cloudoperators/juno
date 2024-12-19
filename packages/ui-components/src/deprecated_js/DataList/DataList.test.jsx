/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { DataList } from "./index"

describe("DataList", () => {
  test("renders a DataList", async () => {
    render(<DataList data-testid="my-datalist" />)
    expect(screen.getByTestId("my-datalist")).toBeInTheDocument()
  })

  test("renders a custom className", async () => {
    render(<DataList data-testid="my-datalist" className="my-custom-class" />)
    expect(screen.getByTestId("my-datalist")).toBeInTheDocument()
    expect(screen.getByTestId("my-datalist")).toHaveClass("my-custom-class")
  })
})
