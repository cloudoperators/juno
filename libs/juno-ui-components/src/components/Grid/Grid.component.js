/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"

/**
A general-use grid. Use in conjunction with GridColumn and GridRow.
*/

export const Grid = ({
	auto,
	children,
	className,
	...props
}) => {
	// auto grid overrides for columns:
	const autoStyles = {
		"--grid-column-flex-grow": "1",
		"--grid-column-flex-shrink": "0",
		"--grid-column-flex-basis": "0",
		"--grid-column-default-width": "auto",
	}
	// Override column vars in case 'auto' was passed:
	const gridStyles = auto ? autoStyles : {}
	return (
		<div className={`juno-grid ${className}`}  style={gridStyles} {...props} >
			{children}
		</div>
	)
}


Grid.propTypes = {
	/** Whether columns should auto-size or not, default is false. This effectively overrides the 12-columns default grid */
	auto: PropTypes.bool,
	/** The children to render in the grid */
	children: PropTypes.node,
	/** Add a class to the grid container */
	className: PropTypes.string,
}

Grid.defaultProps = {
	auto: false,
	className: "",
	children: null,
}
