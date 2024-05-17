/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { NativeSelect } from "../NativeSelect/NativeSelect.component"
import { NativeSelectOption } from "../NativeSelectOption/NativeSelectOption.component"
import { TextInput } from "../TextInput/TextInput.component"
import { Icon } from "../Icon/Icon.component"

const wrapperStyles = `
	jn-flex
	jn-relative
	jn-p-px
	jn-border
	jn-rounded
	jn-bg-theme-filter-input
`

const defaultWrapperStyles = `
  jn-border-theme-filter-input
`

const errorWrapperStyles = `
  jn-border-theme-error
`

const selectStyles = `
	jn-rounded-r-none
`

const textInputStyles = `
	jn-grow
	jn-rounded-l-none
	jn-pr-16
	!jn-bg-theme-filter-input-textinput
	focus:jn-z-40
`

const iconWrapperStyles = `
	jn-absolute
	jn-flex
	jn-right-2
	jn-top-1.5
	jn-z-50
`

/** 
-- Deprectated. For new implementations, use InputGroup and combine/compose input components as you need them. --
A special Input to select key and value of a filter.
*/
export const FilterInput = ({
  keyLabel,
  options,
  valueLabel,
  className,
  selectedFilterKey,
  onSelectedFilterKeyChange,
  filterValue,
  valuePlaceholder,
  onFilterValueChange,
  onClear,
  onKeyPress,
  onFilter,
  loading,
  error,
  ...props
}) => {
  const [selectedFilter, setSelectedFilter] = useState(selectedFilterKey)
  const [value, setValue] = useState(filterValue)
  const [isLoading, setIsLoading] = useState(options.length < 1 || loading)
  const [hasError, setHasError] = useState(error)

  useEffect(() => {
    setValue(filterValue)
  }, [filterValue])

  useEffect(() => {
    setSelectedFilter(selectedFilterKey)
  }, [selectedFilterKey])

  // Reset the (text input) value whenever the component is loading:
  useEffect(() => {
    if (options.length < 1 || loading) {
      setIsLoading(true)
      setValue("")
    } else {
      setIsLoading(false)
    }
  }, [options, loading])

  useEffect(() => {
    setHasError(error)
  }, [error])

  // Reset the (text input) value whenever the selected Filter key changes:
  const handleSelectedFilterChange = (event) => {
    setSelectedFilter(event.target.value)
    setValue("")
    onSelectedFilterKeyChange && onSelectedFilterKeyChange(event)
  }

  const handleFilterValueChange = (event) => {
    setValue(event.target.value)
    onFilterValueChange && onFilterValueChange(event)
  }

  const handleClearClick = (event) => {
    setValue("")
    onClear && onClear(event)
  }

  const handleFilterClick = () => {
    onFilter && onFilter(value)
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && onFilter) {
      onFilter && onFilter(value)
    }
    onKeyPress && onKeyPress(event)
  }

  return (
    <div
      className={`juno-filter-input ${wrapperStyles} ${
        isLoading ? "juno-filter-input-loading " : ""
      } ${hasError ? "juno-filter-input-error " : ""} ${
        hasError ? errorWrapperStyles : defaultWrapperStyles
      } ${className}`}
      {...props}
    >
      <div>
        <NativeSelect
          className={`juno-filter-input-select ${selectStyles}`}
          aria-label={keyLabel}
          value={selectedFilter}
          onChange={handleSelectedFilterChange}
          loading={isLoading}
          error={hasError}
        >
          // First "Placeholder" option:
          <NativeSelectOption label={keyLabel || "Select Filter"} value="" />
          // Options representing actual filter key values:
          {options.map((option, i) => (
            <NativeSelectOption
              label={option.label}
              value={option.key}
              key={`${i}`}
              {...option}
            />
          ))}
        </NativeSelect>
      </div>
      <TextInput
        value={value}
        className={`${textInputStyles}`}
        aria-label={valueLabel}
        onChange={handleFilterValueChange}
        onKeyPress={handleKeyPress}
        disabled={isLoading || hasError}
        placeholder={isLoading ? "Loading Filter Options…" : valuePlaceholder}
      />
      <div className={`${iconWrapperStyles}`}>
        {value && value.length ? (
          <Icon
            icon="close"
            title="Clear"
            size="18"
            className={`jn-mr-2`}
            onClick={handleClearClick}
          />
        ) : null}
        <Icon
          icon="filterAlt"
          title="Filter"
          disabled={isLoading || hasError}
          onClick={handleFilterClick}
        />
      </div>
    </div>
  )
}

FilterInput.propTypes = {
  /** The label to display on the Filter Key Select */
  keyLabel: PropTypes.string,
  /** The options for the Filter Select: `[{Label: "Filter 1", key: "filter-1"}, {...}]`
	The array MUST have a length in order for the component to render.
	*/
  options: PropTypes.arrayOf(PropTypes.object),
  /** The key of the current filter */
  selectedFilterKey: PropTypes.string,
  /** Pass a handler to be executed when the filter key changes */
  onSelectedFilterKeyChange: PropTypes.func,
  /** The aria-label of the Filter Value Text Input */
  valueLabel: PropTypes.string, // TODO -> valueLabel
  /** The current value of the Filter Input */
  filterValue: PropTypes.string,
  /** Optional: pass a placeholder for the filter value text input */
  valuePlaceholder: PropTypes.string,
  /** Pass a handler to be executed when the filter value changes */
  onFilterValueChange: PropTypes.func,
  /** Pass a handler to execute when the Filter Value Clear button is clicked */
  onClear: PropTypes.func,
  /** Whether the filter is currently loading */
  loading: PropTypes.bool,
  /** Pass a className to the wrapping element */
  className: PropTypes.string,
  /** Pass a handler to execute when the Filter Value Filter button is clicked */
  onFilter: PropTypes.func,
  /** Whether the FilterInput has an error */
  error: PropTypes.bool,
}

FilterInput.defaultProps = {
  keyLabel: "Select Filter",
  options: [],
  selectedFilterKey: "",
  onSelectedFilterKeyChange: undefined,
  valueLabel: "Filter by Value",
  filterValue: "",
  valuePlaceholder: "",
  onFilterValueChange: undefined,
  onClear: undefined,
  onFilter: undefined,
  loading: false,
  className: "",
  error: false,
}
