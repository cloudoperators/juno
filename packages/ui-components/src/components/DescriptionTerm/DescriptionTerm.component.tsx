/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"
import { TextContainType, textContainStyles } from "../../shared/textContain"

const isTruncatingTextContain = (textContain: TextContainType | undefined) =>
  textContain === "truncate-end" || textContain === "truncate-start"

const baseStyles = (textContain: TextContainType | undefined) => {
  const isTruncating = isTruncatingTextContain(textContain)
  const dtTextContain = textContain && !isTruncating ? textContainStyles[textContain] : ""
  // `jn:min-w-0` allows the <dt> grid item to shrink below its content's intrinsic
  // width within the outer grid track. Without it, long text widens the column instead
  // of clipping or wrapping. Excluded for `no-wrap` by design.
  const dtMinWidth = textContain && textContain !== "no-wrap" ? "jn:min-w-0" : ""
  return `
    jn:grid
    jn:items-start
    jn:border-b
    jn:border-theme-default
    jn:bg-dt-background
    jn:text-dt-text
    jn:font-bold
    jn:gap-y-[0.25rem]
    jn:p-2
    jn:col-span-1
    jn:group-[.align-right]:text-right
    jn:group-[.align-left]:text-left
    ${dtTextContain}
    ${dtMinWidth}
  `
}

export interface DescriptionTermProps {
  /**
   * Content to be displayed as the term, which could be simple text or any ReactNode, providing semantic meaning to the associated description.
   */
  children: ReactNode
  /**
   * Custom class names to apply additional styling to the <dt> element, useful for overrides or custom styles.
   */
  className?: string
  /**
   * Controls how the term handles text that exceeds its available space:
   * truncation with an ellipsis (`"truncate-end"`, `"truncate-start"`), forced
   * breaking (`"break-word"`, `"break-all"`), or single-line (`"no-wrap"`).
   *
   * The `truncate-*` values only take visible effect when the term has a bounded
   * width, which the parent `DescriptionList` column supplies.
   */
  textContain?: TextContainType
}

/**
 * Represents a term in a description list, rendering an HTML <dt> element.
 * Used to denote terms, headers, or keys in a semantic way, allowing for flexible styling.
 */
export const DescriptionTerm: React.FC<DescriptionTermProps> = ({
  children,
  className = "",
  textContain,
  ...props
}) => {
  const isTruncating = isTruncatingTextContain(textContain)
  return (
    <dt className={`dt ${baseStyles(textContain)} ${className}`} {...props}>
      {isTruncating ? (
        // `<dt>` is a grid container (`jn:grid`), and `text-overflow: ellipsis` does
        // not apply to grid containers. An inner block element carries the truncation
        // classes, stretching to the <dt>'s width to supply the bounded box the
        // ellipsis needs. `truncate-start` uses `direction: rtl` on the span; <bdi>
        // isolates the content's own direction so edge punctuation is not reordered.
        <span className={`juno-dt-truncate jn:block ${textContainStyles[textContain as TextContainType]}`}>
          {textContain === "truncate-start" ? <bdi>{children}</bdi> : children}
        </span>
      ) : (
        children
      )}
    </dt>
  )
}

export const DT = DescriptionTerm
