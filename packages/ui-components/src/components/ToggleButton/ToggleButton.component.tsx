/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, ReactNode, useEffect } from "react"
import { Button, ButtonProps } from "../Button"

type Option<T> = T | { value: T; label?: ReactNode }

export interface ToggleButtonProps<T extends string | number> extends Omit<ButtonProps, "onChange" | "value"> {
  /** An array of options available for toggling.
   * Each option can be a simple value or an object with a value and an optional label.
   * This setup allows for both simple and descriptive options, accommodating diverse design needs.
   */
  options: Option<T>[]
  /** Represents the currently selected value among the available toggle options.
   * It allows controlled usage, ensuring the component reflects the designated state as part of a larger system or control framework.
   */
  value?: T
  /**
   * A callback function called when the toggle button's value changes.
   * It receives the updated value as an argument, enabling custom behaviors or state updates to react to user interactions.
   */
  onChange?: (_value: T) => void
  /**
   * Provides a custom rendering function for the display label of the current value, offering flexibility for advanced label designs, such as incorporating icons or complex text formatting.
   */
  renderLabel?: (_value: T) => ReactNode
}

/**
 * The `ToggleButton` component is a versatile toggle switch designed to cycle through a set of predefined options.
 * It provides a button-based mechanism to iterate over values, ideal for use cases requiring simple toggle actions between discrete states (e.g., settings or modes).
 * The component offers flexibility through customizable labels and dynamically handles option transitions, enhancing user interaction by providing visual feedback with each toggle.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-togglebutton--docs
 * @see {@link ToggleButtonProps}
 */
export const ToggleButton = <T extends string | number>({
  options,
  value,
  onChange,
  renderLabel,
  ...props
}: ToggleButtonProps<T>) => {
  const extractValue = (option: Option<T>): T => (typeof option === "object" ? option.value : option)

  const [currentValue, setCurrentValue] = useState<T>(value ?? extractValue(options[0]))

  useEffect(() => {
    if (value !== undefined) {
      setCurrentValue(value)
    }
  }, [value])

  const handleButtonClick = () => {
    const currentIndex = options.findIndex((opt) => extractValue(opt) === currentValue)
    const nextValue = extractValue(options[(currentIndex + 1) % options.length])

    setCurrentValue(nextValue)
    onChange?.(nextValue)
  }

  const currentOption = options.find((opt) => extractValue(opt) === currentValue)

  const displayLabel = renderLabel
    ? renderLabel(currentValue)
    : typeof currentOption === "object"
      ? (currentOption.label ?? "")
      : currentOption

  return (
    <Button {...props} onClick={handleButtonClick}>
      {displayLabel}
    </Button>
  )
}
