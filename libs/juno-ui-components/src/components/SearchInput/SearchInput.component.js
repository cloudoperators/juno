/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import "./searchinput.scss"
import { Icon } from "../Icon/index"
import { Stack } from "../Stack/index"

const wrapperStyles = (variant) => {
  const wrapperBaseStyles = `
    jn-relative
    jn-inline-block
    jn-win-max
  `
  switch (variant) {
    case "rounded":
      return `${wrapperBaseStyles} jn-w-auto`
    case "hero":
      return `${wrapperBaseStyles} jn-w-full`
    default:
      return `${wrapperBaseStyles} jn-w-auto`
  }

}

const searchStyles = (variant) => {
  const searchBaseStyles = `
    jn-bg-theme-textinput
    jn-text-theme-high
    jn-shadow
    jn-w-full
    focus:jn-outline-none
    focus:jn-ring-2
    focus:jn-ring-theme-focus
    disabled:jn-cursor-not-allowed
    disabled:jn-opacity-50
  ` 
  
  const roundedStyles = `
    jn-rounded-full 
    focus:jn-rounded-full
  `
  switch (variant) {
    case "rounded":
      return `${searchBaseStyles} ${roundedStyles} jn-text-base jn-w-auto jn-pl-3 jn-pr-16 jn-py-1`
    case "hero":
      return `${searchBaseStyles} ${roundedStyles} jn-text-lg jn-w-full jn-pl-6 jn-pr-20 jn-py-2.5`
    default:
      return `${searchBaseStyles} jn-rounded jn-text-base jn-leading-4 jn-pl-4 jn-pr-16 jn-py-2.5`
  }
}

const iconWrapperStyles = (variant) => {
  switch (variant) {
    case "rounded":
      return `jn-absolute jn-inline-flex jn-right-3 jn-top-1`
    case "hero":
      return `jn-absolute jn-inline-flex jn-right-5`
    default:
      return `jn-absolute jn-inline-flex jn-right-3 jn-top-2`
  }
}

const clearIconStyles = (variant) => {
  switch (variant) {
    case "rounded":
      return `jn-mr-2`
    case "hero":
      return `jn-mr-2.5`
    default:
      return `jn-mr-2`
  }
}

const clearIconSize = (variant) => {
  switch (variant) {
    case "hero":
      return "24"
    default: 
      return "18"
  }
}

/** A basic, atomic, controlled Input[type="search"] */
export const SearchInput = ({
  name,
  value,
  placeholder,
  clear,
  className,
  autoComplete,
  onSearch,
  onChange,
  onClick,
  onKeyPress,
  onClear,
  variant,
  disabled,
  ...props
}) => {

  const [val, setValue] = useState(value)
	
	useEffect(() => {
		setValue(value)
	}, [value])

	const handleInputChange = (event) => {
		setValue(event.target.value)
		onChange && onChange(event)
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && onSearch) { onSearch(val) }
    onKeyPress && onKeyPress(event)
  }

  const handleSearchClick = (event) => {
		onSearch && onSearch(val)
		onClick && onClick(event)
  }
  
  const handleClearClick = (event) => {
    setValue("")
    onClear && onClear(event)
  }

  return (
    <div className={`juno-search-input-wrapper ${wrapperStyles(variant)} ${className}`} role="search">
      <Stack gap="2" alignment="center">
        <input
          type="search"
          name={name || "search"}
          placeholder={placeholder}
          disabled={disabled}
          value={val}
          autoComplete={autoComplete}
          className={`juno-search-input ${searchStyles(variant)}`}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          {...props}
        />
        <div className={`${iconWrapperStyles(variant)}`}>
          { clear && val?.length ? 
            <Icon 
                icon="close"
                size={`${clearIconSize(variant)}`}
                title="Clear"
                className={`${clearIconStyles(variant)}`}
                onClick={handleClearClick}
                disabled={disabled}
              /> 
            : 
              null }
          <Icon
            icon="search"
            title="Search"
            onClick={handleSearchClick}
            disabled={disabled}
          />
        </div>
      </Stack>
    </div>
  )
}

SearchInput.propTypes = {
  /** Pass a name. Defaults to "search". */
  name: PropTypes.string,
  /** Pass a variant. Defaults to "default", "hero" variant renders a search input that is meant to be used standalone on a search page, similar to the initial google search page. */
  variant: PropTypes.oneOf(["rounded", "hero", "default"]),
  /** Whether the SearchInput is disabled */
  disabled: PropTypes.bool,
  /** Pass a custom placeholder to replace "Search…" default.*/
  placeholder: PropTypes.string,
  /** Pass a value for initial rendering. Will NOT be updated once user changes for now */
  value: PropTypes.string,
  /** Pass a valid autocomplete value. We do not police validity. Default is "off" */
	autoComplete: PropTypes.string,
  /** Pass whether to show Clear button or not. Default is true. */
  clear: PropTypes.bool,
  /** The class names passed here will be merged with the existing class names of the component */
  className: PropTypes.string,
  /** Pass a search handler that will be called by the component when a search is triggered either via "Enter" keypress or via click on the magnifying glass icon */
  onSearch: PropTypes.func,
  /** Pass a click handler that will be called when the magnifying glass icon is clicked */
  onClick: PropTypes.func,
  /** Pass a change handler */
  onChange: PropTypes.func,
  /** Pass a keyPress handler, by default the component will listen to the "Enter" key and call the passed onSearch function when it is pressed */
  onKeyPress: PropTypes.func,
  /** Pass a handler to be executed once a user clicks on the Clear button of the SearchField */
  onClear: PropTypes.func,
}

SearchInput.defaultProps = {
  value: "",
  variant: "default",
  disabled: false,
  clear: true,
  onSearch: undefined,
  onChange: undefined,
  onClick: undefined,
  onKeyPress: undefined,
  onClear: undefined,
  autoComplete: "off",
  placeholder: "Search…",
  className: "",
}
