import React, { useContext, useState, useEffect} from "react"
import PropTypes from "prop-types";
import { Button } from "../Button/"
import { StyleProvider} from "../StyleProvider/index"


// TODO: description, stories, tests, warn if no context.

/** 
A Toggle button to toggle Light and Dark UI Themes.
Requires a StyleProvider context, which is automatically provided by the Juno AppShell.
If you are not using AppShell, include  a StyleProvider manually.
 */
export const ThemeToggle = ({
  className,
  disabled, 
  id,
  name,
  onToggleTheme,
  ...props
}) => {
  
  // Consume the theme context 
  const ThemeContext = StyleProvider.useStyles()
  
  // Warn if no context is found
  if (!ThemeContext) {
    console.warn("ThemeToggle requires a StyleProvider context in order to work. Use ThemeToggle in a Juno AppShell or include StyleProvider manually.")
  }
  
  // Destructure the context, fallback
  const {
    currentTheme: currentTheme,
    setThemeClass: setThemeClass
  } = ThemeContext || {}
  
  
  const toggleTheme = () => {
    const newTheme = currentTheme === "theme-dark" ? "theme-light" : "theme-dark"
    setThemeClass && setThemeClass(newTheme)
    onToggleTheme && onToggleTheme(newTheme)
  }
  
  return (
    <Button 
      className={`juno-theme-toggle ${className}`} 
      disabled={disabled}
      id={id}
      name={name}
      onClick={toggleTheme}
      {...props}
    >
     {currentTheme === "theme-light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
    </Button>
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

ThemeToggle.defaultProps = {
  className: "",
  disabled: false,
  id: undefined,
  name: undefined,
  onToggleTheme: undefined,
}