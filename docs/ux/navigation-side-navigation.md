[← Back to Navigation](navigation.md) | [← Back to Contents Overview](0_contents.md)

# Side Navigation

The Side Navigation is the primary top-level navigation pattern in Juno. It sits in a fixed column to the left of the main content area and persists across all views in the application.

## When to Use the Side Navigation

Use the Side Navigation as the top-level navigation for any application with more than one distinct view or section. It is the standard and expected pattern — deviations require a strong reason.

Do not use the Side Navigation as a substitute for in-page navigation (tabs, anchors), secondary filtering, or content organisation within a single view.

## Anatomy

A Side Navigation consists of one or more **navigation items** arranged in a vertical list. Each item has a text label and navigates the user to a distinct view or section of the application when clicked. Items at the top level may optionally carry an **icon** to the left of the label to aid recognition and scannability.

Related items can be collected under a **group header** — a non-navigable label that names the section. Groups can be expanded and collapsed, helping users focus on relevant parts of a long navigation.

Items can also have **child items**, which expand as a nested sub-list below the parent when the user clicks the expand control. This allows the navigation to represent a hierarchy without requiring separate pages or nested layouts.

At any given time, exactly one item is shown as the **active item**, visually indicating the user's current location in the application.

## Structure and Depth

The Side Navigation supports up to **three nesting levels**. Using more than three levels is not recommended — deep hierarchies are difficult to scan and navigate, and usually signal that the information architecture should be reconsidered.

### Flat Navigation

For applications with a simple structure, a flat list of top-level items is the clearest option. Prefer a flat structure unless the application's content genuinely requires grouping or hierarchy.

### Grouped Navigation

Items can be collected under a group header that provides a label without itself being a navigation target. Groups can be expanded and collapsed by the user.

Use groups to organise a larger set of top-level items into meaningful sections. Do not create groups for the sake of it — a single group containing all items adds no value.

### Nested Items

Navigation items can contain child items, rendered as an expandable sub-list. The expand/collapse control is separate from the item's navigation action — clicking the label navigates, clicking the chevron toggles the sub-list.

Use nesting sparingly. A second level is acceptable for naturally hierarchical content. A third level should be used only when unavoidable. If you find yourself relying on a third level extensively, reconsider the structure.

## Item Labels and Icons

- Labels should be short, clear, and use title case. See [UX Writing and Content Design](ux-writing-content-design.md) for general writing guidelines.
- Icons may be shown next to top-level items. Icons are only displayed at the first nesting level — they do not appear on nested child items.
- Do not use icons as a substitute for labels. Every item must have a visible text label.

## Active and Disabled States

- Mark the currently active item to indicate the user's current location. Only one item should be marked as active at a time.
- When a parent item contains the active child, keep the parent expanded so the active child remains visible.
- Items can be marked as disabled to indicate they are not currently available. Disabled items should be used sparingly. If an item is permanently inaccessible to the current user, consider not rendering it at all rather than showing it as disabled — refer to [UI For Unauthorized Users](ui-for-unauthorized-users.md) for guidance.

## Controlled vs. Uncontrolled Expansion

Groups and items with children can be expanded and collapsed. By default, expansion state is managed internally. When you need to control it externally — for example, to automatically expand the group or parent item containing the active route on page load or navigation — the components support fully controlled expansion via explicit state and a toggle callback.

## Alternative Second-Level Navigation

In cases where using nested items in the Side Navigation is not feasible — for example, because the second level contains a large number of entries or requires a significantly different visual treatment — a horizontal tab bar above the content area may be used as a second-level navigation. This tab bar should visually belong to the currently selected top-level item, making the parent–child relationship clear to the user.

See [Navigation Fundamentals](navigation-fundamentals.md) for an overview of when this pattern applies.

## Accessibility

- The Side Navigation renders as a `<ul role="navigation">` landmark. When a page contains more than one navigation landmark, supply a distinct accessible label via `ariaLabel` to each so screen reader users can distinguish them. The implementation may be updated in the future to use a native `<nav>` element.
- Keyboard users must be able to reach and activate all items using the keyboard alone.
- The expanded/collapsed state of groups and items with children must be communicated to assistive technology.
