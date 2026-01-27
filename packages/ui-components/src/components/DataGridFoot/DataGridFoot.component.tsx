/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

/**
 * `DataGridFoot` is used to display a footer section for a `DataGrid`, supporting summary data or controls
 * related to the grid content. It is styled consistently with other grid sections.
 *
 * @component
 * @param {string} [className] Additional CSS classes for custom styling. Defaults to an empty string.
 * @param {React.ReactNode} [children] Content or elements to render within the footer.
 * @returns {React.ReactElement} A footer section for use in data grids with custom content.
 */
export const DataGridFoot: React.FC<DataGridFootProps> = ({ className = "", children, ...props }) => {
  return (
    <tfoot className={`juno-datagrid-foot ${className}`} {...props}>
      {children}
    </tfoot>
  )
}

export interface DataGridFootProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  /**
   * Elements or components to render within the DataGridFoot.
   */
  children?: React.ReactNode

  /**
   * Custom CSS class names for styling.
   * @default ""
   */
  className?: string
}
