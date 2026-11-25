---
name: messages-and-notifications-spec
description: >-
  Use when communicating feedback to the user with a Juno Message or Notification —
  covers the Message vs Notification decision, the Message prop API, the toast() and
  NotificationManager API, semantic variants, and the invariants that govern correct
  usage. The messages-and-notifications-build and messages-and-notifications-validate
  skills rely on this skill for all rules.
sources:
  - src/components/Message/Message.component.tsx
  - src/components/Toast/Toast.component.tsx
  - src/components/NotificationManager/NotificationManager.component.tsx
---

`Message` and `Toast`/`NotificationManager` are Juno's two mechanisms for communicating feedback to users. Use a **Message** for feedback anchored in the page; use a **Notification** (via `toast()`) for transient, out-of-layout feedback. Non-data states (loading, error, empty, no-matches) are **not** covered here — they belong to `Status` (see **status-spec**).

## The rule set lives in one place

[references/messages-and-notifications-spec.md](references/messages-and-notifications-spec.md) is the single source of truth — the two-mechanism model, the mechanism selection table, the `Message` and notification APIs, and Invariants (`MN-1`…`MN-10`).

Task skills **do not restate** these rules. They declare `requires: [messages-and-notifications-spec]` and cite rule IDs:

- **messages-and-notifications-build** maps a described situation to the correct mechanism and props.
- **messages-and-notifications-validate** checks existing usage against the spec.

If you are tempted to add or change a rule, edit `messages-and-notifications-spec.md` — never duplicate the rule into a consuming skill.

## Mental model

- **Message** = static, layout-anchored, persists until its condition resolves or the view changes. Default `variant` is `info`; not dismissible and not auto-dismissing by default.
- **Notification** = transient, positioned globally by `NotificationManager`, auto-dismisses after `duration` (default 4000 ms) and queues beyond `visibleToasts` (default 3).
- `Toast` is presentational only — notifications are triggered through the `toast()` API, never by rendering `Toast` yourself.
- Both mechanisms use the same semantic `variant` set; pick by intent, not appearance.

## When NOT to use a Message or Notification

Neither is for non-data states. Loading, error, empty, and no-matches states inside a data container are owned by `Status` (**status-spec**, `INV-1`; and `MN-9` here). Use a Message or Notification for feedback about actions and events — not to represent the state of a data collection.

## Choosing between them

The selection table in `messages-and-notifications-spec.md` is the decision tree. The load-bearing rule: a persistent or actionable error/warning is always a **Message**, never a Notification (`MN-1`, `MN-3`).
