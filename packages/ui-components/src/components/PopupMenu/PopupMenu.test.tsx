import * as React from "react"
import { render, screen, act } from "@testing-library/react"
import { describe, expect, test, vi } from "vitest"
import { PopupMenu } from "./index"

// Mock the PortalProvider so the menu is rendered directly into a Dom node that is easily accessible in our tests:
vi.mock("../PortalProvider", () => ({
  PortalProvider: {
    Portal: ({ children }: { children: React.ReactNode }) => <div data-testid="portal-container">{children}</div>,
  },
}))

interface CustomToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const CustomToggle = React.forwardRef<HTMLButtonElement, CustomToggleProps>(
  ({ children = null, className = "", onClick, ...props }, ref) => (
    <button ref={ref} className={`my-custom-toggle ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
)
CustomToggle.displayName = "CustomToggle"

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
  test("renders a toggle as passed and ignores icon prop on parent", () => {
    render(
      <PopupMenu icon="warning">
        <PopupMenu.Toggle>Toggle Me</PopupMenu.Toggle>
      </PopupMenu>
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("Toggle Me")
    expect(screen.queryByRole("img")).not.toBeInTheDocument()
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
  test("renders a Toggle as a custom component as passed", () => {
    render(
      <PopupMenu>
        <PopupMenu.Toggle as={CustomToggle} className="my-custom-toggle">
          Toggle Me
        </PopupMenu.Toggle>
      </PopupMenu>
    )
    const toggle = screen.getByRole("button")
    expect(toggle).toBeInTheDocument()
    expect(toggle).toHaveTextContent("Toggle Me")
    expect(toggle).toHaveClass("my-custom-toggle")
  })
  test("executes an onOpen handler as passed when the menu opens", () => {
    const onOpenSpy = vi.fn()
    render(<PopupMenu onOpen={onOpenSpy} />)
    act(() => screen.getByRole("button").click())
    expect(onOpenSpy).toHaveBeenCalled()
  })
  test("executes an onClose handler as passed when the menu closes", () => {
    const onCloseSpy = vi.fn()
    render(<PopupMenu onClose={onCloseSpy} />)
    // click first to open
    act(() => screen.getByRole("button").click())
    // click again to close
    act(() => screen.getByRole("button").click())
    expect(onCloseSpy).toHaveBeenCalled()
  })
  test("renders a menu as passed when the menu is opened", () => {
    render(
      <PopupMenu>
        <PopupMenu.Menu />
      </PopupMenu>
    )
    act(() => screen.getByRole("button").click())
    expect(screen.getByRole("menu")).toBeInTheDocument()
    expect(screen.getByRole("menu")).toHaveClass("juno-popupmenu-menu")
  })
  test("renders the menu into a portal container", () => {
    render(
      <PopupMenu>
        <PopupMenu.Menu />
      </PopupMenu>
    )
    act(() => screen.getByRole("button").click())
    const portal = screen.getByTestId("portal-container")
    const menu = screen.getByRole("menu")
    expect(menu).toBeInTheDocument()
    expect(portal).toContainElement(menu)
  })
  test("renders a normal size menu by default", () => {
    render(
      <PopupMenu>
        <PopupMenu.Menu />
      </PopupMenu>
    )
    act(() => screen.getByRole("button").click())
    expect(screen.getByRole("menu")).toBeInTheDocument()
    expect(screen.getByRole("menu")).toHaveClass("juno-popupmenu-menu")
    expect(screen.getByRole("menu")).toHaveClass("juno-popupmenu-menu-size-normal")
  })
  test("renders a small size menu as passed", () => {
    render(
      <PopupMenu>
        <PopupMenu.Menu />
      </PopupMenu>
    )
    act(() => screen.getByRole("button").click())
    expect(screen.getByRole("menu")).toBeInTheDocument()
    expect(screen.getByRole("menu")).toHaveClass("juno-popupmenu-menu")
    expect(screen.getByRole("menu")).toHaveClass("juno-popupmenu-menu-size-normal")
  })
  test("renders a menu with a custom className as passed", () => {
    render(
      <PopupMenu>
        <PopupMenu.Menu className="my-custom-menu" />
      </PopupMenu>
    )
    act(() => screen.getByRole("button").click())
    expect(screen.getByRole("menu")).toBeInTheDocument()
    expect(screen.getByRole("menu")).toHaveClass("juno-popupmenu-menu")
    expect(screen.getByRole("menu")).toHaveClass("my-custom-menu")
  })
  test("renders menu items as passed", () => {
    render(
      <PopupMenu>
        <PopupMenu.Menu>
          <PopupMenu.Item></PopupMenu.Item>
        </PopupMenu.Menu>
      </PopupMenu>
    )
    act(() => screen.getByRole("button").click())
    expect(screen.getByRole("menuitem")).toBeInTheDocument()
    expect(screen.getByRole("menuitem")).toHaveClass("juno-popupmenu-item")
  })
  test("renders menu items with a label as passed", () => {
    render(
      <PopupMenu>
        <PopupMenu.Menu>
          <PopupMenu.Item label="My Menu Item"></PopupMenu.Item>
        </PopupMenu.Menu>
      </PopupMenu>
    )
    act(() => screen.getByRole("button").click())
    expect(screen.getByRole("menuitem")).toBeInTheDocument()
    expect(screen.getByRole("menuitem")).toHaveClass("juno-popupmenu-item")
    expect(screen.getByRole("menuitem")).toHaveTextContent("My Menu Item")
  })
  test("renders menu items with children as passed", () => {
    render(
      <PopupMenu>
        <PopupMenu.Menu>
          <PopupMenu.Item>Item With Children</PopupMenu.Item>
        </PopupMenu.Menu>
      </PopupMenu>
    )
    act(() => screen.getByRole("button").click())
    expect(screen.getByRole("menuitem")).toBeInTheDocument()
    expect(screen.getByRole("menuitem")).toHaveClass("juno-popupmenu-item")
    expect(screen.getByRole("menuitem")).toHaveTextContent("Item With Children")
  })
  test("renders a menu item with label when both label and children were passed", () => {
    render(
      <PopupMenu>
        <PopupMenu.Menu>
          <PopupMenu.Item label="123">abc</PopupMenu.Item>
        </PopupMenu.Menu>
      </PopupMenu>
    )
    act(() => screen.getByRole("button").click())
    expect(screen.getByRole("menuitem")).toBeInTheDocument()
    expect(screen.getByRole("menuitem")).toHaveClass("juno-popupmenu-item")
    expect(screen.getByRole("menuitem")).toHaveTextContent("123")
    expect(screen.getByRole("menuitem")).not.toHaveTextContent("abc")
  })
  test("renders a menu item with a custom className as passed", () => {
    render(
      <PopupMenu>
        <PopupMenu.Menu>
          <PopupMenu.Item className="my-custom-item"></PopupMenu.Item>
        </PopupMenu.Menu>
      </PopupMenu>
    )
    act(() => screen.getByRole("button").click())
    expect(screen.getByRole("menuitem")).toBeInTheDocument()
    expect(screen.getByRole("menuitem")).toHaveClass("juno-popupmenu-item")
    expect(screen.getByRole("menuitem")).toHaveClass("my-custom-item")
  })
  test("renders a disabled menu item as passed", () => {
    render(
      <PopupMenu>
        <PopupMenu.Menu>
          <PopupMenu.Item disabled></PopupMenu.Item>
        </PopupMenu.Menu>
      </PopupMenu>
    )
    act(() => screen.getByRole("button").click())
    expect(screen.getByRole("menuitem")).toBeInTheDocument()
    expect(screen.getByRole("menuitem")).toHaveAttribute("aria-disabled", "true")
  })
  test("renders a menu item with an icon as passed", () => {
    render(
      <PopupMenu>
        <PopupMenu.Menu>
          <PopupMenu.Item icon="warning"></PopupMenu.Item>
        </PopupMenu.Menu>
      </PopupMenu>
    )
    act(() => screen.getByRole("button").click())
    expect(screen.getByRole("menuitem")).toBeInTheDocument()
    // access the icon using the title attribute that establishes its accessible name:
    expect(screen.getByRole("img", { name: "Warning" })).toBeInTheDocument()
  })
  test("renders an item with arbitrary props", () => {
    render(
      <PopupMenu>
        <PopupMenu.Menu>
          <PopupMenu.Item data-lolol="123" />
        </PopupMenu.Menu>
      </PopupMenu>
    )
    act(() => screen.getByRole("button").click())
    expect(screen.getByRole("menuitem")).toBeInTheDocument()
    expect(screen.getByRole("menuitem")).toHaveAttribute("data-lolol", "123")
  })
  test("renders a menu section as passed", () => {
    render(
      <PopupMenu>
        <PopupMenu.Menu>
          <PopupMenu.Section data-testid="my-menu-section"></PopupMenu.Section>
        </PopupMenu.Menu>
      </PopupMenu>
    )
    act(() => screen.getByRole("button").click())
    expect(screen.getByTestId("my-menu-section")).toBeInTheDocument()
  })
  test("renders a menu section with a title as passed", () => {
    render(
      <PopupMenu>
        <PopupMenu.Menu>
          <PopupMenu.Section data-testid="my-menu-section" title="My Own Menu Section"></PopupMenu.Section>
        </PopupMenu.Menu>
      </PopupMenu>
    )
    act(() => screen.getByRole("button").click())
    expect(screen.getByTestId("my-menu-section")).toBeInTheDocument()
    expect(screen.getByTestId("my-menu-section")).toHaveTextContent("My Own Menu Section")
  })
  test("renders a menu section with a custom className as passed", () => {
    render(
      <PopupMenu>
        <PopupMenu.Menu>
          <PopupMenu.Section data-testid="my-menu-section" className="my-custom-class"></PopupMenu.Section>
        </PopupMenu.Menu>
      </PopupMenu>
    )
    act(() => screen.getByRole("button").click())
    expect(screen.getByTestId("my-menu-section")).toBeInTheDocument()
    expect(screen.getByTestId("my-menu-section")).toHaveClass("my-custom-class")
  })
  test("renders a menu section with children as passed", () => {
    render(
      <PopupMenu>
        <PopupMenu.Menu>
          <PopupMenu.Item data-testid="child-outside">Item outside of a section</PopupMenu.Item>
          <PopupMenu.Section data-testid="my-menu-section">
            <PopupMenu.Item data-testid="child-inside">Item inside a section</PopupMenu.Item>
          </PopupMenu.Section>
        </PopupMenu.Menu>
      </PopupMenu>
    )
    act(() => screen.getByRole("button").click())
    const section = screen.getByTestId("my-menu-section")
    const insideChild = screen.getByTestId("child-inside")
    const outsideChild = screen.getByTestId("child-outside")
    expect(section).toContainElement(insideChild)
    // double-check the other child is not a child of the section:
    expect(section).not.toContainElement(outsideChild)
  })
  test("renders a section with arbitrary props", () => {
    render(
      <PopupMenu>
        <PopupMenu.Menu>
          <PopupMenu.Section data-testid="my-menu-section" data-lolol="123"></PopupMenu.Section>
        </PopupMenu.Menu>
      </PopupMenu>
    )
    act(() => screen.getByRole("button").click())
    expect(screen.getByTestId("my-menu-section")).toBeInTheDocument()
    expect(screen.getByTestId("my-menu-section")).toHaveAttribute("data-lolol", "123")
  })

  // TODO: renders only one toggle in case multiple toggles are passed
  // TODO: renders only one menu in case multiple menus are passed
  // renders a functional toggle with only text as child
  // renders a functional toggle with a custom component passed as 'as'
  // renders a functional toggle with a custom component passed as a child to the toggle subcomponent
  // renders the toggle as a fragment as passed
  // preserves and runs custom handlers on a toggle passed as 'as'
  // preserves and runs custom handlers on a toggle passed as a child to the toggle subcomponent
  // runs all handlers of an item when clicked/selected
})
