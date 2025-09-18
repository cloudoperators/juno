/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import { Button, ButtonProps } from "../Button"

type Option<T> = T | { value: T; label?: React.ReactNode }

interface ToggleButtonProps<T extends string | number> extends Omit<ButtonProps, "onClick" | "onChange" | "value"> {
  options: Option<T>[]
  value?: T
  onChange?: (_value: T) => void
  renderLabel?: (_value: T) => React.ReactNode
}

export const ToggleButton = <T extends string | number>({
  options,
  value: controlledValue,
  onChange,
  renderLabel,
  ...buttonProps
}: ToggleButtonProps<T>) => {
  const getValue = (option: Option<T>): T => (typeof option === "object" ? option.value : option)
  const initialValue = controlledValue !== undefined ? controlledValue : getValue(options[0])
  const [currentValue, setCurrentValue] = useState<T>(initialValue)

  useEffect(() => {
    if (controlledValue !== undefined) {
      setCurrentValue(controlledValue)
    }
  }, [controlledValue])

  const onButtonClick = () => {
    const currentIndex = options.findIndex((opt) => getValue(opt) === currentValue)
    const nextIndex = (currentIndex + 1) % options.length
    const nextValue = getValue(options[nextIndex])

    setCurrentValue(nextValue)
    if (onChange) onChange(nextValue)
  }

  const getLabel = (): string | undefined => {
    if (renderLabel) {
      const renderedLabel = renderLabel(currentValue)
      if (typeof renderedLabel === "string") {
        return renderedLabel
      }
    }

    const currentOption = options.find((opt) => getValue(opt) === currentValue)

    if (currentOption && typeof currentOption === "object" && typeof currentOption.label === "string") {
      return currentOption.label
    }

    return currentValue?.toString()
  }

  return <Button {...buttonProps} label={getLabel()} onClick={onButtonClick} variant="primary" />
}
