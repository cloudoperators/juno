# @cloudoperators/juno-ui-components

## 2.23.0

### Minor Changes

- aa185b4: Migrate Button component to TypeScript
- 4ded874: Pagination component now behaves as expected in controlled and uncontrolled mode. Various edge cases have defined behaviour now. Added disabled and loading state.

## 2.22.1

### Patch Changes

- a77c643: Fix MenuItem overflow within the ContextMenu component.

## 2.22.0

### Minor Changes

- 73f55e0: Migrate Stack component to TypeScript
- 44e88bf: Migrate TextInput component to TypeScript
- aa0bc95: Migrate Tabs and related components to TypeScript

## 2.21.0

### Minor Changes

- 68e3984: feat(ui): add pageheader custom logo

  - add `logo` prop that accepts a custom logo as a component to be rendered in a slot
  - move grid layout for pageheader for robust logo placement and sizing

- 8c3d471: feat(ui): add FormattedText component. Update: Removed package 'tailwindcss-typography' and added SCSS file to rebuild this behavior.
- e27e340: Migrate Spinner component to TypeScript
- 59c00bb: Migrate DataGrid to TypeScript

## 2.20.0

### Minor Changes

- 4ad82f4: Migrate AppShell and navigation components to TypeScript

## 2.19.0

### Minor Changes

- 8449754: Added new default logo for JunoUI into Storybook UI and component: PageHeader

### Patch Changes

- d1c14e2: Migrate Checkbox components to Typescript

## 2.18.0

### Minor Changes

- 502ec8f: Migrate Radio, RadioRow and RadioGroup components to TypeScript

### Patch Changes

- 990af5a: Introduce a ToolTip typescript version along with storybook doc type support
- ea09b68: fix(ui): add upload icon into icon lib
- 7f4d17a: fix(ui): when an icon is used in a button, ensure the icon title matches the button title

## 2.17.2

### Patch Changes

- e279c73: chore(ui): migrate Pill component to typescript
- 1abf467: chore(core): fix security deps problems
- 8c06648: Unify Typescript and Eslint config in one package

## 2.17.1

### Patch Changes

- 4d748f8: Fix Select menu placement on page bottom. Switch from `flip` to `autoPlacement` positioning strategy in headless-ui middleware.

## 2.17.0

### Minor Changes

- f9b09ec: The AppShell will now render a TopNavigation in embedded mode if passed.

  feat(ui) Appshell: render TopNavigation in embedded node if passed

- d4014b6: `wrapperClassName` prop added to the following components:

  - ComboBox
  - DateTimePicker
  - NativeSelect
  - Select
  - Switch
  - Textarea
  - TextInput

### Patch Changes

- 3abe6e4: fix(ui) fix complex form story: add `<PortalProvider />` to decorator to make sure the Select menu renders into a portal inside the scope of our <StyleProvider />`.

## 2.16.0

### Minor Changes

- ed9b963: Add ThemeToggle component, store current theme in local storage, take SecretText component out of WiP

### Patch Changes

- 3ca3d35: Update instructions in readme files

## 2.15.4

### Patch Changes

- 5102bf8: Update instructions in readme files

## 2.15.3

### Patch Changes

- Fix files config in package.json

## 2.15.2

### Patch Changes

- Update Version

## 2.15.1

### Patch Changes

- 79aedc3: Update patch version of all packages
- Add files to be contained in the release to files in package.json
