---
"@cloudoperators/create-greenhouse-plugin": minor
---

feat(create-greenhouse-plugin): alpha scaffolder for external Greenhouse plugins

Adds `@cloudoperators/create-greenhouse-plugin`, a CLI that scaffolds a fresh, embeddable Greenhouse plugin from the Juno app template (`apps/template`) with the mount/unmount contract, AppShellProvider setup, inlined ESLint/TypeScript config, a Vite library build with React and juno-ui-components externalized, and TanStack Intent wired to Juno's component skills. Includes a `check` command that does a three-way (baseline/current/latest-template) drift comparison and reports which files need action. Published as an alpha for early adopters.
