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

| Path                                    | What                                                                                      |
| --------------------------------------- | ----------------------------------------------------------------------------------------- |
| `packages/<pkg>/skills/<name>/SKILL.md` | A skill, beside its package.                                                              |
| `_artifacts/*.yaml`, `skill_spec.md`    | Shared planning records (domains, decisions, source mappings).                            |
| `.intent/review-state.json`             | Recorded review outcomes (fingerprints + evidence). Commit with the changes it describes. |
| `.intent/review.json`                   | Annotated report written and read by `maintainer review --record` (per-item outcomes).    |
| `AGENTS.md`                             | Maintainer procedure agents follow automatically.                                         |
| `.github/workflows/check-skills.yml`    | CI gate for skills and recorded reviews.                                                  |

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
sync`. This is the _scaffold_ mode, for starting from an empty skill; to author the files
first and register them, see author-first registration under _Add a new set_ below.

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
- `validate` type-checks `ts`/`tsx` code fences. Mark non-compiling, illustrative snippets ` ```tsx no-check `. Repo Prettier is no-semi, so a fence whose statement starts with bare JSX gets a leading `;` on format — wrap the JSX in a function/`return` so it doesn't.

### Add a new set

Run the commands below from the **owning package directory** (e.g. `packages/ui-components`), not from the repo root. Package-scoped skills — those that belong to a specific npm package and are published with it — must be registered from inside the package so that Intent sets the `package:` field correctly. Running `maintainer add` from the repo root creates skill files at the repo root instead of inside the package and omits `package:` from the artifact entries, which causes `review` to generate spurious bare-path entries that must be cleaned up by hand. Skills that are not bound to a package scope can live anywhere and may be registered from the repo root.

From the owning package directory, **author all four files first** — the three `SKILL.md` bodies (with their frontmatter) and the `-spec`'s `references/<component>-spec.md` — then register each existing `SKILL.md`. Because the files already exist, pass only `--path` and `--domain`; `sources` and `requires` are read from the frontmatter. Passing `--source`/`--requires` for a file that already exists is rejected (`To register an existing skill, supply its --path and --domain…`) — those flags only scaffold a new, empty skill. Domains are free-form: a new domain is just a new slug.

```bash
pnpm exec intent maintainer add <component>-spec     --path skills/<component>/<component>-spec/SKILL.md     --domain <domain>
pnpm exec intent maintainer add <component>-build    --path skills/<component>/<component>-build/SKILL.md    --domain <domain>
pnpm exec intent maintainer add <component>-validate --path skills/<component>/<component>-validate/SKILL.md --domain <domain>
```

`maintainer add` does not fill everything in the planning records. Complete these by hand:

- **`_artifacts/domain_map.yaml`** — each new skill is added with `tasks: []`; fill in the developer task(s) it covers.
- **`_artifacts/skill_tree.yaml`** — add the `-spec` entry's reference file under `references:` (e.g. `references: [ references/<component>-spec.md ]`). **`validate` fails without it**, and neither `add` nor `sync` populates it.
- **`_artifacts/skill_spec.md`** — `add` appends placeholder bullets ("Task coverage, decisions, and checks still need to be recorded"); replace them with a real batch entry.

Then align and validate:

```bash
pnpm exec intent maintainer sync       # aligns artifact metadata with the frontmatter
pnpm exec intent validate skills       # structural checks + ts/tsx fence type-checks
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

`--interactive` walks each pending item so you can record outcomes individually. Non-interactively, `--updated "<reason>"` or `--unchanged "<reason>"` records **every** pending item at once (updated = you changed the guidance; unchanged = source moved, guidance still correct — the reason is your evidence), and `--record <file>` reads per-item outcomes from an annotated JSON report. Do **not** auto-rubber-stamp reviews with a hook; that defeats the drift check.

## Before you merge

```bash
pnpm exec intent maintainer sync                        # regenerate derived metadata
pnpm exec intent maintainer review --base origin/main   # record pending reviews
pnpm exec intent maintainer check  --base origin/main   # the full gate (also run in CI)
```

Add a changeset for any published `ui-components` change, and commit
`.intent/review-state.json` and `_artifacts/` with the edits they describe. CI only
triggers on skill, component, and artifact paths; if you add skills to another package,
extend the `paths:` filter in `check-skills.yml` or they are skipped.

> Run commands with `pnpm exec intent <cmd>` (or `./node_modules/.bin/intent <cmd>`). See
> the upstream TanStack Intent docs for the version in our `package.json`.
