# Horizontal Shallow Audit

> Tool-neutral procedure. This describes _what_ to do and _what the report looks like_ — not which agent or tools run it, and not how the per-family work is parallelized. Any agent (or person) can follow it directly. A thin Claude Code wrapper at `packages/ui-components/.claude/skills/component-audit/SKILL.md` invokes this and adds the mechanics (how to fan the per-family step out across subagents).

## Purpose

Scan all Juno UI component families and produce a severity-ranked report organized by problem category, listing affected components per category with a per-component severity and an overall severity per category. Read-only — never modify files.

## Procedure

### 1. Discover families

Find all `*.component.tsx` files under `src/components/`. Group them into families: all components sharing one directory form a family (e.g. `DataGrid/` contains `DataGrid`, `DataGridRow`, `DataGridCell`, …). Each directory = one family.

### 2. Check each family (shallow)

For every family, perform one self-contained per-family check:

- Read all `.component.tsx`, `.test.tsx`, `.stories.tsx`, and `index.ts` files in that directory.
- Apply every check in `component-checks.md` (the shared source of truth, co-located in this directory) in **horizontal (shallow) mode**: flag only what is directly and unambiguously observable from the family's own files. Do not follow import chains, do not search for call sites, do not make inferences that require running code.
- Emit findings as a JSON array, one object per finding, using these check keys (each maps to a section in `component-checks.md`): `dead_code`, `type_safety`, `export_consistency`, `identifier_classes`, `state_classes`, `style_consistency`, `external_css`, `arbitrary_props`, `id_uniqueness`, `accessibility`, `test_quality`, `stories_coverage`.

```json
[
  {
    "family": "<FamilyDir>",
    "component": "<ComponentName>",
    "check": "<check_key>",
    "severity": "critical" | "moderate" | "minor",
    "file": "<relative file path>",
    "line": <line number or null>,
    "summary": "<one sentence>"
  }
]
```

Omit checks that find nothing — do not emit empty entries. Per the Verification Requirement in `component-checks.md`, do not emit findings that make claims about TypeScript assignability or runtime behaviour that could only be confirmed by running `tsc` or a test.

### 3. Aggregate

Collect all per-family JSON into one flat list. Deduplicate exact duplicates (same component + check + line). Then filter again: drop any finding whose `summary` makes a type-assignability or runtime claim that could only be confirmed by running `tsc` or a test. When in doubt, drop it — a wrong finding stated as fact does more damage than a missed one.

### 4. Report

Organize by **check category** (not by component). For each category:

- A `##` heading with the human-readable category name.
- An **overall severity badge** = the highest severity among its findings.
- One bullet per affected component: `**ComponentName** (Severity) — [file:line](file) — summary`, sorted critical → moderate → minor.
- If a category has no findings, print its heading and "No issues found." — do not skip it.

After the categories, a **Summary Table**:

| Category                 | Critical | Moderate | Minor | Total |
| ------------------------ | -------- | -------- | ----- | ----- |
| Dead Code & Unused Props | n        | n        | n     | n     |
| ...                      |          |          |       |       |
| **Total**                | n        | n        | n     | n     |

Then a **Top Issues** section: the 5–10 most severe findings across all categories (critical first, then by number of affected components).

## Notes

- All file paths in findings are relative to the repo root.
- Report only — never suggest fixes unless asked.
- If a family cannot be analyzed, note it as "skipped – could not analyze" rather than omitting it silently.
