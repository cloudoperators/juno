/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode, useEffect } from "react"
import { Combobox } from "@headlessui/react"
import { useComboBoxContext } from "../context"

interface ComboBoxContentProps {
  children: ReactNode
}
export const ComboBoxContent: React.FC<ComboBoxContentProps> = ({ children }) => {
  const {
    state: { selectedValue, isOpen, setIsOpen, setSelectedValue },
    derivedProps: { defaultValue, disabled, loading: isLoading, error: hasError, name, onChange },
    restProps,
  } = useComboBoxContext()

  const handleChange = (value: string) => {
    setSelectedValue(value)

    if (value) {
      setIsOpen(false)
    }

    onChange?.(value)
  }

  return (
    <Combobox
      // @ts-ignore
      defaultValue={defaultValue}
      disabled={disabled || isLoading || hasError}
      name={name}
      onChange={handleChange}
      value={selectedValue || defaultValue}
      as="div"
      {...restProps}
    >
      {({ open }) => {
        // Update our open state when Headless UI updates it
        useEffect(() => {
          if (open !== isOpen) {
            setIsOpen(open)
          }
        }, [open])

        return <>{children}</>
      }}
    </Combobox>
  )
}
