[← Back to Contents Overview](0_contents.md)

# Page Content Area

The content area is the main workspace of the application, sitting between the Page Header and the Page Footer.

## Side Navigation

Most applications include a Side Navigation on the left side of the content area as their primary means of navigation between major sections of the application. Single-page applications or simpler tools may omit it.

## General Page Content Structure

The actual page content, adjacent to the Side Navigation where present, is typically structured as follows:

- **Breadcrumb** — shows the user's current position within the application hierarchy. Not required on top-level pages.
- **Page Heading** — identifies the current page or item.
- **Toolbar** — contains page-level actions such as creating a new item, filtering, or searching. Placed at the top of the content area.
- **Main Content** — the primary content of the page.

Some pages use tabs at the top of the content area to switch between entire page views.

## Page-Level Refresh

Pages that fetch live data should offer a **manual refresh button** so users can explicitly reload all page data on demand. Its accessible label and tooltip text is **"Refresh Page"**.

![Refresh Page button shown next to an overflow menu and a primary action button](images/page-refresh-button.png)

The button always triggers a full re-fetch of all data relevant to the current page.

### Placement

The refresh button appears in the following combinations depending on what other toolbar actions are present:

| Other toolbar actions          | Layout (left → right)          |
| ------------------------------ | ------------------------------ |
| None                           | `[↻]`                          |
| Overflow menu only             | `[↻]` `[⋮]`                    |
| Primary action only            | `[↻]` `[Primary Action]`       |
| Overflow menu + primary action | `[↻]` `[⋮]` `[Primary Action]` |

The refresh button is never placed inside an overflow menu — it must always be directly visible and reachable with a single click.

### In-Progress State

While a refresh is in progress, the button should provide visual feedback and be disabled to prevent duplicate requests. Two options are available:

- **Animated icon** — the refresh icon rotates continuously until the data has loaded. This may require a dedicated `RefreshPageButton` component to handle the animation.
- **Spinner** — the refresh icon is replaced by a loading spinner for the duration of the refresh.

## Types of Pages

Any type of page that is needed can be built using Juno UI-Components. In the context of cloud admin UIs, however, some types of page patterns have emerged:

### List Pages

List pages display a collection of items, typically in a Data Grid. The page-level toolbar may contain actions that apply to the page context as a whole. The Data Grid header contains actions that affect the collection and its elements, such as creating new items, searching, filtering, and bulk actions. See [Data Grid](datagrid.md) for more.

### Detail Pages

Detail pages display a single item in full. A breadcrumb is particularly important here to allow users to navigate back to the list or understand where the item sits in the application hierarchy. The toolbar may contain actions that apply to the individual item, such as editing or deleting it.
