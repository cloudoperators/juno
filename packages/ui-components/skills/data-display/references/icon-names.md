# Icon names and accessibility

`Icon` renders a named SVG. The `icon` prop is typed as `KnownIcons` (the keys of `KnownIconsEnum` in
`Icon.component.tsx`); passing an unknown name or omitting it falls back to the `help` glyph rather
than throwing.

## Known icon names

```
accessTime, accountCircle, addCircle, autoAwesomeMosaic, autoAwesomeMotion, bolt, cached,
calendarToday, cancel, check, checkCircle, chevronLeft, chevronRight, close, comment, contentCopy,
danger, dangerous, default, deleteForever, description, dns, download, edit, error, errorOutline,
exitToApp, expandLess, expandMore, filterAlt, forum, help, home, info, language, manageAccounts,
monitorHeart, moreVert, nightsStay, notificationsOff, openInBrowser, openInNew, place, schedule,
search, severityLow, severityMedium, severityHigh, severityVeryHigh, severityCritical,
severityUnknown, sortShortWideArrowUp, sortShortWideArrowDown, sortWideShortArrowUp,
sortWideShortArrowDown, success, upload, warning, wbSunny, widgets
```

### Deprecated aliases (kept working)

- `success` → renders the `checkCircle` SVG (the old `check_box` glyph was deprecated to avoid visual
  inconsistency; the `success` name still works).
- `schedule` → alias for `accessTime` (same SVG).

## Rendering modes

- No `href` and no `onClick` → a plain inline glyph wrapped in a `<span>`.
- `href` set → an `<a>` (anchor styles applied). `href` takes precedence if both are passed.
- `onClick` set (no `href`) → a `<button type="button">` (button styles applied).

When `href` or `onClick` is present, extra `className`/props are applied to the anchor/button
wrapper; otherwise they are applied to the SVG itself.

## Accessibility

`title` is the single accessibility lever. For interactive icons it is set as the `aria-label` on the
`<a>`/`<button>` (falling back to the icon name if `title` is empty), and it also sets the SVG
`<title>` and the per-icon default. Always pass a human-readable `title` on interactive icons so the
control is announced meaningfully — relying on the raw icon name as the fallback label is a defect.

```
<Icon icon="cached" title="Refresh" onClick={refresh} />
<Icon icon="openInNew" title="Open in New Tab" href="https://example.com" />
```

`size` accepts a number or a string (pixels/rem); the default is `24`. `color` sets the glyph color;
`disabled` applies only to the button rendering. Follow title case for `title` text
(`docs/ux/ux-writing-content-design.md`, "Title Case").
