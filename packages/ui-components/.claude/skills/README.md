# Component maintainer skills (Claude Code)

Maintainer-only [Claude Code](https://docs.claude.com/en/docs/claude-code) skills for checking the quality of this library's **own** components. They help contributors keep `@cloudoperators/juno-ui-components` consistent, accessible, and well-tested. They are **not** for consumers using the library in their apps.

## Skills

- **`component-analyze`** — deep analysis of a single named component family (e.g. "analyze Badge"). Reads the family's source, tests, and stories, checks it against every rule, validates its call sites across the repo, and returns a detailed prose report.
- **`component-audit`** — horizontal, shallow scan across _all_ component families ("audit all components"). Runs the checks per family in parallel and returns a severity-ranked report grouped by problem category.

Both are **read-only** — they report, they never modify files.

## How to run

Quick start:

1. Open the repo in Claude Code and change into `packages/ui-components/` — the skills are **directory-scoped** and only surface from inside the package (not the repo root); no setup needed.
2. Ask in plain language: **"analyze Button"** for one component (→ detailed prose report), or **"audit all components"** for the whole library (→ severity-ranked report). You can also invoke `component-analyze` / `component-audit` by name.

Both are read-only — they report, they never change files.

## Thin wrappers over shared knowledge

Each `SKILL.md` here is only a thin Claude Code adapter — it supplies the Claude-specific mechanics (which tools to use, and for the audit, how to parallelize). All the actual criteria, procedures, and output formats live, tool-neutrally, in [`../../docs/agents/`](../../docs/agents/):

- `component-checks.md` — the checks (single source of truth)
- `analyze-guide.md`, `audit-guide.md` — procedures and report formats

**To change behaviour, edit the `docs/agents/` files — keep these wrappers thin.**

## Decoupled from Intent, and never shipped

The library's **consumer-facing** skills live in [`packages/ui-components/skills/`](../../skills/) and are published with the npm package via TanStack Intent. These maintainer skills are deliberately kept separate from that chain:

- They live under `.claude/skills/`, which **Intent does not scan** — so Intent's `maintainer add/review/check` lifecycle and CI gate never manage them.
- `.claude/` is **not** in the package's `files` allowlist, so these skills **never ship** to consumers (`npm pack` excludes them).

The point of the split: this is developer tooling for people working _on_ the library, and it must stay out of both the published package and Intent's maintenance chain.
