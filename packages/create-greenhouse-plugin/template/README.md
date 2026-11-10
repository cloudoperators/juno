# **APP_NAME**

A [Greenhouse](https://github.com/cloudoperators/greenhouse) plugin built with:

- [Vite](https://vitejs.dev) + [React](https://reactjs.org) + [TypeScript](https://www.typescriptlang.org)
- [`@cloudoperators/juno-ui-components`](https://www.npmjs.com/package/@cloudoperators/juno-ui-components) — Juno design system
- [`@cloudoperators/greenhouse-core`](https://www.npmjs.com/package/@cloudoperators/greenhouse-core) — Greenhouse plugin contract (`createPlugin`)
- [TanStack Intent](https://www.npmjs.com/package/@tanstack/intent) — AI skill loading for the design system

## Getting started

```bash
pnpm install
pnpm dev
```

## Scripts

See `package.json` for the full list of available scripts.

## Plugin props (`appProps.json`)

`appProps.json` is intentionally **not** bundled into the static build output. The Greenhouse host
injects plugin props at runtime, so bundling them would risk leaking credentials or environment-specific
config into a distributed artifact.

For local development `pnpm dev` serves the file from the project root. For a static deployment
(`pnpm build:static`) you are responsible for providing `appProps.json` at the path your server
expects — either as a separate file alongside the bundle or injected by your deployment pipeline.

## AI skills via TanStack Intent

This app is wired as a [TanStack Intent](https://www.npmjs.com/package/@tanstack/intent) consumer.
A coding agent working in the app can discover and load the AI skills shipped by
`@cloudoperators/juno-ui-components` — versioned, task-focused guidance that teaches the agent
how to use Juno components correctly.

```bash
pnpm exec intent list                        # list available skills
pnpm exec intent load <package>#<skill>      # load a skill before a substantial task
```

The skill-loading instructions for the agent live in `AGENTS.md`. Claude Code auto-reads `CLAUDE.md`
files by walking up the directory tree and only falls back to `AGENTS.md` when no `CLAUDE.md` exists.
If your project already has a `CLAUDE.md`, copy the skill-loading block from `AGENTS.md` into it so
Claude Code picks it up automatically.
