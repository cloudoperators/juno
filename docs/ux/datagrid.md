[← Back to Contents Overview](0_contents.md)

# DataGrid

## The DataGrid – The Primary Pattern to Display and Interact With Data

The DataGrid is the primary pattern for displaying collections of structured data — a list of resources, entities, or items that share a common set of attributes or properties.

## When to Use a DataGrid

### Use a DataGrid When:

- You are displaying a list of items that share a consistent set of attributes or properties
- Users need to scan, compare, sort, or filter across multiple items at once
- Items in the list may be actionable — users can select, edit, delete, or navigate to them
- The data is dense enough that a card or tile layout would waste space or obscure comparability

### Don't use a DataGrid and Consider an Alternative When:

- You are displaying a single item or entity — use a detail view, panel, or card instead
- The data has no meaningful structure that can be cast to columns — a simple list may suffice
- The primary task is reading long-form content rather than scanning attributes

## DataGrid Anatomy

A DataGrid typically consists of:

- **DataGrid Toolbar** (also referred to as **DataGrid Header**)  — sits above the grid items; holds filters, search, bulk actions, and other controls to modify the display of the data or interacting with multiple items
- **Datagrid Header row** — labels for each column; always present unless the column purpose is self-evident from context, or the data displayed in on or multiple indivudal cells is synthesized but can not be meaningfully labelled with a single or a few terms
- **DataGrid rows** (also referred to as **DataGrid Items**) — one row representing an item or entity of the set of data displayed
- **Datagrid Footer** – optional. Can hold pagination or other, additional controls and/or metadata concering the set as a whole

## Column Order, Structure, and Layout

- Columns should be ordered by relevance and scannability: the most identifying information (name, ID, title) should appear in the leftmost columns.
- Column headers should be concise and unambiguous — a user should be able to understand what kind of data appears in a column at a glance. Avoid abbreviations unless widely understood in context by the intended audience.
- If exists, a column with a checkbox to select items for bulk actions should go first/left.
- Status and state columns are typically placed near the left as well, since users often scan for status first.
- Often it makes sense to emphasize the most identifying information, such as name/id, and make it bold. This makes it easier to scan and identify items.
- Action columns (edit, delete, overflow menus) belong at the far right. In order to avoid noise use Overflow Menus even for single item menus rather than showing a button on each item straightaway.
- Avoid too many columns – If a grid requires horizontal scrolling to show all columns, consider whether some of the data could be moved to a detail view instead.

## Interacting with DataGrid Rows / Items

### Clickable Items / Rows

If clicking a row navigates to a detail view, opens a Panel, or triggers an action, the entire row should be clickable. Visual hover feedback should make this affordance obvious.
When rows contain nested interactive elements (buttons, links, overflow menus), those elements must not propagate their click events to the row — otherwise the row action fires unintentionally whenever the user interacts with a nested element.

### Selecting Rows / Items

Use row selection (via checkboxes) when users need to act on multiple items at once. Bulk action buttons shouldbe enabled once at least a single item is selected, otherwise disabled.

## DataGrid Empty, Loading, and Error States

A DataGrid must handle the full range of data states gracefully. Do not render a visibly broken or empty grid without explanation.

- **Loading:** Show a loading indicator scoped to the DataGrid, not the page as a whole
- **Empty (no data):** Communicate that there is nothing to show, and suggest a next step where possible (e.g. "No items yet. Create one to get started." or "No results match your current filters.")
- **Empty (filtered):** Distinguish between "no data exists" and "no data matches your filters" — these suggest different user actions
- **Error:** Show an error state scoped to the DataGrid with a clear explanation and a retry option where possible. If exists, refer to the Re-Load/re-Fresh button as per below.

## Re-Loading Data

A datagrid may have a Reload/Refresh-button in the Header / Toolbar in order to make sure the latest state of the data is displayed and interacted with.

## Datagrid Content and Writing

- Column header labels should be nouns or noun phrases, not verbs. Verbs belong in action buttons, not headers.
  Status values should be consistent and drawn from a defined vocabulary — do not mix "Active / Inactive" in one grid and "Running / Stopped" in another for the same concept.
- Identifiers, names, and values that uniquely identify a row item should always be present and clearly visible, even if the grid is heavily filtered or sorted.
- Columns with content that is self-explanatory, either by itself or by sticking to the guidelines described, do not necessarily need a column header/title. A leftmost column that holds the checkboxes in order to select multiple items for bulk actions does not need a title.
- See [UX Writing and Content Design](vscode-webview://1h330fn11n42erpl28v4kc3t7nu0oi7cfoj8lbcph6qa193vhcn0/ux-writing-content-design.md) for broader writing guidelines.
