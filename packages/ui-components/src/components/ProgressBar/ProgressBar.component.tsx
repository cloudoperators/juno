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
   * `simulated` runs a fake self-running progress that decelerates through irregular steps and parks near the end, for when the final amount of incoming data is unknown.
   * @default "determinate"
   */
  mode?: "determinate" | "busy" | "simulated"
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
 * Set `mode` to `busy` for an animated indeterminate indicator, or `simulated` for a fake
 * self-running progress when the final amount of incoming data is unknown.
 * @see {@link ProgressBarProps}
 */
export const ProgressBar = ({
  value = 0,
  mode = "determinate",
  "aria-label": ariaLabel = "Progress",
  width = "jn:w-44",
  className = "",
  ...props
}: ProgressBarProps): ReactNode => {
  const clampedValue = Math.min(100, Math.max(0, value))
  const indeterminate = mode === "busy" || mode === "simulated"
  return (
    <div
      role="progressbar"
      aria-valuenow={indeterminate ? undefined : clampedValue}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={ariaLabel}
      className={`juno-progressbar ${progressBarBaseStyles} ${width} ${className}`}
      {...props}
    >
      {mode === "busy" ? (
        <div
          className="jn:h-full jn:rounded-xl jn:bg-theme-progressbar"
          style={{ width: "4%", animation: "juno-progress-busy 1.1s ease-in-out infinite alternate" }}
        />
      ) : mode === "simulated" ? (
        <div className="juno-progressbar-simulated-fill jn:h-full jn:rounded-xl jn:bg-theme-progressbar" />
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
