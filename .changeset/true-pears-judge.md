---
"@cloudoperators/juno-ui-components": minor
---

Add `CodeBlockFooter` component and `codeBlockFooter` slot to `CodeBlock`

- Extract the copy bar into a standalone `CodeBlockFooter` component (props: `onCopy`, `isCopied`, `className`)
- Add `codeBlockFooter?: ReactElement` prop to `CodeBlock`: when provided it replaces the default footer, consistent with the `modalFooter` pattern in `Modal`
- The existing `copy` prop continues to control the default footer when `codeBlockFooter` is not passed (fully backward-compatible)
- Export `CodeBlockFooter` from the package index
