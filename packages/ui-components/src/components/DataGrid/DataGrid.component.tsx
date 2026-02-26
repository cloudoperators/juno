/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, HTMLAttributes, ReactNode, useContext } from "react"

const dataGridStyles = `
	jn:grid
	jn:items-stretch
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

const DataGridContext = createContext<DataGridContextType>({})

export const useDataGridContext = () => useContext(DataGridContext)

// TODO: allow for passing in props addItems, addItemsLabel, search, etc.:
/**
 * The `DataGrid` component displays tabular data with customizable columns and layout.
 * It supports interactive styling through child components like `DataGridRow` for advanced interactions.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-datagrid-datagrid--docs
 * @see {@link DataGridProps}
 */
export const DataGrid = ({
  columns = 1,
  columnMaxSize = "auto",
  columnMinSize = "0px",
  minContentColumns,
  gridColumnTemplate,
  cellVerticalAlignment = "center",
  className = "",
  children,
  ...props
}: DataGridProps): ReactNode => {
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

export interface DataGridProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Specifies the number of columns in the grid.
   * @default 1
   */
  columns?: number

  /**
   * Defines maximum column sizing.
   * @default "auto"
   */
  columnMaxSize?: string

  /**
   * Specifies minimum column size.
   * @default "0px"
   */
  columnMinSize?: string

  /** Array of indices for columns sized by minimum content. */
  minContentColumns?: number[]

  /** Custom CSS grid-template-columns. Overwrites other sizing props. */
  gridColumnTemplate?: string

  /**
   * Vertical alignment for all grid cells, using a flexbox column layout.
   * @default "center"
   */
  cellVerticalAlignment?: CellVerticalAlignmentType

  /** Components or elements to render within the DataGrid container. */
  children?: ReactNode

  /**
   * Additional class names for styling.
   * @default ""
   */
  className?: string
}
