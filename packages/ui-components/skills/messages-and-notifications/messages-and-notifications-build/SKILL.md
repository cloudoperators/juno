---
name: messages-and-notifications-build
description: >-
  Generate correct Juno Message or Notification usage from a described situation. Use
  when the user says "add a success message", "show a toast", "notify the user that…",
  "display a warning banner", or describes feedback to surface and asks for a Message
  or notification. Relies on the messages-and-notifications-spec skill for all rules.
requires:
  - messages-and-notifications-spec
sources:
  - skills/messages-and-notifications/messages-and-notifications-spec/references/messages-and-notifications-spec.md
---

Produce a correct `Message` or Notification usage that conforms to the **MessagesAndNotificationsSpec**. Read `../messages-and-notifications-spec/references/messages-and-notifications-spec.md` before composing anything.

## Source of truth — do not restate

All rules live in the **messages-and-notifications-spec** skill (`requires: [messages-and-notifications-spec]`): the mechanism selection table, the `Message` and notification APIs, and Invariants `MN-1`…`MN-10`. This skill adds only the build procedure. If you are tempted to write a rule here, it belongs in `messages-and-notifications-spec.md` instead.

## Procedure

### 1 · Choose the mechanism

From the user's description, determine whether the feedback is **anchored in the view** (→ `Message`) or **transient and out-of-focus** (→ Notification), using the selection table. The decisive checks:

- Is it a non-data state (loading, error, empty, no-matches) in a data container? → Not here; use `Status` (`MN-9`).
- Does it persist or require user action? → `Message` (`MN-1`).
- Is it a background/async result or a low-interruption event? → Notification.

If the situation is ambiguous, ask once before producing output.

### 2 · Choose the variant and copy

- `variant` by semantic intent (`MN-8`); default `info`.
- For a `Message`: simple text → `text`; formatted or linked content → `children` (`MN-7`). Add a `title` only if prominent or multi-sentence (`MN-4`).
- For a Notification: pass the message to `toast()` or a variant helper; use `description` for secondary detail.

### 3 · Choose dismissal behaviour

| Situation                                      | Rule                                                     |
| ---------------------------------------------- | -------------------------------------------------------- |
| `Message`, ongoing condition/constraint        | persistent — default `dismissible={false}` (`MN-5`)      |
| `Message`, one-off post-action feedback        | `dismissible` (`MN-5`)                                   |
| `Message`, low-stakes `info`/`success`         | `autoDismiss` permitted (`MN-3`)                         |
| `Message`, `error`/`warning`                   | never `autoDismiss` (`MN-3`)                             |
| Notification, `error`/`warning` needing action | prefer a `Message`; do not rely on auto-dismiss (`MN-3`) |

### 4 · Compose the output

**Message:**

```tsx no-check
<Message variant="success" text="Changes saved." />
```

Place it close to the related content (`MN-6`).

**Notification:**

```tsx no-check
// Mount once, near the application root:
function App() {
  return <NotificationManager />
}

// Trigger a notification from anywhere:
toast.success("Changes saved.")
```

Never render `Toast` directly (`MN-2`).

Add only the props determined above; do not add props that are redundant with the defaults.

### 5 · Output specification

Emit a single self-contained snippet containing the usage. After the snippet, append a **Setup Notes** section listing the required `@cloudoperators/juno-ui-components` imports — and, for notifications, the one-time `NotificationManager` placement near the app root.

## Self-check before returning

Verify the output satisfies every Invariant (`MN-1`…`MN-10`). In particular: the mechanism matches the situation (`MN-1`, `MN-9`); no `autoDismiss` or auto-dismiss reliance on an `error`/`warning` (`MN-3`); no direct `Toast` render (`MN-2`); variant chosen by intent (`MN-8`); `title` only when warranted (`MN-4`).
