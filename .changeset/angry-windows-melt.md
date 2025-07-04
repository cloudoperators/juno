---
"@cloudoperators/juno-ui-components": patch
---

- **Removed redundant state management:** Eliminated unnecessary `useState` and `useEffect` patterns that were causing performance bottlenecks
- **Memoized context values:** Implemented proper memoization to prevent unnecessary re-renders
- **Optimized filtering and event handlers:** Enhanced callback performance and filtering logic efficiency
- **Added configurable debounce delay:** Made debounce timing configurable as a parameter for better flexibility

- **Custom hooks extraction:** Broke down the monolithic combobox into focused, reusable custom hooks:

  - Combobox options initialization logic
  - Floating UI logic
  - Filtering logic
  - State management logic
  - Context management logic
  - Validation logic

- **Sub-component extraction:** Separated complex component into smaller, focused sub-components
- **Type definitions:** Extracted reusable TypeScript types for better type safety

- **Added comprehensive documentation:** Included description comments and explanation comments throughout the codebase
- **Utility functions:** Added CSS class merging utility for better Tailwind CSS handling
- **Style management:** Implemented consistent style management approach
- **License headers:** Added proper license headers to all files
- **Code organization:** Moved utilities to appropriate locations in the source structure
