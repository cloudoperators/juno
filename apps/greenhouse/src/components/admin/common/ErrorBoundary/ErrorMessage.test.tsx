/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { ErrorMessage } from "./ErrorMessage"

describe("ErrorMessage", () => {
  it("renders error message with name and message", () => {
    const error = new Error("Something went wrong")
    error.name = "TestError"
    render(<ErrorMessage error={error} />)
    const errorText = screen.getByText("TestError: Something went wrong")
    expect(errorText).toBeInTheDocument()
  })

  it("renders error message with default name", () => {
    const error = new Error("Something went wrong")
    error.name = ""
    render(<ErrorMessage error={error} />)
    const errorText = screen.getByText("Error: Something went wrong")
    expect(errorText).toBeInTheDocument()
  })

  it("renders default message when error message is empty", () => {
    const error = new Error("")
    error.name = "TestError"
    render(<ErrorMessage error={error} />)
    const errorText = screen.getByText("TestError: Something went wrong")
    expect(errorText).toBeInTheDocument()
  })
})
