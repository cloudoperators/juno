/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen} from "@testing-library/react"
import { DataGridFoot } from "./index"

describe("DataGridFoot", () => {
	
	test("renders a DataGridFoot", async () => {
		const table = document.createElement('table')
		const {container} = render(<DataGridFoot data-testid="my-datagridfoot"/>, 
			{ container: document.body.appendChild(table)})
		expect(screen.getByTestId("my-datagridfoot")).toBeInTheDocument()
	})
	
	test("renders a custom className", async () => {
		const table = document.createElement('table')
		const {container} = render(<DataGridFoot data-testid="my-datagridfoot" className="my-custom-class"/>, 
			{ container: document.body.appendChild(table)})
		expect(screen.getByTestId("my-datagridfoot")).toBeInTheDocument()
		expect(screen.getByTestId("my-datagridfoot")).toHaveClass("my-custom-class")
	})
	
})