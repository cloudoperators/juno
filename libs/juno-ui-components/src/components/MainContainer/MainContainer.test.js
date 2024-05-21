/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { MainContainer } from "./index"

describe("MainContainer", () => {
  
  test("renders a main container", async () => {
		render(<MainContainer />)
		expect(screen.getByRole("main")).toBeInTheDocument()
		expect(screen.getByRole("main")).toHaveClass("juno-main")
	})
	
	test("renders a main container with flex grow", async () => {
		render(<MainContainer />)
		expect(screen.getByRole("main")).toBeInTheDocument()
		expect(screen.getByRole("main")).toHaveClass("jn-grow")
	})
	
	test("renders children as passed", async () => {
		render(
				<MainContainer>
					<button></button>
				</MainContainer>
			)
		expect(screen.getByRole("main")).toBeInTheDocument()
		expect(screen.getByRole("button")).toBeInTheDocument()
	})
	
	test("renders a custom className", async () => {
		render(<MainContainer className="my-custom-classname"/>)
		expect(screen.getByRole("main")).toBeInTheDocument()
		expect(screen.getByRole("main")).toHaveClass("my-custom-classname")
	})
	
	test("renders all props", async () => {
		render(<MainContainer data-lolol="some-prop"/>)
		expect(screen.getByRole("main")).toBeInTheDocument()
		expect(screen.getByRole("main")).toHaveAttribute("data-lolol", 'some-prop')
	})

})
