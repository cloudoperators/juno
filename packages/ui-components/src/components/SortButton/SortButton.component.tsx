/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"
import { ToggleButton } from "../ToggleButton/ToggleButton.component"
import { Icon } from "../Icon/Icon.component"
import { ButtonProps } from "../Button"

type OrderType = "asc" | "desc"

export interface SortButtonProps extends Omit<ButtonProps, "value" | "onChange"> {
  /** Specifies the current sort order, defaulting to "desc". It determines the initial state of sorting when the component is rendered, allowing toggling between ascending ("asc") and descending ("desc"). */
  order?: OrderType
  /** A callback function executed upon a change in the sort order. It receives the new order, enabling custom logic or state updates to be applied dynamically based on user interaction. */
  onChange?: (_order: OrderType) => void
  /**
   * A callback function similar to onChange, designed for older implementations.
   * @deprecated: Will be removed in the next major release, use onChange instead.
   */
  onOrderChange?: (_order: OrderType) => void
  /** Provides the toggle button with sort options, each defined by a value and a label. This determines the selectable states (e.g., ascending or descending) and their visual representation, defaulting to icons corresponding to the sort direction. */
  options?: { value: OrderType; label: ReactNode }[]
}

/**
 * The `SortButton` component is a specialized toggle button designed for sorting functionalities in user interfaces.
 * It allows users to toggle between predefined sorting orders (ascending or descending) with visual indicators.
 * The button is built to facilitate easy switching of sort states, providing an intuitive user experience for data lists, tables, or other elements requiring sort capabilities.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-sortbutton--docs
 * @see {@link SortButtonProps}
 */
export const SortButton = ({
  order = "desc",
  onChange,
  options = [
    { value: "asc", label: <Icon icon="sortShortWideArrowUp" /> },
    { value: "desc", label: <Icon icon="sortShortWideArrowDown" /> },
  ],
  ...props
}: SortButtonProps): ReactNode => {
  const handleChange = (newOrder: OrderType) => {
    onChange?.(newOrder)
  }

  return <ToggleButton<OrderType> options={options} value={order} onChange={handleChange} {...props} />
}
