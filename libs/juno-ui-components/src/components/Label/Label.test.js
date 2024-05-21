/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen} from "@testing-library/react"
import { Label } from "./index"

describe("Label", () => {
  
  test("renders a label with a text as passed", async () => {
	 	render(<Label text="my-label"/>)
		expect(screen.getByText("my-label")).toBeInTheDocument()
  })
  
  test("renders a label for an element with an id as passed", async () => {
		render(<Label text="my-label" htmlFor="my-input" />)
		expect(screen.getByText("my-label")).toHaveAttribute('for', "my-input")
  })
  
  test("renders a disabled label", async () => {
    render(<Label text="my-label" disabled />)
    expect(screen.getByText("my-label")).toBeInTheDocument()
    expect(screen.getByText("my-label")).toHaveClass('juno-label-disabled')
  })
  
  test("renders a required symbol as passed", async () => {
    render(<Label text="Required Input" required />)
    expect(document.querySelector('.juno-required')).toBeInTheDocument()
  })
  
  test("renders a floating label as passed", async () => {
    render(<Label text="my-label" floating />)
    expect(screen.getByText("my-label")).toBeInTheDocument()
    expect(screen.getByText("my-label")).toHaveClass("juno-label-floating")
  })
  
  test("renders a minimized floating label as passed", async () => {
    render(<Label text="my-label" floating minimized />)
    expect(screen.getByText("my-label")).toBeInTheDocument()
    expect(screen.getByText("my-label")).toHaveClass("juno-label-minimized")
  })
  
  test("renders a custom className as passed", async () => {
    render(<Label text="my-label" className="my-custom-class" />)
    expect(screen.getByText("my-label")).toBeInTheDocument()
    expect(screen.getByText("my-label")).toHaveClass("my-custom-class")
  })
  
  test("renders all props as passed", async () => {
    render(<Label text="my-label" data-lolol="some-props"/>)
    expect(screen.getByText("my-label")).toBeInTheDocument()
    expect(screen.getByText("my-label")).toHaveAttribute('data-lolol', "some-props")
  })
  
})
