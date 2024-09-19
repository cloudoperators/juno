/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const dataGridStyles = `
	jn-grid
	jn-items-stretch
`

const gridTemplate = (
  columns: number,
  columnMaxSize: string,
  columnMinSize: string,
  minContentColumns: number[] | undefined,
  gridColumnTemplate: string | undefined
) => {
  let styles

  // gridColumnTemplate was passed. Return it and ignore all other settings
  if (gridColumnTemplate && gridColumnTemplate.length > 0) {
    styles = { gridTemplateColumns: gridColumnTemplate }
    return styles
  }

  let generatedTemplate = ""
  // if a configuration for min-content columns has been passed iteratively generate the gridTemplateColumn sizes,
  // else generate a simpler statement using the repeat function
  if (minContentColumns && Array.isArray(minContentColumns) && minContentColumns.length > 0) {
    // for each configured column check if it should have normal or min-content sizing and add the respective string to the template string
    const iteration = [...Array<unknown>(columns)]
    iteration.map((_, i) => {
      generatedTemplate += minContentColumns.includes(i)
        ? "min-content "
        : `minmax(${columnMinSize}, ${columnMaxSize}) `
    })
  } else {
    generatedTemplate = `repeat(${columns}, minmax(${columnMinSize}, ${columnMaxSize}))`
  }

  styles = { gridTemplateColumns: generatedTemplate }
  return styles
}

interface DataGridContextType {
  cellVerticalAlignment?: CellVerticalAlignmentType
}

const DataGridContext = React.createContext<DataGridContextType>({})

export const useDataGridContext = () => React.useContext(DataGridContext)

// TODO: allow for passing in props addItems, addItemsLabel, search, etc.:
/** The DataGrid component is the main way to display lists of items that have a bunch of metadata that you want to display.
 */
export const DataGrid = ({
  columns = 1,
  columnMaxSize = "auto",
  columnMinSize = "0px",
  minContentColumns,
  gridColumnTemplate,
  cellVerticalAlignment = "center",
  className = "",
  children = null,
  ...props
}: DataGridProps) => {
  const dataGridConf = {
    cellVerticalAlignment: cellVerticalAlignment,
    // selectable: selectable
  }
  return (
    <DataGridContext.Provider value={dataGridConf}>
      <div
        className={`juno-datagrid ${dataGridStyles} ${className}`}
        style={gridTemplate(columns, columnMaxSize, columnMinSize, minContentColumns, gridColumnTemplate)}
        role="grid"
        {...props}
      >
        {children}
      </div>
    </DataGridContext.Provider>
  )
}

export type CellVerticalAlignmentType = "center" | "top"

export interface DataGridProps {
  /** Set number of columns */
  columns?: number
  /** Set column max sizing. Default: auto. For equally sized columns use "1fr" */
  columnMaxSize?: string
  /** Set column minimum size. Default: 0px */
  columnMinSize?: string
  /** Specify which columns should be sized by minimum content size (i.e. as small as possible). Pass an array of column numbers (first column is 0) */
  minContentColumns?: number[]
  /** Set the grid column template in CSS grid 'grid-template-columns' notation. If this prop is passed, all other template props (columns, columnMaxSize,
   *  columnMinSize, minContentColumns) are ignored. The easiest case where you might need this is e.g. if you want to set specific column widths for some
   *  or all columns, e.g. "20% auto auto 10%" (The first column is set to 20%, the next two to auto size, the last to 10%). */
  gridColumnTemplate?: string
  /** Set the vertical alignment for all GridCells. Default: center. PLEASE NOTE: the center alignment is achieved by using a flexbox column layout,
   * which means that all child elements of the cell will be stacked vertically. To avoid this, wrap the elements in their own div */
  cellVerticalAlignment?: CellVerticalAlignmentType
  /** Children to render in the DataGrid */
  children?: JSX.Element | (JSX.Element | null)[] | null
  /** Add a class name */
  className?: string
}
