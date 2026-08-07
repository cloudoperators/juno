---
"@cloudoperators/juno-ui-components": minor
---

`CodeBlockFooter`: add `children`, `copy` props; replace inline "Copied!" span with a Tooltip on the Copy button

**Breaking change in `CodeBlock`:** The `codeBlockFooter` prop previously accepted a full replacement element that replaced the entire footer. It now injects content *into* the footer, to the left of the Copy button — the `CodeBlockFooter` wrapper is always rendered. Use `copy={false}` to hide the Copy button.
