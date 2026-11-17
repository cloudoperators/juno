---
name: messages-and-notifications-validate
description: >-
  Check an existing Juno Message or Notification usage against the
  MessagesAndNotificationsSpec and report violations. Use when the user says "validate
  this Message", "check this toast", "review this notification", "is this message
  correct", or pastes Message or notification code to be audited. Relies on the
  messages-and-notifications-spec skill for all rules.
requires:
  - messages-and-notifications-spec
sources:
  - skills/messages-and-notifications/messages-and-notifications-spec/references/messages-and-notifications-spec.md
---

Audit a `Message` or Notification usage against the **MessagesAndNotificationsSpec** and report findings. Read `../messages-and-notifications-spec/references/messages-and-notifications-spec.md` first. This skill never defines what is correct — it only checks, locates, and explains.

## Source of truth — do not restate

All rules live in the **messages-and-notifications-spec** skill (`requires: [messages-and-notifications-spec]`): the mechanism selection table, the `Message` and notification APIs, and Invariants `MN-1`…`MN-10`. Cite these IDs in every finding. If a check is not backed by a spec rule, it is not a finding — do not invent rules.

## Procedure

1. **Identify the mechanism.** Determine whether the code uses a `Message`, a notification (`toast()`/`NotificationManager`), or a direct `Toast` render (itself an `MN-2` violation).
2. **Check the mechanism fits the situation.** Verify a persistent or actionable error/warning uses a `Message`, not a Notification (`MN-1`), and that a non-data state was not implemented here instead of `Status` (`MN-9`). If the situation cannot be determined from context, note this as a warning rather than an error.
3. **Check dismissal behaviour.** `error`/`warning` must not `autoDismiss` or rely on auto-dismiss (`MN-3`); dismissible vs. persistent matches the message's nature (`MN-5`).
4. **Check content and variant.** `text` vs. `children` (`MN-7`), `title` used only when warranted (`MN-4`), variant chosen by intent (`MN-8`).
5. **Assert the remaining invariants.** Check `MN-2`, `MN-6`, and `MN-10` directly against the code.

## Finding format

One entry per violation:

| field    | content                                                                                                           |
| -------- | ----------------------------------------------------------------------------------------------------------------- |
| rule     | the ID being violated, e.g. `MN-1`                                                                                |
| severity | **error** (invariant violation or structural issue) · **warning** (likely wrong or redundant, needs confirmation) |
| location | file:line, or the offending JSX element or `toast()` call                                                         |
| expected | what the rule requires                                                                                            |
| actual   | what the code does                                                                                                |
| fix      | the minimal change that satisfies the rule                                                                        |

## Reporting rules

- Rank **errors** before **warnings**; within a severity, group by rule ID.
- Report a clean pass explicitly — e.g. "Conforms to MessagesAndNotificationsSpec; `MN-1`…`MN-10` hold." Never answer with silence.
- Validation **reports**, it does not regenerate. Give the minimal fix per finding; do not rewrite the whole usage. If the user then wants a rebuild, that is the **messages-and-notifications-build** skill's job.
- Distinguish a genuine violation from a deliberate escape hatch: if the code diverges but a comment or prop documents an intentional exception, flag it as a **warning** noting the stated reason, not an **error**.
