/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect }  from "react"
import PropTypes from "prop-types"
import { useDataListContext } from "../DataList/DataList.component.js"
import { DataListCheckboxCell } from "../DataListCheckboxCell/DataListCheckboxCell.component.js" 

const datalistrowbasestyles = `
	jn-flex
	jn-rounded-[3px]
	jn-border
	jn-border-theme-datalist-row
	jn-mb-2
`

const rowselectedstyle = `
	jn-bg-theme-datalistrow-selected
`

export const DataListRow = ({
	selected,
	disabled,
	onChange,
	className,
	children,
	...props
}) => {
	const dataListContext = useDataListContext() || {}
	const selectable = dataListContext.selectable
	
	const [isSelected, setIsSelected] = useState(false)
	useEffect( () => {
		setIsSelected(selected)
	}, [selected])
	
	const toggleSelected = (event) => {
		setIsSelected(!isSelected)
		onChange(event)
	}
	
	return (
		<li className={`juno-datalist-row ${datalistrowbasestyles} ${ selectable && isSelected ? rowselectedstyle : '' }${className}`} {...props} >
			{ selectable ? <DataListCheckboxCell selected={selected} disabled={disabled} onChange={toggleSelected} /> : null }
			{children}
		</li>
	)
}

DataListRow.propTypes = {
	/** Custom classname */
	className: PropTypes.string,
	/** Children to render in the DataListRow */
	children: PropTypes.node,
}

DataListRow.defaultProps = {
	className: "",
	children: null,
}