---
"@cloudoperators/juno-ui-components": major
---

### ⚠️ BREAKING CHANGE

This release upgrades the package to use **React 19.1**, introducing breaking changes for projects using older versions of React.

If you're using React 18 or below, please continue using the `3.x` versions of this package.

### 🔧 Changes

- Upgraded peer dependencies to:
  - `react@^19.1.0`
  - `react-dom@^19.1.0`
  - `@types/react@^19.0.0`
  - `@types/react-dom@^19.0.0`
- Ensured all components are compatible with React 19 concurrent features
- Dropped support for React 18 and earlier

> ✅ Recommended version for React 19+ users: `4.x`  
> 🛠️ Legacy support for React 18 and below: `3.x`
