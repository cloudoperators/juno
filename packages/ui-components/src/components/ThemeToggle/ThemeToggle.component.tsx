/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { StyleProvider } from "../StyleProvider/StyleProvider.component"
import { Icon } from "../Icon/Icon.component"

import "./themeToggle.css"

const toggleStyles = `
  jn:inline-flex 
  jn:justify-center 
  jn:items-center
  jn:rounded
  jn:py-[0.4375rem]
  jn:px-[0.625rem]
  jn:hover:text-theme-accent
  jn:focus:outline-hidden 
  jn:focus-visible:ring-2
  jn:focus-visible:ring-theme-focus
  jn:focus-visible:ring-offset-1
  jn:focus-visible:ring-offset-theme-focus
  jn:disabled:opacity-50
  jn:disabled:cursor-not-allowed
  jn:active:bg-theme-background-lvl-4
`

export interface ThemeToggleProps {
  /**
   * Additional CSS classes for custom styling.
   */
  className?: string
  /**
   * If true, the ThemeToggle will be disabled and not respond to user input.
   */
  disabled?: boolean
  /**
   * HTML id attribute for the ThemeToggle.
   */
  id?: string
  /**
   * HTML name attribute for the ThemeToggle.
   */
  name?: string
  /**
   * Callback function that is called when the theme is toggled.
   */
  // eslint-disable-next-line no-unused-vars
  onToggleTheme?: (newTheme: string) => void
}

/**
 * ThemeToggle is a button component that toggles between Light and Dark UI Themes.
 * This component requires a StyleProvider context to function, which is automatically provided by the Juno AppShell.
 * If not using the AppShell, include a StyleProvider manually.
 */
export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = "",
  disabled = false,
  id,
  name,
  onToggleTheme,
  ...props
}) => {
  // Consume the theme context
  const ThemeContext = StyleProvider.useStyles()

  // Warn if no context is found
  if (!ThemeContext) {
    console.warn(
      "Juno ThemeToggle requires a StyleProvider context in order to work. Use ThemeToggle in a Juno AppShell or include StyleProvider manually."
    )
  }

  // Destructure the context, fallback
  const { currentTheme, setThemeClass } = ThemeContext || {}

  const toggleTheme = () => {
    const newTheme = currentTheme === "theme-dark" ? "theme-light" : "theme-dark"
    setThemeClass && setThemeClass(newTheme)
    onToggleTheme && onToggleTheme(newTheme)
  }

  return (
    <Icon
      className={`juno-theme-toggle ${toggleStyles} ${className}`}
      disabled={disabled}
      icon={currentTheme === "theme-light" ? "nightsStay" : "wbSunny"}
      id={id}
      name={name}
      onClick={toggleTheme}
      {...props}
    />
  )
}
