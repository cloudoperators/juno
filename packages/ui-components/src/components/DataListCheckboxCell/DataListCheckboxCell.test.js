/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen} from "@testing-library/react"
import { DataListCheckboxCell } from "./index"

describe("DataListCheckboxCell", () => {
	
	test("renders a DataListCheckboxCell containing a checkbox", async () => {
		render(<DataListCheckboxCell data-testid="my-datalistcell" />)
		expect(screen.getByTestId("my-datalistcell")).toBeInTheDocument()
		expect(screen.getByRole('checkbox')).toBeInTheDocument()
	})
	
	test("renders a DataListCheckboxCell containing a checked checkbox if passed", async () => {
		render(<DataListCheckboxCell data-testid="my-datalistcell" selected />)
		expect(screen.getByRole('checkbox')).toBeInTheDocument()
		expect(screen.getByRole('checkbox')).toBeChecked()
	})
	
	test("renders a custom className", async () => {
		render(<DataListCheckboxCell data-testid="my-datalistcell" className="my-custom-class"/>)
		expect(screen.getByTestId("my-datalistcell")).toBeInTheDocument()
		expect(screen.getByTestId("my-datalistcell")).toHaveClass("my-custom-class")
	})
	
})