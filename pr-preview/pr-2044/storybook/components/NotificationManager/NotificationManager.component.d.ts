import { default as React } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { NotificationToast, ToastPosition } from './NotificationManager.types';
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
     * Optional Sonner toaster id. Use this to scope notifications to a specific
     * NotificationManager instance.
     */
    id?: string;
    /**
     * Controls whether notifications can be dismissed manually.
     *
     * Set to `false` to render non-dismissible notifications that disappear only
     * after their configured duration (or when dismissed programmatically).
     * Can be overridden for individual notifications by passing
     * `dismissible` in `toast()` options.
     *
     * @example
     * toast("Background sync started", { dismissible: false })
     *
     * @default true
     */
    dismissible?: boolean;
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
    duration?: number;
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
    visibleToasts?: number;
    /**
     * Position of the notification stack on screen.
     *
     * @default "bottom-right"
     */
    position?: ToastPosition;
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
export declare const NotificationManager: ({ id, dismissible, duration, visibleToasts, position, }: NotificationManagerProps) => React.JSX.Element;
export declare const toast: NotificationToast;
//# sourceMappingURL=NotificationManager.component.d.ts.map