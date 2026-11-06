<!-- intent-maintainer:start -->

## Library Skill Maintenance

Use the repository’s installed Intent. If it is unavailable, report the missing dependency instead of downloading a replacement.
Before substantial library source, documentation, examples, tests, or skill work, run `pnpm exec intent meta generate-skill` and follow the packaged maintainer procedure.
Use the current request and repository evidence. For initial skills, propose a useful batch and reuse any scope already agreed with the maintainer.
Before handing off a skill batch or library change, run `pnpm exec intent maintainer review --json`. Follow the maintainer procedure to update affected guidance, run task checks, and record completed review outcomes. Report an evidence-backed no-op or missing evidence explicitly.
Create and incrementally maintain domain_map.yaml, skill_spec.md, and skill_tree.yaml in the established artifact location for every skill batch. Preserve prior tasks, maintainer decisions, and remaining work.
Keep maintainer decisions and changes in the repository; do not require the user to repeat the procedure in later sessions.
Use intent maintainer setup to initialize missing records, maintainer add to register skills, maintainer status to identify work, and maintainer sync to update generated metadata. Finish with intent maintainer check.

<!-- intent-maintainer:end -->

## Component skill sets

When creating, moving, or removing the skills for a ui-components component or pattern, follow the per-component structure convention (one parent directory; nested `-spec`/`-build`/`-validate`; references owned by the `-spec` skill) documented in [docs/tanstack-intent-guide.md](docs/tanstack-intent-guide.md#structure-a-component-skill-set).

Run `maintainer add` from the owning package directory when registering package-scoped skills (skills that belong to a specific npm package and are published with it). Running it from the repo root omits the `package:` field from the artifact entries and places skill files at the repo root. Skills that are not bound to a package scope may be registered from the repo root or wherever they live.

