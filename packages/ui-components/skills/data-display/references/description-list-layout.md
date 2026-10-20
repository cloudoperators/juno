# DescriptionList custom layout

By default `DescriptionList` renders a `<dl>` with `jn:grid jn:grid-cols-4`: every `DescriptionTerm`
(`<dt>`) carries `jn:col-span-1` and every `DescriptionDefinition` (`<dd>`) carries `jn:col-span-3`,
so terms occupy one quarter and definitions three quarters of the row. `alignTerms` toggles the
term's text alignment: `"right"` (default) adds the `align-right` group class, `"left"` adds
`align-left`. The exported aliases `DL`, `DT`, and `DD` are identical to the full names.

## When the 1:3 ratio does not fit

Pass Tailwind grid classes through `className` on the `DescriptionList` to change the column count,
then set matching `col-span` classes on the children. This mirrors the component's own documented
example (`DescriptionList.stories.tsx` docs block):

```
<DL className="grid-cols-2">
  <DT className="col-span-1">Shipping Method</DT>
  <DD className="col-span-1">Standard shipping: 5-7 business days.</DD>
</DL>
```

In a real Juno app the utility classes are prefixed with `jn:`:

```
<DescriptionList className="jn:grid-cols-2">
  <DescriptionTerm className="jn:col-span-1">Shipping Method</DescriptionTerm>
  <DescriptionDefinition className="jn:col-span-1">Standard shipping: 5-7 business days.</DescriptionDefinition>
</DescriptionList>
```

Keep the per-row `col-span` values summing to the grid's column count so rows stay aligned. Only
`DescriptionTerm`, `DescriptionDefinition`, or a single `<div>` wrapper are valid children — the
`DescriptionListProps.children` type enforces this to preserve the `<dl>` semantics.

## Content rules inside the list

A `DescriptionList` is a **verbatim metadata display**: it reflects what is stored. When a value is
missing render the `- -` placeholder (two hyphens separated by a single space). Do **not** substitute
an item's ID for a missing name here — that is the rule for Name columns, detail-view page titles,
and breadcrumb segments, where the name is the primary identifier. In a property list, substituting
the ID would imply a name exists when it does not (`docs/ux/ux-writing-content-design.md`, "Rendering
Empty or Unknown Values", "Exception: verbatim metadata display").

Term labels are headings: apply title case, no all-caps, no trailing punctuation
(`docs/ux/ux-writing-content-design.md`, "Title Case").
