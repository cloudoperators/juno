[← Back to Contents Overview](0_contents.md)

# Popup And Overflow Menus

Popup Menus are smaller, temporary menus that appear when clicking an item ("toggle"). They provide a list of options and/or actions to the user related to the specific item or context.

Practically any UI element could be used to toggle a PopupMenu, such as Buttons, Icons, links, etc.

## Overflow Menu

An established Popup menu pattern used in many user interfaces is the OverflowMenu, a specific combination of a PopupMenu and a toggle icon of three vertically aligned dots. It is to be used mostly in cases where there is not enough space to show all available options (hence the name), so these are housed in a menu that only appears once a user clicks the toggle. It can also be used to have the options/actions available, but keep the default view clear of those, making them seem less important or distracting as if they were permanently visible.

### When to use an OverflowMenu

Use an OverflowMenu when:

- the options or actions in the menu are associated with or targeted at a specific item
- there are multiple options per item
- there is only a single option per item, but showing it inline in the item itself as an icon or button would lead to page clutter, the option is likely rarely to be used, or the action is highly destructive

Do NOT use an overflow item when:

- it is impossible for a user to establish what item or UI element the menu and its options refer to
- there is only a single option on the item, and that single option is often used so putting it inside menu feels like additional legwork, and/or that single option is not highly destructive

### Bottom Line

When in doubt and to prevent page clutter, it is usually the safer option to also put single item options in an overflow menu, unless the option is very often used, and not destructive. To avoid page clutter, another option is to display the button or icon inline, but only make it appear when hovering the item/row.

When using a PopupMenu, always make sure:

- the options in the menu are labelled in a way that leaves no doubt as to what the item will do once clicked
- the reference to the toggle/item the options/actions refer to is clear (it can be helpful to include the referenced element in the labels of the options/actions ("Edit Item XYZ" rather than "Edit")
- it is obvious to the user the toggle element is interactive/houses options

## Menu Item Order and Grouping

### Item Order

**Do not sort menu items alphabetically.** Order by importance and expected frequency of use instead:

- If a "View [Entity]" or "View Details" action is present, place it first.
- Place the most important and most frequently needed actions near the top.
- Place destructive actions last, separated by a divider (see below).
- When in doubt about ordering in a specific case, consult your UX team.

### Grouping

If a menu contains actions targeting multiple entity types, group actions for the same entity type together and separate groups with a horizontal divider. Only introduce grouping when it genuinely aids scanning — for shorter menus (about 4–5 items), dividers usually add visual noise without benefit.

### Destructive Actions

A destructive action permanently destroys an object or data with no possibility of recovery — **Delete** and **Wipe** are destructive; **Remove**, **Revoke**, and **Disable** are not.

- Destructive actions must always be the last item in their menu or group.
- **Single-entity menus**: separate the destructive action from the preceding items with a horizontal divider.
- **Multi-entity menus**: group dividers already provide visual separation; do not add an additional divider before the destructive action within a group.

### Examples

**Multiple entity types — page-level overflow menu:**

```
View Bucket
Edit Bucket
Empty Bucket
Delete Bucket
──────────────
View Policy
Edit Policy
Delete Policy
──────────────
View Version History
Suspend Versioning
Delete Version
```

**Single entity type — DataGrid row overflow menu:**

```
View Item Details
Copy Item
Share Item URL
Download Item
──────────────
Delete Item
```
