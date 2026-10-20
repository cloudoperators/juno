---
name: data-display
description: >
  Use when displaying non-tabular content in a Juno app built with @cloudoperators/juno-ui-components:
  grouping information in a Card, rendering an item's properties as a term/definition DescriptionList,
  showing inline code with Code or a copyable multi-line block with CodeBlock and CodeBlockFooter,
  rendering structured JSON with the collapsible JsonViewer, styling rich HTML prose with
  FormattedText, and placing an Icon as a glyph, link, or button. For tabular lists of items use the
  datagrid skill; for status badges and the empty/error pattern see the feedback skill.
metadata:
  purpose: >
    Teaches developers to pick and compose the Juno content-display primitives (Card, DescriptionList
    with DescriptionTerm/DescriptionDefinition, Code, CodeBlock with CodeBlockFooter, JsonViewer,
    FormattedText, Icon) with their real props, including the detail-view term/definition pattern,
    the inline-vs-block code distinction, and the UX writing rules for titles, empty values, and
    accessible interactive icons that the components do not enforce on their own.
  type: core
  library: "@cloudoperators/juno-ui-components"
  library_version: "9.6.0"
sources:
  - cloudoperators/juno:packages/ui-components/src/components/Card/Card.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Card/Card.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/DescriptionList/DescriptionList.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/DescriptionList/DescriptionList.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Code/Code.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Code/Code.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/CodeBlock/CodeBlock.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/CodeBlock/CodeBlock.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/CodeBlockFooter/CodeBlockFooter.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/CodeBlockFooter/CodeBlockFooter.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/JsonViewer/JsonViewer.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/JsonViewer/JsonViewer.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/FormattedText/FormattedText.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/FormattedText/FormattedText.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Icon/Icon.component.tsx
  - cloudoperators/juno:docs/ux/datagrid.md
  - cloudoperators/juno:docs/ux/ux-writing-content-design.md
---

# Display content and data with Juno

For a _list of items_ that users scan, sort, and filter, reach for the DataGrid (see the datagrid
skill). This skill covers everything else: a single item's properties, a container that groups
content, code and JSON, rich prose, and glyphs. The UX guidelines explicitly point you here — a
single item or entity belongs in a detail view, panel, or card, not a grid (`docs/ux/datagrid.md`,
"Don't use a DataGrid and Consider an Alternative When").

Pick the component by content shape:

- **Card** — a container that groups related content; optionally the whole card is a link or button.
- **DescriptionList** (+ **DescriptionTerm**, **DescriptionDefinition**) — term/definition pairs, i.e.
  an item's properties in a detail view. Renders real `<dl>`/`<dt>`/`<dd>`.
- **Code** — short inline `<code>` inside a sentence.
- **CodeBlock** (+ **CodeBlockFooter**) — a multi-line, copyable code block; renders a `JsonViewer`
  when `lang="json"`.
- **JsonViewer** — a collapsible, searchable JSON tree on its own.
- **FormattedText** — a wrapper that styles raw HTML prose (headings, lists, tables, links).
- **Icon** — a named SVG glyph, optionally a link (`href`) or button (`onClick`).

## Setup

Everything imports from the package root. Components render unstyled unless the app is wrapped in
`AppShellProvider` (see the fundamentals skill if styles are missing).

```tsx
import { Card, DescriptionList, DescriptionTerm, DescriptionDefinition } from "@cloudoperators/juno-ui-components"

function PreviewCard() {
  return (
    <Card padding>
      <DescriptionList>
        <DescriptionTerm>Region</DescriptionTerm>
        <DescriptionDefinition>eu-de-1</DescriptionDefinition>
      </DescriptionList>
    </Card>
  )
}
```

## Core patterns

### Group content in a Card

A `Card` is a `<div>` by default. Pass `padding` for internal spacing (default `false`). It accepts
any `children`:

```tsx
import { Card } from "@cloudoperators/juno-ui-components"

function InfoCard() {
  return (
    <Card padding className="jn:max-w-md">
      <h3>Cluster health</h3>
      <p>All control-plane nodes are reachable.</p>
    </Card>
  )
}
```

Make a card interactive by passing `href` (renders an `<a>`) or `onClick` (renders a `<button>`).
`href` takes precedence over `onClick`. `disabled` strips the `href`, adds `aria-disabled`, and
shows a not-allowed cursor. Only make a card interactive when the whole card is one navigation
target or action — mirror the DataGrid rule that a clickable surface should not also wrap its own
nested buttons/links (`docs/ux/datagrid.md`, "Interacting with DataGrid Rows / Items").

```tsx
import { Card } from "@cloudoperators/juno-ui-components"
declare function navigate(to: string): void

function ClusterCard({ id, name }: { id: string; name: string }) {
  return (
    <Card padding onClick={() => navigate(`/clusters/${id}`)}>
      <h3>{name}</h3>
    </Card>
  )
}
```

