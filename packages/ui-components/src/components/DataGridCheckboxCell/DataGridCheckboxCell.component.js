/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { Checkbox } from "../CheckboxJs/Checkbox.component.js"
import { DataGridCell } from "../DataGridCell/DataGridCell.component.js"

export const DataGridCheckboxCell = ({ selected = false, disabled = false, className = "", onChange, ...props }) => {
  return (
    <DataGridCell className={`juno-datagrid-checkbox-cell ${className}`} {...props}>
      <Checkbox disabled={disabled} checked={selected} onChange={onChange} />
    </DataGridCell>
  )
}

DataGridCheckboxCell.propTypes = {
  /** Whether the row this cell belongs to is selected */
  selected: PropTypes.bool,
  /** Whether the item is disabled */
  disabled: PropTypes.bool,
  /** Add a classname to the cell */
  className: PropTypes.string,
  /** Handler to change the selected state of the row */
  onChange: PropTypes.func,
}
