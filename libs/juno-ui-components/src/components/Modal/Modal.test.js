/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { cleanup, render, screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Modal } from "./index"
import { PortalProvider, usePortalRef } from "../PortalProvider/PortalProvider.component"
import { TextInput } from "../TextInput/index.js"

const mockOnConfirm = jest.fn()
const mockOnCancel = jest.fn()

describe("Modal", () => {
	
	afterEach(() => {
		cleanup()
		jest.clearAllMocks()
	})
	
  test("renders a Modal", async () => {
		render(<PortalProvider><Modal open /></PortalProvider>)
		expect(screen.getByRole("dialog")).toBeInTheDocument()
		expect(screen.getByRole("dialog")).toHaveClass("juno-modal")
  })
  
  test("renders a title as passed", async () => {
	  render(<PortalProvider><Modal title="My Modal" open /></PortalProvider>)
	  expect(screen.getByRole("dialog")).toBeInTheDocument()
	  expect(screen.getByRole("dialog")).toHaveTextContent("My Modal")
  })
	
	test("renders a title when a 'heading' prop is passed", async () => {
		render(<PortalProvider><Modal heading="My Modal Heading" open /></PortalProvider>)
		expect(screen.getByRole("dialog")).toBeInTheDocument()
		expect(screen.getByRole("dialog")).toHaveTextContent("My Modal Heading")
	})
	
	test("renders an aria-labelledby attribute referencing the title if passed", async () => {
		render(<PortalProvider><Modal title="My a11y Modal" open /></PortalProvider>)
		expect(screen.getByRole("dialog")).toBeInTheDocument()
		const modalTitle = screen.getByText("My a11y Modal")
		expect(modalTitle).toHaveAttribute("id")
		const modalTitleId = modalTitle.getAttribute("id")
		expect(screen.getByRole("dialog")).toHaveAttribute("aria-labelledby", modalTitleId)
	})
	
	test("renders an aria-labelledby attribute referencing the heading if passed", async () => {
		render(<PortalProvider><Modal title="My other a11y Modal" open /></PortalProvider>)
		expect(screen.getByRole("dialog")).toBeInTheDocument()
		const modalTitle = screen.getByText("My other a11y Modal")
		expect(modalTitle).toHaveAttribute("id")
		const modalTitleId = modalTitle.getAttribute("id")
		expect(screen.getByRole("dialog")).toHaveAttribute("aria-labelledby", modalTitleId)
	})
	
	test("renders an arial-label attribute as passed", async () => {
		render(<PortalProvider><Modal ariaLabel="Otherwise unnamed modal" open /></PortalProvider>)
		expect(screen.getByRole("dialog")).toBeInTheDocument()
		expect(screen.getByRole("dialog")).toHaveAttribute("aria-label", "Otherwise unnamed modal")
	})
  
  test("renders children as passed", async () => {
	  render(
	  		<PortalProvider>
	  			<Modal open>
		  			<button>Child Button</button>	 
					<span>Something here</span>
				</Modal>
	  		</PortalProvider>
		)
		expect(screen.getByRole("dialog")).toBeInTheDocument()
		expect(screen.getByRole("button", {name: "Child Button"})).toBeInTheDocument()
		expect(screen.getByRole("dialog")).toHaveTextContent("Something here")
  })
  
  test("renders a Modal with two Close buttons by default", async () => {
	  // there should be one in the header and one in the footer
	  render(<PortalProvider><Modal open /></PortalProvider>)
	  expect(screen.getByRole("dialog")).toBeInTheDocument()
	  expect(screen.queryAllByRole("button")).toHaveLength(2)
  })
  
  test("renders a non-closeable Modal as passed", async () => {
	  render(<PortalProvider><Modal open closeable={false} /></PortalProvider>)
	  expect(screen.getByRole("dialog")).toBeInTheDocument()
	  expect(screen.queryByRole("button")).not.toBeInTheDocument()
	  expect(screen.queryAllByRole("button")).toHaveLength(0)
  })
  
	test("renders a cancel button with a label as passed", async () => {
		render(<PortalProvider><Modal open cancelButtonLabel="Click here to Cancel" /></PortalProvider>)
		expect(screen.getByRole("dialog")).toBeInTheDocument()
		expect(screen.queryByRole("button", {name: "Click here to Cancel"})).toBeInTheDocument()
	})
	
	test("renders a confirm button with a label as passed", async () => {
		render(<PortalProvider><Modal open confirmButtonLabel="Click here to Proceed" /></PortalProvider>)
		expect(screen.getByRole("dialog")).toBeInTheDocument()
		expect(screen.queryByRole("button", {name: "Click here to Proceed"})).toBeInTheDocument()
		expect(screen.queryByRole("button", {name: "Click here to Proceed"})).toHaveClass("juno-button-primary")
	})
  
	test("closes the modal when clicking the close button in the title bar", async () => {
		render(<PortalProvider><Modal open /></PortalProvider>)
		expect(screen.getByRole("dialog")).toBeInTheDocument()
		const titleBarCloseButton = screen.queryAllByRole("button")[0]
		expect(titleBarCloseButton).toHaveAttribute("aria-label", "close")
		await userEvent.click(titleBarCloseButton)
		expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
	})
	
	test("closes the modal when clicking the default close button in the modal footer", async () => {
		render(<PortalProvider><Modal open cancelButtonLabel="Cancel all the things"/></PortalProvider>)
		expect(screen.getByRole("dialog")).toBeInTheDocument()
		const footerCloseButton = screen.queryAllByRole("button")[1]
		expect(footerCloseButton).toHaveTextContent("Cancel all the things")
		await userEvent.click(footerCloseButton)
		expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
	})
	
	test("does not close the modal when clicking on the backdrop by default", async () => {
		render(<PortalProvider><Modal open c/></PortalProvider>)
		expect(screen.getByRole("dialog")).toBeInTheDocument()
		const backdrop = document.querySelector(".juno-modal-container")
		await userEvent.click(backdrop)
		expect(screen.getByRole("dialog")).toBeInTheDocument()
	})
	
	test("closes the modal when clicking on the background and the modal is configured to do so", async () => {
		render(<PortalProvider><Modal open closeOnBackdropClick/></PortalProvider>)
		expect(screen.getByRole("dialog")).toBeInTheDocument()
		const backdrop = document.querySelector(".juno-modal-container")
		await userEvent.click(backdrop)
		expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
	})
	
	// confirm button 
	test("executes an onConfirm handler as passed and closes the modal when clicking the confirm button", async () => {
		render(
			<PortalProvider>
				<Modal 
					open 
					onConfirm={mockOnConfirm} 
					confirmButtonLabel={"OK"}/>
				</PortalProvider>)
		expect(screen.getByRole("dialog")).toBeInTheDocument()
		const confirmButton = screen.getByRole("button", {name: "OK"})
		await userEvent.click(confirmButton)
		expect(mockOnConfirm).toHaveBeenCalled()
	})
	
	// cancel button
	test("executes an onCancel handler as passed and closes the modal when clicking the cancel button", async () => {
		render(
			<PortalProvider>
				<Modal 
					open
					onCancel={mockOnCancel}
					cancelButtonLabel="Cancel"
				/>
			</PortalProvider>)
			expect(screen.getByRole("dialog")).toBeInTheDocument()
			const cancelButton = screen.getByRole("button", {name: "Cancel"})
			await userEvent.click(cancelButton)
			expect(mockOnCancel).toHaveBeenCalled()
			expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
	})
	
	// cancel button
	test("executes an onCancel handler as passed and closes the modal when clicking the close button in the modal header", async () => {
		render(
			<PortalProvider>
				<Modal 
					open
					onCancel={mockOnCancel}
				/>
			</PortalProvider>)
			expect(screen.getByRole("dialog")).toBeInTheDocument()
			const closeButton = screen.getByRole("button", {name: "close"})
			await userEvent.click(closeButton)
			expect(mockOnCancel).toHaveBeenCalled()
			expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
	})
	
	// close on ESC
	test("executes an onCancel handler as passed and closes the modal when hitting the ESC key", async () => {
		render(
			<PortalProvider>
				<Modal 
					open 
					onCancel={mockOnCancel}
				/>
			</PortalProvider>
		)
		expect(screen.getByRole("dialog")).toBeInTheDocument()
		await userEvent.keyboard("{Escape}")
		expect(mockOnCancel).toHaveBeenCalled()
		expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
	})
		
	// initialFocus
	test.skip("focusses an element inside the modal as passed", async () => {
		render(
			<PortalProvider>
				<Modal 
					open 
					initialFocus="#focusinput"
				>
					<TextInput id="focusinput" />
				</Modal>
			</PortalProvider>
		)
		expect(screen.getByRole("dialog")).toBeInTheDocument()
		expect(screen.getByRole("textbox")).toBeInTheDocument()
		await waitFor(() => expect(screen.getByRole("textbox")).toHaveFocus(), {timeOut: 50})
	})
	
	// trap focus
	test.skip("traps the focus in a modal", async () => {
		render(<PortalProvider>
			<Modal open cancelButtonLabel="Cancel"/>
				<TextInput name="textinput"/>
		</PortalProvider>)
		expect(screen.getByRole("dialog")).toBeInTheDocument()
		await userEvent.keyboard("{Tab}")
		//console.log("ACTIVE ELEMENT: ", document.activeElement)
		expect(screen.getByRole("textbox")).toHaveFocus()
		await userEvent.keyboard("{Tab}")
		expect(screen.getByRole("button", {name: "Cancel"})).toHaveFocus()
		await userEvent.keyboard("{Tab}")
		expect(screen.getByRole("button", {name: "close"})).toHaveFocus()
		await userEvent.keyboard("{Tab}")
		expect(screen.getByRole("textbox")).toHaveFocus()
	})

  test("renders custom classNames as passed", async () => {
	render(<PortalProvider><Modal open className="my-custom-class" /></PortalProvider>)
	expect(screen.getByRole("dialog")).toHaveClass("my-custom-class")
  })

  test("renders all props as passed", async () => {
	render(<PortalProvider><Modal open name="My little Modal" /></PortalProvider>)
	expect(screen.getByRole("dialog")).toHaveAttribute(
	  "name",
	  "My little Modal"
	)
  })
})
