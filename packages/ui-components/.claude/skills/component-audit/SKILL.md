---
name: component-audit
description: >-
  Scan all Juno UI components across the entire library for problems, running
  checks in parallel across every component family and producing a
  severity-ranked report organized by problem category. Use when no specific
  component is named — e.g. "audit all components", "scan for issues", "what's
  broken across the library", "run a horizontal audit". Do not use when a single
  named component was specified (use component-analyze). Maintainer-only; not
  shipped with the package. Uses the shared check definitions in
  docs/agents/component-checks.md.
sources:
  - src/components/
---

Maintainer-only, read-only. The procedure, per-family JSON schema, and report format are defined tool-neutrally in the package's agent docs; this file only wires them to Claude Code.

- **What to do and what the report looks like:** `packages/ui-components/docs/agents/audit-guide.md`
- **The checks (single source of truth):** `packages/ui-components/docs/agents/component-checks.md`

Follow `audit-guide.md` end to end, in **horizontal (shallow) mode**. Claude Code mechanics for the only tool-specific step — fanning out the per-family check: process families in parallel batches of 8–10 using the `Agent` tool with `subagent_type: "Explore"`, handing each subagent exactly one family's "Check each family (shallow)" task from `audit-guide.md` (including the JSON return shape). Then aggregate and report per the guide. Never modify files.
