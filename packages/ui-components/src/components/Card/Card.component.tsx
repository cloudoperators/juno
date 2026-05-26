/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { forwardRef, HTMLAttributes, MouseEventHandler, ReactNode, Ref } from "react"

const cardStyles = `
  jn:text-sm
  jn:rounded-lg
  jn:bg-theme-card-default
  jn:border
  jn:border-theme-card-default
  jn:shadow-theme-default
`

const cardPadding = "jn:p-4"

export interface CardProps extends HTMLAttributes<HTMLElement> {
  /**
   * Components or elements to be rendered as content.
   */
  children?: ReactNode

  /**
   * Optional padding for the Card component.
   * @default false
   */
  padding?: boolean

  /**
   * Additional CSS styles to apply.
   * @default ""
   */
  className?: string

  /**
   * When set, renders the card as an <a> element.
   */
  href?: string

  /**
   * When set (without href), renders the card as a <button> element.
   */
  onClick?: MouseEventHandler<HTMLElement>

  /**
   * Disables interaction; native disabled on <button>, aria-disabled + stripped href on <a>, renders "not-allowed"-cursor.
   * @default false
   */
  disabled?: boolean
}

/**
 * The `Card` component acts as a versatile container for various types of content, providing
 * an optional padding feature for additional layout flexibility. It is commonly used for
 * displaying information or grouping elements, allowing for consistent styling and shadow effects.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-card--docs
 * @see {@link CardProps}
 */
export const Card = forwardRef<HTMLElement, CardProps>(
  ({ children, padding = false, className = "", href = "", onClick, disabled = false, ...props }, ref) => {
    const combinedClassName = `juno-card ${cardStyles} ${padding ? cardPadding : ""} ${className} ${disabled ? "jn:cursor-not-allowed" : ""}`

    // Handle click event when disabled
    const handleClick: MouseEventHandler<HTMLElement> = (event) => {
      if (disabled) {
        event.preventDefault()
        return
      }
      onClick?.(event)
    }

    if (href) {
      // Render as <a> - takes precedence over button
      return (
        <a
          ref={ref as Ref<HTMLAnchorElement>}
          href={disabled ? undefined : href}
          aria-disabled={disabled ? true : undefined}
          className={`${combinedClassName} jn:block jn:w-full jn:overflow-hidden jn:whitespace-nowrap jn:text-ellipsis jn:truncate jn:text-inherit`}
          onClick={handleClick}
          {...props}
        >
          {children}
        </a>
      )
    }

    if (onClick) {
      // Render as <button>
      return (
        <button
          ref={ref as Ref<HTMLButtonElement>}
          type="button"
          className={`${combinedClassName} jn:text-left`}
          onClick={handleClick}
          disabled={disabled}
          {...props}
        >
          {children}
        </button>
      )
    }

    // Default to <div> rendering
    return (
      <div ref={ref as Ref<HTMLDivElement>} className={combinedClassName} {...props}>
        {children}
      </div>
    )
  }
)

Card.displayName = "Card"
