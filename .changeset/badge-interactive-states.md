---
"@cloudoperators/juno-ui-components": minor
---

feat(Badge): add interactive states. Pass `onClick` to render the badge as a `<button>`, or `href` to render it as an `<a>` element. Both support hover, focus, `:active`, and disabled states. Use `disabled` to disable the element. Disabled anchors have `href` removed, `aria-disabled="true"`, and `tabIndex="-1"` set automatically.
