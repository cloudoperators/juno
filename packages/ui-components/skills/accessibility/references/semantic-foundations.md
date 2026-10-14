# Semantic foundations

Read this when you need accessibility structure that spans more than a single component — page
landmarks, heading order, labelling repeated regions, or linking help/error text to an input with
`aria-describedby`. Source: `docs/ux/accessibility.md`.

## Landmark regions and heading order

Use the real landmark elements so assistive tech can jump between regions: `<nav>`, `<main>`,
`<header>`, `<footer>`. Keep headings in order (`<h1>` → `<h2>` → `<h3>`, no skipped levels) — the
heading outline is how screen-reader users scan a page. Juno layout components render the correct
landmarks; in your own markup, use the semantic element, never a `<div>` styled to look like one
(`docs/ux/accessibility.md`, "Semantic HTML as the Foundation").

```
<header>…</header>
<nav aria-label="Primary">…</nav>
<main>
  <h1>Projects</h1>
  <section aria-labelledby="recent-h">
    <h2 id="recent-h">Recent</h2>
    …
  </section>
</main>
<footer>…</footer>
```

## Distinguish repeated regions

When the same landmark appears more than once (e.g. two `<nav>` regions, or several `role="group"`
containers), give each a distinct accessible name so they are not announced identically. Prefer
`aria-labelledby` pointing at a visible heading over a separate `aria-label` — it keeps the visible
and announced names in sync and avoids duplicated copy (`docs/ux/accessibility.md`, "Labels and
Accessible Names").

```
<nav aria-label="Primary">…</nav>
<nav aria-label="Pagination">…</nav>

<section aria-labelledby="filters-h">
  <h2 id="filters-h">Filters</h2>
  …
</section>
```

## Help and error text with aria-describedby

For Juno form inputs, prefer the component's own `helptext`, `errortext`, and `successtext` props
rather than rendering adjacent text yourself — they render the hint and keep the copy consistent
with the field (`docs/ux/accessibility.md`, "Descriptive and Help Text"). The TextInput wires the
visible `<label>` to the input automatically.

When you render custom descriptive text next to a native input in application code (outside the
Juno form components), link it explicitly with `aria-describedby` so screen readers announce it in
context:

```
<label for="token">API token</label>
<input id="token" type="password" aria-describedby="token-hint" />
<p id="token-hint">Generated under Settings → Access tokens.</p>
```

Use `aria-describedby` for supplementary hints and error messages; use the `<label>`/`htmlFor`
association (which Juno components do for you) for the input's name. Keep the two roles separate —
the label is the name, the description is extra context.
