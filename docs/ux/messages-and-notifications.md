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

> [!NOTE]
> Toast Notifications are not yet available. The NotificationsManager component
> required to display them is not yet implemented. Use Messages in the meantime.

Notifications are transient, dynamic messages that appear independently of the
page layout — typically as "toasts" in a fixed position on screen. Unlike
Messages, they are not tied to a specific location in the UI and dismiss
automatically or on user interaction.

Notifications are suited for communicating events that occur asynchronously or
outside the user's current focus — for example, the result of a background
operation.
