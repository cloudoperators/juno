import * as React from "react"
import { render, screen, act } from "@testing-library/react"
import { describe, expect, test, vi } from "vitest"
import { PopupMenu } from "./index"
import { Button } from "../Button/"

describe("PopupMenu", () => {
  // Test default rendering behaviour:
  test("renders a PopupMenu default toggle", () => {
    render(<PopupMenu />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-popupmenu-toggle")
    expect(screen.getByRole("button")).toHaveClass("juno-popupmenu-toggle-default")
  })
  test("renders an overflow menu per default", () => {
    render(<PopupMenu />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "more")
  })
  test("renders an icon in the toggle as passed", () => {
    render(<PopupMenu icon="warning" />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "warning")
  })
  // Test rendering toggle elements passed as a prop:
  test("renders a PopupMenu.Toggle as toggle button as passed as a prop", () => {
    render(<PopupMenu toggle={<PopupMenu.Toggle>My Toggle</PopupMenu.Toggle>} />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("My Toggle")
  })
  test("renders a plain button custom toggle as passed as a prop", () => {
    render(<PopupMenu toggle={<button data-testid="my-button">My custom button</button>} />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByTestId("my-button")).toBeInTheDocument()
    expect(screen.getByTestId("my-button")).toHaveTextContent("My custom button")
  })
  test("renders a Juno Button component as a toggle as passed as a prop", () => {
    render(<PopupMenu toggle={<Button>My Juno Button</Button>} />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-button")
  })
  test("renders a non-button element wrapped in a button as passed as a prop", () => {
    render(<PopupMenu toggle={<div data-testid="my-non-button">Not a button</div>} />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-popupmenu-toggle")
    expect(screen.getByTestId("my-non-button").closest(".juno-popupmenu-toggle")).toBeInTheDocument()
  })
  // Test execution of onOpenChange handler on PopupMenu when toggle was passed as a prop:
  test("executes an onOpenChange handler as passed", () => {
    const onOpenChangeSpy = vi.fn()
    render(<PopupMenu onOpenChange={onOpenChangeSpy} />)
    act(() => screen.getByRole("button").click())
    expect(onOpenChangeSpy).toHaveBeenCalled()
  })
  test("executes an onOpenChange handler as passed on a plain button toggle element passed as a prop", () => {
    const onOpenChangeSpy = vi.fn()
    render(<PopupMenu onOpenChange={onOpenChangeSpy} toggle={<button>Toggle Button</button>} />)
    act(() => screen.getByRole("button").click())
    expect(onOpenChangeSpy).toHaveBeenCalled()
  })
  test("executes an onOpenChange handler as passed on a PopupMenu.Toggle element passed as a prop", () => {
    const onOpenChangeSpy = vi.fn()
    render(<PopupMenu onOpenChange={onOpenChangeSpy} toggle={<PopupMenu.Toggle>Toggle</PopupMenu.Toggle>} />)
    act(() => screen.getByRole("button").click())
    expect(onOpenChangeSpy).toHaveBeenCalled()
  })
  test("executes an onOpenChange handler as passed on a Juno Button component toggle element passed as a prop", () => {
    const onOpenChangeSpy = vi.fn()
    render(<PopupMenu onOpenChange={onOpenChangeSpy} toggle={<Button>Juno Button Toggle</Button>} />)
    act(() => screen.getByRole("button").click())
    expect(onOpenChangeSpy).toHaveBeenCalled()
  })
  test("executes an onOpenChange handler as passed on a non-button toggle element passed as a prop", () => {
    const onOpenChangeSpy = vi.fn()
    render(<PopupMenu onOpenChange={onOpenChangeSpy} toggle={<div>Toggle</div>} />)
    act(() => screen.getByRole("button").click())
    expect(onOpenChangeSpy).toHaveBeenCalled()
  })
  // Test onClick handlers are kept and executed as attached to toggle components passed as a prop:
  test("executes an onClick handler on a toggle passed as a plain button as a prop", () => {
    const onClickSpy = vi.fn()
    render(<PopupMenu toggle={<button onClick={onClickSpy}>Toggle Button</button>} />)
    act(() => screen.getByRole("button").click())
    expect(onClickSpy).toHaveBeenCalled()
  })
  test("executes an onClick handler on a toggle passed as a PopupMenu.Toggle as a prop", () => {
    const onClickSpy = vi.fn()
    render(<PopupMenu toggle={<PopupMenu.Toggle onClick={onClickSpy}>Toggle Button</PopupMenu.Toggle>} />)
    act(() => screen.getByRole("button").click())
    expect(onClickSpy).toHaveBeenCalled()
  })
  test("executes an onClick handler on a toggle passed as a Juno BUtton component as a prop", () => {
    const onClickSpy = vi.fn()
    render(<PopupMenu toggle={<Button onClick={onClickSpy}>Toggle Button</Button>} />)
    act(() => screen.getByRole("button").click())
    expect(onClickSpy).toHaveBeenCalled()
  })
  test("executes an onClick handler on a toggle passed as non-button element as a prop", () => {
    const onClickSpy = vi.fn()
    render(<PopupMenu toggle={<div onClick={onClickSpy}>Toggle Button</div>} />)
    act(() => screen.getByRole("button").click())
    expect(onClickSpy).toHaveBeenCalled()
  })
})
