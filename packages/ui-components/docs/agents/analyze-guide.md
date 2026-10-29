# Deep Single-Component Analysis

> Tool-neutral procedure. This describes _what_ to do and _what the report looks like_ — not which agent or tools run it. Any agent (or person) can follow it directly. A thin Claude Code wrapper at `packages/ui-components/.claude/skills/component-analyze/SKILL.md` invokes this and adds only the mechanics (discovery, tool names).

## Purpose

Analyze one named Juno UI component family in depth and produce a detailed prose report covering code quality, conventions, accessibility, test coverage, and stories. Read-only — never modify files.

## Inputs

A single component family under `src/components/` (e.g. `Button`, `Select`, `DescriptionList`), including all of its sibling sub-components.

## Procedure

1. **Gather** every file belonging to the family: component source, `index.ts`, tests, stories, and any colocated `.css` / `.module.css` files. Include related sub-components, which live in their own sibling directories sharing a name prefix (e.g. for `DescriptionList`, also `DescriptionTerm` and `DescriptionDefinition`).
2. **Read** all gathered files before forming any conclusion.
3. **Apply every check** defined in [component-checks.md](component-checks.md) in **deep (single-component) mode**. Deep mode means the Depth Constraint's deep behaviour applies: consuming-component validation is in scope — look across the wider codebase (`apps/`, other packages) for call sites and flag any the current interface would break.
4. **Verify before asserting.** Apply the Verification Requirement from `component-checks.md`: any claim about TypeScript type compatibility or runtime behaviour must be confirmed empirically (`tsc --noEmit` / a test run) before being stated as fact, or else labelled "unverified — worth a quick check". Apply the same filter to any findings gathered from delegated work before relaying them.

## Report Format

Use title case for all section headings. For each check, describe what was found — or state explicitly that nothing was found. Keep findings factual and specific: name the file, reference the line, explain the issue concisely. Break multiple distinct findings into short paragraphs rather than one dense block. Leave two blank lines between sections.

After all check sections, add a **Summary** — one entry per topic below, each title on its own line followed by a single-sentence assessment. Call out anything that may not be working as expected; if only minor details exist, say so without elaborating:

- **Props & Types**
- **Classes & Styles**
- **Accessibility**
- **Stories**
- **Tests**

Close with a **Verdict**: a one- or two-sentence overall assessment of component quality.
