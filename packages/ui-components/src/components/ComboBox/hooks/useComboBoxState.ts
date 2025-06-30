import { useState } from "react"
import { ComboBoxState } from "../types"

/**
 * Custom hook for managing combobox/dropdown component state.
 * Handles open/close state, search query, selected value, and focus state.
 *
 * @param initialValue - The initial selected value for the combobox
 *
 * @returns An object containing:
 * - isOpen: Boolean indicating if the dropdown is open
 * - setIsOpen: Function to toggle dropdown open/close state
 * - query: Current search/filter query string
 * - setQuery: Function to update the search query
 * - selectedValue: Currently selected value
 * - setSelectedValue: Function to update the selected value
 * - hasFocus: Boolean indicating if the combobox has focus
 * - setFocus: Function to update focus state
 */
function useComboBoxState(initialValue: string): ComboBoxState {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [selectedValue, setSelectedValue] = useState(initialValue)
  const [hasFocus, setFocus] = useState(false)

  return {
    isOpen,
    setIsOpen,
    query,
    setQuery,
    selectedValue,
    setSelectedValue,
    hasFocus,
    setFocus,
  }
}

export default useComboBoxState
