[← Back to Contents Overview](0_contents.md)

# Popup And Overflow Menus

Popup Menus are smaller, temporary menus that appear when clicking an item ("toggle"). They provide a list of options and/or actions to the user related to the specific item or context.

Practically any UI element could be used to toggle a PopupMenu, such as Buttons, Icons, links, etc.

## Overflow Menu

An established Popup menu pattern used in many user interfaces is the OverflowMenu, a specific combination of a PopupMenu and a toggle icon of three vertically aligned dots. It is to be used mostly in cases where there is not enough space to show all available options (hence the name), so these are housed in a menu that only appears once a user clicks the toggle. It can also be used to have the options/actions available, but keep the default view clear of those, making them seem less important or distracting as if they were permanently visible.

### When to use an OverflowMenu

Use an OverflowMenu when:

- The options or actions in the menu are associated with or targeted at a specific item
- there is not enough space to show the available options inline / as-is.
- there are more than 2-3 options available for the item the options are associated with

Do NOT use an overflow item when:

- There is only one action (unless there really is no other way of placing that option)
- It is impossible for a user to establish what item or UI element the menu and its options refer to

When using a PopupMenu, always make sure:

- the options in the menu are labelled in a way that leaves no doubt as to what the item will do once clicked
- the reference to the toggle/item the options/actions refer to is clear (it can be helpful to include the referenced element in the labels of the options/actions ("Edit Item XYZ" rather than "Edit")
- it is obvious to the user the toggle element is interactive/houses options
