/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { ToggleButton } from "../ToggleButton/ToggleButton.component"
import { Icon, KnownIcons } from "../Icon/Icon.component"

interface SortButtonProps {
  order?: string
  onOrderChange?: (_order: string) => void
}

export const SortButton: React.FC<SortButtonProps> = ({ order = "asc", onOrderChange, ...props }) => {
  const options: { value: string; icon: KnownIcons }[] = [
    { value: "sortShortWideArrowUp", icon: "sortShortWideArrowUp" },
    { value: "sortShortWideArrowDown", icon: "sortShortWideArrowDown" },
  ]

  const handleChange = (value: string) => {
    if (onOrderChange) {
      onOrderChange(value)
    }
  }

  return (
    <ToggleButton options={options} onChange={handleChange} renderLabel={(value) => <Icon icon={value} />} {...props} />
  )
}
