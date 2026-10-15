<!--
SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
SPDX-License-Identifier: Apache-2.0
-->

# @cloudoperators/create-greenhouse-plugin

> **Alpha.** Scaffolds a fresh **external Greenhouse plugin** from the Juno app template, pre-wired
> for TanStack Intent + Juno UI component skills. For early adopters.

A Greenhouse plugin is a micro-frontend: a standalone app that Greenhouse loads at runtime via
dynamic import and mounts into its shell. This CLI generates one that already matches Juno's
standards — the `mount`/`unmount` contract, `AppShellProvider` setup, the embeddable library build,
ESLint/TypeScript config, and Intent guidance for your AI assistant — so you can focus on your
plugin's features.

## Create a plugin

```bash
pnpm create greenhouse-plugin my-plugin
# or: pnpm dlx @cloudoperators/create-greenhouse-plugin my-plugin --dir ./path
cd my-plugin
nvm use             # matches the generated .nvmrc (avoids pnpm's engine error)
pnpm install
pnpm dev            # standalone dev server
pnpm build          # embeddable library build (build/index.js)
pnpm build:static   # standalone static build
```

The generated package is named `@cloudoperators/juno-app-<name>` and exports `mount(container, { props })`
and `unmount()`.

## What you get

- **Embeddable contract**: `src/index.tsx` (createRoot mount/unmount), `src/App.tsx`
  (`AppShellProvider` + injected styles + `AppShell`), and `src/types/index.d.ts` declaring the
  module so Greenhouse can import it type-safely.
- **Standards, inlined** (no dependency on Juno's internal config): `eslint.config.mjs` and
  `tsconfig.json` configured the Juno way.
- **Vite** library build with React and `@cloudoperators/juno-ui-components` externalized (the host
  provides single shared instances).
- **Intent + skills**: `package.json#intent.skills` allowlists `@cloudoperators/juno-ui-components`
  and an `AGENTS.md` tells your AI assistant to load those skills. See the note below on skill
  availability during the alpha.
- **A drift manifest** (`.greenhouse-plugin.json`) recording what you scaffolded from.

> **Alpha — skills availability.** The plugin is pre-wired to allowlist `juno-ui-components` skills,
> but those skills are only discoverable once `juno-ui-components` is published **with** them. Until
> then, a freshly scaffolded plugin resolves `juno-ui-components` from npm (no skills), so
> `intent list` shows nothing. To test the skills now, scaffold against a local tarball that bundles
> them:
>
> ```bash
> pnpm dlx @cloudoperators/create-greenhouse-plugin my-plugin \
>   --juno-tarball ./cloudoperators-juno-ui-components-<version>-full-skills.tgz
> ```
>
> This rewrites only the generated plugin's `juno-ui-components` dependency to that `file:` tarball
> (local testing — don't commit that `package.json`). After `pnpm install`, `intent list` shows the
> skills. Once `juno-ui-components` ships skills on npm, drop the flag.

## Keeping up with template changes — `check`

The template evolves (bug fixes, new externalization, Juno bumps). Run the drift check in your
plugin to see what changed since you scaffolded, without clobbering your edits:

```bash
pnpm dlx @cloudoperators/create-greenhouse-plugin@latest check
```

It performs a three-way comparison per file — your baseline (from `.greenhouse-plugin.json`), your
current files, and the latest template — and classifies each:

| Verdict | Meaning |
|---|---|
| up to date | nothing to do |
| **safe update** | template changed, you didn't touch the file → copy the new version |
| your customization | you changed it, template didn't → yours to keep |
| **conflict** | both changed → manual merge |
| deleted locally | template still expects a file you removed |
| new template file | template added a file you don't have |

`check` writes nothing. It exits non-zero when any action is needed, so you can gate your own CI on
it. Add `--json` for machine output.

> **Commit `.greenhouse-plugin.json`.** It is the baseline `check` compares against — without it,
> `check` falls back to a weaker 2-way comparison and can't tell your edits from template changes.
> It is *not* gitignored by the generated `.gitignore`; keep it that way and commit it with the rest
> of the plugin.

### Wire it into your plugin's CI

Add a step that fails the build when the template has drifted, so you're notified on every PR:

```yaml
# .github/workflows/ci.yml (in your plugin repo)
- name: Check for Greenhouse template drift
  run: pnpm dlx @cloudoperators/create-greenhouse-plugin@latest check
```

A non-zero exit means there are safe updates or conflicts to review (see the table above). When you
decide to take an update, apply it and re-run `check` to confirm you're back in sync.

> Alpha note: `check` is advisory. It tells you what changed; you apply updates manually (or re-run
> the scaffolder). An automated `--accept` is planned.

## Integrating into Greenhouse (manual, today)

Greenhouse does not auto-discover plugins. To wire yours in, three changes in the Greenhouse app are
required:

1. Add your plugin as a dependency of `apps/greenhouse`.
2. Add a `case "<name>":` to the plugin loader switch (`apps/greenhouse/src/hooks/usePluginLoader.ts`)
   that dynamically imports your package.
3. Ensure the Greenhouse plugin config's `name` matches that case string.

At runtime Greenhouse calls `mount(container, { props })` with `embedded: true`, `basePath`,
`enableHashedRouting`, and `auth` — your `App` already accepts these.

## License

Apache-2.0
