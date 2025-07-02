/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useContext, createContext } from "react"
import {
  ComboBoxFilteredOptions,
  ComboBoxFloating,
  ComboBoxMappedOptions,
  ComboBoxProps,
  ComboBoxState,
  ComboBoxValidation,
} from "../types"

export type ComboBoxContextValue = {
  /** Unique identifier for the input element */
  inputElementId: string

  /** Identifier for the help text element */
  helpTextId: string

  /** Processed and normalized props passed to the ComboBox component */
  derivedProps: ComboBoxProps

  /** Remaining HTML attributes to be spread on the root element, excluding controlled props */
  restProps: Omit<React.HTMLAttributes<HTMLElement>, "onChange" | "onInput" | "children">

  /** Current state of the ComboBox including open/closed status, selected value, and focus state */
  state: ComboBoxState

  /** Floating UI positioning data and methods for dropdown placement and positioning */
  floating: ComboBoxFloating

  /** Validation state and error handling information for the ComboBox input */
  validation: ComboBoxValidation

  /** Processed and transformed options data ready for rendering in the dropdown */
  mappedOptions: ComboBoxMappedOptions

  /** Subset of options (children) that match the current search/filter criteria */
  filteredOptions: ComboBoxFilteredOptions
}

export const ComboBoxContext = createContext<ComboBoxContextValue | null>(null)

export const useComboBoxContext = (): ComboBoxContextValue => {
  const context = useContext(ComboBoxContext)

  if (!context) {
    throw new Error(
      "useComboBoxContext must be used within a ComboBoxProvider. " +
        "Make sure your component is wrapped with <ComboBox> or <ComboBoxProvider>."
    )
  }

  return context
}

export const useComboBoxContextValue = (
  inputElementId: string,
  helpTextId: string,
  derivedProps: ComboBoxProps,
  restProps: Omit<React.HTMLAttributes<HTMLElement>, "onChange" | "onInput" | "children">,
  state: ComboBoxState,
  floating: ComboBoxFloating,
  validation: ComboBoxValidation,
  mappedOptions: ComboBoxMappedOptions,
  filteredOptions: ComboBoxFilteredOptions
): ComboBoxContextValue => {
  const contextValue = {
    inputElementId,
    helpTextId,
    derivedProps,
    restProps,
    state,
    floating,
    validation,
    mappedOptions,
    filteredOptions,
  }

  return contextValue
}
