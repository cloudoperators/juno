/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useId } from "react"
import {
  ComboBoxLabel,
  ComboBoxInput,
  ComboBoxStatusIcon,
  ComboBoxStatusMessage,
  ComboBoxToggleButton,
  ComboBoxFloatingMenu,
  ComboBoxContent,
  ComboBoxOuterWrapper,
  ComboBoxInputWrapper,
} from "./components"
import {
  useComboBoxOptionMapping,
  useComboBoxState,
  useComboBoxFloating,
  useComboBoxOptionFiltering,
  useComboBoxValidation,
} from "./hooks"
import { ComboBoxProvider, useComboBoxContextValue } from "./context"
import { ComboBoxProps } from "./types"

export const ComboBox: React.FC<ComboBoxProps> = ({
  ariaLabel,
  children,
  className = "",
  debounceDelay = 150,
  defaultValue = "",
  disabled = false,
  error = false,
  errortext = "",
  helptext = "",
  id = "",
  invalid = false,
  loading = false,
  label,
  name = "",
  onBlur,
  onChange,
  onFocus,
  onInputChange,
  placeholder = "Select…",
  required = false,
  successtext = "",
  truncateOptions = false,
  valid = false,
  value = "",
  valueLabel,
  width = "full",
  wrapperClassName = "",
  ...props
}) => {
  const inputElementId = id || "juno-combobox-" + useId()
  const helpTextId = "juno-combobox-helptext-" + useId()

  // State management
  const state = useComboBoxState(value)

  // Option mapping
  const mappedOptions = useComboBoxOptionMapping(children)

  // Option filtering
  const filteredOptions = useComboBoxOptionFiltering(children, state.query, debounceDelay)

  // Floating UI management
  const floating = useComboBoxFloating(state.isOpen, state.setIsOpen)

  // Validation
  const validation = useComboBoxValidation(errortext, successtext, invalid, valid)

  // Context value creation
  const contextValue = useComboBoxContextValue(
    inputElementId,
    helpTextId,
    {
      ariaLabel,
      children,
      className,
      debounceDelay,
      defaultValue,
      disabled,
      error,
      errortext,
      helptext,
      id,
      invalid,
      loading,
      label,
      name,
      onBlur,
      onChange,
      onFocus,
      onInputChange,
      placeholder,
      required,
      successtext,
      truncateOptions,
      valid,
      value,
      valueLabel,
      width,
      wrapperClassName,
    },
    props,
    state,
    floating,
    validation,
    mappedOptions,
    filteredOptions
  )

  return (
    <ComboBoxProvider value={contextValue}>
      <ComboBoxOuterWrapper>
        <ComboBoxContent>
          <ComboBoxInputWrapper>
            <ComboBoxLabel />
            <ComboBoxInput />
            <ComboBoxStatusIcon />
            <ComboBoxToggleButton />
          </ComboBoxInputWrapper>
          <ComboBoxFloatingMenu />
        </ComboBoxContent>
        <ComboBoxStatusMessage />
      </ComboBoxOuterWrapper>
    </ComboBoxProvider>
  )
}
