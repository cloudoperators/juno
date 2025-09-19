/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import { Button, ButtonProps } from "../Button"
import { KnownIcons } from "../Icon/Icon.component"

type Option<T> = T | { value: T; label?: React.ReactNode; icon?: KnownIcons }

export interface ToggleButtonProps<T> extends Omit<ButtonProps, "onChange" | "value"> {
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
  ...props
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
    if (onChange) {
      onChange(nextValue)
    }
  }

  const getLabel = (): React.ReactNode => {
    if (renderLabel) {
      return renderLabel(currentValue)
    }
    const currentOption = options.find((opt) => getValue(opt) === currentValue)
    return typeof currentOption === "object" ? currentOption.label : currentOption
  }

  return <Button {...props} label={getLabel()} onClick={onButtonClick} />
}
