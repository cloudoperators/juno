/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { TabPanel } from "./index"

describe("TabPanel", () => {
	
	test("renders a TabPanel", async () => {
		render(<TabPanel />)
		expect(screen.getByRole("tabpanel")).toBeInTheDocument()
		expect(screen.getByRole("tabpanel")).toHaveClass("juno-tabpanel")
	})
	
	test("renders a custom classNames", async () => {
		render(<TabPanel className="my-custom-class" />)
		expect(screen.getByRole("tabpanel")).toBeInTheDocument()
		expect(screen.getByRole("tabpanel")).toHaveClass("my-custom-class")
	})
	
	test("renders all other props", async () => {
		render(<TabPanel data-lolol="13" />)
		expect(screen.getByRole("tabpanel")).toBeInTheDocument()
		expect(screen.getByRole("tabpanel")).toHaveAttribute("data-lolol", '13')
	})
	
})