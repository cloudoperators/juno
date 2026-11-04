---
"@cloudoperators/juno-app-greenhouse": patch
---

refactor(greenhouse): read `plugin` export from each dynamically-imported plugin

The loader at `src/hooks/usePluginLoader.ts` now imports `Plugin` from `@cloudoperators/greenhouse-core` instead of `@cloudoperators/juno-app-supernova`, and each `case` in the plugin switch pulls the single `plugin` export off the imported module: `module = (await import(...)).plugin`. Plugins expose their whole `Plugin` as one named export so future contract changes (new / renamed methods) do not require touching any plugin — the shell is the only side that adapts. Loader runtime behaviour is unchanged.
