# MessagesAndNotificationsSpec

Juno provides two distinct mechanisms for communicating feedback, status, and information to users: **Messages** and **Notifications**. They serve different purposes and are not interchangeable. A third surface, `Status`, owns non-data states (loading, error, empty, no-matches) and is governed by the separate **status-spec** skill.

## The two mechanisms

|           | Message                                                                          | Notification                                                                            |
| --------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Component | `Message`                                                                        | `Toast` rendered by `NotificationManager`, triggered via `toast()`                      |
| Lifetime  | Static — persists until its condition resolves or the view changes               | Transient — auto-dismisses after a timeout or is dismissed by the user                  |
| Placement | Anchored in the page layout, close to the content it relates to                  | Out of layout, positioned globally by `NotificationManager`                             |
| Use for   | Inline result of an action, persistent constraints/warnings, contextual guidance | Background/async results, out-of-focus events, low-interruption non-actionable feedback |

## Choosing a mechanism

| Situation                                                                     | Mechanism                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------- |
| Inline result or consequence of a user action, tied to a location in the view | Message                                                   |
| A persistent warning or constraint relevant to the current view               | Message (non-dismissible)                                 |
| Contextual guidance or information related to nearby content                  | Message                                                   |
| Result of a background or asynchronous operation                              | Notification                                              |
| An event that occurs outside the user's current focus                         | Notification                                              |
| Low-interruption feedback that requires no user action                        | Notification                                              |
| A persistent error or warning that **requires** user attention or action      | Message — never a Notification                            |
| A non-data state in a data container (loading, error, empty, no-matches)      | `Status` — see **status-spec** (not Message/Notification) |

## Message prop API

| Prop                 | Type                                                      | Default  | Notes                                                                                   |
| -------------------- | --------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------- |
| `variant`            | `"info" \| "success" \| "warning" \| "error" \| "danger"` | `"info"` | Semantic variant; choose by intent, not appearance (`MN-8`).                            |
| `title`              | `ReactNode`                                               | —        | Optional heading. Add only when the message needs to stand apart (`MN-4`).              |
| `text`               | `string`                                                  | —        | Simple text content. For formatted content or links use `children` instead (`MN-7`).    |
| `children`           | `ReactNode`                                               | —        | Content with formatting or links; takes precedence over `text`.                         |
| `dismissible`        | `boolean`                                                 | `false`  | Renders a user close button (`MN-5`).                                                   |
| `autoDismiss`        | `boolean`                                                 | `false`  | Auto-hides after `autoDismissTimeout`. Low-stakes `info`/`success` only (`MN-3`).       |
| `autoDismissTimeout` | `number`                                                  | `10000`  | Auto-dismiss delay in ms. An auto-dismissed Message causes a layout shift as it leaves. |
| `onDismiss`          | `() => void`                                              | —        | Called when the message is dismissed.                                                   |
| `className`          | `string`                                                  | `""`     | Additional classes on the root `<div>`.                                                 |

A `Message` renders `children` when present, otherwise `text`.

## Notification API

Notifications are driven by two components plus a function API.

- **`NotificationManager`** handles the entire notification lifecycle — timers, auto-dismiss, queueing, and screen position. Render it **once** near the root of the application (`MN-2`).
- **`Toast`** is the presentational component `NotificationManager` renders. **Never render `Toast` directly** (`MN-2`).
- **`toast()`** triggers a notification. Variant helpers: `toast.info()`, `toast.success()`, `toast.warning()`, `toast.error()`, `toast.danger()`. Dismiss programmatically with `toast.dismiss(id)`.

### `NotificationManager` props

| Prop            | Type                                                                                              | Default          | Notes                                                     |
| --------------- | ------------------------------------------------------------------------------------------------- | ---------------- | --------------------------------------------------------- |
| `dismissible`   | `boolean`                                                                                         | `true`           | Manager-level default; overridable per `toast()` call.    |
| `duration`      | `number`                                                                                          | `4000`           | Default auto-dismiss duration in ms.                      |
| `visibleToasts` | `number`                                                                                          | `3`              | Maximum simultaneously visible; the rest queue (`MN-10`). |
| `position`      | `"top-left" \| "top-right" \| "bottom-left" \| "bottom-right" \| "top-center" \| "bottom-center"` | `"bottom-right"` | Screen position for all notifications.                    |

### `toast()` options

`id`, `duration`, `dismissible`, `description`, `position`, `onDismiss`, `onAutoClose`, `onClick`, `className`. Per-call options override the manager defaults.

Notifications use the same semantic variants as Messages (`MN-8`).

## Invariants

**MN-1:** Messages and Notifications are not interchangeable. A persistent or actionable error/warning uses a `Message`, never a Notification.

**MN-2:** Never render `Toast` directly — trigger notifications via the `toast()` API. Render `NotificationManager` exactly once, near the application root.

**MN-3:** Never make `error` or `warning` Messages auto-dismiss. `autoDismiss` is for low-stakes `info`/`success` feedback the user need not act on. By the same rule, do not rely on a notification's auto-dismiss for an `error`/`warning` that requires action — prefer a `Message`.

**MN-4:** A `Message` `title` is optional. Add one only when the message is prominent or multi-sentence and needs a heading. Do not add a title by default.

**MN-5:** A dismissible `Message` (`dismissible`) is for one-off feedback following a user action. Keep a `Message` persistent (non-dismissible) when it communicates an ongoing condition or constraint relevant for the duration of the user's session on that view.

**MN-6:** Place a `Message` as close as possible to the content or action it relates to — form-level feedback at the top of the form, page-level feedback below the page header. Notifications are positioned globally by `NotificationManager`; never place them in the layout.

**MN-7:** Pass simple `Message` text via `text`; pass content that needs formatting or links via `children`.

**MN-8:** Variants (`info`, `success`, `warning`, `error`, `danger`) are semantic — choose the one matching the nature of the information, never for visual effect. Default is `info`. (For the meaning of each variant, see the Semantic Variants guidance.)

**MN-9:** Neither mechanism is for non-data states. Loading, error, empty, and no-matches states inside a data container belong to `Status` (**status-spec**, `INV-1`). Use a `Message` or Notification for feedback about actions and events — not to represent the state of a data collection.

**MN-10:** Notifications queue — `visibleToasts` (default 3) caps how many render at once. Do not assume all triggered notifications are simultaneously visible.
