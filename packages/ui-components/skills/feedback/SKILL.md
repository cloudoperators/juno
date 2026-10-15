---
name: feedback
description: >
  Use when surfacing feedback in a Juno app with @cloudoperators/juno-ui-components: a static
  inline Message vs a transient Toast notification fired through NotificationManager and the
  toast() API, the Status component for page/section empty, loading, error and no-matches states,
  Spinner / LoadingIndicator / ProgressBar for progress, and Badge / Pill for inline status labels
  and filter chips. Covers which component to reach for, the semantic variant to pick, and the
  message copy and dismissal rules the library does not enforce. For Status inside a DataGrid, see
  the datagrid skill; for form field validation, see the forms skill.
metadata:
  purpose: >
    Teaches developers to choose and compose the Juno feedback primitives — Message, Toast +
    NotificationManager, Status, Spinner, LoadingIndicator, ProgressBar, Badge, and Pill — into
    UX-compliant feedback, including the Message-vs-Notification decision, the semantic-variant
    rules, the required non-blocking scoping of loading/error states, and the copy and dismissal
    conventions the components leave to the consumer.
  type: core
  library: "@cloudoperators/juno-ui-components"
  library_version: "9.6.0"
sources:
  - cloudoperators/juno:packages/ui-components/src/components/Message/Message.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Message/Message.stories.ts
  - cloudoperators/juno:packages/ui-components/src/components/Toast/Toast.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Toast/Toast.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/NotificationManager/NotificationManager.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/NotificationManager/NotificationManager.types.ts
  - cloudoperators/juno:packages/ui-components/src/components/NotificationManager/NotificationManager.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Status/Status.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Status/Status.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Spinner/Spinner.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/LoadingIndicator/LoadingIndicator.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/ProgressBar/ProgressBar.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Badge/Badge.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Pill/Pill.component.tsx
  - cloudoperators/juno:docs/ux/messages-and-notifications.md
  - cloudoperators/juno:docs/ux/error-handling-loading-empty-states.md
  - cloudoperators/juno:docs/ux/transient-states-and-progress.md
  - cloudoperators/juno:docs/ux/semantic-variants.md
---

# Surface feedback in a Juno app

Feedback in Juno splits into three jobs, each with its own component. Pick by what you are telling
the user, not by appearance:

- **A condition the user needs to see in place** → `Message` (static, anchored in the layout).
- **A transient confirmation of a background/async result** → a notification via `toast()`, rendered
  by `NotificationManager`. Never use `Toast` directly.
- **A whole view/section/container has no data, is loading, or failed** → `Status`.
- **Something small is busy** → `Spinner`; **a whole view/panel is busy** → `LoadingIndicator`;
  **a quantifiable batch is progressing** → `ProgressBar`.
- **An inline label for an entity's property or state** → `Badge`; **a selected filter chip** → `Pill`.

Message and Notification are distinct mechanisms and must not be used interchangeably
(`docs/ux/messages-and-notifications.md`). All of these except Status/Spinner/LoadingIndicator/
ProgressBar/Pill take a **semantic `variant`** — choose it by meaning (see
[semantic variants](references/semantic-variants.md)).

## Setup

Notifications need a single `NotificationManager` mounted once near the app root. Everything else
imports from the package and renders inline:

```tsx
import { NotificationManager } from "@cloudoperators/juno-ui-components"

function App() {
  return (
    <>
      {/* your routes/content */}
      <NotificationManager position="bottom-right" />
    </>
  )
}
```

`NotificationManager` wraps the Sonner toaster and owns all timers, auto-dismiss, queueing, and
positioning. The `Message`, `Status`, `Badge`, etc. components only need the app wrapped in
`AppShellProvider` for theming — see the fundamentals skill if styles are missing.

## Core patterns

### Show an inline Message for a condition in the view

Use a `Message` for operation results, persistent warnings, or contextual guidance that belongs in
the layout. Pass short text via `text`; pass formatted content or links as `children` (children win
over `text`). Add a `title` only when the message needs a heading to stand apart — not by default
(`docs/ux/messages-and-notifications.md`, "Title"/"Content").

```tsx
import { Message } from "@cloudoperators/juno-ui-components"

function ReadOnlyBanner() {
  return (
    <Message variant="warning" title="Read-only access">
      You can view these resources but not modify them. Contact an admin to request write access.
    </Message>
  )
}
```

Place a Message as close as possible to what it relates to: form-level feedback at the top of the
form, page-level feedback below the page header (`docs/ux/messages-and-notifications.md`,
"Placement").

Make it `dismissible` only for one-off feedback after a user action. Keep it persistent
(non-dismissible, the default) for ongoing conditions like a permission limit or degraded state.

```tsx
import { Message } from "@cloudoperators/juno-ui-components"

function SavedConfirmation({ onClose }: { onClose: () => void }) {
  return <Message variant="success" text="Settings saved." dismissible onDismiss={onClose} />
}
```

