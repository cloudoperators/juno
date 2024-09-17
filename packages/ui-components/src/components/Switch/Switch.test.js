/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, act } from "@testing-library/react"
import { Switch } from "./index"

describe("Switch", () => {
  test("renders a switch button", () => {
    render(<Switch />)
    expect(screen.getByRole("switch")).toBeInTheDocument()
  })

  test("renders a switch with a name as passed", () => {
    render(<Switch name="My Switch" />)
    expect(screen.getByRole("switch")).toBeInTheDocument()
    expect(screen.getByRole("switch")).toHaveAttribute("name", "My Switch")
  })

  test("renders a switch with an id as passed", () => {
    render(<Switch id="my-switch" />)
    expect(screen.getByRole("switch")).toBeInTheDocument()
    expect(screen.getByRole("switch")).toHaveAttribute("id", "my-switch")
  })

  test("renders a switch with an auto-generated id if no id is passed", () => {
    render(<Switch />)
    expect(screen.getByRole("switch")).toBeInTheDocument()
    expect(screen.getByRole("switch")).toHaveAttribute("id")
    expect(screen.getByRole("switch").getAttribute("id")).toMatch("juno-switch")
  })

  test("renders a Switch with an associated label with an id as passed", () => {
    render(<Switch id="my-switch" label="My Switch" />)
    expect(screen.getByRole("switch")).toBeInTheDocument()
    expect(screen.getByLabelText("My Switch")).toBeInTheDocument()
    expect(document.querySelector(".juno-label")).toBeInTheDocument()
    expect(document.querySelector(".juno-label")).toHaveTextContent("My Switch")
  })

  test("renders a Switch with a label associated by an auto-generated id if no id was passed", () => {
    render(<Switch label="This is a Switch" />)
    expect(screen.getByRole("switch")).toBeInTheDocument()
    expect(screen.getByLabelText("This is a Switch")).toBeInTheDocument()
  })

  test("renders a disabled switch as passed", () => {
    act(() => {
      render(<Switch disabled />)
    })
    expect(screen.getByRole("switch")).toBeInTheDocument()
    expect(screen.getByRole("switch")).toBeDisabled()
  })

  test("renders an invalid Switch as passed", () => {
    act(() => {
      render(<Switch invalid />)
    })
    expect(screen.getByRole("switch")).toBeInTheDocument()
    expect(screen.getByRole("switch")).toHaveClass("juno-switch-invalid")
    expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
  })

  test("renders a valid Switch as passed", () => {
    act(() => {
      render(<Switch valid />)
    })
    expect(screen.getByRole("switch")).toBeInTheDocument()
    expect(screen.getByRole("switch")).toHaveClass("juno-switch-valid")
    expect(screen.getByTitle("CheckCircle")).toBeInTheDocument()
  })

  test("renders a default size switch by default", () => {
    render(<Switch />)
    expect(screen.getByRole("switch")).toBeInTheDocument()
    expect(screen.getByRole("switch")).toHaveClass("juno-switch-default")
  })

  test("renders a small switch as passed", () => {
    render(<Switch size="small" />)
    expect(screen.getByRole("switch")).toBeInTheDocument()
    expect(screen.getByRole("switch")).toHaveClass("juno-switch-small")
  })

  test("renders a large switch as passed", () => {
    render(<Switch size="large" />)
    expect(screen.getByRole("switch")).toBeInTheDocument()
    expect(screen.getByRole("switch")).toHaveClass("juno-switch-large")
  })

  test("renders an aria-checked switch as passed", () => {
    act(() => {
      render(<Switch on />)
    })
    expect(screen.getByRole("switch")).toBeInTheDocument()
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked")
  })

  test("renders an aria-checked attribute set to false if off", () => {
    render(<Switch />)
    expect(screen.getByRole("switch")).toBeInTheDocument()
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "false")
  })

  test("renders a helptext as passed", () => {
    render(<Switch helptext="this is a helptext" />)
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass("juno-form-hint-help")
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent("this is a helptext")
  })

  test("renders a successtext as passed and validates the Element", () => {
    render(<Switch successtext="great success!" />)
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass("juno-form-hint-success")
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent("great success!")
    expect(screen.getByRole("switch")).toHaveClass("juno-switch-valid")
  })

  test("renders an errortext as passed and invalidates the Element", () => {
    render(<Switch errortext="this is an error!" />)
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass("juno-form-hint-error")
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent("this is an error!")
    expect(screen.getByRole("switch")).toHaveClass("juno-switch-invalid")
  })

  test("renders a wrapperClassName to the outer wrapper element", () => {
    render(<Switch wrapperClassName="my-wrapper-class" />)
    expect(document.querySelector(".juno-switch-wrapper")).toBeInTheDocument()
    expect(document.querySelector(".juno-switch-wrapper")).toHaveClass("my-wrapper-class")
  })

  test("renders a custom className", () => {
    render(<Switch className="my-custom-class" />)
    expect(screen.getByRole("switch")).toBeInTheDocument()
    expect(screen.getByRole("switch")).toHaveClass("my-custom-class")
  })

  test("renders all props as passed", () => {
    render(<Switch id="switch-1" data-test="23" />)
    expect(screen.getByRole("switch")).toBeInTheDocument()
    expect(screen.getByRole("switch")).toHaveAttribute("id", "switch-1")
    expect(screen.getByRole("switch")).toHaveAttribute("data-test", "23")
  })

  test("executes custom handler on change as passed", () => {
    const onChangeSpy = jest.fn()
    render(<Switch onChange={onChangeSpy} />)
    act(() => {
      screen.getByRole("switch").click()
    })
    expect(onChangeSpy).toHaveBeenCalled()
  })

  test("executes handler on click as passed", () => {
    const onClickSpy = jest.fn()
    render(<Switch onClick={onClickSpy} />)
    act(() => {
      screen.getByRole("switch").click()
    })
    expect(onClickSpy).toHaveBeenCalled()
  })

  test("does not execute handler on change when disabled", () => {
    const onChangeSpy = jest.fn()
    render(<Switch onChange={onChangeSpy} disabled />)
    act(() => {
      screen.getByRole("switch").click()
    })
    expect(onChangeSpy).not.toHaveBeenCalled()
  })

  test("does not execute handler on click when disabled", () => {
    const onClickSpy = jest.fn()
    render(<Switch onClick={onClickSpy} disabled />)
    act(() => {
      screen.getByRole("switch").click()
    })
    expect(onClickSpy).not.toHaveBeenCalled()
  })
})
