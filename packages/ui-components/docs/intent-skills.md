# Shipping Knowledge with TanStack Intent

> [!NOTE]
> This document describes the design for distributing Juno's maintainer knowledge (component usage, UX guidelines, patterns) to consumer projects via [TanStack Intent](https://tanstack.com/intent/latest). It is the reference for both maintainers authoring skills and teams consuming them.

## Table of Contents

- [The Problem](#the-problem)
- [What Is TanStack Intent?](#what-is-tanstack-intent)
- [How It Works End-to-End](#how-it-works-end-to-end)
- [Consumer-Side Flow (How the AI Uses Skills)](#consumer-side-flow-how-the-ai-uses-skills)
- [Where the Skills Actually Live in the Chain](#where-the-skills-actually-live-in-the-chain)
- [Skill Architecture](#skill-architecture)
- [Maintainer Setup](#maintainer-setup)
- [Consumer Setup](#consumer-setup)
- [Consumer: Controlling Which Skills Load](#consumer-controlling-which-skills-load)
- [CLAUDE.md Fallback (Hybrid Approach)](#claudemd-fallback-hybrid-approach)
- [CI Integration](#ci-integration)
- [Documentation Surfaces](#documentation-surfaces)
- [Rollout Phases](#rollout-phases)
- [Design Decisions Reference](#design-decisions-reference)
- [Out of Scope](#out-of-scope)

---

## The Problem

As the Frontend Engineering team, we maintain knowledge on the **maintainer side**:

- `packages/ui-components` — 105 components with Storybook documentation
- `docs/ux` — 42 markdown files of UX guidelines, patterns, and best practices

We want to ship that knowledge to the **consumer side** so that every team member — and the AI assistants they use — produces consistent code that follows our guidelines:

- **Aurora** (`@cobaltcore-dev/aurora`) — external consumer that bundles Juno components
- **Greenhouse core** (`apps/greenhouse`) — the shell/host application
- **In-repo Greenhouse plugins** (`apps/doop`, `apps/supernova`, `apps/heureka`) — plugins that live in this monorepo and are integrated into Greenhouse at build time
- **External plugins** — standalone apps built from a template and loaded into Greenhouse at runtime via dynamic import (the true micro-frontend case)

The goal is **both** active guidance for critical patterns (AppShell wrapping, provider setup, accessibility) and passive knowledge for reference (UX writing, component APIs).

---

## What Is TanStack Intent?

TanStack Intent is a CLI for library maintainers to **generate, validate, and ship Agent Skills alongside their npm packages**. Skills are markdown documents (`SKILL.md`) that teach AI coding agents how to use a library correctly.

Key properties:

- **Versioned with code** — skills ship inside the npm tarball, so consumers get guidance matching their installed version.
- **Discoverable** — consumers run `intent list` to see available skills; AI agents run `intent load` to pull guidance into context.
- **Trust-gated** — consumers explicitly allowlist which packages' skills are surfaced via `package.json#intent.skills`.
- **Open standard** — compatible with the Agent Skills standard, so it works across Claude Code, Cursor, and other AI tools.

> [!NOTE]
> TanStack Intent is alpha-stage (`@tanstack/intent@0.5.x` at time of writing). Expect the CLI surface to evolve.

---

## How It Works End-to-End

```
┌───────────────────────────────────────────────────────────────────────────┐
│  MAINTAINER SIDE (Frontend Engineering team)                              │
│                                                                           │
│  @cloudoperators/juno-ui-components (npm package)                         │
│  └── skills/                                                              │
│      ├── fundamentals/SKILL.md    ← AppShell, providers, theming, core    │
│      ├── datagrid/SKILL.md        ← DataGrid patterns                     │
│      ├── forms/SKILL.md           ← Form inputs, validation               │
│      └── feedback/SKILL.md        ← Messages, toasts, loading states      │
│                                                                           │
│  Skills reference:  docs/ux/*.md  +  *.stories.tsx                        │
│                                                                           │
│  Published to npm  ──►  skills ship inside the package tarball            │
└───────────────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌───────────────────────────────────────────────────────────────────────────┐
│  CONSUMER SIDE (e.g. a Greenhouse plugin developer)                       │
│                                                                           │
│  my-greenhouse-plugin/                                                    │
│  ├── package.json                                                         │
│  │     "dependencies": {                                                  │
│  │        "@cloudoperators/juno-ui-components": "^9"                      │
│  │     },                                                                 │
│  │     "intent": {                                                        │
│  │        "skills": ["@cloudoperators/juno-ui-components"]  ← allowlist   │
│  │     }                                                                  │
│  │                                                                        │
│  ├── node_modules/@cloudoperators/juno-ui-components/                     │
│  │     └── skills/   ← skills land HERE, installed with the package       │
│  │                                                                        │
│  └── AGENTS.md  (and/or CLAUDE.md)                                         │
│        └── <!-- intent-skills --> block with discovery instructions       │
└───────────────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌───────────────────────────────────────────────────────────────────────────┐
│  AI TOOL (Claude Code, Cursor, …)                                         │
│                                                                           │
│  1. Reads AGENTS.md / CLAUDE.md  ──►  sees Intent instructions            │
│  2. Runs:  npx @tanstack/intent list                                      │
│  3. Sees available skills from allowlisted packages                       │
│  4. Working on a table?  npx @tanstack/intent load <pkg>#datagrid         │
│  5. SKILL.md content is injected into the AI's context window             │
│  6. AI applies the guidance while helping the developer write code        │
└───────────────────────────────────────────────────────────────────────────┘
```

**Key insight:** The AI does not know skills exist by magic. The mechanism is _context injection_ — a discovery file points the AI at Intent, the `intent load` command extracts `SKILL.md` content, and that content becomes part of the AI's working context, exactly as if the developer had pasted it in by hand, but automated and versioned with the package.

---

## Consumer-Side Flow (How the AI Uses Skills)

Here is a concrete end-to-end example of what happens when a developer works with an Intent-aware AI assistant.

**Scenario:** A developer on the Aurora team asks Claude Code:

> _"Add a table showing all images with filtering and pagination."_

### Step 1 — AI discovers that skills exist

The AI reads the project's `AGENTS.md`, which contains a block auto-generated by `intent install`:

```markdown
<!-- intent-skills -->

This project uses TanStack Intent for AI guidance. Before editing code:

- Run `npx @tanstack/intent list` to see available skills
- Run `npx @tanstack/intent load <package>#<skill>` to load relevant guidance
<!-- /intent-skills -->
```

### Step 2 — AI lists available skills

```bash
$ npx @tanstack/intent list

@cloudoperators/juno-ui-components (9.1.0)
  ★ #fundamentals    [load first] AppShell setup, providers, theming, core patterns
    #datagrid        DataGrid components, sorting, filtering, pagination
    #forms           Form inputs, validation, submit patterns
    #feedback        Messages, toasts, loading states
    ...
```

### Step 3 — AI loads the relevant skill

The AI recognizes "table with filtering and pagination" and loads the DataGrid skill:

```bash
$ npx @tanstack/intent load @cloudoperators/juno-ui-components#datagrid
```

The full `SKILL.md` content streams into the AI's context:

```markdown
# DataGrid Skill

## Core Components

- `DataGrid` - Container for tabular data
- `DataGridRow` - Individual row
- `DataGridCell` - Cell within a row
- `DataGridHeadCell` - Header cell with sorting support
- `DataGridToolbar` - Toolbar for filters and actions

## Required Patterns

### Always wrap filters in DataGridToolbar

✅ Do:
<DataGridToolbar>
<SearchInput onChange={handleSearch} />
</DataGridToolbar>
<DataGrid>...</DataGrid>

❌ Don't: place filters outside the toolbar structure

### Empty state handling

Always provide an empty state using the Status component:
<Status icon="search" text="No images found" />

## References

- Full UX guidelines: docs/ux/datagrid.md
- Storybook examples: https://cloudoperators.github.io/juno/?path=/docs/...
```

### Step 4 — AI applies the guidance

When Claude Code writes the code, it now:

- uses `DataGridToolbar` for the filter UI,
- adds sortable `DataGridHeadCell` columns,
- includes an empty state with the `Status` component,
- follows the pagination pattern from the skill.

### How different tools consume Intent

| AI Tool                            | How it uses Intent                                                                                             |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Claude Code**                    | Reads `CLAUDE.md` → follows instructions to run `intent load` → skill content enters the conversation context. |
| **Cursor**                         | Reads `.cursorrules` or `AGENTS.md` → same `intent load` flow.                                                 |
| **GitHub Copilot**                 | Can read `AGENTS.md` if configured; less reliable at running CLI commands.                                     |
| **Native Intent support** (future) | Tools may integrate Intent directly, auto-loading skills based on the file being edited.                       |

---

## Where the Skills Actually Live in the Chain

A key property of this model: **skills are a development-time artifact, not a distribution one.** They
ship inside the Juno package, land in a consumer's `node_modules` where the AI can read them while a
developer writes code, and then stop there — they never propagate into the consumer's own built
bundle or published package.

Worked example using [Aurora](https://github.com/cobaltcore-dev/aurora-dashboard/tree/main/packages/aurora),
which consumes Juno and publishes its own package:

```
@cloudoperators/juno-ui-components (npm)
  └── skills/                     ← skills ship HERE, inside Juno's tarball (~75 KB compressed)
        │
        ▼  pnpm install  (Aurora lists juno as a devDependency)
Aurora dev's node_modules/@cloudoperators/juno-ui-components/skills/
        │                         ← skills sit here during DEVELOPMENT
        │                            `intent list` / `intent load` read them from here
        │
        ▼  pnpm build → dist/     (vite + tsup; SKILL.md is never `import`-ed by app code)
Aurora's dist/                    ← NO skills. Only Aurora's own compiled client/server output
        │                            (the Juno components Aurora actually imports are bundled in;
        │                             the markdown skills are left behind)
        │
        ▼  npm publish  (Aurora's package.json has files: ["dist"])
Aurora's published tarball        ← NO skills
        │
        ▼  installed by Aurora's own consumers
Downstream app                    ← sees nothing of Juno's skills
```

### Why the skills never leak downstream

Two independent mechanisms guarantee it, each sufficient on its own:

1. **Bundlers only include what is `import`-ed.** `SKILL.md` files are plain markdown that no
   application code imports, so Vite/tsup never pull them into `dist/`. They add **zero bytes** to
   any built output. (This is the same reason skills do not affect Juno's own runtime bundle: the
   skills are a small fraction of the package on disk — roughly the size of the compiled CSS — but
   0% of what executes, since nothing imports them.)
2. **The `files` allowlist scopes the published tarball.** Aurora publishes `files: ["dist"]`, and
   the skills live in `node_modules/@cloudoperators/juno-ui-components/skills/`, not in `dist/`. So
   they are outside Aurora's publish set regardless of bundling.

### Implications

- A developer building against Juno (Aurora, a Greenhouse plugin, a new app from the template) gets
  Juno's skills **while developing**. Their AI assistant loads them from `node_modules`.
- That consumer's **own** downstream users see nothing of Juno's skills — which is the desired
  behavior.
- If a consumer wants to ship guidance to **its** users, it authors **its own** skills and adds its
  `skills/` directory to its **own** `files` array. This is exactly the plan for Aurora-specific
  skills (tRPC patterns, the slot system, OpenStack integration) described under
  [Consumer Setup → Aurora](#aurora).

> [!NOTE]
> A consumer only sees the skills once it depends on a **published Juno version that contains them**.
> For example, Aurora currently pins `@cloudoperators/juno-ui-components` at an older version as a
> devDependency; it will not see the skills until it bumps to a release that ships them (or installs
> a local tarball built with the skills for testing).

### Composition: when a consumer re-ships its own skill built on Juno

The chain above stops Juno's skills at the first `node_modules`. But a consumer can **author its own
skill** and ship it onward — a *composition*. Aurora is the natural example: today it is only an
Intent **consumer** (its `package.json` already has
`intent.skills: ["@cloudoperators/juno-ui-components"]`, so Juno's skills reach Aurora's own
developers). The moment Aurora adds a `skills/` directory and lists it in its `files` array, it also
becomes an Intent **producer** for its downstream.

Concretely, suppose Aurora ships a `create-aurora-plugin` skill — "scaffold a new full-fledged Aurora
plugin" — whose guidance naturally uses Juno UI components (AppShell layout, DataGrid, forms) on top
of Aurora's own patterns (the `AuroraApp` slots, tRPC routers, route `staticData`). Two independent
skill streams now flow, each from the package that owns that knowledge:

```
┌───────────────────────────────────────────────────────────────────────────┐
│  @cloudoperators/juno-ui-components (npm)                                  │
│  └── skills/ (datagrid, forms, layout, …)   ← Juno owns component guidance │
└───────────────────────────────────────────────────────────────────────────┘
                 │  Aurora depends on Juno (bundled at build time)
                 ▼
┌───────────────────────────────────────────────────────────────────────────┐
│  @cobaltcore-dev/aurora (npm)                                             │
│                                                                           │
│  Consumer side: intent.skills allowlists juno-ui-components               │
│    → Juno's skills reach Aurora's OWN developers during development        │
│                                                                           │
│  Producer side (new): Aurora authors + ships its OWN skill                │
│    skills/create-aurora-plugin/SKILL.md   ← Aurora owns plugin-scaffolding │
│      · uses Juno components (AppShell, DataGrid, forms) in its examples    │
│      · plus Aurora-only patterns (AuroraApp slots, tRPC, route staticData) │
│    package.json: files += "skills/create-aurora-plugin"  (publishes it)    │
│    package.json: intent.skills += "@cobaltcore-dev/aurora"  (self-allow)   │
└───────────────────────────────────────────────────────────────────────────┘
                 │  a plugin author / template installs @cobaltcore-dev/aurora
                 ▼
┌───────────────────────────────────────────────────────────────────────────┐
│  New Aurora plugin project                                                │
│    node_modules/@cobaltcore-dev/aurora/skills/create-aurora-plugin/…       │
│                                                                           │
│  `intent list` here shows TWO skills, from two packages:                   │
│    @cobaltcore-dev/aurora#create-aurora-plugin   (if its scope is allowed) │
│    @cloudoperators/juno-ui-components#datagrid, #forms, …  (transitively,  │
│                                              only if explicitly allowed)   │
│                                                                           │
│  AI loads create-aurora-plugin to scaffold the plugin, and reaches for the │
│  Juno skills for the component-level detail the Aurora skill points to.    │
└───────────────────────────────────────────────────────────────────────────┘
```

Two rules make this composition behave:

1. **Each package owns and ships its own skill.** Juno ships component guidance; Aurora ships
   plugin-scaffolding guidance that *references* Juno's. Aurora does **not** copy or re-bundle Juno's
   `SKILL.md` files — they travel with the Juno dependency. Aurora's skill links to them (e.g. "for
   the data table, see `@cloudoperators/juno-ui-components#datagrid`").
2. **Allowlisting is not transitive by default.** The plugin project sees Aurora's skill only if its
   `intent.skills` allows `@cobaltcore-dev/aurora`, and Juno's skills only if it *also* allows
   `@cloudoperators/juno-ui-components` (or a scope/`"*"` that covers both). A project generated from
   an Aurora template would ship an `intent.skills` that allows both, so the plugin author gets the
   full chain — Aurora's scaffolding skill *and* the Juno component skills it defers to — out of the
   box.

The practical payoff: a brand-new Aurora plugin, created from the template, hands its AI assistant
both *"how to scaffold an Aurora plugin"* (Aurora's skill) and *"how to use each Juno component
correctly"* (Juno's skills) — composed, versioned with each package, and discovered through the one
`intent list`.

---

## Skill Architecture

### Location

Skills live at the **package root** in a visible `skills/` directory, matching TanStack Intent's documented convention and versioning together with the package:

```
packages/ui-components/
└── skills/
    ├── fundamentals/SKILL.md
    ├── datagrid/SKILL.md
    ├── forms/SKILL.md
    ├── feedback/SKILL.md
    ├── layout/SKILL.md
    ├── navigation/SKILL.md
    ├── modals/SKILL.md
    ├── accessibility/SKILL.md
    ├── ux-writing/SKILL.md
    └── migrations/SKILL.md
```

### The 10 skills

The architecture is **hybrid**: one foundational skill that is always relevant, plus domain skills loaded on demand.

| Skill            | Purpose                                                                                                                                                                                                              | Priority    |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `#fundamentals`  | AppShellProvider, theming, CSS imports, provider nesting order, embedded patterns, routing (TanStack Router), state management (Zustand slices), semantic variants, accessibility basics, error/loading/empty states | **Phase 1** |
| `#datagrid`      | DataGrid components, sorting, filtering, pagination, bulk actions, empty states                                                                                                                                      | **Phase 1** |
| `#forms`         | Form inputs, validation timing, `FormRow`/`FormSection`, conditional fields, submit feedback                                                                                                                         | **Phase 1** |
| `#feedback`      | `Message`, `Toast`, `NotificationManager`, `Status`, loading states                                                                                                                                                  | **Phase 1** |
| `#layout`        | `AppShell`, `Container`, `Stack`, `Grid`, page structure                                                                                                                                                             | Phase 2     |
| `#navigation`    | `SideNavigation`, `TopNavigation`, `Breadcrumb`, `Tabs`                                                                                                                                                              | Phase 2     |
| `#modals`        | `Modal`, `Panel`, confirmation dialogs, destructive-action severity                                                                                                                                                  | Phase 2     |
| `#accessibility` | ARIA patterns, keyboard navigation, focus management                                                                                                                                                                 | Phase 2     |
| `#ux-writing`    | Content guidelines, title case, button labels, empty values (`- -`)                                                                                                                                                  | Phase 2     |
| `#migrations`    | Deprecated components and upgrade paths                                                                                                                                                                              | Phase 2     |

Skill names are **short** — the package scope (`@cloudoperators/juno-ui-components#datagrid`) already provides the origin context.

### Content conventions

- **Tiered** — core guidance (the 80% case) upfront; advanced sections at the end that the AI can skip for simple tasks.
- **Summarize + reference** — skills contain condensed, actionable guidance and link to the full `docs/ux/*.md` for deep dives, so the UX docs remain the single source of truth.
- **Source references** — each skill references the relevant UX docs (the "why" and the rules) and Storybook stories (`*.stories.tsx`, the "how to use"). Component source is implementation detail skills do not need to reference.

### Discovery experience

`intent list` presents skills **hierarchically**: `#fundamentals` is marked _load first_; domain skills are marked _load as needed_.

---

## Maintainer Setup

- **Ownership:** The **Frontend Engineering team** owns and maintains all skills centrally, ensuring a consistent voice. PR review enforces quality.
- **Versioning:** **Loose coupling.** Skills are updated when patterns or APIs change meaningfully — not on every release. `intent stale` surfaces drift; maintainers decide whether guidance needs updating.

Typical maintainer workflow:

```bash
# One-time, from the ui-components package
npx @tanstack/intent maintainer setup

# Create or register a skill
npx @tanstack/intent maintainer add datagrid --package @cloudoperators/juno-ui-components

# Ongoing: find skills affected by recent changes
npx @tanstack/intent maintainer review

# Before release: align metadata and verify structure
npx @tanstack/intent maintainer sync
npx @tanstack/intent maintainer check
```

> [!NOTE]
> `maintainer add` creates the skeleton and registers the skill, but the maintainer writes the task coverage, source-backed guidance, and consequential decisions — the command does not infer them.

---

## Consumer Setup

Consumers **opt in explicitly** by allowlisting the package and running `intent install`.

### Existing Greenhouse apps (doop, supernova, heureka) — configured retroactively

Each app's `package.json`:

```json
{
  "intent": {
    "skills": ["@cloudoperators/juno-ui-components"]
  }
}
```

Then run `npx @tanstack/intent install` to generate the `AGENTS.md` discovery block. Even internal apps benefit — any team member working on any app gets the same guidance.

### New plugin template — working integration out of the box

The "start from scratch" template ships with Intent ready to use:

1. `package.json#intent.skills` pointing at `@cloudoperators/juno-ui-components`.
2. `AGENTS.md` with the Intent skill-discovery block.
3. `CLAUDE.md` with critical fundamentals inline **plus** instructions to load domain skills (see below).

New plugin developers get AI assistance immediately, with no extra setup — the template is the happy path.

### Aurora

Aurora bundles Juno components (as a dev dependency) and has its **own patterns** that Juno skills do not cover. Aurora therefore ships **its own Aurora-specific skills**, living in the Aurora package:

- tRPC procedure patterns (`publicProcedure`, `protectedProcedure`, `projectScopedProcedure`, …)
- the slot system (`logo`, `sideNavBanner`, `pageFooter`, …)
- route `staticData` conventions for breadcrumbs
- OpenStack / BFF integration patterns

Each package owns its own skills; there are **no cross-package skill references**.

---

## Consumer: Controlling Which Skills Load

Once a consumer has Intent set up, there are **two different layers** that decide "which skills
load," and it is worth separating them because they answer different concerns.

### Layer 1 — Which skills are _available_ (the allowlist, in `package.json`)

A one-time policy decision per consumer project, controlled by `intent.skills` (allowlist) and
`intent.exclude` (blocklist). It governs what `intent list` / `intent load` will surface at all.

```jsonc
// consumer app's package.json
{
  "intent": {
    "skills": [
      /* allowlist — what is permitted */
    ],
    "exclude": [
      /* blocklist — removed AFTER the allowlist resolves */
    ],
  },
}
```

`intent.skills` entry forms, most → least permissive:

| Entry                                           | Meaning                                                               |
| ----------------------------------------------- | --------------------------------------------------------------------- |
| `["*"]`                                         | All discovered packages' skills (emits an "acknowledged risk" notice) |
| `"@cloudoperators/juno-ui-components"`          | **All** skills from that package                                      |
| `"@cloudoperators/*"`                           | All skills from any package in that scope                             |
| `"@cloudoperators/juno-ui-components#datagrid"` | **Only** that one skill                                               |
| `[]`                                            | Nothing                                                               |

`intent.exclude` removes entries _after_ the allowlist resolves — the surgical "all except" tool,
and it accepts patterns:

```jsonc
{
  "intent": {
    "skills": ["@cloudoperators/juno-ui-components"], // allow all juno skills…
    "exclude": [
      "@cloudoperators/juno-ui-components#ux-writing", // …except these,
      "@cloudoperators/juno-ui-components#experimental-*", // and anything experimental
    ],
  },
}
```

So "which skills should be available" comes down to picking the right granularity:

- **Want everything:** `"skills": ["@cloudoperators/juno-ui-components"]`
- **Want only a few:** list them individually — `"...#datagrid"`, `"...#forms"`
- **Want all-but-some:** allow the package, then `exclude` the unwanted ones

Ways to set it:

- **Interactive (recommended first time):** `npx @tanstack/intent install` walks through
  "Enable all / Choose packages or scopes / Choose individual skills" and writes both the
  `intent.skills` block and the `AGENTS.md` discovery guidance.
- **Change your mind later:** `npx @tanstack/intent install --review` reopens the picker.
- **Quick blocklist tweaks:** `npx @tanstack/intent exclude add <pattern>` /
  `exclude remove <pattern>` / `exclude list`.
- **Preview without writing:** add `--dry-run`.

### Layer 2 — Which skills _actually load_ into the AI, per task

Even with all 12 skills allowed, the AI does not dump them all into context. Loading is
**on-demand and task-driven**:

1. The AI reads the `AGENTS.md` / `CLAUDE.md` block, which instructs it to run `intent list`, then
   `intent load <pkg>#<skill>` for the relevant skill before editing.
2. The AI matches each skill's **`description`** (its "Use when…" activation text) against what the
   developer asked, and loads only the matching skills. This is why the skills are authored with
   precise, non-overlapping descriptions and explicit cross-references ("for form inputs, see the
   forms skill").
3. `intent install --map` can harden this by writing an explicit **task → skill mapping** into the
   agent config (e.g. "building a table → `#datagrid`"), making selection deterministic rather than
   left to the model's judgment.

### The two levers, summarized

| Lever                                 | Scope                                   | Where                            | Granularity       |
| ------------------------------------- | --------------------------------------- | -------------------------------- | ----------------- |
| **Allowlist / exclude**               | _Policy_ — what is permitted at all     | `package.json#intent`            | Coarse, set once  |
| **Activation descriptions + `--map`** | _Routing_ — what loads for a given task | skill frontmatter / agent config | Fine, per request |

### Recommended default

For a Greenhouse plugin or Aurora, allow the whole package and let per-task activation handle the
rest:

```jsonc
{ "intent": { "skills": ["@cloudoperators/juno-ui-components"] } }
```

Reach for individual `#skill` entries or `exclude` only when a team deliberately wants to suppress
something — e.g. a design-system team that handles `ux-writing` out of band and does not want the AI
touching copy.

---

## CLAUDE.md Fallback (Hybrid Approach)

Not every AI tool natively runs the Intent CLI. For maximum compatibility, `CLAUDE.md` uses a **hybrid** strategy: critical fundamentals inline (work immediately) + instructions to load domain skills via Intent (full content without duplication).

````markdown
# Juno UI Development Guidelines

## Critical: Always Follow These Rules

### Provider Setup (MUST DO)

Always wrap your app with AppShellProvider:

```tsx
<AppShellProvider theme="theme-dark">
  <App />
</AppShellProvider>
```

### CSS Import (MUST DO)

```tsx
import "@cloudoperators/juno-ui-components/juno-ui-components.css"
```

## Loading Additional Guidance

For component-specific guidance, load Intent skills:

```bash
# List available skills
npx @tanstack/intent list

# Load a specific skill
npx @tanstack/intent load @cloudoperators/juno-ui-components#datagrid
npx @tanstack/intent load @cloudoperators/juno-ui-components#forms
npx @tanstack/intent load @cloudoperators/juno-ui-components#feedback
```

Load the relevant skill before working on:

- Data tables → #datagrid
- Form inputs → #forms
- Notifications → #feedback
````

This means:

- **Critical fundamentals work immediately** — they are inline in `CLAUDE.md`.
- **Domain guidance loads on demand** — via Intent.
- **It degrades gracefully** — even if the AI never runs the CLI, the basics are present.

---

## CI Integration

The pipeline uses the **full workflow**: validation + staleness + PR comments.

```yaml
- name: Validate Intent skills
  run: npx @tanstack/intent maintainer check # fails build on malformed skills

- name: Check skill freshness
  run: npx @tanstack/intent stale # surfaces drift

- name: Review skill impact
  run: npx @tanstack/intent maintainer review --json > review.json
  # + a custom action posts a PR comment when changed files
  #   (e.g. DataGrid.stories.tsx) affect a skill's referenced sources
```

- `maintainer check` **fails the build** on structural problems (bad frontmatter, missing sections, unregistered skills).
- `stale` and `review` **inform** — they flag when a referenced source file changed so a reviewer can decide whether the skill needs updating. This pairs with the loose-coupling versioning policy.

---

## Documentation Surfaces

Skills are documented in three places so teams can find them wherever they look:

| Surface                                                    | Content                                                                                        |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `packages/ui-components/README.md`                         | Intent quick-start section                                                                     |
| `packages/ui-components/docs/intent-skills.md` (this file) | Full setup guide + skill catalog                                                               |
| Storybook                                                  | An "Intent Skills" page showing available skills and how to use them, alongside component docs |

---

## Rollout Phases

**Phase 1 — initial rollout (highest-usage domains first):**

1. Set up the `skills/` directory structure in `ui-components`.
2. Author `#fundamentals`, `#datagrid`, `#forms`, `#feedback`.
3. Add the CI validation workflow.
4. Update the `ui-components` README.
5. Configure the Greenhouse apps retroactively.
6. Update the plugin template with the Intent integration.

**Phase 2 — expansion:**

1. Author the remaining domain skills (`#layout`, `#navigation`, `#modals`, `#accessibility`, `#ux-writing`).
2. Author the `#migrations` skill.
3. Add the Storybook documentation page.
4. Author Aurora-specific skills (separate effort, in the Aurora package).

---

## Design Decisions Reference

| #   | Decision                  | Choice                                                                                   |
| --- | ------------------------- | ---------------------------------------------------------------------------------------- |
| 1   | Primary goal              | Both — active guidance for critical patterns + passive reference knowledge               |
| 2   | Skill granularity         | Hybrid — one foundational skill + domain skills on demand                                |
| 3   | Authoring location        | Colocated with source (ships in the npm package)                                         |
| 4   | Consumer adoption         | Opt-in explicit (`package.json#intent.skills` + `intent install`)                        |
| 5   | Rollout scope             | All projects simultaneously; each adopts when ready                                      |
| 6   | Foundational skill scope  | Setup + patterns + critical UX                                                           |
| 7   | Domain skills             | All 8 (layout, navigation, datagrid, forms, modals, feedback, accessibility, ux-writing) |
| 8   | Source references         | UX docs + Storybook stories                                                              |
| 9   | Versioning                | Loose coupling (`intent stale` flags drift; maintainers decide)                          |
| 10  | Plugin template           | Intent + CLAUDE.md working integration                                                   |
| 11  | Skill file location       | `skills/` at package root                                                                |
| 12  | UX docs integration       | Summarize + reference                                                                    |
| 13  | CI integration            | Full workflow (validation + staleness + PR comments)                                     |
| 14  | Consumer documentation    | README + dedicated doc + Storybook                                                       |
| 15  | Aurora skills             | Yes — Aurora-specific skills in the Aurora package                                       |
| 16  | CLAUDE.md strategy        | Hybrid — fundamentals inline + Intent instructions                                       |
| 17  | Authoring responsibility  | Frontend Engineering team (centralized)                                                  |
| 18  | Content depth             | Tiered — core upfront, advanced at the end                                               |
| 19  | Greenhouse apps migration | Yes, retroactively                                                                       |
| 20  | Discovery experience      | Hierarchical (fundamentals load-first)                                                   |
| 21  | External plugin template  | Working integration                                                                      |
| 22  | Naming convention         | Short names                                                                              |
| 23  | Cross-package references  | No — each package owns its own skills                                                    |
| 24  | Deprecation handling      | Separate `#migrations` skill                                                             |
| 25  | Initial rollout order     | Most-used domains first                                                                  |

---

## Out of Scope

Decided against, for clarity:

- **Cross-package skill references** — each package owns its own skills.
- **Skills inside component source directories** — they live at the package root.
- **Duplicating full UX docs content in skills** — skills summarize and link.
- **Auto-failing CI on staleness warnings** — staleness informs; only structural validation fails the build.
