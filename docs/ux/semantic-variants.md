[← Back to Foundations](foundations.md)

# Semantic Variants

Several Juno components — including `Message`, `Badge`, `Toast`, and `Tooltip` — accept a `variant` prop that controls their visual appearance and communicates meaning to the user. These variants are **semantic**: they carry a defined meaning and must be chosen based on the nature of the information being conveyed, not for aesthetic reasons.

Juno uses the following semantic variants:

| Variant   | Meaning                  | Typical use                                               |
| --------- | ------------------------ | --------------------------------------------------------- |
| `info`    | Neutral, informational   | General guidance, hints, status messages with no urgency  |
| `success` | Positive outcome         | Confirmation that an operation completed successfully     |
| `warning` | Caution required         | Non-blocking issue the user should be aware of or act on  |
| `error`   | Something went wrong     | A failure the user should be informed about               |
| `danger`  | High-risk or destructive | Destructive actions, data loss, irreversible consequences |

## `error` vs. `danger`

Use `error` for system or operation failures. Use `danger` for situations where the user is about to take a destructive or irreversible action. A failed API call is an `error`; a delete confirmation is `danger`.

## `warning` vs. `error`

A `warning` does not mean something has failed — it signals that something _might_ go wrong, or that the user should proceed carefully. An `error` means something already has gone wrong.

## Use Variants as Intended

Always choose the variant that matches the semantic intent. Misusing variants — for example using `danger` for emphasis, or `success` for a neutral confirmation — degrades the signal value for users and breaks consistency across the product.