### Show an item's properties in a DescriptionList

`DescriptionList` renders a `<dl>` on a 4-column grid: each `DescriptionTerm` (`<dt>`) spans 1 column,
each `DescriptionDefinition` (`<dd>`) spans 3. Stream `DescriptionTerm`/`DescriptionDefinition` pairs
as children. `alignTerms` is `"right"` (default) or `"left"`. `DL`, `DT`, `DD` are exported aliases.

```tsx
import { DescriptionList, DescriptionTerm, DescriptionDefinition } from "@cloudoperators/juno-ui-components"

type Instance = { name?: string; id: string; region: string; createdAt: string }

function InstanceDetails({ instance }: { instance: Instance }) {
  return (
    <DescriptionList alignTerms="left">
      <DescriptionTerm>Name</DescriptionTerm>
      <DescriptionDefinition>{instance.name ?? "- -"}</DescriptionDefinition>
      <DescriptionTerm>ID</DescriptionTerm>
      <DescriptionDefinition>{instance.id}</DescriptionDefinition>
      <DescriptionTerm>Region</DescriptionTerm>
      <DescriptionDefinition>{instance.region}</DescriptionDefinition>
      <DescriptionTerm>Created</DescriptionTerm>
      <DescriptionDefinition>{instance.createdAt}</DescriptionDefinition>
    </DescriptionList>
  )
}
```

