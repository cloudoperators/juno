/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen} from "@testing-library/react"
import { Form } from "./index"

describe("Form", () => {
	
	test("renders a Form", async () => {
		render(<Form data-testid="my-form" />)
		expect(screen.getByTestId("my-form")).toBeInTheDocument()
	})
	
	test("renders a title", async () => {
		render(<Form data-testid="my-form" title="My Form" />)
		expect(screen.getByTestId("my-form")).toBeInTheDocument()
		expect(screen.getByRole("heading")).toHaveClass("juno-form-heading")
		expect(screen.getByRole("heading")).toHaveTextContent("My Form")
	})
	
	test("renders a custom className", async () => {
		render(<Form data-testid="my-form" className="my-custom-class" />)
		expect(screen.getByTestId("my-form")).toBeInTheDocument()
		expect(screen.getByTestId("my-form")).toHaveClass("my-custom-class")
	})
	
	test("renders children as passed", async () => {
		render(<Form data-testid="my-form"><button></button></Form>)
		expect(screen.getByRole("button")).toBeInTheDocument()
	})
	
	test("renders all props as passed", async () => {
		render(<Form data-testid="23" data-lolol={true}/>)
		expect(screen.getByTestId("23")).toBeInTheDocument()
		expect(screen.getByTestId("23")).toHaveAttribute('data-lolol')
	})
	
})
