/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { forwardRef, HTMLAttributes } from "react"

export type DividerSpacing =
  | "0"
  | "px"
  | "0.5"
  | "1"
  | "1.5"
  | "2"
  | "2.5"
  | "3"
  | "3.5"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "14"
  | "16"
  | "20"
  | "24"
  | "28"
  | "32"
  | "36"
  | "40"
  | "44"
  | "48"
  | "52"
  | "56"
  | "60"
  | "64"
  | "72"
  | "80"
  | "96"

const spacingClass = (spacing: DividerSpacing): string => {
  switch (spacing) {
    case "0":
      return "jn:py-0"
    case "px":
      return "jn:py-px"
    case "0.5":
      return "jn:py-0.5"
    case "1":
      return "jn:py-1"
    case "1.5":
      return "jn:py-1.5"
    case "2":
      return "jn:py-2"
    case "2.5":
      return "jn:py-2.5"
    case "3":
      return "jn:py-3"
    case "3.5":
      return "jn:py-3.5"
    case "4":
      return "jn:py-4"
    case "5":
      return "jn:py-5"
    case "6":
      return "jn:py-6"
    case "7":
      return "jn:py-7"
    case "8":
      return "jn:py-8"
    case "9":
      return "jn:py-9"
    case "10":
      return "jn:py-10"
    case "11":
      return "jn:py-11"
    case "12":
      return "jn:py-12"
    case "14":
      return "jn:py-14"
    case "16":
      return "jn:py-16"
    case "20":
      return "jn:py-20"
    case "24":
      return "jn:py-24"
    case "28":
      return "jn:py-28"
    case "32":
      return "jn:py-32"
    case "36":
      return "jn:py-36"
    case "40":
      return "jn:py-40"
    case "44":
      return "jn:py-44"
    case "48":
      return "jn:py-48"
    case "52":
      return "jn:py-52"
    case "56":
      return "jn:py-56"
    case "60":
      return "jn:py-60"
    case "64":
      return "jn:py-64"
    case "72":
      return "jn:py-72"
    case "80":
      return "jn:py-80"
    case "96":
      return "jn:py-96"
    default:
      return "jn:py-1"
  }
}

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Additional CSS class(es) to apply.
   * @default ""
   */
  className?: string

  /**
   * Override the separator color. Pass a Tailwind `border-color` class, e.g. `jn:border-juno-blue-3`.
   */
  color?: string

  /**
   * Adjust vertical spacing around the separator. Accepts any Tailwind spacing token.
   * @default "1"
   */
  spacing?: DividerSpacing
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ className = "", color, spacing = "1", ...props }, ref) => {
    return (
      <div ref={ref} className={`juno-divider juno-divider-wrapper ${spacingClass(spacing)} ${className}`} {...props}>
        <hr className={`juno-divider-separator jn:h-px ${color ?? "jn:border-theme-divider"}`} />
      </div>
    )
  }
)

Divider.displayName = "Divider"
