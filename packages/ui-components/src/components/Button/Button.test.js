/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { Button } from "./index"

describe("Button", () => {
  test("renders a button with text passed as label", async () => {
    render(<Button label="Click me"></Button>)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("Click me")
  })

  test("renders a button with text passed as children", async () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("Click me")
  })

  test("renders a disabled button as passed", async () => {
    render(<Button disabled />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveAttribute("disabled")
  })

  // it seems we can't properly check whether it's an <a> element that is being rendered
  // so for now ensure that it responds to the button aria role and has an href attribute
  test("renders an <a> element with role button if href is passed", async () => {
    render(<Button href="http://blah.com" />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveAttribute("href")
  })

  test("onclick handler is called as passed", () => {
    const onClickSpy = jest.fn()
    render(<Button onClick={onClickSpy} />)
    screen.getByRole("button").click()
    expect(onClickSpy).toHaveBeenCalled()
  })

  test("onclick handler is not called when disabled", () => {
    const onClickSpy = jest.fn()
    render(<Button disabled onClick={onClickSpy} />)
    screen.getByRole("button").click()
    expect(onClickSpy).not.toHaveBeenCalled()
  })

  test("renders a title", async () => {
    render(<Button title="Click me title">Click me</Button>)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveAttribute("title", "Click me title")
  })

  test("renders label as title if no title given", async () => {
    render(<Button label="Click me label">Click me</Button>)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveAttribute("title", "Click me label")
  })

  test("renders a default button", async () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-button-default")
  })

  test("renders a primary button", async () => {
    render(<Button variant="primary">Click me</Button>)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-button-primary")
  })

  test("renders a primary-danger button", async () => {
    render(<Button variant="primary-danger">Click me</Button>)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-button-primary-danger")
  })

  test("renders a disabled button", async () => {
    render(<Button disabled>Click me</Button>)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveAttribute("disabled")
  })

  test("renders an icon as passed", async () => {
    render(<Button icon="warning">Click Me</Button>)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "warning")
  })

  test("renders a small button", async () => {
    render(<Button size="small">Click me</Button>)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-button-small-size")
  })

  test("renders a default sized button", async () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-button-default-size")
  })

  test("renders a custom className as passed", async () => {
    render(<Button className="my-custom-classname">Click me</Button>)
    expect(screen.getByRole("button")).toHaveClass("my-custom-classname")
  })

  test("renders a default in progress button as passed", async () => {
    render(<Button progress={true}>Click me</Button>)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("in-progress")
    expect(screen.getByRole("progressbar")).toHaveClass("juno-spinner")
  })

  test("renders a default in progress button with a progressLabel as passed", async () => {
    render(
      <Button progress={true} progressLabel="In Progress…">
        Click me
      </Button>
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("in-progress")
    expect(screen.getByRole("button")).toHaveTextContent("In Progress…")
  })

  test("renders all props as passed", async () => {
    render(<Button id="button-1" data-lolol={true} />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveAttribute("id", "button-1")
    expect(screen.getByRole("button")).toHaveAttribute("data-lolol")
  })

  test("renders an icon with the defined button title", async () => {
    render(<Button title="customTitle" icon="default"/>)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("title", "customTitle")
  })
})
