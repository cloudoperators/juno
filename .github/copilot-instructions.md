# Copilot instructions for cloudoperators/juno

Monorepo for Juno (modular frontend framework, apps, design system, component library). Follow existing patterns in the touched workspace/package.

## Styling: always Tailwind

- **Always use Tailwind CSS utilities** for styling and layout.
- Avoid writing new plain CSS/CSS modules unless there is no Tailwind solution; if you must add CSS, keep it minimal and justify why.
- **Colors:** use **theme colors defined by the `ui-components` package** (the design-system theme) instead of arbitrary Tailwind palette colors.
  - Prefer the Tailwind tokens/classes wired to the `ui-components` theme (e.g., theme-driven `text-*`, `bg-*`, `border-*` utilities).
  - Avoid hard-coded colors (hex/rgb) and avoid ad-hoc Tailwind colors (e.g., `text-blue-500`) unless they are explicitly part of the `ui-components` theme.
- Keep class lists readable and consistent with repo conventions (use an existing `cn`/`clsx` helper if present; don’t introduce a new one without need).

## TypeScript

- Use strict types; avoid `any` (prefer `unknown` + narrowing).
- Avoid non-null assertions (`!`) when a guard can make intent explicit.

## Components (design system / UI)

- Accessibility first: semantic elements, keyboard support, correct ARIA only when needed.

## Testing: Vitest

- Use **Vitest** for unit/integration tests.
- When behavior changes, add/update tests that assert user-visible outcomes (not implementation details).
- Keep tests deterministic; avoid timing flakiness. Use fake timers only when required.

## Monorepo hygiene

- Scope changes to the relevant package/app; avoid drive-by refactors.
- Don’t change tooling, workspace config, or lockfiles unless required for the task.

## PR / review notes

- Follow the repository PR template in `.github/pull_request_template.md` (keep its sections, fill them out, and don’t remove prompts unless instructed).

## If uncertain

Search for an existing pattern in this repo and match it. Ask a clarifying question rather than guessing.
