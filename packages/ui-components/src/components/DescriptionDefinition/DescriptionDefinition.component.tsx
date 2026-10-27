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
  const ddTextContain = textContain && !isTruncating ? textContainStyles[textContain] : ""
  // `jn:min-w-0` allows the <dd> grid item to shrink below its content's intrinsic
  // width within the outer grid track. Without it, long text widens the column instead
  // of clipping or wrapping. Excluded for `no-wrap` by design.
  const ddMinWidth = textContain && textContain !== "no-wrap" ? "jn:min-w-0" : ""
  return `
    jn:grid
    jn:items-start
    jn:border-b
    jn:border-theme-default
    jn:bg-dd-background
    jn:text-dd-text
    jn:p-2
    jn:col-span-3
    ${ddTextContain}
    ${ddMinWidth}
  `
}

export interface DescriptionDefinitionProps {
  /**
   * Content to be displayed as the description, accommodating text or more complex nodes to explain or define the associated term.
   */
  children: ReactNode
  /**
   * Additional class names for applying custom styles or overriding default styles on the <dd> element.
   */
  className?: string
  /**
   * Controls how the definition handles text that exceeds its available space:
   * truncation with an ellipsis (`"truncate-end"`, `"truncate-start"`), forced
   * breaking (`"break-word"`, `"break-all"`), or single-line (`"no-wrap"`).
   *
   * The `truncate-*` values only take visible effect when the definition has a bounded
   * width, which the parent `DescriptionList` column supplies.
   */
  textContain?: TextContainType
}

/**
 * Represents the definition or description in a description list, rendering as an HTML <dd> element.
 * Pairs with DescriptionTerm to complete the term-description association, offering flexible content styling.
 */
export const DescriptionDefinition: React.FC<DescriptionDefinitionProps> = ({
  children,
  className = "",
  textContain,
  ...props
}) => {
  const isTruncating = isTruncatingTextContain(textContain)
  return (
    <dd className={`dd ${baseStyles(textContain)} ${className}`} {...props}>
      {isTruncating ? (
        // `<dd>` is a grid container (`jn:grid`), and `text-overflow: ellipsis` does
        // not apply to grid containers. An inner block element carries the truncation
        // classes, stretching to the <dd>'s width to supply the bounded box the
        // ellipsis needs. `truncate-start` uses `direction: rtl` on the span; <bdi>
        // isolates the content's own direction so edge punctuation is not reordered.
        <span className={`juno-dd-truncate jn:block ${textContainStyles[textContain as TextContainType]}`}>
          {textContain === "truncate-start" ? <bdi>{children}</bdi> : children}
        </span>
      ) : (
        children
      )}
    </dd>
  )
}

export const DD = DescriptionDefinition
