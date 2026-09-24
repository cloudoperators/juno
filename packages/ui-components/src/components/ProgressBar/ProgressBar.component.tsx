/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"
import "./progressbar.css"

const progressBarBaseStyles =
  "jn:border jn:border-theme-progressbar jn:rounded-xl jn:h-3 jn:p-[0.125rem] jn:overflow-hidden"

const simulatedSteps = [40, 58, 72, 85, 95]

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
   * `simulated` runs a fake self-running progress that advances through steps separated by randomized delays and parks near the end, for when the final amount of incoming data is unknown.
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
  const safeValue = Number.isFinite(value) ? value : 0
  const clampedValue = Math.min(100, Math.max(0, safeValue))
  const indeterminate = mode === "busy" || mode === "simulated"

  // Indeterminate modes expose no value range at all, so screen readers announce
  // "busy" rather than a bogus 0-100 scale with no current value.
  const rangeAttrs = indeterminate ? {} : { "aria-valuenow": clampedValue, "aria-valuemin": 0, "aria-valuemax": 100 }

  const [simulatedWidth, setSimulatedWidth] = React.useState(0)

  // Precompute the step delays once so the randomized pacing stays stable across
  // re-renders and StrictMode's double-invoked effect, keeping the run deterministic.
  const stepDelays = React.useMemo(() => {
    let elapsed = 2700
    return simulatedSteps.map((target) => {
      const at = elapsed
      elapsed += 4050 + Math.random() * 5400
      return { target, at }
    })
  }, [])

  React.useEffect(() => {
    if (mode !== "simulated") return
    setSimulatedWidth(0)
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) {
      setSimulatedWidth(simulatedSteps[simulatedSteps.length - 1])
      return
    }
    const timers: ReturnType<typeof setTimeout>[] = []
    // Nudge the bar to a small value almost immediately so the user gets instant
    // feedback that work has started, before the first real step at ~2.7s.
    timers.push(setTimeout(() => setSimulatedWidth(7), 200))
    stepDelays.forEach(({ target, at }) => {
      timers.push(setTimeout(() => setSimulatedWidth(target), at))
    })
    return () => {
      timers.forEach(clearTimeout)
      setSimulatedWidth(0)
    }
  }, [mode, stepDelays])
  return (
    <div
      {...props}
      role="progressbar"
      {...rangeAttrs}
      aria-label={ariaLabel}
      className={`juno-progressbar juno-progressbar-${mode} ${progressBarBaseStyles} ${width} ${className}`}
    >
      {mode === "busy" ? (
        <div className="juno-progressbar-busy-fill jn:h-full jn:rounded-xl jn:bg-theme-progressbar" />
      ) : mode === "simulated" ? (
        <div
          className="juno-progressbar-simulated-fill jn:h-full jn:rounded-xl jn:bg-theme-progressbar jn:transition-[width] jn:duration-300 jn:ease-out jn:motion-reduce:transition-none"
          style={{ width: `${simulatedWidth}%` }}
        />
      ) : (
        <div
          className="jn:h-full jn:rounded-xl jn:bg-theme-progressbar jn:transition-[width] jn:duration-300 jn:ease-out jn:motion-reduce:transition-none"
          style={{ width: `${clampedValue}%` }}
        />
      )}
    </div>
  )
}
