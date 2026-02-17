/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEventHandler, HTMLAttributes, ReactNode } from "react"
import { Checkbox } from "../Checkbox/Checkbox.component"
import { DataGridCell } from "../DataGridCell/DataGridCell.component"

/**
 * `DataGridCheckboxCell` integrates a checkbox within a `DataGrid` cell, ideal for selection-based interactions.
 * It manages the selected state and supports custom behaviors upon state changes.
 */
export const DataGridCheckboxCell = ({
  selected = false,
  disabled = false,
  className = "",
  onChange,
  ...props
}: DataGridCheckboxCellProps): ReactNode => {
  return (
    <DataGridCell className={`juno-datagrid-checkbox-cell ${className}`} {...props}>
      <Checkbox disabled={disabled} checked={selected} onChange={onChange} />
    </DataGridCell>
  )
}

export interface DataGridCheckboxCellProps extends HTMLAttributes<HTMLElement> {
  /**
   * Indicates selected state of the associated row.
   * @default false
   */
  selected?: boolean

  /**
   * Determines if the checkbox is disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * Additional class names for styling.
   * @default ""
   */
  className?: string

  /** Event handler for changes in the checkbox's state. */
  onChange?: ChangeEventHandler<HTMLInputElement>
}
