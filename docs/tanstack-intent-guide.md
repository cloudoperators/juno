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

## Structure a component skill set

Each component or pattern that has dedicated skills owns a single parent directory containing its three sub-skills:

```
skills/<component>/
  <component>-spec/
    SKILL.md
    references/
  <component>-build/SKILL.md
  <component>-validate/SKILL.md
```

- The `-spec` skill owns the rule set and the `references/` that back it. Intent resolves a skill's references only at `<skillDir>/references/`, so they must sit under the skill that owns them — not at the component root.
- A skill's name must equal its directory basename (`datagrid-spec` lives in `datagrid-spec/`).
- `-build` and `-validate` declare `requires: [<component>-spec]` and point their `sources` at the spec's reference file. They cite the spec's rule IDs and never restate rules, so there is one source of truth per component.

### Add a new set

From the owning package directory, scaffold each skill, then author the bodies (place the references under `-spec/references/`), then sync:

```bash
pnpm exec intent maintainer add <component>-spec \
  --path skills/<component>/<component>-spec/SKILL.md --domain <domain> \
  --source "src/components/<Component>/<Component>.component.tsx"
pnpm exec intent maintainer add <component>-build \
  --path skills/<component>/<component>-build/SKILL.md --domain <domain> \
  --requires <component>-spec \
  --source "skills/<component>/<component>-spec/references/<component>-spec.md"
pnpm exec intent maintainer add <component>-validate \
  --path skills/<component>/<component>-validate/SKILL.md --domain <domain> \
  --requires <component>-spec \
  --source "skills/<component>/<component>-spec/references/<component>-spec.md"
pnpm exec intent maintainer sync
```

### Move or rename a skill

Intent has no move command, and `maintainer remove` retires a skill in place — it keeps the name and old path, which blocks re-adding the same name at a new path. So a move or rename is done by hand: `git mv` the files, fix the frontmatter (the name follows the new directory basename; update `requires`, `sources`, and relative reference links), then edit the three records in `_artifacts/` in place to the new paths and names (`sync` only aligns metadata of already-registered entries — it does not re-point a moved path). Then run `sync` (a no-op once records match frontmatter), `validate`, `review`, and `check`.

Do **not** prune the `.intent/review-state.json` entries that reference the old, now-deleted paths while the PR diff against `origin/main` still contains the renames — those entries record the review of the deletion half of each move, and removing them reopens pending items. (A genuinely dropped skill is different: once it is gone from the diff, prune its entries.)

### Remove a set

Retire dependents first (or drop their `requires`), since `maintainer remove` refuses while a skill is still required. Retiring keeps the guidance and flips the entry's status; delete the `SKILL.md` files yourself when the guidance is no longer needed, and prune the skill's entries from `.intent/review-state.json`.

> Scope `review` and `check` with `--base origin/main` while working on a branch, or they diff against the recorded baseline commit and surface every unrelated change in the repo.

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
