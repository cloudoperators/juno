# Collection of Base Configurations for Monorepo

The package name is `@cloudoperators/juno-config` and it provides a collection of base configurations for TypeScript and ESLint to be used across multiple packages in a monorepo setup.

- Typescript
- ESlint

## Typescript

This package provides a base TypeScript configuration to be used across multiple packages in a monorepo setup. It ensures consistent TypeScript settings and simplifies the TypeScript setup process for each package.

## Usage

You can use this configuration as a starting point in any package or app within our project using TurboRepo.

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

## ESLint

This package provides also ESLint configuration specifically for TypeScript to be used across multiple packages in a monorepo setup.

## Usage

You can use this configuration as a starting point in any package or app within our project using TurboRepo.

```javascript
packages / package - a / src / tsconfig.json
eslint.config.mjs
```

1. **Create an `eslint.config.mjs` in your package or app:**

```javascript
import junoConfigs from "@cloudoperators/juno-config/eslint/juno.mjs"

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
import junoConfigs from "@cloudoperators/juno-config/eslint/juno-typescript.mjs"

export default [...junoConfigs]
```

## ESLint for Vite + React + TypeScript

This package provides a modern ESLint configuration specifically designed for Vite React applications using TypeScript, following Vite's official recommendations.

### Usage

Create an `eslint.config.mjs` in your Vite React app:

```javascript
import viteReactTsConfigs from "@cloudoperators/juno-config/eslint/vite-react-ts.mjs"

export default [
  ...viteReactTsConfigs,
  // Add your custom rules here
]
```

### What's included

- TypeScript type-checked linting (`typescript-eslint` recommendedTypeChecked)
- React Hooks rules (`eslint-plugin-react-hooks`)
- React Refresh rules for Vite HMR (`eslint-plugin-react-refresh`)
- Browser environment globals
- Custom unused vars pattern (allows underscore prefix)

### Differences from juno-typescript.mjs

- **TypeScript-first**: Only targets `.ts` and `.tsx` files (no JavaScript files targeted)
- **Includes React plugins**: `react-hooks` and `react-refresh` are included by default
- **Type-checked**: Uses `recommendedTypeChecked` for better type safety
- **Vite-optimized**: Follows Vite's official React-TypeScript template structure

## Contributing

We welcome contributions from the community. Please follow our [contribution guidelines](https://github.com/cloudoperators/juno/blob/main/CONTRIBUTING.md) to contribute to this project.

## License

Licensed under the [Apache License](https://github.com/cloudoperators/juno/blob/main/LICENSE).
