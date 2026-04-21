/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Toaster, toast as sonnerToast } from "sonner"
import { NotificationOptions, ToastHandler, ToastId, ToastMessage, ToastVariants } from "./NotificationManager.types"
import { Toast } from "../Toast"

/**
 * NotificationManager wraps the Sonner toast library and supports rendering
 * multiple notifications simultaneously, each with independent durations and
 * dismissibility settings.
 *
 * @example
 * // Multiple notifications appear at the same time, each with its own timer
 * toast("First notification", { duration: 2000 })
 * toast("Second notification", { duration: 5000 })
 * // First closes at 2s, second at 5s, independently
 */
export interface NotificationManagerProps {
  /**
   * Controls whether notifications can be dismissed manually.
   *
   * Set to `false` to render non-dismissible notifications that disappear only
   * after their configured duration (or when dismissed programmatically).
   * Can be overridden for individual notifications by passing
   * `closeButton` in `toast()` options.
   *
   * @example
   * toast("Background sync started", { closeButton: false })
   *
   * @default true
   */
  dismissible?: boolean

  /**
   * Default display time for notifications in milliseconds.
   *
   * Use this to customize how long timed notifications stay visible before
   * auto-dismiss.
   * Can be overridden for individual notifications by passing
   * `duration` in `toast()` options.
   *
   * @example
   * toast("Changes saved", { duration: 10000 })
   *
   * @default 4000
   */
  duration?: number

  /**
   * Maximum number of notifications visible on screen at once.
   *
   * Additional notifications queue internally and appear as others close.
   * If more toasts exist than this limit allows, hidden toasts remain invisible
   * (CSS `data-visible="false"`). Handling extreme overflow (e.g., >10 simultaneous
   * toasts) via custom scrolling/pagination is not a common requirement and should
   * be addressed per app design if needed.
   *
   * @default 3
   */
  visibleToasts?: number
}

/**
 * NotificationManager component that wraps Sonner's Toaster.
 *
 * All lifecycle logic (timers, auto-dismiss, dismissal handling) is delegated
 * to the Sonner library, allowing the Toast component to be a fully logic-less
 * presentational component.
 *
 * Existing notifications can be targeted by id in order to update or dismiss
 * them programmatically.
 *
 * @example
 * const notificationId = toast.error("Error occurred")
 * toast("Error resolved", { id: notificationId })
 * toast.dismiss(notificationId)
 *
 * Events can also be fired per toast call:
 * - shown: when `toast(...)` returns an id for the created notification
 * - onclick/dismissed/disappeared: through `onClick`, `onDismiss` and `onAutoClose` in toast options
 *
 * @example
 * toast.info("Upload started", {
 *   onClick: () => console.log("run the callback passed via onClick"),
 *   onDismiss: () => console.log("dismissed by user or programmatically"),
 *   onAutoClose: () => console.log("closed after duration"),
 * })
 *
 * **Visibility & Overflow Behavior:**
 * - By default, `expand={true}` renders all visible notifications at full height
 *   with consistent spacing, rather than stacking diminished copies.
 * - The `visibleToasts` prop (default: 3) limits how many notifications display
 *   simultaneously. Additional notifications queue invisibly and appear as others close.
 *
 * **Notification History:**
 * - `toast.getToasts()` returns currently active (not dismissed) notifications.
 * - `toast.getHistory()` returns all notifications created during the current runtime,
 *   including notifications that have already been dismissed/expired.
 *
 * If persistence across page reloads/navigation/app restarts is needed, it must be
 * implemented with an explicit storage mechanism (e.g., application state, backend,
 * or localStorage). Long-term retention is intentionally the consumer's responsibility.
 *
 * @see Toast - The presentational component (should remain logic-less)
 * @see https://sonner.emilkowal.ski/
 */
export const NotificationManager = ({
  dismissible = true,
  duration = 4000,
  visibleToasts = 3,
  ...props
}: NotificationManagerProps) => (
  <Toaster
    expand={true}
    className={`juno-notification-manager`}
    closeButton={dismissible}
    duration={duration}
    visibleToasts={visibleToasts}
    {...props}
  />
)

type NotificationToast = ((_message: ToastMessage, _data?: NotificationOptions) => ToastId) &
  Omit<typeof sonnerToast, "info" | "success" | "warning" | "error"> & {
    info: ToastHandler
    success: ToastHandler
    warning: ToastHandler
    error: ToastHandler
    danger: ToastHandler
  }

/**
 * Builds a semantic toast handler that renders Juno's `Toast` component through
 * Sonner's `custom` API.
 *
 * Why this exists:
 * - Keeps Sonner in charge of queueing, timing, and dismissal lifecycle.
 * - Allows Juno-specific markup and visual semantics per variant.
 * - Preserves id-based dismiss/update capabilities from Sonner.
 *
 * The incoming message/description can be values or lazy functions; both are
 * normalized before rendering into the custom toast body.
 */
const createSemanticToast = (_variant: ToastVariants): ToastHandler => {
  return (message, data) => {
    const title = typeof message === "function" ? message() : message
    const description = typeof data?.description === "function" ? data.description() : data?.description

    // Use Sonner's custom renderer but keep dismissal bound to Sonner toast id.
    return sonnerToast.custom(
      (id) => (
        <Toast
          variant={_variant}
          className={data?.className}
          onDismiss={() => {
            sonnerToast.dismiss(id)
          }}
        >
          <div className="jn:flex jn:flex-col jn:gap-1">
            <div>{title}</div>
            {description ? <div className="jn:text-theme-medium">{description}</div> : null}
          </div>
        </Toast>
      ),
      data
    )
  }
}

/**
 * Sonner exposes a broader internal set of toast types
 * (`normal | action | success | info | warning | error | loading | default`),
 * but the semantic helper surface is intentionally aligned with Juno semantics.
 * Juno notification API overrides the semantic variant helpers to:
 * `info | success | warning | error | danger`.
 *
 * Calling `toast()` without a variant should be treated as the default `info`
 * semantic variant.
 *
 * All other Sonner methods, such as `dismiss`, `getHistory`, `getToasts`,
 * `loading`, `promise`, and `custom`, remain available on the exported API.
 *
 * For now, all semantic variants intentionally use Sonner's default toast
 * rendering. Variant-specific rendering can be introduced later without
 * changing the public API.
 */
export const toast: NotificationToast = Object.assign(
  ((message: ToastMessage, data?: NotificationOptions) => sonnerToast(message, data)) as NotificationToast,
  sonnerToast,
  {
    info: createSemanticToast("info"),
    success: createSemanticToast("success"),
    warning: createSemanticToast("warning"),
    error: createSemanticToast("error"),
    danger: createSemanticToast("danger"),
  }
)
