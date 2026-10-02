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
   * Fill percentage of the track. Only applies in `determinate` mode.
   * @default 0
   */
  value?: number
  /**
   * Visual mode of the progress bar.
   * `determinate` fills the track to `value`.
   * `busy` shows an animated indeterminate indicator.
   * @default "determinate"
   */
  mode?: "determinate" | "busy"
  /** Accessible label for screen readers.
   * @default "Progress"
   */
  "aria-label"?: string
  /** Add custom class names. */
  className?: string
}

/**
 * The `ProgressBar` component visually represents the completion status of a task or process.
 * It accepts a `value` between 0 and 100 and renders a filled track scaled to that percentage.
 * Values outside the valid range are clamped automatically.
 * Set `mode` to `busy` for an animated indeterminate indicator.
 * @see {@link ProgressBarProps}
 */
export const ProgressBar = ({
  value = 0,
  mode = "determinate",
  "aria-label": ariaLabel = "Progress",
  className = "",
  ...props
}: ProgressBarProps): ReactNode => {
  const safeValue = Number.isFinite(value) ? value : 0
  const clampedValue = Math.min(100, Math.max(0, safeValue))
  const indeterminate = mode === "busy"

  // Indeterminate mode exposes no value range at all, so screen readers announce
  // "busy" rather than a bogus 0-100 scale with no current value.
  const rangeAttrs = indeterminate ? {} : { "aria-valuenow": clampedValue, "aria-valuemin": 0, "aria-valuemax": 100 }

  return (
    <div
      {...props}
      role="progressbar"
      {...rangeAttrs}
      aria-label={ariaLabel}
      className={`juno-progressbar juno-progressbar-${mode} ${progressBarBaseStyles} ${className}`}
    >
      {mode === "busy" ? (
        <div className="juno-progressbar-busy-fill jn:h-full jn:bg-theme-progressbar" />
      ) : (
        <div
          className="juno-progressbar-determinate-fill jn:h-full jn:rounded-xl jn:bg-theme-progressbar jn:transition-[width] jn:duration-300 jn:ease-out jn:motion-reduce:transition-none"
          style={{ width: `${clampedValue}%` }}
        />
      )}
    </div>
  )
}
