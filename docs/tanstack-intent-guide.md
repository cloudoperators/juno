# TanStack Intent Guide

A short guide for the Juno team. We all maintain the monorepo and
`@cloudoperators/juno-ui-components`, and Intent is new to us.

## What it is

Intent lets a package ship **skills**: versioned, task-focused guidance (a `SKILL.md` plus
optional references) that lives next to the code and is published with the npm package. A
coding agent building a DataGrid loads our DataGrid skill instead of guessing from source.
The payoff: guidance versions with the library, has one home, and a CI gate flags it when
the underlying component changes. Our first batch is the DataGrid skills in
`packages/ui-components/skills/`.

## Where things live

| Path                                    | What                                                                     |
| --------------------------------------- | ------------------------------------------------------------------------ |
| `packages/<pkg>/skills/<name>/SKILL.md` | A skill, beside its package.                                             |
| `_artifacts/*.yaml`, `skill_spec.md`    | Shared planning records (domains, decisions, source mappings).           |
| `.intent/review-state.json`             | Which source reviews are complete. Commit with the changes it describes. |
| `AGENTS.md`                             | Maintainer procedure agents follow automatically.                        |
| `.github/workflows/check-skills.yml`    | CI gate for skills and recorded reviews.                                 |

## Create a skill

Skills map to developer tasks ("build a DataGrid"), not one-per-component.

```bash
pnpm exec intent maintainer add <name> \
  --package packages/ui-components --domain <domain> \
  --description "Use when ..." \
  --source "src/components/<Component>/<Component>.component.tsx" \
  --task "The developer task this skill covers"
```

This scaffolds `SKILL.md` and updates the planning records. Author the body (ask your
agent for the `meta generate-skill` procedure, or write it by hand), then `maintainer
sync`.

## Keep skills current when a component changes

Each skill fingerprints its `SKILL.md`, references, and mapped `--source` files. When any
change, CI marks the skill **pending review** and fails until you record an outcome. This
is the point of the tool: it forces a decision whenever the library moves.

```bash
pnpm exec intent maintainer review --base origin/main --interactive
```

Record each item as `--updated "<reason>"` (you changed the guidance) or `--unchanged
"<reason>"` (source moved, guidance still correct; the reason is your evidence). Do **not**
auto-rubber-stamp reviews with a hook; that defeats the drift check.

## Before you merge

```bash
pnpm exec intent maintainer sync       # regenerate derived metadata
pnpm exec intent maintainer review     # record pending reviews
pnpm exec intent maintainer check      # the full gate (also run in CI)
```

Add a changeset for any published `ui-components` change, and commit
`.intent/review-state.json` and `_artifacts/` with the edits they describe. CI only
triggers on skill, component, and artifact paths; if you add skills to another package,
extend the `paths:` filter in `check-skills.yml` or they are skipped.

> Run commands with `pnpm exec intent <cmd>` (or `./node_modules/.bin/intent <cmd>`). See
> the upstream TanStack Intent docs for the version in our `package.json`.
