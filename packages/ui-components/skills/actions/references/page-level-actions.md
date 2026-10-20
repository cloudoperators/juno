# Page-level toolbar and overflow placement

Read this when you are deciding whether an action should be a visible button, which variant it
takes, whether it belongs in the overflow menu, or how actions relate to tabs and DataGrids. The
rules below come from `docs/ux/page-level-actions.md`.

## The three toolbar slots

The page-level toolbar has at most three slots, in fixed left-to-right order:

```
[↻ Refresh]  [⋮ Overflow]  [Primary Action]
```

Not every slot must be filled. Valid combinations are: overflow alone; primary alone; overflow +
primary; refresh alone; refresh + overflow; refresh + primary; and all three. No other orderings
or extra button variants are permitted in the page-level toolbar.

## Deciding the role

Placement is driven by the action's **role**, not by screen width or how many actions there are.
The overflow menu is a semantic container for secondary/destructive actions, not a space saver.

- **Primary** — at most one per page, always a visible button, never in the overflow. A page need
  not have one; an overflow-only toolbar is valid. Which action is primary is a human judgment
  (frequency, relevance, expected intent) — do not pick it with a quantitative metric. A primary
  action is almost never destructive.
- **Secondary** — goes into the overflow menu, regardless of count or available space. One
  exception: when there is exactly one secondary action alongside a primary and discoverability is
  a specific concern, it may appear as a secondary button: `[↻] [Secondary] [Primary Action]`.
  There is **no standalone secondary button** — a lone action that cannot reasonably be primary
  goes into a single-item overflow menu.
- **Destructive** — lives in the overflow menu with the other secondary/destructive items (see
  `popup-and-overflow-menus.md` for ordering and divider rules). Only a page whose sole purpose is
  a destructive operation may make it the primary button.

## The refresh button

Always a directly visible button, never in the overflow, always leftmost. Its label and tooltip
text is "Refresh Page". While refreshing it must be disabled and show visual feedback — in Juno,
set `progress` on the `Button`. If a page is only a DataGrid, use the DataGrid's built-in refresh
instead of adding a page-level one.

## Icon-only toolbar buttons

Refresh and the overflow toggle are inherently icon-only. Any other action may be icon-only only
when it is the sole secondary action, there is no overflow menu, and the icon has a strong,
universally understood meaning (e.g. a gear for settings). If several secondary actions exist, they
all go into the overflow with text labels. Every icon-only button needs a `title` or tooltip.

## Disabled vs. hidden

- **Disable** an action that is generally available but temporarily blocked by a technical
  circumstance. A disabled button does not require a tooltip, though an accurate one is welcome.
- **Consider not rendering** an action the user is unlikely to gain access to soon, or lacks
  permission for.

## Scope rules: DataGrids and tabs

- Action affects individual rows or the whole collection → DataGrid toolbar.
- Action affects a selection of rows → DataGrid bulk-actions area.
- Action affects the page context/scope as a whole → page-level toolbar.
- With tabs: actions affecting the whole page go **above** the tab bar and are static (they do not
  change with the active tab); actions scoped to one tab go **below** the tab bar.
