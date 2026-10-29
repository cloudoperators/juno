# Component Quality Checks

> **Scope:** Maintainer-focused contributor tooling for the Juno ui-components repo. It has nothing to do with the packaged, distributed, consumer-facing library and is never shipped with the npm package (it lives under `.claude/`, which is excluded from the `files` allowlist).

This is the single source of truth for all component quality criteria used by the `component-analyze` (deep, single-component) and `component-audit` (horizontal, shallow) skills. Check definitions live here; the per-task procedure and output format live in `analyze-guide.md` and `audit-guide.md` in this directory; the Claude Code wiring lives in each skill's `SKILL.md` under `.claude/skills/`.

---

## Checks

### Dead Code & Unused Props

Flag props defined in the component interface but never referenced in the render. Flag unused imports. Flag unreachable branches (conditions that can never be true given the prop types or surrounding logic).

---

### Type Safety & Prop Interfaces

Flag overly loose types: `any`, or handlers genuinely left untyped where no contextual type applies. Judge the effective (contextual) type, not the presence of an annotation: an inline handler whose parameter lacks an annotation is **not** a defect when TypeScript types it contextually — e.g. `onClick={(e) => …}` on a typed JSX prop already gives `e` a precise type, and flagging it is a false positive. Flag overly complex or redundant types that could be simplified without loss of correctness.

**Caveat:** Do not flag a specific type assignment as an error unless verified by running `tsc --noEmit` against the project's own `tsconfig.json`. TypeScript assignability — especially around JSX ref props, bivariance, and union types — frequently behaves differently from what reading the types alone suggests. Claims that can only be confirmed by running `tsc` must be labelled as unverified.

---

### Export Consistency

An `index.ts` must exist in the component directory. Flag its absence.

If the file exists, check that everything exported from component files is also re-exported from it. Flag aliases, types, or components that are exported from a `.component.tsx` but missing from `index.ts`.

---

### Identifier Classes

Each component must apply a marker class following the pattern `juno-[component-name]` (e.g. `juno-button`, `juno-description-list`) to its root element. These classes carry no styles — they exist solely to help developers identify component origins in browser devtools.

**Sub-element parts** (`juno-[component]-[part]`, e.g. `juno-select-toggle`, `juno-datagrid-head-cell`) are valid identifiers within a component and do not need to correspond to a standalone component.

**Composition patterns** — structural roles in a documented pattern that do not correspond to any real component — use the convention `juno-pattern-[pattern-name]-[role]` (e.g. `juno-pattern-datagrid-outer`).

**Flag as a violation:** a `juno-*` class applied ad-hoc on a plain wrapper element (e.g. `Stack`, `div`) in a story or consuming code where the name does not match a component root or a known sub-element part. These should follow the `juno-pattern-[pattern]-[role]` convention or be removed.

---

### State Classes

Components that have stateful behaviour must apply state classes following the pattern `juno-[component-name]-[state]` (e.g. `juno-button-disabled`, `juno-select-open`, `juno-checkbox-selected`) reflecting the current state. Applicable states include `open`, `active`, `selected`, `disabled`, and any other visually distinct or user-observable state. Like identifier classes, these carry no styles.

---

### Style Consistency

Check that style constant names are descriptive and reflect what they style (e.g. `baseStyles`, `wrapperStyles`, `labelStyles`). Check that formatting and structure of style constants is consistent across sibling components.

Flag arbitrary CSS class names used as Tailwind group markers — note whether they are documented or should be replaced with data attributes.

**Arbitrary value syntax:** Scan every Tailwind class string for `utility-[value]` syntax (e.g. `text-[14px]`, `p-[8px]`, `w-[100%]`). For each occurrence, check whether a standard Tailwind utility covers the same intent. If one does, flag it as a pair:

| Author wrote  | Use instead |
| ------------- | ----------- |
| `text-[14px]` | `text-sm`   |

Only flag where a genuine built-in equivalent exists. Values that are genuinely off the default scale (e.g. a one-off brand pixel value) should not be flagged — note at most that it may be worth adding to the project's Tailwind config as a named token.

---

### External CSS vs Inline Tailwind

Flag `.css` and `.module.css` files used alongside or instead of inline Tailwind style constants. Check for conflicts and overlaps between the two approaches. If external CSS rules could straightforwardly be expressed as Tailwind utilities, recommend the conversion.

---

### Arbitrary Props

