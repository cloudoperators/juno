/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { Box } from "./index"

describe("Box", () => {
  test("renders a box with children", async () => {
    render(<Box data-testid="box">Children inside</Box>)
    expect(screen.getByTestId("box")).toBeInTheDocument()
    expect(screen.getByTestId("box")).toHaveTextContent("Children inside")
  })

  test("renders a padded Box by default", async () => {
    render(<Box data-testid="box" />)
    expect(screen.getByTestId("box")).toBeInTheDocument()
    expect(screen.getByTestId("box")).toHaveClass("jn-py-1")
    expect(screen.getByTestId("box")).toHaveClass("jn-px-2")
  })

  test("renders an unpadded Box as passed", async () => {
    render(<Box data-testid="box" unpad />)
    expect(screen.getByTestId("box")).toBeInTheDocument()
    expect(screen.getByTestId("box")).not.toHaveClass("jn-py-1")
    expect(screen.getByTestId("box")).not.toHaveClass("jn-px-2")
  })

  test("renders all classNames as passed", async () => {
    render(<Box data-testid="box" className="my-custom-class" />)
    expect(screen.getByTestId("box")).toBeInTheDocument()
    expect(screen.getByTestId("box")).toHaveClass("my-custom-class")
  })

  test("renders all props as passed", async () => {
    render(<Box data-testid="box" data-lolol={true} />)
    expect(screen.getByTestId("box")).toBeInTheDocument()
    expect(screen.getByTestId("box")).toHaveAttribute("data-lolol")
  })
})
