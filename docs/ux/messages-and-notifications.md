[← Back to Contents Overview](0_contents.md)

# Messages and Notifications

Juno provides two distinct mechanisms for communicating status, feedback, and
information to users: Messages and Notifications. They serve different purposes
and must not be used interchangeably.

## Messages

A Message is a static UI element used to display contextual information,
warnings, or feedback directly within the page or view. Messages are part of
the rendered layout — they appear where placed and remain visible until the
view changes or the condition that caused them is resolved.

Use a Message to:

- Communicate the result or consequence of a user action inline
- Surface a persistent warning or constraint relevant to the current view
- Provide contextual guidance or information directly related to nearby content

Messages use [Semantic Variants](semantic-variants.md) (`info`, `success`,
`warning`, `error`, `danger`) to communicate intent. Always choose the variant
that matches the nature of the message, not for visual effect. The default
variant is `info`.

### Title

A Message may optionally include a title. Use one only when the message needs
a clear heading to stand apart from surrounding content — for example, when
the message is prominent or contains multiple sentences. Do not add a title by
default.

### Content

Pass simple text via the `text` prop. For content that requires formatting or
includes links, pass it as children instead.

### Placement

Place a Message as close as possible to the content or action it relates to.
For form-level feedback, place it at the top of the form. For page-level
feedback, place it below the page header.

### Dismissible Messages

A Message can be made dismissible by the user via a close button (`dismissible`
prop). Use this for one-off feedback following a user action, where the message
does not represent an ongoing condition.

Keep Messages persistent (non-dismissible) when they communicate a constraint
or warning that remains relevant for the duration of the user's session on that
view — for example, a permission limitation or a known degraded state.

Never make `error` or `warning` messages auto-dismissing. The `autoDismiss`
prop (default timeout: 10 seconds) is available but should only be used for
low-stakes `info` or `success` feedback that the user does not need to act on.
Be aware that an auto-dismissed Message will cause a layout shift as it
disappears.

## Notifications

Notifications are transient, dynamic messages that appear independently of the
page layout — typically as "toasts" in a fixed position on screen. Unlike
Messages, they are not tied to a specific location in the UI and dismiss
automatically or on user interaction.

Use Notifications to:

- Confirm the result of a background or asynchronous operation
- Communicate events that occur outside the user's current focus
- Provide low-interruption feedback that does not require user action

Do not use Notifications for persistent errors or warnings that require user
attention or action. Use a [Message](#messages) placed close to the relevant
content instead.

### Toast and NotificationManager

Juno provides two components for notifications:

**`NotificationManager`** handles all notification lifecycle — timers,
auto-dismiss, queuing, and screen position. Place it once near the root of your
application.

**`Toast`** is the presentational component rendered by `NotificationManager`.
Do not use `Toast` directly — trigger notifications via the `toast()` API
instead.

Notifications use the same semantic variants as Messages: `info`, `success`,
`warning`, `error`, and `danger`.

### Auto-Dismiss

Notifications auto-dismiss after a default timeout. Do not rely on auto-dismiss
alone for `error` or `warning` notifications that require user action — these should stay until acknowledged or actively dismissed. For these cases, a [Message](#messages) may be the better choice.

### Dismissible

By default, notifications include a close button. Dismissibility can be
configured globally on `NotificationManager` or overridden per notification.

### Multiple Notifications

`NotificationManager` supports displaying multiple notifications simultaneously.
Additional notifications queue and appear as others close.
