[← Back to Contents Overview](0_contents.md)

# DataGrid

## The DataGrid – The Primary Pattern to Display and Interact With Data

The DataGrid is the primary pattern for displaying collections of structured data — a list of resources, entities, or items that share a common set of attributes or properties.

![Juno DataGrid](images/Datagrid-fully-featured.png)

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

- **DataGrid Header**  — sits above the grid items; holds filters, search, bulk actions, and other controls to modify the display of the data or interacting with multiple items. This is a composable pattern, not a single comoponent in itself.
- **DataGrid Head row** — labels for each column; always present unless the column purpose is self-evident from context, or the data displayed in one or multiple individual cells is synthesized but can not be meaningfully labelled with a single or a few terms
- **DataGrid rows** (also referred to as **DataGrid Items** or **Elements**) — one row representing an item or entity of the set of data displayed
- **DataGrid Footer** – optional. Can hold pagination or other, additional controls and/or metadata concerning the set as a whole

## DataGrid Header / Toolbar

The DataGrid Toolbar holds all the tools necessary for users to modify and customize their view on the dataset, and to interact with multiple items at once by running bulk actions.

![Fully featured Juno DataGrid Header](images/Datagrid-fully-featured-header.png)

More specifically, these are any combination of the following elements. Each element has a designated space in the DataGrid header structure. If an element is not needed, its space remains empty/unused. If none of the elements of a given zone is needed, don't render the zone / empty area at all.

![Juno DataGrid Header zones](images/Datagrid-header-zones.png)

### Zone 1: Sorting, Action(s)

- Sorting: Select to choose what to sort by, and a button to toggle sort direction
- Other Actions Overflow Menu: Any actions global to the data set other than the primary action
- Primary Action: The primary, i.e. most likely action for users. If users can create new items in the DataGrid, this can be done using the primary action button

### Zone 2: Filters and Search

- Filter: Input elements to select what to filter the data by. Depending on the data displayed, this can be a simple Select, or a Select or ComboBox with an additional element such as another Select, ComboBox, or often a TextInput.
- Search: A SearchBox to perform a string-based search on the data and display the matching items. Make sure to manage user expectations as to what exactly will be searched, i.e. if the string entered is only matched against a single or a subset of fields, the placeholder should indicate that (e.g. "Search Description" if only descriptions can be searched)
- Filter Pills: Each filter that has been configured by the user using the Filter element(s) and that is currently active is displayed here. As a last item, there is a button that allows for clearing all active filters at once.

### Zone 3: DataGrid View/State, Bulk Actions, Refresh

- Bulk Actions: Actions that can be run on multiple items in the DataGrid at once. Positioned on the left side of Zone 3. Contains a Checkbox to select/deselect all items, and a menu of available bulk actions. Requires a Checkbox on each individual item / row. Bulk action controls should be disabled until at least one item is selected. The select-all checkbox follows a tri-state model: unchecked when no items are selected, indeterminate when some are, and checked when all are. Clicking the checkbox in the unchecked or indeterminate state selects all items; clicking it in the checked state deselects all.
- Item Count: The number of items of the set that is currently visible as a whole (not only on the current page), displayed in the center. If filters or searches are active, the number of matching items and the total number of items in the data set is being displayed.
- Last Update, Update/Refresh: The date and time of the last refresh of the data displayed, and a button to trigger a refresh. Positioned on the right side of Zone 3.

All of the above elements are optional in the sense that none of them will be required for any given DataGrid. However, if you find yourself in a situation where none of the above options is needed or desired, reconsider whether using a DataGrid is the right choice to display the given data. This case can occur, but it is rare. In most cases a simple list is then a more appropriate option to display the data.

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

Use row selection (via checkboxes) when users need to act on multiple items at once. Bulk action buttons should be enabled once at least a single item is selected, otherwise disabled.

## DataGrid Empty, Loading, and Error States

A DataGrid must handle the full range of data states gracefully. Do not render a visibly broken or empty grid without explanation.

- **Loading:** Show a loading indicator scoped to the DataGrid, not the page as a whole
- **Empty (no data):** Communicate that there is nothing to show, and suggest a next step where possible (e.g. "No items yet. Create one to get started." or "No results match your current filters.")
- **Empty (filtered):** Distinguish between "no data exists" and "no data matches your filters" — these suggest different user actions
- **Error:** Show an error state scoped to the DataGrid with a clear explanation and a retry option where possible. If present, refer users to the Reload/Refresh button described below.

## Re-Loading Data

A DataGrid may have a Reload/Refresh-button in the Header in order to make sure the latest state of the data is displayed and interacted with.

## Render Elements Based on User Permissions

When rendering elements in the DataGrid, keep permissions of the user in mind:
For users that are not allowed to perform any of the available bulk actions for the elements of a given DataGrid, do not render Bulk action elements at all.
The same goes for the checkboxes on the individual items: If a user has no permission to perform any of the avilable bulk actions, do not render any checkboxes (and the surrounding cells) for the items.
If a user is not allowed to create any new items, do not render a "Create […]" button.

## DataGrid Content and Writing

- Column header labels should be nouns or noun phrases, not verbs. Verbs belong in action buttons, not headers.
- Status values should be consistent and drawn from a defined vocabulary — do not mix "Active / Inactive" in one grid and "Running / Stopped" in another for the same concept.
- Identifiers, names, and values that uniquely identify a row item should always be present and clearly visible, even if the grid is heavily filtered or sorted.
- Columns with content that is self-explanatory, either by itself or by sticking to the guidelines described, do not necessarily need a column header/title. A leftmost column that holds the checkboxes in order to select multiple items for bulk actions does not need a title.
- See [UX Writing and Content Design](ux-writing-content-design.md) for broader writing guidelines.
