# Collection of Base Configurations for Monorepo

- Typescript
- ESlint
- Vite
- Vitest

## Typescript

This package provides a base TypeScript configuration to be used across multiple packages in a monorepo setup. It ensures consistent TypeScript settings and simplifies the TypeScript setup process for each package. The package name is `@cloudoperators/juno-config`.

## Usage

You can use this configuration as a starting point in any package or app within your monorepo using TurboRepo.

```javascript
packages / package - a / src / tsconfig.json
eslint.config.mjs
```

1. **Create a `tsconfig.json` in your package or app:**

```json
{
  "extends": "@cloudoperators/juno-config/typescript/base.json",
  "compilerOptions": {
    "outDir": "./build",
    "rootDir": "./src"
  },
  "include": ["src"]
}
```
