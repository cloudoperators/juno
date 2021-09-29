import React from "react"
import PropTypes from "prop-types"
import { useGrid } from "../Grid/Grid.component.js"

const autoColumnStyles = `
	flex-grow-1
	flex-shrink-0
	flex-basis-0
`
const widthColumnStyles = `
	flex-grow-0
	flex-shrink-1
	flex-basis-auto
`

const getBaseClass = (width) => {
	width ? widthColumnStyles :  autoColumnStyles
}

export const GridColumn = ({
	width,
	cols,
	className,
	children,
	...props
}) => {
	const grid = useGrid()
	// Figure out whether we a) are inside a grid context and b) the grid has a custom number of columns set then use these or default to 12:
	const gridColumns = grid ? ( grid.columns ? grid.columns : 12 ) : 12
	// Figure out whether the column has a number of cols to span set or a width and use these (width overriding cols):
	const columnWidth = width ? width + '%' : ( cols ? (cols * 100 / gridColumns + '%') : null )
	// Set flex-basis to the value passed as width if any:
	const columnFlexBasis = columnWidth
	const columnStyle = { width: columnWidth, flexBasis: columnFlexBasis }
	return (
		<div className={`grid-column ${getBaseClass(width)} ${className}`} style={columnStyle} >
			{children}
		</div>
	)
}


GridColumn.propTypes = {
	/** The number of reference columns in a fixed grid to span the column over. Requires to have columns=[n] set to the parent Grid.*/
	cols: PropTypes.number,
	/** The width in percent as a number without "%" for auto-layout grids TODO: or "auto". If a width is given, it will override the "cols" prop. */
	width: PropTypes.number,
	/** Add a class to a grid column */
	className: PropTypes.string,
	/** Children to be rendered in the column element */
	children: PropTypes.node
}

GridColumn.defaultProps = {
	width: null,
	cols: null,
	className: "",
}