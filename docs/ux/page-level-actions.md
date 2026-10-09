[← Back to Contents Overview](0_contents.md)

# Page-Level Actions: Decision Rules

## Guiding Principle

The overflow menu is a **semantic container**, not a space-saving mechanism. An action's placement in the toolbar is determined by its role — primary, secondary, or destructive — not by available screen width or the number of other actions present. This principle governs every rule that follows.

---

## Toolbar Slots

The page-level toolbar has a maximum of **three slots**, in fixed left-to-right order:

```
[↻ Refresh]  [⋮ Overflow]  [Primary Action]
```

Not all slots need to be filled. Valid combinations:

| Refresh | Overflow | Primary | Valid |
| ------- | -------- | ------- | ----- |
| ✓       | —        | —       | ✓     |
| ✓       | ✓        | —       | ✓     |
| ✓       | —        | ✓       | ✓     |
| ✓       | ✓        | ✓       | ✓     |
| —       | ✓        | —       | ✓     |
| —       | —        | ✓       | ✓     |
| —       | ✓        | ✓       | ✓     |

No other button variants, slots, or orderings are permitted — with one explicit exception covered in the next section.

---

## The Primary Action

- There is **at most one** primary action per page.
- If present, it is **always a visible button**. It never goes into the overflow menu.
- A page is not required to have a primary action. An overflow-only toolbar, with or without refresh, is a valid and intentional layout.
- **Which action is primary is a human design decision.** No technical or quantitative metric determines this automatically. Frequency of use, relevance to the page's purpose, and expected user intent all factor in. When none of these clearly single out one action, no action should be forced into the primary role.
- A primary action is **almost never destructive**. Edge cases exist — a page whose sole purpose is a destructive operation may reasonably make that action primary — but this is the exception and should be treated as such.

---

## Secondary Actions

Secondary actions always go into the overflow menu. This applies regardless of how many secondary actions there are, whether a primary button is present, or how much space is available in the toolbar.

**The one exception:** when there is exactly one secondary action alongside a primary, and discoverability is a specific concern, that single secondary action _may_ appear as a secondary button instead of in the overflow. The layout then becomes:

```
[↻ Refresh]  [Secondary]  [Primary Action]
```

This trades the overflow slot for a secondary button. It is an explicit, justified choice — not the default. The default remains: secondary action goes into overflow.

**No standalone secondary button.** A default or subdued button never appears alone in a toolbar without a primary button. If there is only one action on a page and it cannot reasonably be made primary, it goes into a single-item overflow menu. A lone secondary button on one page versus a lone primary button on another reads as a design inconsistency rather than an intentional distinction.

---

## The Overflow Menu

### Composition

Any number of secondary and/or destructive actions may appear in the overflow menu. There is no defined maximum.

### Item Order, Grouping, and Destructive Actions

For item ordering, grouping, and destructive action placement and divider rules within the overflow menu, follow the [Popup and Overflow Menus](popup-and-overflow-menus.md) guidelines.

---

## The Refresh Button

- The refresh button is always a directly visible button. It never goes into the overflow menu.
- It always occupies the leftmost toolbar slot if present.
- While a refresh is in progress, the button must be disabled and provide visual feedback.
- Whether a page-level refresh and a DataGrid-level refresh coexist is determined by scope: if they fetch the same data, one suffices; if they cover different scopes, both may be present. This is a per-page decision.

---

## Icon-Only Buttons

The refresh button and the overflow toggle are inherently icon-only. For any other action, an icon-only button in the toolbar is only appropriate when it is the sole secondary action present and no overflow menu exists — and only then for icons with a strong, established, universally understood meaning (a gear for settings, for example). If multiple secondary actions are present, they all go into the overflow menu as items with text labels. Icon-only toolbar buttons are not used alongside an overflow menu.

Every icon-only button must have either a native `title` attribute or an explicit tooltip. There are no exceptions.

---

## Disabled vs. Hidden Actions

- **Disable** an action when it is generally available but temporarily blocked by a technical circumstance.
- **Consider not rendering** an action when it is unlikely to become available to the current user anytime soon, or when the user does not have permission to perform it.
- A disabled button does not require a tooltip explaining the reason. In most cases the surrounding context makes it clear. If the reason can be stated with certainty, an explanatory tooltip is a welcome addition but not mandatory.

---

## Page Structure Specifics

### List and Detail Pages

The same toolbar rules apply to both list pages and detail pages. No separate rule set exists for either type.

### Pages with DataGrids

Use the action's scope to determine its placement:

- **Affects individual rows or the DataGrid collection** → DataGrid toolbar.
- **Affects a selection of rows** → DataGrid bulk actions area specifically.
- **Affects the current page context or scope as a whole** → page-level toolbar.

### Pages with Tabs

- Actions that affect the page context as a whole are placed **above** the tab bar.
- Actions scoped to a specific tab are placed **below** the tab bar.
- Page-level toolbar actions are static. They do not change based on which tab is currently selected. An action that would need to change with the active tab belongs below the tabs, not above them.
