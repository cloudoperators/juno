/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen} from "@testing-library/react"
import { DataGridCheckboxCell } from "./index"

describe("DataGridCheckboxCell", () => {
	
	// test("renders a DataGridCheckboxCell containing a checkbox", async () => {
	// 	const tablerow = document.createElement('tr')
	// 	const {container} = render(<DataGridCheckboxCell data-testid="my-datagridcell" />, 
	// 		{ container: document.body.appendChild(tablerow)})
	// 	expect(screen.getByTestId("my-datagridcell")).toBeInTheDocument()
	// 	expect(screen.getByRole('checkbox')).toBeInTheDocument()
	// })
	
	// test("renders a DataGridCheckboxCell containing a checked checkbox if passed", async () => {
	// 	const tablerow = document.createElement('tr')
	// 	const {container} = render(<DataGridCheckboxCell data-testid="my-datagridcell" selected />, 
	// 		{ container: document.body.appendChild(tablerow)})
	// 	expect(screen.getByRole('checkbox')).toBeInTheDocument()
	// 	expect(screen.getByRole('checkbox')).toBeChecked()
	// })
	
	test("renders a DataGridCheckboxCell", async () => {
		render(<DataGridCheckboxCell />)
		expect(screen.getByRole("gridcell")).toBeInTheDocument()
	})
	
	test("renders a custom className", async () => {
		render(<DataGridCheckboxCell className="my-custom-class"/>)
		expect(screen.getByRole("gridcell")).toBeInTheDocument()
		expect(screen.getByRole("gridcell")).toHaveClass("my-custom-class")
	})
	
})