/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { FilterInput } from "../FilterInput/FilterInput.component"

const filterStyles = `
	jn-mb-px
	jn-bg-theme-filters
	jn-rounded-t
	jn-pt-4
	jn-px-4
	jn-pb-2
`

const inputWrapperStyles = `
	jn-w-full
	jn-flex
	jn-mb-2
`

const searchWrapperStyles = `
	jn-ml-auto
`

const filterPillWrapperStyles = `
	jn-flex
	jn-flex-wrap
`

const errortextStyles = `
	jn-text-theme-error
	jn-text-sm
	jn-mt-[-0.25rem]
	jn-mb-1.5
`
/**
-- Deprecated. For new implementations, combine and compose Input Group, Inputs and Pills as needed. --
A component to hold a FilterInput, resulting FilterPills, and optional SearchBar for any filter-able content.
*/
export const Filters = ({
  search = null,
  filters = null,
  selectedFilterKey = "",
  onSelectedFilterKeyChange,
  filterValue = "",
  valuePlaceholder = "",
  onFilterValueChange,
  onFilter,
  onFilterClear,
  children,
  className = "",
  loading = false,
  error = false,
  errortext = "",
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // AP: empty string and boolean results in empty string
    // "" && true => ""
    // This causes hasError to become a string. Further down, hasError is
    // passed on to the TextInput, whose type check logs a warning
    // To prevet that check the type of errortext instead!
    setHasError(
      error || (typeof errortext === "string" && errortext.length > 0)
    )
  }, [error, errortext])

  useEffect(() => {
    setIsLoading(loading)
  }, [loading])

  return (
    <div
      className={`juno-filters ${
        hasError ? "juno-filters-error " : ""
      } ${filterStyles} ${className}`}
      {...props}
    >
      <div className={`juno-filters-input-wrapper ${inputWrapperStyles}`}>
        {filters && filters.options ? (
          <FilterInput
            keyLabel={filters.keyLabel}
            valueLabel={filters.valueLabel}
            options={filters.options}
            selectedFilterKey={selectedFilterKey}
            onSelectedFilterKeyChange={onSelectedFilterKeyChange}
            filterValue={filterValue}
            valuePlaceholder={valuePlaceholder}
            onFilterValueChange={onFilterValueChange}
            onFilter={onFilter}
            onClear={onFilterClear}
            loading={isLoading}
            error={hasError}
          />
        ) : null}
        {search ? (
          <div className={`${searchWrapperStyles}`}>{search}</div>
        ) : null}
      </div>
      {hasError && errortext ? (
        <div className={`juno-filters-errortext ${errortextStyles}`}>
          {errortext}
        </div>
      ) : (
        ""
      )}
      <div className={`${filterPillWrapperStyles}`}>{children}</div>
    </div>
  )
}

Filters.propTypes = {
  /** Pass a SearchInput component */
  search: PropTypes.node,
  /** Pass an object describing the filter keyLabel, valueLabel, and the available filter options:
	`{ keyLabel: "Select a Filter",`
		 `valueLabel: "Enter a Value",`
		 `options: [{label: "Filter 1", key: "filter-1"}, {...}] }` 
	*/
  filters: PropTypes.object,
  /** The key of the currently selected filter */
  selectedFilterKey: PropTypes.string,
  /** Pass a handler to be executed when the filter key changes */
  onSelectedFilterKeyChange: PropTypes.func,
  /** The value of the FilterInput */
  filterValue: PropTypes.string,
  /** Optional: Pass a placeholder for the filter value text input */
  valuePlaceholder: PropTypes.string,
  /** Pass a handler to be executed whenever the value of the filter value input changes */
  onFilterValueChange: PropTypes.func,
  /** Pass a handler to be executed once the user clicks the filter button */
  onFilter: PropTypes.func,
  /** Pas a handler to be executed once the Filter input is cleared */
  onFilterClear: PropTypes.func,
  /** add custom classNames */
  className: PropTypes.string,
  /** Whether the filters are currently loading */
  loading: PropTypes.bool,
  /** Whether the filters have an error */
  error: PropTypes.bool,
  /** The error message to display. When passed, error is set to true automatically */
  errortext: PropTypes.string,
  children: PropTypes.any,
}
