import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { PopupMenu } from "./index"

describe("PopupMenu", () => {
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
  test("renders a disabled default toggle as passed", () => {
    render(<PopupMenu disabled />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeDisabled()
  })
  test("renders a custom className to the parent element", () => {
    render(<PopupMenu data-testid="popupmenu" className="my-custom-class" />)
    expect(screen.getByTestId("popupmenu")).toBeInTheDocument()
    expect(screen.getByTestId("popupmenu")).toHaveClass("my-custom-class")
  })
  test("renders all props to the parent element", () => {
    render(<PopupMenu data-testid="popupmenu" data-lolol="1234" />)
    expect(screen.getByTestId("popupmenu")).toBeInTheDocument()
    expect(screen.getByTestId("popupmenu")).toHaveAttribute("data-lolol", "1234")
  })
  test("renders a toggle with children as passed", () => {
    render(
      <PopupMenu>
        <PopupMenu.Toggle>Toggle Me</PopupMenu.Toggle>
      </PopupMenu>
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-popupmenu-toggle")
    expect(screen.getByRole("button")).toHaveTextContent("Toggle Me")
  })
  test("renders a toggle with a custom className as passed", () => {
    render(
      <PopupMenu>
        <PopupMenu.Toggle className="my-custom-toggle">Toggle Me</PopupMenu.Toggle>
      </PopupMenu>
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-popupmenu-toggle")
    expect(screen.getByRole("button")).toHaveClass("my-custom-toggle")
  })
  // renders a menu as passed
  // renders a menu with a custom className as passed
  // renders a menu section as passed
  // renders a menu section with a title as passed
  // renders a menu section with a custom className as passed
  // renders the menu into a portal as passed
  // renders all menu items as passed
  // renders a disabled menu item as passed
  // renders a menu item with an icon as passed
  // renders only one toggle in case multiple toggles are passed
  // renders only one menu in case multiple menus are passed
  // when both icon and a toggle subcomponent are passed, expect toggle subcomponent to be rendered (and icon ingnored)
  // renders a functional toggle with only text as child
  // renders a functional toggle with a custom component passed as 'as'
  // renders a functional toggle with a custom component passed as a child to the toggle subcomponent
  // renders the toggle as a fragment as passed
  // runs an onOpen handler as passed
  // runs an onClose handler as passed
  // preserves and runs custom handlers on a toggle passed as 'as'
  // preserves and runs custom handlers on a toggle passed as a child to the toggle subcomponent
  // runs all handlers of an item when clicked/selected
})
