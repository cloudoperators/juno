/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { ToggleButton } from "../ToggleButton/ToggleButton.component"
import { Icon } from "../Icon/Icon.component"
import { ButtonProps } from "../Button"

interface SortButtonProps extends Omit<ButtonProps, "value" | "onChange"> {
  order?: "asc" | "desc"
  onOrderChange?: (_order: string) => void
}

export const SortButton: React.FC<SortButtonProps> = ({ order = "desc", onOrderChange, ...props }) => {
  const options = [
    { value: "asc", label: <Icon icon="sortShortWideArrowUp" /> },
    { value: "desc", label: <Icon icon="sortShortWideArrowDown" /> },
  ]

  const handleChange = (newOrder: string) => {
    onOrderChange?.(newOrder)
  }

  return <ToggleButton options={options} value={order} onChange={handleChange} {...props} />
}
