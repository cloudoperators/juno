<!--
SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
SPDX-License-Identifier: Apache-2.0
-->

# textContain

A shared vocabulary for controlling how an element contains text that exceeds its
available space. It consolidates mutually exclusive behaviours — truncation, forced
breaking, and no-wrap — under one value set so every component exposes an identical
API, and the vocabulary cannot drift.

**This module is data only.** It exports a type and a class map; it does not render
anything. Consumerds are responsible to apply the behaviour correctly, especially when using truncation. This document explains exactly what needs doing.

## Exports

| Export              | What it is                                                                              |
| ------------------- | --------------------------------------------------------------------------------------- |
| `TextContainType`   | Union: `"truncate-end" \| "truncate-start" \| "break-word" \| "break-all" \| "no-wrap"` |
| `textContainStyles` | `Record<TextContainType, string>` — value → `jn:`-prefixed Tailwind classes             |

```tsx
import { textContainStyles, type TextContainType } from "../../shared/textContain"
```

## Basic usage

Expose a `textContain?: TextContainType` prop on your component and apply the mapped
classes to the element that holds the text:

```tsx
<div className={textContain ? textContainStyles[textContain] : ""}>{children}</div>
```

On a plain block element, applying the class is all you need for **`break-all`** and
**`no-wrap`**. **`break-word`** needs one extra step in grid/flex layouts (the
`min-width: 0` below). Truncation needs the most care.

The `truncate-*` values have three requirements that a class string **cannot** satisfy
on its own — and `break-word` shares the second; the consumer must supply them.

## Making truncation work (`truncate-end` / `truncate-start`)

### 1. A bounded width

`text-overflow: ellipsis` only clips when the element has a constrained width. A
plain block in normal flow gets this from its container. Inside a grid or flex
layout, see requirement 2 — otherwise the track/item grows to fit the text and
nothing truncates.

### 2. `min-width: 0` on the grid/flex item

A grid or flex item defaults to `min-width: auto`, i.e. its `min-content` size, so a
long unbroken string widens the track instead of clipping — or, for `break-word`,
instead of wrapping, because `overflow-wrap: break-word` does **not** reduce
min-content sizing (unlike `break-all`). This is masked by tracks
with an explicit `0` minimum (e.g. `minmax(0px, auto)`) but **not** by `auto`/`fr`
tracks (`1fr` is `minmax(auto, 1fr)`) or a plain flex item. Add `jn:min-w-0` to the
item so it can shrink within its track:

```tsx
<div className="… jn:min-w-0">…</div>
```

### 3. A block box — not a flex container

`text-overflow: ellipsis` does **not** apply to flex containers. If the element that
would carry the truncate classes is (or may become) a flex container — e.g. because
it also centres its content vertically — move the truncate classes onto an **inner
block element** and leave the outer element as the flex container:

```tsx
<div className="…flex flex-col justify-center jn:min-w-0">
  {" "}
  {/* outer: layout + shrinkable */}
  <span className={`jn:block ${textContainStyles[value]}`}>{children}</span>
</div>
```

The inner block stretches to the item's width via `align-items: stretch`, so it
inherits the bounded width without an explicit size, and `overflow: hidden` (part of
the truncate classes) makes it clip. If the element is always a plain block with a
bounded width, you can skip the wrapper and apply the classes directly.

## `truncate-start` also needs bidi isolation (`<bdi>`)

`truncate-start` moves the ellipsis to the start of the string by setting
`direction: rtl`. That also runs the content through the bidirectional algorithm,
which reorders **neutral characters** (punctuation, slashes) at the edges — `Ready!`
can render as `!Ready`, `/foo/bar` can shift its slashes — even when the text fits.

Wrap the content in `<bdi>` (bidirectional isolate) so it keeps its own direction and
only the ellipsis is affected. Do this **only** for `truncate-start`:

```tsx
<span className={`jn:block ${textContainStyles["truncate-start"]}`}>
  <bdi>{children}</bdi>
</span>
```

## Checklist for a new consumer

- [ ] `break-all` / `no-wrap`, or any value on a plain block with a bounded width → apply `textContainStyles[value]` directly.
- [ ] `break-word` in a grid/flex layout → also add `jn:min-w-0` to the item, or a long token widens the track instead of wrapping.
- [ ] Supporting `truncate-*`?
  - [ ] Does the element have a bounded width? (grid/flex item → next item)
  - [ ] Add `jn:min-w-0` to the grid/flex item.
  - [ ] Is the element a flex container (or might become one)? → put the truncate classes on an inner `jn:block` element.
  - [ ] Supporting `truncate-start`? → wrap the content in `<bdi>`.

## Reference implementation

`DataGridCell` (`src/components/DataGridCell/DataGridCell.component.tsx`) implements
all of the above: `jn:min-w-0` on the cell for every containing value except
`no-wrap`, the inner block wrapper for `truncate-*` (class-hooked as
`juno-datagrid-cell-truncate`), and the `<bdi>` for `truncate-start`.
