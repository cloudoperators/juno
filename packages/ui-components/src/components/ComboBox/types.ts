/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react"
import { UseFloatingReturn, UseInteractionsReturn } from "@floating-ui/react"

export type ComboBoxWidth = "full" | "auto"

export interface ComboBoxProps extends Omit<React.HTMLAttributes<HTMLElement>, "onChange" | "onInput" | "children"> {
  /** The aria-label of the ComboBox. Defaults to the label if label was passed. */
  ariaLabel?: string
  /** Debounce delay in milliseconds for filtering. Defaults to 150ms. Set to 0 to disable debouncing. */
  debounceDelay?: number
  /** The children to Render. Use `ComboBox.Option` elements. */
  children?: ReactNode
  /** A custom className. Will be passed to the internal text input element of the ComboBox */
  className?: string
  /** Pass a defaultValue to use as an uncontrolled Component that will handle its state internally */
  defaultValue?: string
  /** Whether the ComboBox is disabled */
  disabled?: boolean
  /** Whether the ComboBox has an error. Note this refers to an internal error like failing to load options etc., to indicate failed validation use `invalid` instead. */
  error?: boolean
  /** An errortext to display when the ComboBox failed validation or an internal error occurred. */
  errortext?: ReactNode
  /** A helptext to render to explain meaning and significance of the ComboBox */
  helptext?: ReactNode
  /** The Id of the ComboBox. Will be assigned to the text input part of the ComboBox. If not passed, an id will be auto-generated. */
  id?: string
  /** Whether the ComboBox failed validation */
  invalid?: boolean
  /** The label of the ComboBox */
  label?: string
  /** Whether the ComboBox is busy loading options */
  loading?: boolean
  /** The name attribute of the ComboBox when used as part of a form  */
  name?: string
  /** A handler to execute when the ComboBox looses focus */
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  /** A handler to execute when the ComboBox' selected value changes */
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void
  /** A handler to execute when the ComboBox input receives focus */
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  /** Handler to execute when the ComboBox text input value changes */
  onInputChange?: React.ChangeEventHandler<HTMLInputElement>
  /** A placeholder to render in the text input */
  placeholder?: string
  /** Whether the ComboBox is required */
  required?: boolean
  /** A text to display in case the ComboBox was successfully validated. Will set the ComboBox to `valid` when passed. */
  successtext?: ReactNode
  /** Whether the option labels should be truncated in case they are longer/wider than the available space in an option or not. Default is FALSE. */
  truncateOptions?: boolean
  /** Whether the ComboBox was successfully validated */
  valid?: boolean
  /** The selected value of the ComboBox in Controlled Mode. */
  value?: string
  /** The label of the passed value or defaultValue. If you want to use controlled mode or pass as defaultValue in uncontrolled mode and additionally use labels for human-readable SelectOptions, you need to also pass the matching label for the passed value/defaultValue so that the Select component can render itself properly */
  valueLabel?: string
  /** The width of the text input. Either 'full' (default) or 'auto'. */
  width?: ComboBoxWidth
  /** Pass a custom classname to the wrapping <div> element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning. */
  wrapperClassName?: string
}

export type ComboBoxFloating = Pick<UseFloatingReturn, "x" | "y" | "strategy" | "refs"> &
  Pick<UseInteractionsReturn, "getReferenceProps" | "getFloatingProps">

export type ComboBoxState = {
  /** Boolean indicating if the dropdown is open */
  isOpen: boolean
  /** Function to toggle dropdown open/close state */
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  /** Current search/filter query string */
  query: string
  /** Function to update the search query */
  setQuery: React.Dispatch<React.SetStateAction<string>>
  /** Currently selected value */
  selectedValue: string
  /** Function to update the selected value */
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>
  /** Boolean indicating if the combobox has focus */
  hasFocus: boolean
  /** Function to update focus state */
  setFocus: React.Dispatch<React.SetStateAction<boolean>>
}

export type ComboBoxValidation = {
  /** Computed boolean indicating invalid state (based on invalid prop or errortext) */
  isInvalid: boolean
  /** Computed boolean indicating valid state (based on valid prop or successtext) */
  isValid: boolean
}

export type ComboBoxFilteredOptions = React.ReactElement[]

export type ComboBoxMappedOptions = Map<React.ReactNode, { val: string; label?: string; children: ReactNode }>
