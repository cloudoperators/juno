/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo } from "react"
import { cn, isNotEmptyString } from "../../utils"
import { ComboBoxWidth } from "./types"
import { useComboBoxContext } from "./context"

const inputWrapperStyles = `
  jn:relative
`

const labelStyles = `
  jn:pointer-events-none
  jn:top-2
  jn:left-[0.9375rem]
`

const inputStyles = `
  jn:rounded-3px
  jn:bg-theme-textinput
  jn:text-theme-textinput
  jn:border
  jn:text-base
  jn:leading-4
  jn:w-full
  jn:px-4
  jn:h-textinput
  jn:text-left
  jn:overflow-hidden
  jn:text-ellipsis
  jn:whitespace-nowrap
  jn:focus:outline-hidden
  jn:focus:ring-2
  jn:focus:ring-theme-focus
`

const withLabelInputStyles = `
  jn:pt-[1.125rem] 
  jn:pb-1
`

const noLabelInputStyles = `
  jn:py-4
`

const disabledInputStyles = `
  jn:cursor-not-allowed
  jn:pointer-events-none
  jn:opacity-50
`

const defaultBorderStyles = `
  jn:border-theme-textinput-default
`

const validStyles = `
  jn:border-theme-success
`

const invalidStyles = `
  jn:border-theme-error
`

const buttonStyles = `
  jn:absolute
  jn:top-0
  jn:right-0
  jn:h-textinput
  jn:w-6
  jn:h-4
  jn:border-l-0
  jn:border-y-[1px]
  jn:border-r-[1px]
  jn:rounded-tr
  jn:rounded-br
  jn:appearance-none
  jn:bg-theme-textinput
  jn:text-theme-textinput
`

const defaultButtonStyles = `
  jn:border-theme-textinput-default
`

const invalidButtonStyles = `
  jn:border-theme-error
`

const validButtonStyles = `
  jn:border-theme-success
`

const disabledButtonStyles = `
  jn:cursor-not-allowed
  jn:pointer-events-none
  jn:bg-transparent
  jn:opacity-50
`

const menuStyles = `
  jn:rounded
  jn:bg-theme-background-lvl-1
  jn:w-full
  jn:overflow-y-auto
`

const iconContainerStyles = `
  jn:absolute
  jn:top-[.4rem]
  jn:right-6
`

const centeredIconStyles = `
  jn:absolute
  jn:top-1/2
  jn:left-1/2
  jn:translate-y-[-50%]
  jn:translate-x-[-0.75rem]
`
const getOuterWrapperStyles = (width?: ComboBoxWidth, wrapperClassName?: string) =>
  cn(
    "juno-combobox-wrapper",
    "jn:relative",
    width === "auto" ? "jn:inline-block" : "jn:block",
    width === "auto" ? "jn:w-auto" : "jn:w-full",
    wrapperClassName
  )

const getInputWrapperStyles = (disabled?: boolean) =>
  cn("juno-combobox-input-wrapper", inputWrapperStyles, disabled && "jn:cursor-not-allowed")

const getLabelStyles = () => cn(labelStyles)

const getInputStyles = (
  isInvalid: boolean,
  isValid: boolean,
  hasError?: boolean,
  isLoading?: boolean,
  disabled?: boolean,
  label?: string,
  className?: string
) =>
  cn(
    "juno-combobox-input",
    inputStyles,
    label && isNotEmptyString(label) ? withLabelInputStyles : noLabelInputStyles,
    disabled && disabledInputStyles,
    isInvalid && "juno-combobox-invalid",
    isInvalid && invalidStyles,
    isValid && "juno-combobox-valid",
    isValid && validStyles,
    !isValid && !isInvalid && defaultBorderStyles,
    isLoading && "juno-combobox-loading jn:cursor-not-allowed",
    hasError && "juno-combobox-error jn:cursor-not-allowed",
    className
  )

const getCenteredIconStyles = () => cn(centeredIconStyles)

const getIconContainerStyles = (disabled?: boolean) =>
  cn("juno-combobox-icon-container", iconContainerStyles, disabled && "jn:opacity-50")

const getToggleStyles = (isValid: boolean, isInvalid: boolean, disabled?: boolean) =>
  cn(
    "juno-combobox-toggle",
    buttonStyles,
    disabled && disabledButtonStyles,
    isInvalid && "juno-combobox-toggle-invalid",
    isInvalid && invalidButtonStyles,
    isValid && "juno-combobox-toggle-valid",
    isValid && validButtonStyles,
    !isValid && !isInvalid && defaultButtonStyles
  )

const getMenuStyles = () => cn("juno-combobox-options", menuStyles)

/**
 * Custom hook that generates and memoizes CSS class names for ComboBox component styling.
 *
 * This hook creates a comprehensive set of styled CSS classes based on the component's state
 * (disabled, valid, invalid, loading, error) and configuration (width, label presence).
 * It uses Tailwind CSS classes with a custom 'jn:' prefix and applies conditional styling
 * based on the component's current state and props.
 *
 * @returns Object containing memoized CSS class strings for different ComboBox elements:
 *   - outerWrapperStyles: Classes for the outermost wrapper container
 *   - inputWrapperStyles: Classes for the input wrapper container
 *   - inputStyles: Classes for the main input element
 *   - labelStyles: Classes for the floating label
 *   - centeredIconStyles: Classes for centered icon positioning
 *   - iconContainerStyles: Classes for the icon container
 *   - toggleStyles: Classes for the dropdown toggle button
 *   - menuStyles: Classes for the dropdown menu container
 */
function useComboBoxStyles() {
  const {
    derivedProps: { disabled, loading: isLoading, error: hasError, width = "full", label, className, wrapperClassName },
    validation: { isInvalid, isValid },
  } = useComboBoxContext()

  const styles = useMemo(
    () => ({
      outerWrapperStyles: getOuterWrapperStyles(width, wrapperClassName),
      inputWrapperStyles: getInputWrapperStyles(disabled),
      inputStyles: getInputStyles(isInvalid, isValid, hasError, isLoading, disabled, label, className),
      labelStyles: getLabelStyles(),
      centeredIconStyles: getCenteredIconStyles(),
      iconContainerStyles: getIconContainerStyles(disabled),
      toggleStyles: getToggleStyles(isInvalid, isInvalid, disabled),
      menuStyles: getMenuStyles(),
    }),
    [width, wrapperClassName, disabled, isInvalid, isValid, isLoading, hasError, label, className]
  )

  return styles
}

export default useComboBoxStyles
