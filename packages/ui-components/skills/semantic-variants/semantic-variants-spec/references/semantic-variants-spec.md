# SemanticVariantsSpec

Several Juno components accept a semantic `variant` prop that both styles the element and carries a fixed meaning. The variant must be chosen by the nature of the information, never for visual effect. This is a **cross-component** rule set: the same five variants mean the same thing everywhere they appear, so consistency cannot be enforced by any single component's skill. This spec owns the meanings (`SEMV-1`…`SEMV-5`); the **semantic-variants-review** skill sweeps a change for violations.

## The five variants

| Variant   | Meaning                  | Use for                                                    |
| --------- | ------------------------ | ---------------------------------------------------------- |
| `info`    | Neutral, informational   | General guidance, hints, status with no urgency            |
| `success` | Positive outcome         | Confirmation that an operation completed successfully      |
| `warning` | Caution; not yet failed  | A non-blocking issue the user should be aware of or act on |
| `error`   | Something has failed     | A failure the user should be informed about                |
| `danger`  | High-risk or destructive | Destructive, irreversible actions; data loss consequences  |

## Where the variants apply

Two planes. Keep them distinct — a rule about one is not a rule about the other.

**Communication plane — the free semantic choice.** Five components take the full five-value `variant` and let the author pick any of them:

| Component | Variant type         | Values                                                          |
| --------- | -------------------- | --------------------------------------------------------------- |
| `Message` | `MessageVariantType` | `info` · `success` · `warning` · `error` · `danger`             |
| `Toast`   | `ToastVariant`       | `info` · `success` · `warning` · `error` · `danger`             |
| `Badge`   | `BadgeVariantType`   | `default` · `info` · `success` · `warning` · `error` · `danger` |
| `Box`     | `BoxVariantType`     | `info` · `success` · `warning` · `error` · `danger`             |
| `Tooltip` | `ToolTipVariant`     | `info` · `success` · `warning` · `error` · `danger`             |

`Toast` is never rendered directly — the variant is chosen through the `toast.info()` / `toast.success()` / `toast.warning()` / `toast.error()` / `toast.danger()` helpers (see **messages-and-notifications-spec**). `Badge`'s `default` is the non-semantic, neutral badge; it is outside `SEMV-1`…`SEMV-4`. `Tooltip`'s `variant` is optional: omitting it yields a neutral (`plain`) tooltip — the absence of a status, not a sixth one — exactly like a `Box` with no `variant`.

**Validation plane — a binary state, not a free choice.** Form fields do not expose the five-value set. They express a validation result as `error` or `success` through the field's own `errortext` / `successtext` props (rendered internally as a `FormHint` variant). This is the outcome of validation, not an authored communication variant, so `SEMV-2` (error vs danger) and `SEMV-3` (warning vs error) do not apply — a field is either valid, invalid (`error`), or confirmed (`success`). `SEMV-4` still holds: never use the validation styling for emphasis.

**A different `variant` vocabulary — out of scope here.** Some components expose a `variant` that is not one of these five status meanings. This spec and its sweep ignore them — but being out of scope is never a licence to choose them for appearance (`SEMV-4` is universal):

- `Button` / `Select` — `variant: "default" | "primary" | "primary-danger" | "subdued"` is an **action-emphasis** vocabulary (`primary` = the main action, `primary-danger` = the destructive main action, `default` = secondary, `subdued` = tertiary). Chosen by the action's role, not its visual weight; governed with button/action guidance, not here. One overlap is worth noting: the `danger` in `primary-danger` is the same meaning as `SEMV` `danger` (`SEMV-2`), spliced onto the emphasis axis — so a destructive button and a `danger` `Message`/`Toast` guarding the same action must agree on what counts as destructive, even though the button's `variant` itself is out of this sweep's scope.
- `Status` — its values (`progress` · `error` · `empty` · `no-matches`) are data-state values owned by **status-spec**.
- `Badge` `default` — the neutral, status-less badge: the absence of a status, not a sixth one.
- `Spinner` — a loading indicator whose `variant` selects a color and happens to reuse some of these names (`primary` · `danger` · `success` · `warning` · `default`); it does not communicate the five statuses. Treat its current API as a known inconsistency, not a model to copy.
- `Tabs` / `TabBar` — `appearance` is genuinely presentational (layout), not a status.

**The icon a component shows for a variant is out of scope.** `Icon` has no semantic `variant` prop — it takes a named icon — so it is not a plane component. Separately, which icon (if any) a component renders to express a given variant is a design/representation decision that can change at any time; it is not a mechanical "variant X always uses icon Y" rule and may legitimately differ between components. This spec governs the `variant` value an author chooses, never the glyph that renders it — do not judge, flag, or gatekeep icon choices.

## Invariants

**SEMV-1:** The five variants carry fixed meanings — `info` = neutral/informational; `success` = a positive outcome; `warning` = caution, nothing has failed yet; `error` = something has already failed; `danger` = destructive or irreversible. The meaning is identical in every component that exposes the variant.

**SEMV-2:** `error` vs `danger`. Use `error` for a system or operation failure that has occurred (a failed API call, a rejected request). Use `danger` for a destructive or irreversible action the user is about to take (a delete confirmation, releasing a resource). Failure that happened → `error`; harm that could happen if the user proceeds → `danger`.

**SEMV-3:** `warning` vs `error`. A `warning` signals that something _might_ go wrong or that the user should proceed carefully; nothing has failed. An `error` signals that something _has_ failed. Never use `warning` to soften a real failure, or `error` for a mere caution.

**SEMV-4:** The variant is chosen by semantic intent, never for emphasis, color, or aesthetics. Using `danger` to make an element stand out, or `success` for a neutral confirmation, degrades the signal for users and breaks cross-product consistency. This principle is **universal** — it holds for every `variant` prop in Juno, not only these five. The action-emphasis variant on `Button`/`Select` and the validation styling on form fields are likewise chosen by meaning (which action is primary, whether a field is valid), never by visual weight. Choosing any variant for appearance is always wrong, even where the prop is out of this spec's scope.

**SEMV-5:** Scope. The free semantic choice (`SEMV-1`…`SEMV-4`) applies to the communication-plane components — `Message`, `Toast`, `Badge`, `Box`, `Tooltip`. The validation plane (`error`/`success` via `errortext`/`successtext` on form fields) is a binary validation state, not a free choice. `variant` props from a different vocabulary — `Button`/`Select` action emphasis, `Spinner` color, `Tabs`/`TabBar` appearance — and `Status` data-state values are out of scope here, as is `Badge`'s neutral `default`. Out of scope is not out of `SEMV-4`: none of these may be chosen for looks either.
