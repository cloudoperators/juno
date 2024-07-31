import React from "react"
import PropTypes from "prop-types"
import { Button } from "../Button/"
import { StyleProvider } from "../StyleProvider/index"
import { Icon } from "../Icon/"
import "./themeToggle.scss"

const toggleStyles = `
  jn-inline-flex 
  jn-justify-center 
  jn-items-center
  jn-rounded
  jn-py-[0.4375rem]
  jn-px-[0.625rem]
  hover:jn-text-theme-accent
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
  disabled:jn-opacity-50
  disabled:jn-cursor-not-allowed
  active:jn-bg-theme-background-lvl-4
`

/** 
A Toggle button to toggle Light and Dark UI Themes.
Requires a StyleProvider context, which is automatically provided by the Juno AppShell.
If you are not using AppShell, include  a StyleProvider manually.
 */
export const ThemeToggle = ({ className = "", disabled = false, id, name, onToggleTheme, ...props }) => {
  // Consume the theme context
  const ThemeContext = StyleProvider.useStyles()

  // Warn if no context is found
  if (!ThemeContext) {
    console.warn(
      "Juno ThemeToggle requires a StyleProvider context in order to work. Use ThemeToggle in a Juno AppShell or include StyleProvider manually."
    )
  }

  // Destructure the context, fallback
  const { currentTheme: currentTheme, setThemeClass: setThemeClass } = ThemeContext || {}

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

ThemeToggle.propTypes = {
  /** Pass a custom className */
  className: PropTypes.string,
  /** Whether the ThemeToggle is disabled */
  disabled: PropTypes.bool,
  /** Optional of the ThemeToggle */
  id: PropTypes.string,
  /** Optional name attribute of the ThemeToggle */
  name: PropTypes.string,
  /** Handler to execute when the theme is toggled */
  onToggleTheme: PropTypes.func,
}
