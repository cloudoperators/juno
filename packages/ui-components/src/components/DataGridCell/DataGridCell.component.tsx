/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { forwardRef, HTMLAttributes, ReactNode } from "react"

import { useDataGridContext, CellVerticalAlignmentType } from "../DataGrid/DataGrid.component"
import { TextContainType, textContainStyles } from "../../shared/textContain"

const isTruncatingTextContain = (textContain: TextContainType | undefined) =>
  textContain === "truncate-end" || textContain === "truncate-start"

const cellBaseStyles = (
  textContain: TextContainType | undefined,
  cellVerticalAlignment: CellVerticalAlignmentType | undefined
) => {
  // Truncation (`truncate-*`) is applied to an inner wrapper element rather than
  // the cell itself (see the render below for why), so it is excluded here. All
  // other textContain values apply directly to the cell.
  const isTruncating = isTruncatingTextContain(textContain)
  const cellTextContain = textContain && !isTruncating ? textContainStyles[textContain] : ""
  // A truncating cell must be allowed to shrink below its content's intrinsic
  // width, otherwise a grid track with an `auto`/`fr` minimum (e.g. a custom
  // `gridColumnTemplate="1fr 1fr"`) grows to fit the long text instead of letting
  // the inner wrapper truncate. `min-width: 0` removes that automatic minimum. The
  // default `minmax(0px, auto)` tracks already have a 0 minimum, but custom
  // templates may not, so we set it explicitly rather than rely on the track.
  const cellMinWidth = isTruncating ? "jn:min-w-0" : ""
  return `
		${cellTextContain}
		${cellMinWidth}
		${
      cellVerticalAlignment === "center"
        ? `
				jn:justify-center
				jn:flex
				jn:flex-col
			`
        : ""
    }
		jn:px-3
		jn:py-2
		jn:border-b
		jn:border-theme-background-lvl-2
		jn:h-full
	`
}

const cellCustomStyles = (colSpan: number | undefined) => {
  let styles
  if (colSpan) {
    styles = { gridColumn: `span ${colSpan} / span ${colSpan}` }
  }
  return styles
}

/**
 * `DataGridCell` is a versatile layout component for `DataGrid`, supporting cell-specific configurations
 * like column span and wrapping. It adapts orientation based on grid context.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-datagrid-datagridcell--docs
 * @see {@link DataGridCellProps}
 */
export const DataGridCell = forwardRef<HTMLDivElement, DataGridCellProps>(
  ({ colSpan, nowrap = false, textContain, verticalAlignment, className = "", children, ...props }, ref) => {
    const dataGridContext = useDataGridContext() || {}
    const effectiveVerticalAlignment = verticalAlignment ?? dataGridContext.cellVerticalAlignment
    // `textContain` is the canonical API; the deprecated `nowrap` boolean is
    // forwarded to `textContain="no-wrap"` only when `textContain` is not set.
    const effectiveTextContain = textContain ?? (nowrap ? "no-wrap" : undefined)
    const isTruncating = isTruncatingTextContain(effectiveTextContain)

    return (
      <div
        className={`juno-datagrid-cell ${cellBaseStyles(effectiveTextContain, effectiveVerticalAlignment)} ${className}`}
        style={cellCustomStyles(colSpan)}
        role="gridcell"
        ref={ref}
        {...props}
      >
        {isTruncating ? (
          // Truncation needs a block box with a bounded width, but a center-aligned
          // cell is a flex container — and `text-overflow: ellipsis` does not apply
          // to flex containers. So for `truncate-*` we wrap the content in an inner
          // block element that carries the truncate classes instead of putting them
          // on the cell. This keeps the cell free to stay a flex container and go on
          // centering its content vertically, while the inner element:
          //   - is `block`, so `text-overflow: ellipsis` applies to it;
          //   - stretches to the cell's width (flex `align-items: stretch`), giving
          //     it the bounded width the ellipsis needs — no explicit width required.
          // The cell itself carries `jn:min-w-0` (see cellBaseStyles) so it can shrink
          // within its grid track rather than being widened by the long content.
          //
          // For `truncate-start` the shared classes set `direction: rtl` so the
          // ellipsis falls at the start of the string. That also reorders the content
          // per the bidi algorithm, so edge punctuation in otherwise-LTR text (e.g.
          // `Ready!` or `/foo/bar`) would be displayed reordered (`!Ready`). Wrapping
          // the content in <bdi> isolates its own direction and prevents that.
          <span className={`jn:block ${textContainStyles[effectiveTextContain as TextContainType]}`}>
            {/* <bdi> ("bidirectional isolate") keeps the wrapper's `direction: rtl`
                from reordering the text — only the ellipsis moves to the start. */}
            {effectiveTextContain === "truncate-start" ? <bdi>{children}</bdi> : children}
          </span>
        ) : (
          children
        )}
      </div>
    )
  }
)

DataGridCell.displayName = "DataGridCell"

export interface DataGridCellProps extends HTMLAttributes<HTMLDivElement> {
  /** Defines the number of columns the cell spans. */
  colSpan?: number

  /**
   * If set, content within the cell will not wrap.
   * @default false
   * @deprecated Use `textContain="no-wrap"` instead. When `textContain` is set, `nowrap` is ignored.
   */
  nowrap?: boolean

  /**
   * Controls how the cell contains text that exceeds its available space:
   * truncation with an ellipsis (`"truncate-end"`, `"truncate-start"`), forced
   * breaking (`"break-word"`, `"break-all"`), or single-line (`"no-wrap"`).
   *
   * The `truncate-*` values only take visible effect when the cell has a bounded
   * width. In a `DataGrid` the column usually supplies this constraint. Truncation
   * is rendered on an inner wrapper element so it works regardless of
   * `cellVerticalAlignment` — vertical centering is preserved.
   *
   * Takes precedence over the deprecated `nowrap` prop.
   */
  textContain?: TextContainType

  /**
   * Overrides the parent `DataGrid`'s `cellVerticalAlignment` for this cell.
   * When not set, the cell inherits the grid-level setting.
   */
  verticalAlignment?: CellVerticalAlignmentType

  /** Components or elements to render within the DataGridCell. */
  children?: ReactNode

  /**
   * Additional CSS class names for custom styling.
   * @default ""
   */
  className?: string
}
