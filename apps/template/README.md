# Juno Template App

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

**Template** is a app that allows you to generate new apps under the juno monorepo structure with ease. It provides a convenient command-line interface for generating app based on predefined templates.

## Features

- Easily generate new app with a single command under `apps/name-of-your-app`
- Customizable configuration for different project types
- Zero configuration

## What is inside?

This project uses many tools like:

- [Vite](https://vitejs.dev)
- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Vitest](https://vitest.dev)
- [Testing Library](https://testing-library.com)
- [Tailwindcss](https://tailwindcss.com)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Juno UI components](https://github.com/cloudoperators/juno/tree/main/packages/ui-components)
- [Greenhouse core](https://github.com/cloudoperators/juno/tree/main/packages/greenhouse-core) — the shared plugin contract (`createPlugin`)
- [TanStack Intent](https://www.npmjs.com/package/@tanstack/intent) — loads AI skills shipped by the design system (see below)

## Creating a new app in the monorepo

The **Template** app is the starting point for a new app in the Juno monorepo. It is not something you install — it is the blueprint that the generator copies to scaffold your new app under `apps/<name-of-your-app>`.

To generate a new monorepo app from this template, follow the instructions below:

1. Make sure you have Node.js installed on your machine.

2. Open your terminal and navigate to the root directory of the monorepo.

3. Run the following command to scaffold a new app from the **Template**:

```bash
pnpx turbo gen workspace --type app --copy @cloudoperators/juno-app-template
```

All your apps should start with the `@cloudoperators/juno-` prefix.

That's it! A new app is created in the monorepo under `apps/<name-of-your-app>`, pre-wired with the plugin contract, Juno UI components, and the Intent tooling described below.

## AI skills via TanStack Intent

This template is set up as a [TanStack Intent](https://www.npmjs.com/package/@tanstack/intent) **consumer**, so a coding agent working in the app can discover and load the AI **skills** shipped by the `@cloudoperators/juno-ui-components` design system. Skills are versioned, task-focused guidance (a `SKILL.md` plus references) that travel with the package, teaching an agent how to build and validate Juno components correctly instead of guessing from source. Run `pnpm exec intent list` to see the skills the design system currently offers.

### How it is wired

- **`package.json` → `intent.skills`** — an allowlist that opts the app in to the skill sources it trusts. This template allows the design system:

  ```json
  "intent": {
    "skills": ["@cloudoperators/juno-ui-components"]
  }
  ```

- **`AGENTS.md`** — contains the "Skill Loading" block that instructs an agent to look for and load matching skills before making substantial changes.

  > **`CLAUDE.md` vs `AGENTS.md`:** `intent install` writes the skill-loading block to `AGENTS.md` by default. Claude Code, however, auto-reads `CLAUDE.md` files by walking up the directory tree and only falls back to `AGENTS.md` when no `CLAUDE.md` exists anywhere in the tree. If your repo already has a `CLAUDE.md`, copy the skill-loading block from `AGENTS.md` into your app's `CLAUDE.md` so Claude Code picks it up.

### Using the skills

Run these from the workspace root (Intent discovers skills across the monorepo):

```bash
# List the skills available to this app
pnpm exec intent list

# Load a specific skill by its <package>#<skill> id from the list above (prints its SKILL.md)
pnpm exec intent load <package>#<skill>
```

An agent working in the app should, before a substantial task, run `intent list`, and if a listed skill matches the task, `intent load <package>#<skill>` and follow the loaded guidance. Because skills ship inside `@cloudoperators/juno-ui-components`, they update together with the design system through the normal package update flow. See the [TanStack Intent Guide](../../docs/tanstack-intent-guide.md) for how skills are authored and maintained.

## Contributing

We welcome contributions from the community. Please follow our [contribution guidelines](https://github.com/cloudoperators/juno/blob/main/CONTRIBUTING.md) to contribute to this project.

## License

Licensed under the [Apache License](LICENSE).
