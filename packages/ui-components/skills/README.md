# ui-components skills

Agent skills shipped with `@cloudoperators/juno-ui-components` via TanStack Intent.

For what skills are, how to create them, and how to keep them current when components change, see the [TanStack Intent Guide](../../../docs/tanstack-intent-guide.md).

## Structure

Each component or pattern owns one directory under `skills/` containing three nested sub-skills:

- `<component>-spec` — owns the shared rule set (input schema, decision trees, invariants) and the `references/` that back it.
- `<component>-build` — generates an implementation from requirements; requires `<component>-spec`.
- `<component>-validate` — checks an implementation against the spec; requires `<component>-spec`.

The `-build` and `-validate` skills never restate rules — they cite the spec's rule IDs, so there is a single source of truth per component.

Cross-cutting **topics** (one aspect across many components, rather than one component) use a two-skill **pair** instead: a `<topic>-spec` rulebook and a `<topic>-review` sweep, with no `-build` — a topic has no single artifact to scaffold.

## Skills

### `datagrid/`

- `datagrid-spec` — compose a DataGrid; owns the shared DataGridSpec and references.
- `datagrid-build` — generate a DataGrid implementation from requirements.
- `datagrid-validate` — check a DataGrid implementation against the spec.

### `status/`

- `status-spec` — communicate a non-data state; owns the StatusSpec, copy tables, placement rules, and invariants.
- `status-build` — generate correct Status usage from a described application state.
- `status-validate` — check a Status usage against the spec.

### `messages-and-notifications/`

- `messages-and-notifications-spec` — communicate feedback with a Message or Notification; owns the MessagesAndNotificationsSpec, the mechanism selection table, the Message and notification APIs, and invariants.
- `messages-and-notifications-build` — generate correct Message or Notification usage from a described situation.
- `messages-and-notifications-validate` — check a Message or Notification usage against the spec.

### `semantic-variants/`

A horizontal **topic** (a pair, not a triad): the semantic `variant` across components.

- `semantic-variants-spec` — choose the correct semantic variant (`info`/`success`/`warning`/`error`/`danger`); owns the SemanticVariantsSpec, the variant meanings, the communication vs. validation planes, the in/out-of-scope component lists, and invariants (`SEMV-1`–`SEMV-5`).
- `semantic-variants-review` — sweep a change for every semantic-variant usage and report misuse against the spec.
