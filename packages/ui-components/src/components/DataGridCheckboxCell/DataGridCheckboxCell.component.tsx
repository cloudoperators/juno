/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Checkbox } from "../Checkbox/Checkbox.component"
import { DataGridCell } from "../DataGridCell/DataGridCell.component"

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
  /** Whether the row this cell belongs to is selected */
  selected?: boolean
  /** Whether the item is disabled */
  disabled?: boolean
  /** Add a classname to the cell */
  className?: string
  /** Handler to change the selected state of the row */
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}
