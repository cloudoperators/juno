/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { RadioGroup } from "./index"
import {Radio} from "../Radio/index"


describe("RadioGroup", () => {
	
	test("does not render any radios if no children passed", async () => {
		render(
			<RadioGroup name="my-radiogroup"> 
			</RadioGroup>
		)
		expect(() => {
			screen.getByRole("radio");
		  }).toThrow()
	})
	
	test("renders radios as passed", async () => {
		render(
			<RadioGroup name="my-radiogroup"> 
				<Radio />
				<Radio />
				<Radio />
			</RadioGroup>
		)
		expect(screen.getAllByRole("radio")).toHaveLength(3)
	})
	
	test("renders individually named radios as passed", async () => {
		render(
			<RadioGroup name="my-radiogroup"> 
				<Radio />
			</RadioGroup>
		)
		expect(screen.getByRole("radio")).toHaveAttribute('name', "my-radiogroup")
	})
	
	test("renders radios with an auto-generated name if no name was passed", async () => {
		render(
			<RadioGroup> 
				<Radio />
				<Radio />
			</RadioGroup>
		)
		const radios = screen.getAllByRole("radio")
		radios.forEach( radio => expect(radio).toHaveAttribute('name') )
	})
	
	test("renders a RadioGroup with an id as passed", async () => {
		render(<RadioGroup data-testid="group" id="my-radiogroup" />)
		expect(screen.getByTestId("group")).toBeInTheDocument()
		expect(screen.getByTestId("group")).toHaveAttribute("id", "my-radiogroup")
	})
	
	test("renders a RadioGroup with an auto-generated id if no id is passed", async () => {
		render(< RadioGroup data-testid="group"/>)
		expect(screen.getByTestId("group")).toBeInTheDocument()
		expect(screen.getByTestId("group")).toHaveAttribute("id")
		expect(screen.getByTestId("group").getAttribute("id")).toMatch("juno-radiogroup")
	})
	
  test("renders a label for the group as passed", async () => {
		render(
			<RadioGroup name="my-radiogroup" label="My labeled RadioGroup" >
				<Radio />
			</RadioGroup>
		)
		expect(screen.getByText("My labeled RadioGroup")).toBeInTheDocument()
	})
	
	test("renders a required label as passed", async () => {
		render(
			<RadioGroup name="my-radiogroup" label="my-labeled-radiogroup" required >
				<Radio />
			</RadioGroup>
		)
		expect(screen.getByRole("radiogroup")).toBeInTheDocument()
		expect(document.querySelector('.juno-required')).toBeInTheDocument()
	})
	
	test("renders a disabled radiogroup as passes", async () => {
		render(
			<RadioGroup name="my-radiogroup" disabled={true} >
				<Radio />
			</RadioGroup>
		)
		expect(screen.getByRole("radiogroup")).toBeInTheDocument()
		expect(screen.getByRole('radio')).toBeDisabled()
	})
	
	test("renders a radiogroup with a selected option as passed to the parent", async () => {
		render(
			<RadioGroup name="my-radiogroup" selected="val2">
				<Radio value="val1" />
				<Radio value="val2" id="radio-2"/>
				<Radio value="val3" />
			</RadioGroup>
		)
		expect(screen.getByRole("radiogroup")).toBeInTheDocument()
		expect(document.querySelector("#radio-2")).toBeChecked()
	})
	
	test("renders a radiogroup with a checked radio as passed to a child", async () => {
		render(
			<RadioGroup name="my-radiogroup">
				<Radio value="v1" />
				<Radio value="v2" />
				<Radio value="v3" id="radio-3" checked />
			</RadioGroup>
		)
		expect(screen.getByRole("radiogroup")).toBeInTheDocument()
		expect(document.querySelector("#radio-3")).toBeChecked()
	})
	
	test("renders a helptext as passed", async () => {
		render(<RadioGroup name="a-radiogroup" helptext="this is a helptext"/>)
		expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
		expect(document.querySelector(".juno-form-hint")).toHaveClass("juno-form-hint-help")
		expect(document.querySelector(".juno-form-hint")).toHaveTextContent("this is a helptext")
	})
	
	test("renders a valid RadioGroup as passed", async () => {
		render(
			<RadioGroup valid name="my-radiogroup">
				<Radio value="v1"/>
			</RadioGroup>
		)
		expect(screen.getByRole("radiogroup")).toBeInTheDocument()
		expect(screen.getByRole("radiogroup")).toHaveClass("juno-radiogroup-valid")
		expect(screen.getByTitle("CheckCircle")).toBeInTheDocument()
	})
	
	test("renders a valid RadioGroup when successtext is passed", async () => {
		render(
			<RadioGroup successtext="Great Success!" name="my-radiogroup">
				<Radio value="v1"/>
			</RadioGroup>
		)
		expect(screen.getByRole("radiogroup")).toBeInTheDocument()
		expect(screen.getByRole("radiogroup")).toHaveClass("juno-radiogroup-valid")
		expect(screen.getByTitle("CheckCircle")).toBeInTheDocument()
		expect(screen.getByText("Great Success!")).toBeInTheDocument()
	})
	
	test("renders a invalid RadioGroup as passed", async () => {
		render(
			<RadioGroup invalid name="my-radiogroup">
				<Radio value="v1"/>
			</RadioGroup>
		)
		expect(screen.getByRole("radiogroup")).toBeInTheDocument()
		expect(screen.getByRole("radiogroup")).toHaveClass("juno-radiogroup-invalid")
		expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
	})
	
	test("renders an invalid RadioGroup when errortext is passed", async () => {
		render(
			<RadioGroup errortext="Big Error!" name="my-radiogroup">
				<Radio value="v1"/>
			</RadioGroup>
		)
		expect(screen.getByRole("radiogroup")).toBeInTheDocument()
		expect(screen.getByRole("radiogroup")).toHaveClass("juno-radiogroup-invalid")
		expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
		expect(screen.getByText("Big Error!")).toBeInTheDocument()
	})
	
	test("renders a custom className", async () => {
		render(<RadioGroup name="my-radiogroup" className="my-classname" />)
		expect(screen.getByRole("radiogroup")).toBeInTheDocument()
		expect(screen.getByRole("radiogroup")).toHaveClass("my-classname")
	})
	
	test("renders all props", async () => {
		render(<RadioGroup name="my-radiogroup" data-lolol="some-prop" />)
		expect(screen.getByRole("radiogroup")).toBeInTheDocument()
		expect(screen.getByRole("radiogroup")).toHaveAttribute("data-lolol", 'some-prop')
	})

})