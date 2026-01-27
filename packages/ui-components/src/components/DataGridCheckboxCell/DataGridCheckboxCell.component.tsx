/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Checkbox } from "../Checkbox/Checkbox.component"
import { DataGridCell } from "../DataGridCell/DataGridCell.component"

/**
 * `DataGridCheckboxCell` integrates a checkbox within a `DataGrid` cell, ideal for selection-based interactions.
 * It manages the selected state and supports custom behaviors upon state changes.
 *
 * @component
 * @param {boolean} [selected] Indicates if the cell's row is selected. Defaults to `false`.
 * @param {boolean} [disabled] Disables selection if true. Defaults to `false`.
 * @param {string} [className] Additional CSS classes for custom styling. Defaults to an empty string.
 * @param {function} [onChange] Handler to trigger when the selection state changes.
 * @returns {React.ReactElement} A data grid cell with selectable state through a checkbox.
 */
export const DataGridCheckboxCell: React.FC<DataGridCheckboxCellProps> = ({
  selected = false,
  disabled = false,
  className = "",
  onChange,
  ...props
}) => {
  return (
    <DataGridCell className={`juno-datagrid-checkbox-cell ${className}`} {...props}>
      <Checkbox disabled={disabled} checked={selected} onChange={onChange} />
    </DataGridCell>
  )
}

export interface DataGridCheckboxCellProps extends React.HTMLAttributes<HTMLElement> {
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
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}
