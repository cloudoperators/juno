/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { forwardRef } from "react"

const rowBaseStyle = `
	jn-contents
`
// const rowSelectedStyle = `
// 	jn-bg-theme-datagridrow-selected
// `
export const DataGridRow = forwardRef<HTMLDivElement, DataGridRowProps>(
  ({ /* selected, disabled,*/ className = "", children = null, /*onChange,*/ ...props }, ref) => {
    // const dataGridContext = useDataGridContext() || {}
    // const selectable = dataGridContext.selectable

    // const [isSelected, setIsSelected] = useState(false)
    // useEffect( () => {
    // 	setIsSelected(selected)
    // }, [selected])

    // const toggleSelected = (event) => {
    // 	setIsSelected(!isSelected)
    // 	onChange(event)
    // }

    //  ${ selectable && isSelected ? rowSelectedStyle : '' }
    return (
      <div className={`juno-datagrid-row ${rowBaseStyle} ${className}`} role="row" ref={ref} {...props}>
        {/* { selectable ? <DataGridCheckboxCell selected={selected} disabled={disabled} onChange={toggleSelected} /> : null } */}
        {children}
      </div>
    )
  }
)

DataGridRow.displayName = "DataGridRow"

export interface DataGridRowProps {
  // /** Whether the row / item is selected (only relevant in a `selectable` DataGrid */
  // selected: PropTypes.bool,
  // /** Whether the row/item is disabled (only relevant in a `selectable` DataGrid */
  // disabled: PropTypes.bool,
  /** Children to render in the DataGridRow */
  children?: React.ReactNode
  /** Add a classname */
  className?: string
  // /** Pass a handler to be executed when selected state changes */
  // onChange: PropTypes.func,
}
