# juno skill spec

The human-readable coverage and decision record for Juno's Intent skills. One entry per authored
skill: what it covers, the consequential decisions baked into its guidance, the source evidence it
was verified against, and any remaining work. Keep this history as the library changes.

## Assessed scope

Initial batch: the UI building blocks of `@cloudoperators/juno-ui-components` (105 components),
grouped into domain skills, plus four UX-guideline skills (accessibility, ux-writing,
interaction-patterns, app-foundations) that are not tied to a single component cluster. Skills are
grounded in the component source (`packages/ui-components/src/components/**`), their Storybook
stories, and the UX documentation (`docs/ux/**`). Target library version: **9.6.0**.

Structural check: `intent validate packages/ui-components/skills` → **12/12 pass** (every code fence
is type-checked against the real component types). No cross-package skills; each package owns its
own.

## Coverage and batch history

### Batch 1 — initial component + UX skill set (ui-components 9.6.0)

- **datagrid** (`data-display`) — composing DataGrid grid primitives into a UX-compliant table.
  Decisions: empty/loading/error states are **required** and must use `Status` in a column-spanning
  cell; the tri-state select-all bulk-selection model is owned by the consumer (the library does not
  enforce it); cell count must equal `columns` unless `colSpan` is used.

- **layout** (`layout`) — the mandatory `AppShellProvider` wrapper + `AppShell` page frame (header,
  content, footer). Decisions: `AppShell` is the default; dropping to manual
  `AppBody`/`MainContainer` primitives is the documented escape hatch; embedded mode changes the
  frame for micro-frontends.

- **forms** (`forms`) — composing form inputs. Decisions: label via each input's `label` prop, **not**
  a standalone `Label` (which is not a public barrel export); validation runs through
  `invalid`/`valid` + `errortext`/`successtext`; `Switch` fires a button change event with no
  `.checked`, so state is derived from the `on` prop; `SignInForm` deliberately skips field
  validation.

- **navigation** (`navigation`) — picking the right primitive per level (SideNavigation top-level,
  TopNavigation/TabBar second-level, Breadcrumb, Pagination). Decisions: nesting capped at three
  levels; `Tabs`/`TabList`/`TabPanel`/`MainTabs` are **deprecated** and quarantined into a reference
  marked "maintaining existing code only" — `TabBar` is the current choice; filter tabs must not be
  misused as navigation.

- **feedback** (`feedback`) — Message vs. Toast decision, `Status` for page/section states,
  Spinner/LoadingIndicator/ProgressBar, Badge/Pill. Decisions: loading/error states must be
  non-blocking and scoped, not full-page; semantic-variant rules; copy and dismissal left to the
  consumer.

- **overlays** (`overlays`) — Modal/ModalFooter, Panel, Tooltip, PopupMenu + PortalProvider.
  Decisions: overlays are user-triggered and render into the portal; destructive actions confirm at
  the correct severity; `usePopupMenuContext` is internal (not a barrel export) — closing from
  custom content uses a `PopupMenuItem`.

- **data-display** (`data-display`) — Card, DescriptionList, Code/CodeBlock, JsonViewer,
  FormattedText, Icon. Decisions: term/definition pattern for detail views; inline-vs-block code
  distinction; interactive icons need accessible names.

- **actions** (`actions`) — Button variants/placement, ButtonRow, SortButton, ThemeToggle.
  Decisions: one primary action per page; destructive = `primary-danger`; title-case infinitive
  labels; disable-vs-hide rules the components do not enforce.

- **app-foundations** (`foundations`) — provider bootstrapping. Decisions: a single
  `AppShellProvider` composes `StyleProvider` + `PortalProvider` (optionally inside `ShadowRoot`);
  CSS must be loaded for the chosen style/shadow mode; omitting the plumbing makes components
  silently fail to style or portal.

- **accessibility** (`accessibility`) — accessible UIs via semantic Juno primitives plus the gaps
  they do not cover: accessible names for icon-only controls, grouped-input labelling, non-color
  status signals, aria-live announcement of app-driven dynamic content.

- **ux-writing** (`content-design`) — UX Writing / Content Design rules: active impersonal voice,
  title case, verb-based button labels, non-alarmist error copy, and the empty-value conventions
  (`- -`, ID fall-back for name-like fields). Grounded in real Button/Status/Message/Modal props so
  examples type-check.

- **interaction-patterns** (`interaction`) — confirmation of destructive actions, the
  disable/hide/error decision for unauthorized controls, inline add/edit/delete, multi-step wizards,
  and the standard page/user flow. Note: the wizard step-indicator and Modal wizard variant are
  still in design/development, so the skill composes the behavior from `Modal`/`Button` in the
  meantime.

Checks: structural validation passed for all 12. Representative task checks and a fresh-session
consumer check are not yet run — treat them as unverified for this batch.

## Remaining work

- Author representative executable task checks per skill (task-quality), and run a fresh-session
  consumer check for the highest-traffic skills (datagrid, forms, feedback).
- Confirm the per-skill `covers` lists are intentional (some incidentally list wrapper components
  such as `AppShellProvider`/`DataGrid` that appear only in setup examples).
