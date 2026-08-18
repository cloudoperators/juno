[← Back to Contents Overview](0_contents.md)

# Page Content Area

The content area is the main workspace of the application, sitting between the Page Header and the Page Footer.

## Side Navigation

Most applications include a Side Navigation on the left side of the content area as their primary means of navigation between major sections of the application. Single-page applications or simpler tools may omit it.

## Page Structure

Pages within the content area are typically structured as follows:

- **Breadcrumb** — shows the user's current position within the application hierarchy. Not required on top-level pages.
- **Page heading** — identifies the current page or item.
- **Toolbar** — contains page-level actions such as creating a new item, filtering, or searching. Placed at the top of the content area.
- **Main content** — the primary content of the page.

Some pages use tabs at the top of the content area to switch between entire page views.

## List Pages and Detail Pages

**List pages** display a collection of items, typically in a Data Grid. The page-level toolbar may contain actions that apply to the context as a whole. Actions that affect the collection and its elements, such as creating new items, are located in the Data Grid header; also options to search, filter, bulk actions, etc. See [Data Grid](datagrid.md) for more.

**Detail pages** display a single item in full. A breadcrumb is particularly important here to allow users to navigate back to the list or understand where the item sits in the application hierarchy. The toolbar may contain actions that apply to the individual item, such as editing or deleting it.