`autoDismiss` (default `autoDismissTimeout` 10000 ms) is available but is only for low-stakes `info`
or `success` feedback — **never** for `error` or `warning`, and be aware it causes a layout shift
when it disappears (`docs/ux/messages-and-notifications.md`, "Dismissible Messages").

### Fire a transient notification with toast()

Trigger notifications through the `toast()` API; `NotificationManager` renders them. Use notifications
to confirm background/async results and low-interruption events outside the user's current focus — not
for errors or warnings that require action (use a `Message` for those).

```tsx
import { toast } from "@cloudoperators/juno-ui-components"

declare function deleteImage(id: string): Promise<void>

async function onDelete(id: string) {
  try {
    await deleteImage(id)
    toast.success("Image deleted", { description: "The image was removed." })
  } catch (err) {
    toast.error("Could not delete image", { description: (err as Error).message })
  }
}
```

The semantic helpers are `toast.info`, `toast.success`, `toast.warning`, `toast.error`, and
`toast.danger`; calling `toast(...)` bare renders as `info`. Options include `description`,
`duration` (ms; pass `Infinity` to persist until dismissed), `dismissible`, `toasterId` (to target a
specific manager instance), `id` (to update/dedupe), and the `onDismiss` / `onAutoClose` / `onClick`
callbacks. Read [notifications in depth](references/notifications.md) before using multiple managers,
updating a toast by id, non-dismissible toasts, or notification history.

### Render page/section empty, loading, and error states with Status

`Status` is the required default for any error, loading, empty, or no-matches state without a
dedicated local solution — at application, page, and section scope
(`docs/ux/error-handling-loading-empty-states.md`, note). It renders a centered `<div>`; outside a
DataGrid it applies its own top margin.

```tsx
import { Status, Button } from "@cloudoperators/juno-ui-components"

type Props = { isLoading: boolean; error?: Error; retry: () => void }

function ServicesView({ isLoading, error, retry }: Props) {
  if (isLoading) return <Status status="progress" title="Loading services…" />
  if (error) {
    return (
      <Status
        status="error"
        title="Could not load services"
        body={error.message}
        action={
          <Button variant="primary" onClick={retry}>
            Retry
          </Button>
        }
      />
    )
  }
  return <div>{/* data */}</div>
}
```

