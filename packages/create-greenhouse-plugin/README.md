<!--
  SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
  SPDX-License-Identifier: Apache-2.0
-->

# @cloudoperators/create-greenhouse-plugin

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

Scaffolder that bootstraps a **standalone** [Greenhouse](https://github.com/cloudoperators/greenhouse)
plugin app — one with **no Juno monorepo dependencies**. The generated app installs, type-checks,
builds, tests, and lints entirely on its own, against the published
[`@cloudoperators/greenhouse-core`](https://www.npmjs.com/package/@cloudoperators/greenhouse-core)
plugin contract and the
[`@cloudoperators/juno-ui-components`](https://www.npmjs.com/package/@cloudoperators/juno-ui-components)
design system.

## Usage

```bash
npm create greenhouse-plugin ./my-plugin
# or
pnpm create greenhouse-plugin ./my-plugin
```

```
Usage:
  npm create greenhouse-plugin <target-dir> [--name <package-name>]

Arguments:
  <target-dir>   Directory to create the plugin in (must be empty or non-existent).

Options:
  --name <name>  npm package name for the plugin (default: derived from <target-dir>).
  -h, --help     Show this help.
```

Then:

```bash
cd my-plugin
pnpm install
pnpm dev
```

## How it works

The scaffolder ships a checked-in `template/` directory. The CLI copies that directory into the
target and substitutes the plugin name.

`template/` is **generated**, not hand-maintained. `scripts/sync-template.mjs` builds it by:

1. Scaffolding a fresh [`create-vite`](https://www.npmjs.com/package/create-vite) `react-ts` app —
   giving consumers the standard, up-to-date Vite stack (TypeScript, oxlint, etc.).
2. Overlaying the Greenhouse-specific files from `apps/template`:
   - `src/` — the `createPlugin()` wiring, App, types, components
   - `index.html` — fetches `appProps.json` and mounts the plugin
   - `vite.config.ts` — library + static build modes, React dedupe
   - `appProps.template.json`, `AGENTS.md`, `README.md`
3. Patching `package.json` to add `@cloudoperators/greenhouse-core`,
   `@cloudoperators/juno-ui-components`, `exports`, and `intent.skills`.

Re-run the sync whenever `apps/template` or the pinned package versions change:

```bash
pnpm sync:template   # regenerate template/
pnpm build           # sync + compile the CLI
```

## Scripts

| Script               | Description                                          |
| -------------------- | ---------------------------------------------------- |
| `pnpm build`         | Sync the template, then compile the CLI to `build/`. |
| `pnpm sync:template` | Regenerate `template/` from `apps/template`.         |
| `pnpm test`          | Run the scaffolder smoke tests.                      |
| `pnpm typecheck`     | Type-check the CLI sources.                          |
| `pnpm lint`          | Lint the CLI sources.                                |

## Roadmap

Stale-bootstrap-file / type-drift detection — a way to tell a developer when their bootstrapped
files have fallen behind the latest template — is planned as a follow-up and is intentionally not
part of this first iteration.
