# @cloudoperators/juno-ui-components

## 2.38.1

### Patch Changes

- 150b32d: adjust node and npm deps that the version is open to the top

## 2.38.0

### Minor Changes

- 43fc5b7: Improve TS types and documentation again

## 2.37.0

### Minor Changes

- c450e60: Improve TS types and documentation

## 2.36.0

### Minor Changes

- c0d37b3: add PopupMenu component
  deprecate Menu, MenuItem, MenuSection, ContextMenu components
- b588973: Fix vite configuration to enable type consumption from @cloudoperators/juno-ui-components and fix Icon display name

## 2.35.2

### Patch Changes

- 6f6b742: Fix warnings in tests
- 212e32b: Fix errors in DateTimePicker
- 2191270: Migrate storybook to vite

## 2.35.1

### Patch Changes

- baccd3c: Import components styles manually in global.scss
- 2826334: Reintroduce Modal component stories removed during TypeScript migration

## 2.35.0

### Minor Changes

- 3c6ad30: Introduce types, deprecate other components, integrate new build system
- 3471a77: Marked AppIntro as deprecated in Storybook

### Patch Changes

- 87d57d7: Migrate docs to Typescript

## 2.34.0

### Minor Changes

- e96f612: Migrate DateTimePicker to TypeScript
- b12fa10: Migrate AppIntro to TypeScript
- fbd1880: Finalise Typescript migration for all non-deprecated components and clean up
- a3c43a0: Migrate the ThemeToggle component to TypeScript

### Patch Changes

- 6877281: Dependencies are upgraded to latest minor version.

## 2.33.0

### Minor Changes

- 8e6e94d: Migrate the Pagination component to TypeScript
- b99caff: Migrate ContentAreaToolbar, ContentContainer and ContentHeading components to TypeScript.
  Deprecate ContentWrapper.
- 5d186c7: Migrate Panel, PanelBody and PanelFooter components to TypeScript

### Patch Changes

- 385ebcf: Created HeaderContainer component to make PageHeader and TopNavigation sticky when scrolling the content. AppShell is also affected by this change.

## 2.32.0

### Minor Changes

- a0ee034: Migrate SecretText to TypeScript
- 8615024: Replace useEndlessScrollList from utils to ui-componetns and utils deprecation

## 2.31.0

### Minor Changes

- 0687bfa: Migrate ComboBox and ComboBoxOption to TypeScript
- 6bfeffe: Migrate Code component to TypeScript

## 2.30.0

### Minor Changes

- b1a5eb1: Migrate the ContextMenu component to TypeScript
- c9190d0: Migrate NativeSelect, NativeSelectionOption and NativeSelectOptionGroup components to TypeScript
- 18ebaba: Migrate Form, FormRow and FormSection components to TypeScript

## 2.29.0

### Minor Changes

- 63a951c: Migrate Grid, GridColumn and GridRow components to TypeScript
- 5a4e3d1: Migrate the Switch component to TypeScript
- 7cb142d: Migrate Menu, MenuItem and MenuSection components to Typescript (#237)
- a278544: Migrate AppShellProvider and CodeBlock to TypeScript

## 2.28.0

### Minor Changes

- 3e225b9: Migrate the InputGroup component to TypeScript

### Patch Changes

- d4167c9: Migrate Select component to typescript
- a304189: adds very high z-index (9999) to portal root container
- 02f06a1: Update packages to the latest patch versions.

## 2.27.0

### Minor Changes

- 4bcff19: Migrate the LoadingIndictor component to TypeScript and only allow 'size' that is valid and greater than zero
- 28a8d38: Migrate JsonViewer to TypeScript
- fb9146a: Migrate StyleProvider to TypeScript

### Patch Changes

- f6f054f: fixes z index stacking problems for PageHeader

## 2.26.0

### Minor Changes

- d55e192: Migrate the Breadcrumb and BreadcrumbItem components to Typescript

## 2.25.0

### Minor Changes

- bcb45f5: Migrate the Box component to TypeScript
- 3ec48c0: Migrate the Message component to TypeScript and disable automatic timeout for values less than one
- 3e21132: Migrate ShadowRoot component to TypeScript
- 436f35a: Migrate the Search Input component to TypeScript
- 24fec5c: Migrate StyleProvider to TypeScript
- aaea462: Migrate Modal component to TypeScript

### Patch Changes

- f307966: fix(ui): fix broken pageheader layout (#506)
- 4a9e17a: Bring JS Modal back until all portal logic has been fully migrated to TS. Render Panel in portal to fix z-index stacking for components rendered in portals.

## 2.24.0

### Minor Changes

- 97b08cb: Migrate the Badge component to TypeScript and remove its Critical variant
- bdee402: Migrate PortalProvider component to TypeScript

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
