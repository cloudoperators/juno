/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen} from "@testing-library/react"
import { GridColumn} from "./index"

describe("GridColumn", () => {
	
	test("renders a Grid row", async () => {
		render(<GridColumn data-testid="my-grid-column" />)
		expect(screen.getByTestId("my-grid-column")).toBeInTheDocument()
	})
	
	test("renders a custom className", async () => {
		render(<GridColumn data-testid="my-grid-column" className="my-grid-column-class" />)
		expect(screen.getByTestId("my-grid-column")).toHaveClass("my-grid-column-class")
	})
	
	test("renders modified 'auto' styles when passed", async () => {
		render(<GridColumn data-testid="my-auto-column" auto />)
		expect(screen.getByTestId("my-auto-column")).toHaveAttribute("style")
		expect(document.querySelector('.juno-grid-column').style.getPropertyValue('flex-grow')).toBe('1')
		expect(document.querySelector('.juno-grid-column').style.getPropertyValue('flex-shrink')).toBe('0')
		expect(document.querySelector('.juno-grid-column').style.getPropertyValue('flex-basis')).toBe('0px')
	})
	
	test("renders width-related styles in a style tag when passed", async () => {
		render(<GridColumn data-testid="my-width-column" width={73} />)
		expect(screen.getByTestId("my-width-column")).toHaveAttribute("style")
		expect(document.querySelector('.juno-grid-column').style.getPropertyValue('width')).toBe('73%')
		expect(document.querySelector('.juno-grid-column').style.getPropertyValue('flex-shrink')).toBe('0')
		expect(document.querySelector('.juno-grid-column').style.getPropertyValue('flex-basis')).toBe('73%')
	})
	
})