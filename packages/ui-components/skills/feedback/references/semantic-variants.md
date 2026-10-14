# Semantic variants

Read this when choosing a `variant` for `Message`, `Toast` / `toast()`, or `Badge` — and whenever you
are unsure between `error`/`danger` or `warning`/`error`.

Several Juno feedback components accept a semantic `variant` prop. The variant is **not styling** — it
carries meaning and must be chosen by the nature of the information, never for aesthetic effect
(`docs/ux/semantic-variants.md`). Misusing a variant (e.g. `danger` for emphasis, `success` for a
neutral confirmation) degrades the signal value and breaks product consistency.

## The variants

| Variant   | Meaning                  | Typical use                                               |
| --------- | ------------------------ | --------------------------------------------------------- |
| `info`    | Neutral, informational   | General guidance, hints, status with no urgency           |
| `success` | Positive outcome         | Confirmation that an operation completed successfully     |
| `warning` | Caution required         | Non-blocking issue the user should be aware of or act on  |
| `error`   | Something went wrong     | A failure the user should be informed about               |
| `danger`  | High-risk or destructive | Destructive actions, data loss, irreversible consequences |

## `error` vs. `danger`

Use `error` for system or operation failures — something that already went wrong. Use `danger` for
situations where the user is about to take a destructive or irreversible action. A failed API call is
an `error`; a delete confirmation is `danger`.

## `warning` vs. `error`

A `warning` does not mean something has failed — it signals that something _might_ go wrong, or that
the user should proceed carefully. An `error` means something already has gone wrong.

## Which components take which variants

- **`Message`** (`MessageVariantType`) and **`Toast`** / the `toast()` helpers: `info | success |
warning | error | danger`. `Message` and bare `toast()` default to `info`. Note the semantic
  `info` variant maps internally to the library's neutral/default icon.
- **`Badge`** (`BadgeVariantType`): `default | info | success | warning | danger | error`. The extra
  `default` is the neutral, un-semantic chip; use it for labels that carry no status meaning.
- **`Spinner`** uses a `variant` for color only (`primary | danger | success | warning | default`) —
  this is purely a tint, not the semantic-variant contract above. Pick `primary` for ordinary loading.

Match the variant to intent in every case. The same word (`danger`, `error`) means the same thing
across all of these components, which is exactly why consistent use matters.
