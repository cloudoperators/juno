import * as React from "react"
import { render, screen} from "@testing-library/react"
import { Spinner } from "./index"

describe("Spinner", () => {
	
	test("renders a Spinner", async () => {
		render(<Spinner />)
		expect(screen.getByRole("progressbar")).toBeInTheDocument()
	})
	
	test("renders a default color spinner", async () => {
		render(<Spinner />)
		expect(screen.getByRole("progressbar")).toBeInTheDocument()
		expect(screen.getByRole("progressbar")).toHaveClass('text-theme-on-default')
	})
	
	test("renders a primary color spinner", async () => {
		render(<Spinner variant="primary" />)
		expect(screen.getByRole("progressbar")).toBeInTheDocument()
		expect(screen.getByRole("progressbar")).toHaveClass('text-primary')
	})
	
	test("renders a warning color spinner", async () => {
		render(<Spinner variant="warning" />)
		expect(screen.getByRole("progressbar")).toBeInTheDocument()
		expect(screen.getByRole("progressbar")).toHaveClass('text-warning')
	})
	
	test("renders a danger color spinner", async () => {
		render(<Spinner variant="danger" />)
		expect(screen.getByRole("progressbar")).toBeInTheDocument()
		expect(screen.getByRole("progressbar")).toHaveClass('text-danger')
	})
	
	test("renders a success color spinner", async () => {
		render(<Spinner variant="success" />)
		expect(screen.getByRole("progressbar")).toBeInTheDocument()
		expect(screen.getByRole("progressbar")).toHaveClass('text-success')
	})
	
	test("renders a default sized Spinner", async () => {
		render(<Spinner id="spinner" />)
		const spinner = screen.getByRole("progressbar")
		expect(spinner).toHaveClass('h-5')
		expect(spinner).toHaveClass('w-5')
		// this test is semi-brittle: in case we begin to use the style attribute on spinner this will break:
		expect(spinner).not.toHaveAttribute('style')
	})
	
	test("renders a small Spinner", async () => {
		render(<Spinner id="spinner" size="small" />)
		const spinner = document.getElementById('spinner')
		const spinnerstyles = window.getComputedStyle(spinner)
		expect(spinnerstyles.height).toBe('1rem')
		expect(spinnerstyles.width).toBe('1rem')
	})
	
	test("renders a large Spinner", async () => {
		render(<Spinner id="spinner" size="large" />)
		const spinner = document.getElementById('spinner')
		const spinnerstyles = window.getComputedStyle(spinner)
		expect(spinnerstyles.height).toBe('3rem')
		expect(spinnerstyles.width).toBe('3rem')
	})
	
	test("renders a custom sized Spinner", async () => {
		render(<Spinner id="spinner" size="8rem" />)
		const spinner = document.getElementById('spinner')
		const spinnerstyles = window.getComputedStyle(spinner)
		expect(spinnerstyles.height).toBe('8rem')
		expect(spinnerstyles.width).toBe('8rem')
	})
	
	test("renders a custom className", async () => {
		render(<Spinner className="my-custom-class" />)
		expect(screen.getByRole("progressbar")).toBeInTheDocument()
		expect(screen.getByRole("progressbar")).toHaveClass("my-custom-class")
	})
	
	test("renders all props", async () => {
		render(<Spinner id="a-spinner" name="the-spinner-to-test" data-lolol="some-random-prop"/>)
		const spinner = screen.getByRole("progressbar")
		expect(spinner).toHaveAttribute("id", 'a-spinner')
		expect(spinner).toHaveAttribute("name", 'the-spinner-to-test')
		expect(spinner).toHaveAttribute("data-lolol", 'some-random-prop')
	})
	
	
})