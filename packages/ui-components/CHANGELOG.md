# @cloudoperators/juno-ui-components

## 5.0.0

### Major Changes

- 4dedb33: # Migration Guide: Tailwind CSS 4 Update

  ## 🚀 Major Changes

  This release includes a **BREAKING CHANGE** migration to Tailwind CSS 4. Please follow this guide carefully to update your application.

  ## 📋 Required Changes

  ### 1. Remove JN Prefixes

  **Remove all `jn-` and `jn:` prefixes** from your class names throughout your application.

  ```diff
  - <div className="jn-bg-blue-500 jn:hover:bg-blue-600">
  + <div className="bg-blue-500 hover:bg-blue-600">

  - <div className="jn-flex jn-items-center jn:md:flex-col">
  + <div className="flex items-center md:flex-col">
  ```

  ### 2. Update Tailwind Configuration

  **Remove `tailwind.config.js`** entirely and replace it with a simple CSS import approach.

  #### Before

  ```javascript
  // tailwind.config.js - DELETE THIS FILE
  module.exports = {
    // ... your config
  }
  ```

  #### After

  Create or update your main `styles.css` file:

  ```css
  /* styles.css */
  @import "tailwindcss";
  @import "@cloudoperators/juno-ui-components/theme.css";
  ```

  ### 3. Convert SCSS to CSS

  **Rename and convert all `.scss` files to `.css`** files:

  ```diff
  - styles.scss
  + styles.css

  - components.scss
  + components.css
  ```

  Update your import statements:

  ```diff
  - import './styles.scss'
  + import './styles.css'
  ```

  ### 4. Remove PostCSS Dependencies

  **Remove the following packages** from your `package.json`:

  ```bash
  npm uninstall autoprefixer postcss
  ```

  ```diff
  {
    "devDependencies": {
  -   "autoprefixer": "^10.x.x",
  -   "postcss": "^8.x.x"
    }
  }
  ```

  ### 5. Update Vite Configuration

  **Install the new Tailwind Vite plugin:**

  ```bash
  npm install -D @tailwindcss/vite@^4.1.7
  ```

  **Update your `vite.config.js`:**

  ```javascript
  import { defineConfig } from "vite"
  import tailwindcss from "@tailwindcss/vite"

  export default defineConfig({
    plugins: [
      tailwindcss(),
      // ... your other plugins
    ],
  })
  ```

  **Remove PostCSS configuration** if you have a `postcss.config.js`:

  ```diff
  - // postcss.config.js - DELETE THIS FILE
  - module.exports = {
  -   plugins: {
  -     tailwindcss: {},
  -     autoprefixer: {},
  -   },
  - }
  ```

  ## 🔄 Migration Checklist

  - [ ] Remove all `jn-` and `jn:` prefixes from class names
  - [ ] Delete `tailwind.config.js`
  - [ ] Create/update `styles.css` with required imports
  - [ ] Convert all `.scss` files to `.css`
  - [ ] Update import statements for renamed CSS files
  - [ ] Uninstall `autoprefixer` and `postcss` packages
  - [ ] Install `@tailwindcss/vite@^4.1.7`
  - [ ] Update `vite.config.js` with new plugin
  - [ ] Delete `postcss.config.js` (if exists)
  - [ ] Test your application thoroughly

  ## ⚠️ Important Notes

  - **This is a breaking change** - test thoroughly after migration
  - **Update incrementally** - migrate one component/file at a time if needed
  - **Check for any custom CSS** that might depend on the old configuration

  ## 🆘 Troubleshooting

  If you encounter issues:

  1. Ensure all `jn-` prefixes are removed
  2. Verify your `styles.css` has the correct imports
  3. Check that the Vite plugin is properly configured
  4. Clear your build cache: `rm -rf node_modules/.vite`

  ## 📚 Additional Resources

  - [Tailwind CSS 4 Documentation](https://tailwindcss.com/docs)
  - [Tailwind CSS 4 Migration Guide](https://tailwindcss.com/docs/upgrade-guide)

  ***

  For questions or issues with this migration, please refer to the project documentation or open an issue.

### Patch Changes

- 01245c8: Fix unit tests output

## 4.0.1

### Patch Changes

- 5488568: - Upgraded `@storybook/react` and related Storybook packages to version 9.x.x
  - Updated configuration files to align with v9 requirements
  - Resolved any breaking changes and deprecated API usage
  - Updated story files for v9 compatibility
  - Refreshed `.storybook/main.js` and `.storybook/preview.js` configurations
  - Removed overrides of Storybook dependencies in `package.json` or workspace configuration
  - Updated typescript to the latest version
  - Replaced CSF v2 stories with CSF v3
- 6ef7f8d: Fix Code, Message, FormattedText and IntroBox storybook formatting, default values and links.

## 4.0.0

### Major Changes

- 483d9ee: ### ⚠️ BREAKING CHANGE

  This release upgrades the package to use **React 19.1**, introducing breaking changes for projects using older versions of React.

  If you're using React 18 or below, please continue using the `3.x` versions of this package.

  ### 🔧 Changes

  - Upgraded peer dependencies to:
    - `react@^19.1.0`
    - `react-dom@^19.1.0`
    - `@types/react@^19.0.0`
    - `@types/react-dom@^19.0.0`
  - Ensured all components are compatible with React 19 concurrent features
  - Dropped support for React 18 and earlier

  > ✅ Recommended version for React 19+ users: `4.x`
  > 🛠️ Legacy support for React 18 and below: `3.x`

## 3.1.1

### Patch Changes

- cdae407: - update @floating-ui/react to the latest version 0.27.8
  - update @testing-library/\* packages to the latest versions
  - fix unit tests
  - ensure tooltip content is not displayed when disabled
- 7230774: - update storybook dependencies to the latest version
  - remove @storybook/addon-webpack5-compiler-babel
  - run code-modes to convert remaining csf2 to csf3
  - fix storybook implicit action args error
- a9e8592: PopupMenu: add missing component exports
- 43d6aa0: Update vite to the latest version (v 6.3.5) to resolve dependency vulnarebilities

## 3.1.0

### Minor Changes

- 403b5cd: - Remove headlessui float and update headlessui to 2.1.10
  - Fix unit tests

### Patch Changes

- 67f53cb: fix(ui): fix DateTimePicker light mode colors

## 3.0.1

### Patch Changes

- 9ff1784: Update react-tabs to the latest react 19 compatible version (6.1.0)
- 4e8a5ef: Remove @mdx-js/react from the codebase
- f48439c: Remove react-jss package from the codebase

## 3.0.0

### Major Changes

- 02cb67a: ---
  title: 'UI Component Library v3.0.0'
  description: 'Changelog for the major 3.0.0 release with TypeScript, React 18.3 support, and Vite optimization'
  date: '2025-04-08'

  ***

  # Changelog v3.0.0

  This is a major release with breaking changes. Please review the migration guide before upgrading.

  ## Major Release Highlights

  - **Full TypeScript Migration** - The entire library has been rewritten in TypeScript, providing improved type safety and developer experience
  - **React 18.3.1 Support** - Updated to fully leverage the latest React features and improvements
  - **Vite-powered Build Pipeline** - Significant performance improvements in build times and bundle size optimization
  - **Storybook Upgrade** - Enhanced documentation and component showcasing

  ## New Features

  - Complete TypeScript integration with comprehensive type definitions
  - Modern build system using Vite for faster development and optimized production builds
  - Updated Storybook with improved documentation, search, and component navigation
  - New component theming system with better customization options
  - Extended accessibility compliance across all components

  ## Breaking Changes

  - Removed all previously deprecated components and APIs
  - Updated component prop interfaces may require adjustments in your implementation, no prop-types support.
  - Minimum supported React version is now 18.0.0
  - Node.js 16+ is now required for development

  ## Improvements

  - Reduced bundle size by approximately 35%
  - Improved rendering performance across all components
  - Better tree-shaking support for more efficient application builds
  - Enhanced focus management and keyboard navigation
  - Component state management refactored for improved predictability

  ## Developer Experience

  - Improved error messages and debugging experience
  - Comprehensive TypeScript types for better IDE integration
  - Enhanced documentation with usage examples and migration guides
  - New testing utilities for components

  ## Documentation

  - Complete overhaul of component documentation
  - New interactive examples
  - Improved search functionality in documentation

  ## Housekeeping

  - Dependency updates across the board
  - Removed legacy polyfills and compatibility code
  - Streamlined internal architecture
  - Consolidated similar components into more flexible alternatives

  ## Bug Fixes

  - Fixed focus trap issues in modal components
  - Resolved state management inconsistencies in form components
  - Fixed various styling issues in dark mode
  - Addressed multiple accessibility concerns

  ## What's Next

  Our team is already working on exciting new features for upcoming releases. Stay tuned for announcements about:

  - Preparation for React 19 support.
  - Performance optimizations for large-scale applications
  - New components.

  ***

### Patch Changes

- e5cf6b6: React 19 Upgrade. Phase 1 - Upgrade to React 18.3
- cdba61c: Upgrade to vite 6.2

## 2.39.0

### Minor Changes

- 2277a23: Export component types for Typescript use

### Patch Changes

- cde9cb5: Update vite version to 6.0

## 2.38.2

### Patch Changes

- 106c2a4: Fix InputGroup styles when there are some Select elements inside.

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
