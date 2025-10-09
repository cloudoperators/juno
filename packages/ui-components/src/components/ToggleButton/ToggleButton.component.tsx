/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, ReactNode, useEffect } from "react"
import { Button, ButtonProps } from "../Button"

type Option<T> = T | { value: T; label?: ReactNode }

interface ToggleButtonProps<T extends string | number> extends Omit<ButtonProps, "onChange" | "value"> {
  options: Option<T>[]
  value?: T
  onChange?: (_value: T) => void
  renderLabel?: (_value: T) => ReactNode
}

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
