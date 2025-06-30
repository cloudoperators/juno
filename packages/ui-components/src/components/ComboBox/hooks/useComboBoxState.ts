import { useState, useMemo, ReactNode } from "react"
import { isNotEmptyString } from "../../../utils"

/**
 * Custom hook for managing combobox/dropdown component state with validation support.
 * Handles open/close state, search query, selected value, focus state, and validation status.
 *
 * @param initialValue - The initial selected value for the combobox
 * @param errortext - Error message text to display when invalid
 * @param successtext - Success message text to display when valid
 * @param invalid - Boolean flag to force invalid state
 * @param valid - Boolean flag to force valid state
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
 * - isInvalid: Computed boolean indicating invalid state (based on invalid prop or errortext)
 * - isValid: Computed boolean indicating valid state (based on valid prop or successtext)
 */
function useComboBoxState(
  initialValue: string,
  errortext: ReactNode,
  successtext: ReactNode,
  invalid: boolean,
  valid: boolean
) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [selectedValue, setSelectedValue] = useState(initialValue)
  const [hasFocus, setFocus] = useState(false)

  const isInvalid = useMemo(() => invalid || Boolean(errortext && isNotEmptyString(errortext)), [invalid, errortext])
  const isValid = useMemo(() => valid || Boolean(successtext && isNotEmptyString(successtext)), [valid, successtext])

  return {
    isOpen,
    setIsOpen,
    query,
    setQuery,
    selectedValue,
    setSelectedValue,
    hasFocus,
    setFocus,
    isInvalid,
    isValid,
  }
}

export default useComboBoxState
