/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import { StyleProvider } from "./index"

jest.mock('../../hooks/useLocalStorage', () => ({
  __esModule: true,
  default: jest.fn((key, initialValue) => [initialValue, jest.fn()]),
}));


describe("StyleProvider", () => {
  
  test("renders a StyleProvider wrapper div with 'theme-dark' theme class by default", async () => {
    const { container } = render(<StyleProvider></StyleProvider>)
    expect(container.querySelector("div.juno-app-body")).toHaveClass(
      "theme-dark"
    )
  })

  test("renders a StyleProvider wrapper div with theme class as passed", async () => {
    const { container } = render(
      <StyleProvider theme="my-theme"></StyleProvider>
    )
    expect(container.querySelector("div.juno-app-body")).toHaveClass("my-theme")
  })
  
  test("allows a child component to set the theme correctly via the function provided", async () => {
    const TestToggleComponent = () => {
        const { setThemeClass } = StyleProvider.useStyles()
        return (
          <button onClick={() => setThemeClass('theme-dark')}>Toggle Theme</button>
        );
    };
    const { container } = render(
      <StyleProvider theme="theme-light">
        <TestToggleComponent />
      </StyleProvider>
    );
    // Verify initial theme class
    const appBody = container.querySelector('.juno-app-body');
    expect(appBody).toHaveClass('theme-light');
    
    // Simulate theme toggle
    fireEvent.click(screen.getByText('Toggle Theme'));
    expect(appBody).toHaveClass('theme-dark');
  })


  test("allows a child component to set a css class on the container via the function provided", async () => {
    const TestAddClassComponent = () => {
      const { addCssClass } = StyleProvider.useStyles()
      return (<button onClick={() => addCssClass("added-css-class")}>Set a Class</button>)
    }
    const { container} = render(
      <StyleProvider theme="theme-dark">
        <TestAddClassComponent />
      </StyleProvider>
    )
    // Verify initial theme class
    const appBody = container.querySelector('.juno-app-body');
    expect(appBody).toHaveClass('theme-dark');
    // Simulate adding a class
    fireEvent.click(screen.getByText('Set a Class'));
    expect(appBody).toHaveClass('added-css-class');
    // double-check existing classes are still there:
    expect(appBody).toHaveClass('theme-dark');
  })
  
  test("allows a child component to remove a css class on the container via the function provided", async () => {
    const TestRemoveClassComponent = () => {
      const { removeCssClass } = StyleProvider.useStyles()
      return(<button onClick={() => removeCssClass("theme-dark")}>Remove a Class</button>) 
    }
    const { container} = render(
      <StyleProvider theme="theme-dark">
        <TestRemoveClassComponent />
      </StyleProvider>
    )

    // Verify initial theme class
    const appBody = container.querySelector('.juno-app-body');
    expect(appBody).toHaveClass('theme-dark');
    // Simulate removing a class
    fireEvent.click(screen.getByText('Remove a Class'));
    expect(appBody).not.toHaveClass('theme-dark');
  })
  
  test("allows child components to consume the current theme name via the context it provides", async () => {
    const TestChildComponent = () => {
      const {currentTheme} = StyleProvider.useStyles()
      return(<button>{currentTheme}</button>)
    }
    const { container } = render(
      <StyleProvider theme="theme-test">
        <TestChildComponent />
      </StyleProvider>
    )
    const appBody = container.querySelector('.juno-app-body');
    expect(appBody).toHaveClass('theme-test');
    expect(screen.getByRole("button")).toHaveTextContent("theme-test")
  })
  
  test.skip("updates the current theme name provided when the theme is changed", async () => {
    const TestChildComponent = () => {
      const {currentTheme, setThemeClass} = StyleProvider.useStyles()
      const [childTheme, setChildTheme] = React.useState("")
      React.useEffect(() => {
        setChildTheme(currentTheme)
      }, [currentTheme])
      return(<button onClick={() => setThemeClass("theme-light")}>{childTheme}</button>)
    }
    const { container } = render(
      <StyleProvider theme="theme-test">
        <TestChildComponent />
      </StyleProvider>
    )
    const appBody = container.querySelector('.juno-app-body');
    expect(appBody).toHaveClass('theme-test');
    expect(screen.getByRole("button")).toHaveTextContent("theme-test")
    // simulate updating the current theme 
    fireEvent.click(screen.getByText('theme-test'));
    expect(appBody).not.toHaveClass('theme-test');
    expect(appBody).toHaveClass('theme-light');
    await waitFor( () => {expect(screen.getByRole("button")).toHaveTextContent("theme-light")})
  })
  
})
