---
name: component-analyze
description: >-
  Analyze or check a single named Juno UI component family in depth — code
  quality, conventions, accessibility, test coverage, and stories — and produce
  a detailed prose report. Use when the user names a specific component (e.g.
  "analyze Button", "check Select", "review Textarea"). Do not use for general
  code changes, bug fixes, or when all components are mentioned (use
  component-audit for a library-wide scan). Maintainer-only; not shipped with
  the package. Uses the shared check definitions in
  docs/agents/component-checks.md, which component-audit also uses.
sources:
  - src/components/
---

Maintainer-only, read-only. The procedure and output are defined tool-neutrally in the package's agent docs; this file only wires them to Claude Code.

- **What to do and what the report looks like:** `packages/ui-components/docs/agents/analyze-guide.md`
- **The checks (single source of truth):** `packages/ui-components/docs/agents/component-checks.md`

Follow `analyze-guide.md` end to end, in **deep (single-component) mode**. Claude Code mechanics: discover the family's files with `Glob`, read them with `Read`. Never modify files.
