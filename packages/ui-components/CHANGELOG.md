# @cloudoperators/juno-ui-components

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
