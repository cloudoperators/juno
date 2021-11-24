import * as React from "react"
import { render, screen} from "@testing-library/react"
import { SelectOptionGroup } from "./index"

describe("SelectOptionGroup", () => {
	
	test("renders an optgroup element", async () => {
		render(<SelectOptionGroup />)
		expect(screen.getByRole("group")).toBeInTheDocument()
	})
	
	test("renders an optgroup with a label as passed", async () => {
		render(<SelectOptionGroup label="My Select Option Group"/>)
		expect(screen.getByRole("group")).toBeInTheDocument()
		expect(screen.getByRole("group")).toHaveAttribute('label', "My Select Option Group")
	})
	
	test("renders a disabled optgroup as passed", async () => {
		render(<SelectOptionGroup disabled />)
		expect(screen.getByRole("group")).toBeInTheDocument()
		expect(screen.getByRole("group")).toHaveAttribute('disabled')
	})
	
	test("renders all children as passed", async () => {
		render(
			<SelectOptionGroup>
				<option></option>
			</SelectOptionGroup>
		)
		expect(screen.getByRole("group")).toBeInTheDocument()
		expect(screen.getByRole("option")).toBeInTheDocument()
	})
	
	test("renders a custom className", async () => {
		render(<SelectOptionGroup className="my-custom-class" />)
		expect(screen.getByRole("group")).toBeInTheDocument()
		expect(screen.getByRole("group")).toHaveClass("my-custom-class")
	})
	
	test("renders all props", async () => {
		render(<SelectOptionGroup data-lolol="some-prop" />)
		expect(screen.getByRole("group")).toBeInTheDocument()
		expect(screen.getByRole("group")).toHaveAttribute("data-lolol", 'some-prop')
	})
	
})