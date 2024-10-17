/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, ChangeEvent, KeyboardEvent, MouseEvent } from "react"

import { Icon } from "../Icon"
import { Stack } from "../Stack"

import "./searchinput.scss"

export interface SearchInputProps {
  /**
   * Specifies the name attribute for the input element.
   */
  name?: string
  /**
   * Determines the visual styling variant of the SearchInput component.
   * - "default": Standard search input styling.
   * - "hero": A larger search input intended for standalone use on a dedicated search page, akin to the initial Google search page.
   * - "rounded": A search input with rounded edges.
   */
  variant?: "rounded" | "hero" | "default"
  /**
   * Disables the search input when set to true.
   */
  disabled?: boolean
  /**
   * Custom placeholder text displayed in the search input.
   */
  placeholder?: string
  /**
   * Initial value for the search input. Note that this value will not be updated if changed by the user.
   */
  value?: string
  /**
   * Controls the autocomplete attribute of the input element.
   * Pass a valid autocomplete value.
   * We do not enforce validity.
   * */
  autoComplete?: string
  /**
   * Determines whether to show the 'Clear' button.
   */
  clear?: boolean
  /**
   * Pass an optional CSS class to apply to the search input.
   */
  className?: string
  /**
   * Callback function invoked when a search is triggered, either by pressing the 'Enter' key or by clicking the search icon.
   * */
  onSearch?: (_value: string) => void
  /**
   * Click handler for the search icon.
   */
  onClick?: (_event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  /**
   * Change handler for the search input.
   */
  onChange?: (_event: ChangeEvent<HTMLInputElement>) => void
  /**
   * KeyPress handler for the search input. By default, triggers the onSearch function when the 'Enter' key is pressed.
   */
  onKeyPress?: (_event: KeyboardEvent<HTMLInputElement>) => void
  /**
   * Click handler for the 'Clear' button.
   */
  onClear?: (_event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}

const wrapperStyles = (variant: "rounded" | "hero" | "default"): string => {
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

const searchStyles = (variant: "rounded" | "hero" | "default"): string => {
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

const iconWrapperStyles = (variant: "rounded" | "hero" | "default"): string => {
  switch (variant) {
    case "rounded":
      return `jn-absolute jn-inline-flex jn-right-3 jn-top-1`
    case "hero":
      return `jn-absolute jn-inline-flex jn-right-5`
    default:
      return `jn-absolute jn-inline-flex jn-right-3 jn-top-2`
  }
}

const clearIconStyles = (variant: "rounded" | "hero" | "default"): string => {
  switch (variant) {
    case "rounded":
      return `jn-mr-2`
    case "hero":
      return `jn-mr-2.5`
    default:
      return `jn-mr-2`
  }
}

const clearIconSize = (variant: "rounded" | "hero" | "default"): string => {
  switch (variant) {
    case "hero":
      return "24"
    default:
      return "18"
  }
}

/**
 * A SearchInput is a controlled input component for searching.
 * It provides a text field to enter a search query and optional clear and search icons.
 * Three styling variants are supported: "rounded", "hero", and "default".
 */

export const SearchInput: React.FC<SearchInputProps> = ({
  value = "",
  name = "search",
  variant = "default",
  disabled = false,
  clear = true,
  onSearch,
  onChange,
  onClick,
  onKeyPress,
  onClear,
  autoComplete = "off",
  placeholder = "Search…",
  className = "",
  ...props
}) => {
  const [val, setValue] = useState(value)

  useEffect(() => {
    setValue(value)
  }, [value])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
    onChange && onChange(event)
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter" && onSearch) onSearch(val)
    onKeyPress && onKeyPress(event)
  }

  const handleSearchClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = (event) => {
    onSearch && onSearch(val)
    onClick && onClick(event)
  }

  const handleClearClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = (event) => {
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
          {clear && val?.length ? (
            <Icon
              icon="close"
              size={clearIconSize(variant)}
              title="Clear"
              className={clearIconStyles(variant)}
              onClick={handleClearClick}
              disabled={disabled}
            />
          ) : null}
          <Icon icon="search" title="Search" onClick={handleSearchClick} disabled={disabled} />
        </div>
      </Stack>
    </div>
  )
}
