/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"
import "./progressbar.css"

const progressBarBaseStyles =
  "jn:border jn:border-theme-progressbar jn:rounded-xl jn:h-3 jn:p-[0.125rem] jn:overflow-hidden"

export interface ProgressBarProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /**
   * Fill percentage of the track.
   * @default 0
   */
  value?: number
  /**
   * When `true`, shows an animated indeterminate indicator. Disables the `value` prop.
   * @default false
   */
  busy?: boolean
  /** Accessible label for screen readers.
   * @default "Progress"
   */
  "aria-label"?: string
  /** Tailwind width class to apply to the track.
   * @default "jn:w-44"
   */
  width?: string
  /** Add custom class names. */
  className?: string
}

/**
 * The `ProgressBar` component visually represents the completion status of a task or process.
 * It accepts a `value` between 0 and 100 and renders a filled track scaled to that percentage.
 * Values outside the valid range are clamped automatically.
 * Set `busy` to `true` to show an animated indeterminate state when progress is unknown.
 * @see {@link ProgressBarProps}
 */
export const ProgressBar = ({
  value = 0,
  busy = false,
  "aria-label": ariaLabel = "Progress",
  width = "jn:w-44",
  className = "",
  ...props
}: ProgressBarProps): ReactNode => {
  const clampedValue = Math.min(100, Math.max(0, value))
  return (
    <div
      role="progressbar"
      aria-valuenow={busy ? undefined : clampedValue}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={ariaLabel}
      className={`juno-progressbar ${progressBarBaseStyles} ${width} ${className}`}
      {...props}
    >
      {busy ? (
        <div
          className="jn:h-full jn:rounded-xl jn:bg-theme-progressbar"
          style={{ width: "4%", animation: "juno-progress-busy 1.1s ease-in-out infinite alternate" }}
        />
      ) : (
        clampedValue > 0 && (
          <div
            className="jn:h-full jn:rounded-xl jn:bg-theme-progressbar jn:transition-[width] jn:duration-300 jn:ease-out jn:motion-reduce:transition-none"
            style={{ width: `${clampedValue}%`, minWidth: "0.5rem" }}
          />
        )
      )}
    </div>
  )
}