`status` is one of `"progress" | "error" | "empty" | "no-matches"` (default `"error"`); each ships
sensible default `title`/`body` copy you can override. For "BIG" server/routing errors, pass a `code`
(e.g. `404`, `500`) to render the large HTTP code with its standard title/body
(`docs/ux/error-handling-loading-empty-states.md`, "HTTP Error Code Reference"). Pass a stack trace or
server response via `details` to render a scrollable `<pre>`, and an `action` (typically a `Button`)
for retry/next-step. Distinguish `empty` ("no data exists") from `no-matches` ("nothing matches the
current filters") — they lead to different user actions. For `Status` **inside a DataGrid**, wrap it in
a spanning `DataGridRow`/`DataGridCell`; see the datagrid skill.

### Indicate busy state at the right scale

Match the indicator to the scope of what is busy (`docs/ux/transient-states-and-progress.md`):

- **Atomic element** (Button, Select) — use its built-in busy state; don't drop a Spinner next to it.
- **Small element / entity** (e.g. one row transitioning) — `Spinner`.
- **Whole view, panel, or large section** — `LoadingIndicator`.
- **Quantifiable batch** — `ProgressBar`.

```tsx
import { Spinner, LoadingIndicator } from "@cloudoperators/juno-ui-components"

function InlineBusy() {
  return <Spinner variant="primary" size="small" aria-label="Starting instance" />
}

function PanelBusy() {
  return <LoadingIndicator />
}
```

`Spinner` variants are `primary | danger | success | warning | default`; `size` accepts
`"small"`, `"large"`, or any CSS length. `LoadingIndicator` takes `size` (number/px, default 96) and a
`color` text-color class. Use **one** indicator at the tightest scope that covers everything busy —
don't stack a page spinner and per-item spinners for the same load
(`docs/ux/error-handling-loading-empty-states.md`, "Don't overdo it").

### Show quantifiable progress with ProgressBar

Use `ProgressBar` only when progress is a batch over multiple entities and can be expressed as a
percentage or current/target value (`docs/ux/transient-states-and-progress.md`, "Progress Bar"). For a
single transition or unquantifiable wait, use a `Spinner` instead.

```tsx
import { ProgressBar } from "@cloudoperators/juno-ui-components"

function Migration({ done, total }: { done: number; total: number }) {
  return <ProgressBar value={(done / total) * 100} aria-label={`Migrating ${done} of ${total} volumes`} />
}
```

`value` (0–100, clamped automatically) applies in the default `determinate` mode. Set `mode="busy"`
for an indeterminate animated bar when the operation affects multiple entities but the total is not
yet known. Always pass a meaningful `aria-label` (defaults to `"Progress"`).

### Label entity state with Badge, and filter chips with Pill

Use a `Badge` to label a property or state of an entity inline (e.g. a resource's status). Variants
are `default | info | success | warning | danger | error`. Pass `icon={true}` for the variant's
matching icon, or an icon name string for a specific one.

```tsx
import { Badge } from "@cloudoperators/juno-ui-components"

function HealthBadge({ healthy }: { healthy: boolean }) {
  return healthy ? <Badge variant="success" icon text="Healthy" /> : <Badge variant="error" icon text="Unhealthy" />
}
```

A `Badge` renders as a `<span>` by default; pass `onClick` to render a `<button>` or `href` to render
an `<a>` (href wins), with `disabled` support. Use `Pill` for a key/value chip, typically a selected
filter value, with an optional close button:

```tsx
import { Pill } from "@cloudoperators/juno-ui-components"

declare function removeFilter(id: string): void

function RegionFilterPill() {
  return (
    <Pill
      uid="region:eu-de-1"
      pillKey="region"
      pillKeyLabel="Region"
      pillValue="eu-de-1"
      pillValueLabel="EU-DE-1"
      closeable
      onClose={(_event, id) => removeFilter(id)}
    />
  )
}
```

`pillValue` is required. `onClose` and `onClick` receive `(event, id)` where `id` is `uid` → falling
back to `pillKey` → `pillValue`.

## Common mistakes

- **CRITICAL — Transient toast for an error that needs action.** A `toast.error` auto-dismisses and
  leaves no trace; a user who looks away misses it. For errors or warnings the user must act on, render
  an anchored `Message` (or a `Status` with a retry `action`) instead
  (`docs/ux/messages-and-notifications.md`, "Notifications" / "Auto-Dismiss").
- **CRITICAL — Rendering `Toast` directly.** `Toast` is purely presentational and has no lifecycle;
  mounting it yourself gets no timers, queueing, or positioning. Always trigger via `toast()` with a
  mounted `NotificationManager` (`docs/ux/messages-and-notifications.md`, "Toast and NotificationManager").
- **HIGH — No empty/loading/error state (blank screen).** Rendering nothing while loading or on
  failure looks broken. Use `Status` for every such state that lacks a dedicated solution; never leave
  a silent non-responding UI (`docs/ux/error-handling-loading-empty-states.md`, note & "Communicate
  Clearly").
- **HIGH — `autoDismiss` on an `error`/`warning` Message.** These must stay until the condition
  resolves. Reserve `autoDismiss` for low-stakes `info`/`success`
  (`docs/ux/messages-and-notifications.md`, "Dismissible Messages").
- **HIGH — Page-level busy state for a scoped load.** A full-view `LoadingIndicator` while only a
  DataGrid is fetching blocks navigation and context. Scope the busy state to the tightest boundary
  that covers what is busy (`docs/ux/error-handling-loading-empty-states.md`, "Use Sensible Boundaries").
- **MEDIUM — Picking a variant for color, not meaning.** Using `danger` for emphasis or `success` for a
  neutral confirmation degrades the signal. Match the variant to intent; `error` = something failed,
  `danger` = destructive/irreversible action (`docs/ux/semantic-variants.md`).
- **MEDIUM — `ProgressBar` for an unquantifiable wait.** If you can't express progress as a
  number/percentage, use a `Spinner` (or `mode="busy"` when the total is merely not-yet-known)
  (`docs/ux/transient-states-and-progress.md`, "Spinner" / "Progress Bar").
- **MEDIUM — Confusing `empty` with `no-matches`.** "No data exists" and "nothing matches your filters"
  need different copy and next actions; hint at loosening filters for `no-matches`
  (`docs/ux/error-handling-loading-empty-states.md`, "Empty State").

## Completion

Verify:

1. Each feedback surface uses the right component: static condition → `Message`; async confirmation →
   `toast()`; absent/loading/failed container → `Status`; busy → `Spinner`/`LoadingIndicator`;
   quantifiable batch → `ProgressBar`; inline label → `Badge`/`Pill`.
2. Exactly one `NotificationManager` is mounted near the app root, and no `Toast` is rendered directly.
3. Every `variant` is chosen by meaning, and no `error`/`warning` feedback relies on auto-dismiss.
4. Loading/error/empty states are scoped to the tightest boundary, not the whole app, and empty vs
   no-matches copy is distinct.
5. `ProgressBar` and `Spinner`/`LoadingIndicator` carry a meaningful `aria-label`.
6. Run `npm exec --no -- intent validate packages/ui-components/skills` and fix any errors.

If a state (error, empty, loading) cannot be exercised in your harness, report it as unverified rather
than assuming it renders.

## References

- [semantic variants](references/semantic-variants.md) — read before choosing a `variant`, especially
  for the `error` vs `danger` and `warning` vs `error` distinctions.
- [notifications in depth](references/notifications.md) — read before scoping toasts with `toasterId`,
  updating/dismissing a toast by id, non-dismissible or infinite toasts, lifecycle callbacks, or
  notification history and persistence.
