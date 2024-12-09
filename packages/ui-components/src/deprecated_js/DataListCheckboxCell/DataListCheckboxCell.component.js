/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { Checkbox } from "../Checkbox/Checkbox.component.js"
import { DataListCell } from "../DataListCell/DataListCell.component.js"

const datalistcheckboxcellbasestyles = `
	jn-flex
	jn-flex-col
	jn-justify-center
`

export const DataListCheckboxCell = ({ selected = false, disabled = false, onChange, className = "", ...props }) => {
  return (
    <DataListCell className={`juno-datalist-checkbox-cell ${datalistcheckboxcellbasestyles} ${className}`} {...props}>
      <Checkbox disabled={disabled} checked={selected} onChange={onChange} />
    </DataListCell>
  )
}

DataListCheckboxCell.propTypes = {
  /** Whether the item this cell belongs to is selected */
  selected: PropTypes.bool,
  /** Whether the item is disabled */
  disabled: PropTypes.bool,
  /** Custom classname */
  className: PropTypes.string,
  /** Handler to execute when selected state changes */
  onChange: PropTypes.func,
}
