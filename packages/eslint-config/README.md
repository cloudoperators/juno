# ESLint Configuration for TypeScript in Monorepo

This package provides a temporary ESLint configuration specifically for TypeScript to be used across multiple packages in a monorepo setup. The package name is `@cloudoperators/juno-eslint-config`.

## Usage

You can use this configuration as a starting point in any package or app within your monorepo using TurboRepo.

```javascript
packages / package - a / src / tsconfig.json
eslint.config.mjs
```

1. **Create an `eslint.config.mjs` in your package or app:**

```javascript
import junoConfigs from "@cloudoperators/eslint-config/juno.mjs"

export default [
  ...junoConfigs,
  {
    files: ["test/__mocks__/svgLib.js", "src/**/*.test.js"],
    languageOptions: { sourceType: "module" },
  },

  {
    ignores: ["setupTests.js"],
  },
]
```

2. **Create an `eslint.config.mjs` in your package or app specific for typescript:**

```javascript
import junoConfigs from "@cloudoperators/eslint-config/juno-typescript.mjs"

export default [...junoConfigs]
```
