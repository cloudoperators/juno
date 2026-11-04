# Component quality knowledge (agent-agnostic)

Tool-neutral knowledge that defines **how** this library's components are checked for quality. Any agent — or a person — can read and follow these files directly. They name no tools and assume no particular assistant; they are the "what", not the "how to run it".

This is maintainer-only contributor tooling. It has nothing to do with the packaged, consumer-facing library.

## Contents

- **`component-checks.md`** — the single source of truth: the 12 checks (identifier/state classes, type safety, accessibility, test quality, stories coverage, …), the severity guide, the verification requirement, and the two depth modes (shallow vs. deep).
- **`analyze-guide.md`** — the procedure and prose report format for a **deep analysis of one** component family.
- **`audit-guide.md`** — the procedure, per-family JSON schema, and report format for a **horizontal, shallow scan of all** families.

The two guides both draw their rules from `component-checks.md` — edit the checks in one place and both tasks follow.

## How these are used

The Claude Code skills in [`../../.claude/skills/`](../../.claude/skills/) (`component-analyze`, `component-audit`) are thin wrappers that point here and add only the Claude-specific mechanics. To change what gets checked or how a report reads, **edit these files, not the wrappers**. To run the same checks with a different agent, point it at these files directly — nothing here depends on Claude.

## Decoupled from Intent, and never shipped

The library's consumer-facing skills live in [`../../skills/`](../../skills/) and are published with the npm package via TanStack Intent. This knowledge is deliberately kept out of that chain:

- It lives under `docs/agents/`, which **Intent does not scan** (Intent only manages `skills/`), so it stays out of Intent's lifecycle and CI gate.
- `docs/` is **not** in the package's `files` allowlist, so it **never ships** to consumers (`npm pack` excludes it).

It is tracked in the repo so every contributor has it, but it is purely internal developer tooling.