Each component must spread `...props` or `...rest` onto its root element so consumers can pass arbitrary HTML attributes. Flag components that do not, unless there is a clear documented reason.

**Intentional pattern:** Spreading `...props` last (after explicit props) is a deliberate escape-hatch in this codebase — it allows qualified consumers to override any default on their own responsibility. Do not flag this position. If the spread position means a consumer could override a safety-relevant value (e.g. `aria-disabled`), note it in one short sentence as a known trade-off only — do not make it a primary finding.

Also check that destructuring is consistent across sibling components in the family.

---

### ID Uniqueness

If the component generates IDs internally, verify `useId` is used to ensure uniqueness across multiple instances. If an ID is passed as a prop, the component may use it as-is — only internally generated IDs need `useId`.

Flag `useId` called inside loops, callbacks, or conditionals — this violates the Rules of Hooks and will cause runtime errors.

---

### Accessibility

Flag wrong semantic HTML elements. Flag missing required aria attributes where a role, label, or description is needed and not provided.

If a `required` prop is accepted but not forwarded to the native input element, note this as an informational observation — not a defect. The omission is intentional to avoid triggering native browser validation behaviour.

Limit findings to what is directly observable from reading the code: missing attributes, missing labels, missing keyboard handling, structural violations. Do not make claims about specific screen reader announcement behaviour or AT interaction sequences — these require testing with actual assistive technology to confirm. If such a claim is included at all, label it explicitly as "unverified — requires AT testing."

---

### Test Quality

Tests should follow these rules:

- Select elements by role where possible. For non-semantic elements, `data-testid` is acceptable for selecting in assertions — never as a stand-in for a user-supplied id. Placeholder ids in tests should look obviously fake (e.g. `data-lolol`, `data-123`).
- Each component's test file must open with a "renders a [component name]" smoke test that selects the root element and asserts the presence of the identifier class `juno-[component-name]`.
- There must be a test verifying that a custom `className` prop is rendered on the component after all internal class names.
- There must be a test verifying that arbitrary `data-*` attributes are passed through to the rendered element.
- If a component uses `forwardRef`, there must be a test verifying the ref is forwarded to the underlying DOM node.
- Flag use of `container.querySelector` or direct DOM access where a `screen` query would work.
- Flag duplicate tests across sibling component test files.

---

### Stories Coverage

Each component in the family must have dedicated stories. Flag components with no stories file.

Flag props that are not demonstrated in any story — a prop with no story coverage is invisible to consuming developers.

---

## Severity Guide

| Level        | When to use                                                                                                                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Critical** | Broken or non-functional behaviour: missing `useId` in an ID-generating component, an inaccessible interaction element, a prop defined but silently ignored in render, a Rules of Hooks violation |
| **Moderate** | Missing required convention: no identifier class, no `...props` spread without justification, missing `index.ts` export, external CSS conflicting with Tailwind                                   |
| **Minor**    | Style/naming inconsistency, undocumented group marker, missing story, test quality issue, unused import                                                                                           |

---

## Verification Requirement

Before reporting a finding that makes a specific claim about TypeScript type compatibility or runtime behaviour:

- **Type claims:** verify by running `tsc --noEmit` with the project's own `tsconfig.json`. Only report if `tsc` actually produces an error.
- **Runtime behavioural claims:** verify by running a minimal test with vitest. Only report if the test confirms the behaviour.

If verification is not feasible, label the finding explicitly as "unverified — worth a quick check." Never report a type or behavioural claim as a confirmed bug based on reading alone. A wrong finding stated with confidence damages credibility more than a correct finding stated cautiously.

---

## Depth Constraint

Checks run in one of two modes. Each consuming skill declares which mode it operates in.

**Horizontal (shallow) mode** — used when auditing many components at once. Flag only what is directly and unambiguously observable from reading the component's own files. Do not follow import chains, do not search the wider codebase for call sites (consuming-component validation is out of scope here), and do not make inferences that require running code to confirm.

**Deep (single-component) mode** — used when analysing one named component family. In addition to the checks above, consuming-component validation is in scope: search `apps/`, other packages, and any location outside the component's own directory for usages of each component in the family. For each call site, check whether the props it passes are still valid against the current interface, whether any removed or renamed props would silently break it, and whether behavioural changes identified elsewhere in the analysis would affect the consumer's expected outcome. Flag any call site that appears broken or materially at risk.
