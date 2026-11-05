# StatusSpec

The `Status` component communicates non-data states: in-progress loading, errors, empty collections, and filtered-out results. It is the single standard component for these states across page, section, and DataGrid contexts.

## Prop API

| Prop        | Type                                               | Default                                            | Notes                                                                                                                       |
| ----------- | -------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `status`    | `"progress" \| "error" \| "empty" \| "no-matches"` | `"error"`                                          | Selects the state type and activates per-status default copy.                                                               |
| `title`     | `ReactNode`                                        | —                                                  | Overrides the default title. Use title case (e.g. "Something Went Wrong"). Accepts React nodes for links or formatted text. |
| `body`      | `ReactNode`                                        | —                                                  | Overrides the default body text. Sentence case. Accepts React nodes.                                                        |
| `spinner`   | `boolean`                                          | `true` when `status="progress"`, `false` otherwise | Renders a `Spinner` component above the title.                                                                              |
| `code`      | `number \| string`                                 | —                                                  | Large HTTP error code rendered prominently above the title. Suppressed inside a DataGrid (see INV-3).                       |
| `details`   | `string`                                           | —                                                  | Rendered in a scrollable `<pre>` block. For stack traces and raw server responses only (see INV-6).                         |
| `action`    | `ReactNode`                                        | —                                                  | Rendered below the content area. Typically a `Button` or a button-styled `<a>` (see INV-7).                                 |
| `className` | `string`                                           | `""`                                               | Additional CSS classes on the root `<div>`.                                                                                 |

## Status value selection

Choose the `status` value based on the application state:

| Situation                                                | `status` value |
| -------------------------------------------------------- | -------------- |
| Data is being fetched or an operation is in progress     | `"progress"`   |
| A fetch or operation has failed                          | `"error"`      |
| The data source contains no items                        | `"empty"`      |
| Items exist but none match the currently applied filters | `"no-matches"` |

`"error"` is the default — if `status` is omitted, an error state renders.

## Copy resolution priority

For both `title` and `body`, the component resolves copy in this order:

1. **Explicit prop** (`title` or `body` passed by the caller) — highest priority.
2. **HTTP error code defaults** — when `code` is a recognized HTTP status code (see table below).
3. **Per-status defaults** — lowest-priority fallback.

If none of the three sources provides a value, that field is not rendered.

### Per-status defaults

| `status`       | Default `title`        | Default `body`                                                 |
| -------------- | ---------------------- | -------------------------------------------------------------- |
| `"progress"`   | "Loading…"             | _(none)_                                                       |
| `"error"`      | "Something Went Wrong" | "An error occurred. Try again."                                |
| `"empty"`      | "No Items"             | "There are no items to display."                               |
| `"no-matches"` | _(none)_               | "No items match the current filters. Adjust or clear filters." |

### HTTP error code defaults

These apply when `code` is one of the following recognized values. An unrecognized numeric code falls through to the per-status defaults.

| `code` | Default `title`           | Default `body`                                                                               |
| ------ | ------------------------- | -------------------------------------------------------------------------------------------- |
| 400    | "Bad Request"             | "The request could not be processed due to invalid syntax. Try again."                       |
| 401    | "Authentication Required" | "Authentication failed. Verify your credentials and try again."                              |
| 403    | "Access Denied"           | "You do not have the required permissions to access this resource."                          |
| 404    | "Page Not Found"          | "The requested URL does not exist or may have moved."                                        |
| 408    | "Request Timeout"         | "The request did not return a complete result in time. Check your connection and try again." |
| 409    | "Conflict"                | _(none)_                                                                                     |
| 429    | "Too Many Requests"       | _(none)_                                                                                     |
| 500    | "Internal Server Error"   | "An internal error occurred. Try again."                                                     |
| 502    | "Bad Gateway"             | "The server returned an invalid response. Try again."                                        |
| 503    | "Service Unavailable"     | "The service is temporarily unavailable. Try again later."                                   |
| 504    | "Gateway Timeout"         | "A server did not respond in time. Check your connection and try again."                     |

## Placement context

### Standalone (page or section level)

`Status` renders a `<div>` and applies a top margin automatically:

- `code` is present → minimal top margin.
- `spinner` is shown (no `code`) → medium top margin.
- Neither `code` nor `spinner` → maximum top margin.

These margins can be overridden via `className` when the default spacing does not fit the layout.

### Inside a DataGrid

When placed inside a DataGrid, `Status` detects the context automatically via React context and:

- Applies a fixed minimum and maximum height, centering content vertically within the cell.
- **Suppresses the `code` display** — the large error code block never renders inside a DataGrid.
- Does not apply the standalone top-margin rules.

Placement rule: `Status` must always be wrapped in `<DataGridRow><DataGridCell colSpan={N}>`, where N equals the DataGrid's `columns` value (`INV-2`).

## Invariants

**INV-1:** `Status` is for non-data states only — loading, error, empty, no-matches. Never use it to render data, content, or general informational messages.

**INV-2:** Inside a DataGrid, `Status` must be wrapped: `<DataGridRow><DataGridCell colSpan={N}><Status /></DataGridCell></DataGridRow>`, where N equals `DataGrid[columns]`. A mismatched `colSpan` breaks the grid layout.

**INV-3:** Never rely on `code` rendering inside a DataGrid — it is suppressed automatically. Do not pass `code` with the expectation it will display in that context.

**INV-4:** `spinner={true}` is redundant when `status="progress"` — the spinner is already the default. Do not set it explicitly unless overriding to `false` to suppress it.

**INV-5:** `title` uses title case (e.g. "Something Went Wrong"). `body` uses sentence case ending with a period (e.g. "An error occurred. Try again.").

**INV-6:** `details` is for raw technical output only — stack traces and server responses. Never use it for user-facing explanatory copy; that belongs in `body`.

**INV-7:** The `action` slot holds a single primary action — typically a `Button` or a button-styled `<a>`. Do not place navigation menus, forms, or multiple unrelated actions in it.

**INV-8:** `role="alert"` is applied automatically when `status="error"`. All other statuses use `role="status"`. Do not override these via `...props` — doing so breaks screen-reader announcement semantics.
