/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, ReactNode } from "react"
import { ComboBoxOptionProps } from "../../ComboBoxOption/ComboBoxOption.component"
import { ComboBoxFilteredOptions } from "../types"

// Optimized option data interface for better performance
interface OptimizedOptionData {
  child: React.ReactElement<ComboBoxOptionProps>
  searchText: string
  key: string
}

/**
 * Custom hook for filtering ComboBox options with debounced search functionality.
 *
 * Optimizes performance by pre-processing option search text and debouncing
 * user input to prevent excessive re-renders during typing. Filters ComboBox
 * children based on a search query, matching against option text, labels, or values.
 *
 * @param children - React children elements (ComboBoxOption components)
 * @param query - Current search query string
 * @param debounceDelay - Delay in milliseconds for debouncing the search query
 * @returns Object containing filtered children that match the search query
 */
function useComboBoxOptionFiltering(
  children: ReactNode,
  query: string,
  debounceDelay: number
): ComboBoxFilteredOptions {
  // Pre-process options once when children change
  const processedOptions = useMemo(() => {
    const options: OptimizedOptionData[] = []

    React.Children.forEach(children, (child, index) => {
      if (React.isValidElement<ComboBoxOptionProps>(child)) {
        // Pre-compute the search text once instead of on every filter
        const searchText = (
          child.props.children?.toString() ??
          child.props.label ??
          child.props.value ??
          ""
        ).toLowerCase()

        options.push({
          child,
          searchText,
          key: child.key ?? `option-${index}`,
        })
      }
    })

    return options
  }, [children])

  // Debounced filtering to avoid excessive re-renders
  const [debouncedQuery, setDebouncedQuery] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query)
    }, debounceDelay)

    return () => clearTimeout(timer)
  }, [query, debounceDelay])

  // Memoized filtering with efficient string matching
  const filteredOptions = useMemo(() => {
    if (!debouncedQuery.trim()) {
      return processedOptions
    }

    const normalizedQuery = debouncedQuery.toLowerCase()

    // Use a more efficient filtering approach
    return processedOptions.filter((option) => option.searchText.includes(normalizedQuery))
  }, [processedOptions, debouncedQuery])

  // Extract filtered children only when needed
  const filteredChildren = useMemo(() => filteredOptions.map((option) => option.child), [filteredOptions])

  return filteredChildren
}

export default useComboBoxOptionFiltering