A `DescriptionList` is a verbatim metadata display: when a value is missing render the `- -`
placeholder (two hyphens separated by a space), and here do **not** substitute the ID for a missing
name — that would misrepresent what is stored (`docs/ux/ux-writing-content-design.md`, "Rendering
Empty or Unknown Values" / "Exception: verbatim metadata display"). Override the grid via `className`
(e.g. `className="jn:grid-cols-2"` plus matching `col-span` classes on children) only when the 1:3
layout does not fit. See [description-list layout](references/description-list-layout.md) for the
custom-grid recipe.

### Inline code vs. a code block

Use `Code` for a short token inside running text — a flag, an env var, a field name. It renders an
inline `<code>`. Content comes from `children` or the `content` prop (`content` overrides
`children`):

```tsx
import { Code } from "@cloudoperators/juno-ui-components"

function Hint() {
  return (
    <p>
      Set <Code>LOG_LEVEL=debug</Code> to see verbose output.
    </p>
  )
}
```

Use `CodeBlock` for multi-line snippets, certificates, or payloads the user may copy. It renders a
`<pre><code>` with a copy button by default (`copy={true}`). Pass the body as `children` (or `content`
for a string); `wrap` (default `true`) toggles line wrapping; `size` (`"auto" | "small" | "medium"
| "large"`) caps height with a scrollbar; `heading` renders a tab-styled caption.

```tsx
import { CodeBlock } from "@cloudoperators/juno-ui-components"

function CertBlock({ pem }: { pem: string }) {
  return (
    <CodeBlock heading="server.crt" size="small" wrap={false}>
      {pem}
    </CodeBlock>
  )
}
```

### Render JSON

Set `lang="json"` on `CodeBlock` and pass an object/string to `content` — it renders a `JsonViewer`
internally and the copy button serializes the JSON. For a standalone, interactive tree use
`JsonViewer` directly: `data` is required; `toolbar` adds expand-all/collapse-all and search;
`expanded` (default `1`) sets how many levels start open; `showRoot`, `truncate`, `indentWidth`, and
`theme` (`"dark"`/`"light"` or a color map) tune the display.

```tsx
import { CodeBlock, JsonViewer } from "@cloudoperators/juno-ui-components"

type Payload = { name: string; labels: Record<string, string> }

function PayloadView({ payload }: { payload: Payload }) {
  return (
    <>
      <CodeBlock lang="json" heading="payload.json" content={payload} />
      <JsonViewer data={payload} toolbar expanded={2} theme="dark" />
    </>
  )
}
```

### Add a custom action to a CodeBlock footer

Pass a node to `codeBlockFooter` to inject a control to the **left of** the Copy button; the footer
wrapper always renders. Keep `copy` at its default `true` to show both, or set `copy={false}` to
show only your action. This replaced the old "pass an element to replace the whole footer" behavior —
read [codeblock footer actions](references/codeblock-footer.md) before migrating older code.

```tsx
import { CodeBlock, Icon } from "@cloudoperators/juno-ui-components"
declare function handleDownload(): void

function DownloadableBlock({ code }: { code: string }) {
  return <CodeBlock content={code} codeBlockFooter={<Icon icon="download" onClick={handleDownload} />} />
}
```

### Style rich prose with FormattedText

`FormattedText` is a wrapper that applies consistent typography to raw HTML children — headings,
paragraphs, lists, tables, links, and inline `<code>`. Use it for long-form content (docs, release
notes, markdown rendered to HTML), not for individual labels.

```tsx
import { FormattedText } from "@cloudoperators/juno-ui-components"

function ReleaseNotes() {
  return (
    <FormattedText>
      <h2>Release 9.6.0</h2>
      <p>Highlights of this release:</p>
      <ul>
        <li>New data-display components</li>
      </ul>
    </FormattedText>
  )
}
```

### Render an Icon as glyph, link, or button

`Icon` takes a named `icon` (a `KnownIcons` value such as `"info"`, `"download"`, `"contentCopy"`,
`"checkCircle"`), plus `size` (number or string, default `24`), `color`, and `title`. With no `href`
or `onClick` it renders a plain inline glyph; `href` makes it an `<a>`; `onClick` makes it a
`<button>`. Set `title` so the control is labeled for screen readers — it drives `aria-label` on the
link/button and the SVG `title`.

```tsx
import { Icon } from "@cloudoperators/juno-ui-components"
declare function refresh(): void

function RefreshButton() {
  return <Icon icon="cached" title="Refresh" onClick={refresh} />
}
```

Only known icon names type-check; an unknown or omitted name falls back to the help glyph. For the
full list of names and the deprecated aliases (`success` → `checkCircle`, `schedule` → `accessTime`)
read [icon names and accessibility](references/icon-names.md).

## Common mistakes

- **CRITICAL — Interactive icon with no `title`.** An `Icon` used as `onClick` button or `href` link
  with no `title` gives screen-reader users only the raw icon name (or nothing) as its label. Always
  pass a human-readable `title`; it becomes the `aria-label`. (Icon source: `title` drives
  `aria-label`.)
- **HIGH — Substituting the ID for a missing name inside a `DescriptionList`.** A `<dl>` is verbatim
  metadata; show `- -` for an unset name here. The "fall back to the ID" rule is for Name columns,
  detail-view titles, and breadcrumbs — not for a property list. (`docs/ux/ux-writing-content-design.md`,
  "Exception: verbatim metadata display".)
- **HIGH — Nesting buttons/links inside an interactive Card.** A `Card` with `onClick`/`href` is one
  click target; inner buttons or links create ambiguous, conflicting targets. Use a non-interactive
  Card with in-content actions, or an interactive Card with no nested targets. (`docs/ux/datagrid.md`,
  "Interacting with DataGrid Rows / Items" — same affordance rule.)
- **HIGH — `CodeBlock` for a single inline token.** A full copyable block around one word breaks the
  reading flow of a sentence. Use `Code` inline; reserve `CodeBlock` for multi-line, copyable content.
- **MEDIUM — All-caps or punctuated titles in Cards and lists.** Titles and `DescriptionTerm` labels
  follow title case, never all-caps, and carry no trailing punctuation. (`docs/ux/ux-writing-content-design.md`,
  "Title Case", "Errors and Error Messages".)
- **MEDIUM — Em/en dash instead of `- -` for empty values.** Render missing values as `- -` (two
  hyphens, a space between), not `–`, `—`, `--`, or `N/A`. (`docs/ux/ux-writing-content-design.md`,
  "Rendering Empty or Unknown Values".)
- **MEDIUM — Non-`DescriptionTerm`/`Definition` children in a `DescriptionList`.** The grid alignment
  depends on `<dt>`/`<dd>` and their `col-span` classes; arbitrary children break the layout and the
  `<dl>` semantics.

## Completion

Verify:

1. Each component uses only real props (e.g. `Card` has no `variant`; `DescriptionTerm`/`Definition`
   take `children`, not a `label`/`value` pair).
2. Every interactive `Icon` and interactive `Card` has an accessible label (`title` / discernible
   text).
3. Missing values render `- -`, except Name columns / detail-view titles / breadcrumbs (ID) — and a
   `DescriptionList` stays verbatim (`- -`, never the ID).
4. Titles and term labels follow title case with no all-caps and no trailing punctuation.
5. Run `npm exec --no -- intent validate packages/ui-components/skills` and fix any errors.

If a rendered state (e.g. the copy confirmation or JSON search) cannot be exercised in your harness,
report it as unverified rather than assuming it renders.

## References

- [description-list layout](references/description-list-layout.md) — read when the default 1:3,
  4-column grid does not fit and you need a custom `grid-cols`/`col-span` template.
- [codeblock footer actions](references/codeblock-footer.md) — read before adding footer actions or
  migrating code that passed a full replacement element to `codeBlockFooter`.
- [icon names and accessibility](references/icon-names.md) — read for the full `KnownIcons` list, the
  deprecated aliases, and the link-vs-button rendering rules.
