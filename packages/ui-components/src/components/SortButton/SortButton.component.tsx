/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { ToggleButton } from "../ToggleButton/ToggleButton.component"
import { Icon } from "../Icon/Icon.component"
import { ButtonProps } from "../Button"

type OrderType = "asc" | "desc"

export interface SortButtonProps extends Omit<ButtonProps, "value" | "onChange"> {
  order?: OrderType
  onChange?: (_order: OrderType) => void
  // Deprecated: Will be removed in the next major release, use onChange instead.
  onOrderChange?: (_order: OrderType) => void
  options?: { value: OrderType; label: React.ReactNode }[]
}

export const SortButton: React.FC<SortButtonProps> = ({
  order = "desc",
  onChange,
  options = [
    { value: "asc", label: <Icon icon="sortShortWideArrowUp" /> },
    { value: "desc", label: <Icon icon="sortShortWideArrowDown" /> },
  ],
  ...props
}) => {
  const handleChange = (newOrder: OrderType) => {
    onChange?.(newOrder)
  }

  return <ToggleButton<OrderType> options={options} value={order} onChange={handleChange} {...props} />
}
