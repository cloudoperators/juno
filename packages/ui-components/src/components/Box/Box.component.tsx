/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"

const boxBaseStyles = `
  jn:text-sm
  jn:rounded
  jn:border
`

const boxDefaultStyles = `
  jn:bg-theme-box-default
  jn:border-theme-box-default
`

const boxTitleStyles = `
  jn:font-bold
  jn:mb-1
`

export type BoxVariantType = "info" | "warning" | "danger" | "error" | "success"

// When adjusting the padding, make sure to update the tests to verify Box variations with and without padding correctly.
const boxPadding = `
  jn:py-1
  jn:px-2
`

const boxVariantStyles: Record<BoxVariantType, string> = {
  info: "jn:bg-theme-box-info jn:border-theme-box-info",
  success: "jn:bg-theme-box-success jn:border-theme-box-success",
  warning: "jn:bg-theme-box-warning jn:border-theme-box-warning",
  error: "jn:bg-theme-box-error jn:border-theme-box-error",
  danger: "jn:bg-theme-box-danger jn:border-theme-box-danger",
}

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The child elements to be rendered inside the Box.
   */
  children?: ReactNode

  /**
   * Optional title rendered above the content in bold.
   */
  title?: string

  /**
   * Determines whether the Box should render without padding.
   * When true, padding is removed.
   * @default false
   */
  unpad?: boolean

  /**
   * Additional CSS classes to apply to the Box component.
   * @default ""
   */
  className?: string

  /**
   * Specify an optional semantic variant that determines the appearance of a Box. If not passed, the Box will appear neutral (default).
   */
  variant?: BoxVariantType
}

/**
 * The `Box` component is a versatile container with optional padding and a subtle border.
 * It is perfect for annotations, supplementary explanations, and remarks where more visually
 * pronounced components like a MessageBox or InfoBox would be excessive.
 * This component typically displays small text but can contain any child elements as required, which supports implementing the Inline Action Box pattern.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-box--docs
 * @see {@link BoxProps}
 */
export const Box = ({ children, title, unpad = false, className = "", variant, ...props }: BoxProps): ReactNode => {
  const colorStyles = variant ? boxVariantStyles[variant] : boxDefaultStyles
  const combinedClassName = `juno-box ${variant ? `juno-box-${variant}` : "juno-box-default"} ${boxBaseStyles} ${colorStyles} ${!unpad ? boxPadding : ""} ${className}`
  return (
    <div className={combinedClassName} {...props}>
      {title && <strong className={`juno-box-title ${boxTitleStyles}`}>{title}</strong>}
      <div>{children}</div>
    </div>
  )
}
