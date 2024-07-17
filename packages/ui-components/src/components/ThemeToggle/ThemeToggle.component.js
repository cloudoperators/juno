import React, { useContext, useState, useEffect} from "react"
import PropTypes from "prop-types";
import { Button } from "../Button/"
import { StyleProvider} from "../StyleProvider/StyleProvider.component"

export const ThemeToggle = ({
  className,
  disabled, 
  id,
  name,
  onToggleTheme,
  ...props
}) => {
  
  const ThemeContext = StyleProvider.useStyles()
  
  const {
    currentTheme: currentTheme,
    setThemeClass: setThemeClass
  } = ThemeContext || {}
  
  
  const toggleTheme = () => {
    const newTheme = currentTheme === "theme-dark" ? "theme-light" : "theme-dark"
    setThemeClass(newTheme)
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
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onToggleTheme: PropTypes.func,
}

ThemeToggle.defaultProps = {
  className: "",
  disabled: false,
  id: undefined,
  name: undefined,
  onToggleTheme: undefined,
}