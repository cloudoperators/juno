# Notifications in depth

Read this when you go beyond a single fire-and-forget `toast()` call: scoping toasts to a specific
manager, updating or dismissing a toast programmatically, non-dismissible or infinite toasts,
lifecycle callbacks, or notification history and persistence.

`NotificationManager` wraps the Sonner toast library and owns all lifecycle — timers, auto-dismiss,
queueing, screen position. The `Toast` component is purely presentational and is rendered _by_ the
manager; never mount it yourself. Trigger everything through the `toast()` API
(`docs/ux/messages-and-notifications.md`, "Toast and NotificationManager").

## Manager props

Mount one `NotificationManager` near the app root. Props and defaults:

- `id` — optional Sonner toaster id. Scope `toast()` calls to this instance by passing a matching
  `toasterId` in the options.
- `dismissible` (default `true`) — whether toasts show a close button. Overridable per toast.
- `duration` (default `4000` ms) — default visible time before auto-dismiss. Overridable per toast.
  Pass `Infinity` to keep toasts until manually dismissed.
- `visibleToasts` (default `3`) — max shown at once; the rest queue and appear as others close.
- `position` (default `"bottom-right"`) — one of `top-left | top-right | bottom-left | bottom-right |
top-center | bottom-center`.

## The toast() options

Each `toast()` / `toast.<variant>()` call takes `(message, options?)`. Options
(`NotificationOptions`): `id`, `toasterId`, `duration`, `dismissible`, `description` (string or
`() => ReactNode`), `onDismiss`, `onAutoClose`, `onClick`, `style`, `className`, `descriptionClassName`,
`position`. The call returns the toast id.

## Scope toasts to a specific manager

```tsx
import { NotificationManager, toast } from "@cloudoperators/juno-ui-components"

const TOASTER_ID = "uploads"

function UploadsPanel() {
  return (
    <>
      <button onClick={() => toast.success("Upload complete", { toasterId: TOASTER_ID })}>Finish</button>
      <NotificationManager id={TOASTER_ID} position="top-right" />
    </>
  )
}
```

## Update or dismiss a toast by id

Capture the returned id to replace a toast's content in place (e.g. pending → resolved) or dismiss it:

```tsx
import { toast } from "@cloudoperators/juno-ui-components"

declare function sync(): Promise<void>

async function run() {
  const id = toast.info("Syncing…", { duration: Infinity })
  try {
    await sync()
    toast.success("Synced", { id })
  } catch {
    toast.error("Sync failed", { id })
  }
}
```

Passing the same `id` reuses that toast instead of stacking a new one. `toast.dismiss(id)` closes it
programmatically.

## Non-dismissible and infinite toasts

Set `dismissible: false` (manager-wide, or per toast) to drop the close button so a toast disappears
only on timeout or programmatic dismissal. A per-toast `dismissible` overrides the manager default.
Combine with `duration: Infinity` for a critical alert that stays until explicit action — but prefer a
`Message` when the user genuinely must act (`docs/ux/messages-and-notifications.md`, "Notifications").

```tsx
import { toast } from "@cloudoperators/juno-ui-components"

toast.warning("Background sync running", { dismissible: false })
toast.info("Important", { duration: Infinity })
```

## Lifecycle callbacks

`onDismiss` fires on manual close; `onAutoClose` fires when the duration expires; `onClick` fires on
click. Use them to react to a notification's resolution — e.g. undo flows or analytics.

```tsx
import { toast } from "@cloudoperators/juno-ui-components"

toast.success("Item archived", {
  onDismiss: () => console.log("dismissed"),
  onAutoClose: () => console.log("auto-closed"),
})
```

## History and persistence

`toast.getToasts()` returns currently active notifications; `toast.getHistory()` returns everything
created during the current runtime, including dismissed/expired ones. History is **in-memory only** —
if you need notifications to survive reloads, navigation, or app restarts you must persist them
yourself (application state, backend, or `localStorage`). Long-term retention is intentionally the
consumer's responsibility.

> Note: `toast.loading`, `toast.promise`, and `toast.custom` are passed through from Sonner and
> bypass Juno's `Toast` renderer, so they use Sonner's default styling rather than Juno's semantics.
> Prefer the semantic helpers (`info`/`success`/`warning`/`error`/`danger`) for consistent appearance.
