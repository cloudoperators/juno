# @cloudoperators/juno-url-state-provider

## 3.0.5

### Patch Changes

- 5ad5d5b: **Core Build Tools**

  - vite: Updated to `7.0.3` (latest)
  - vite-tsconfig-paths: Updated to `5.1.4` (latest)
  - vite-plugin-dts: Updated to `4.5.4` (latest)

  **Testing Framework**

  - vitest: Updated to `3.2.4` (latest)
  - @vitest/ui: Updated to `3.2.4` (latest)

  **React Plugins**

  - @vitejs/plugin-react: Updated to `4.6.0` (latest)
  - @vitejs/plugin-react-swc: Updated to `3.10.2` (latest)

  **Additional Plugins**

  - vite-plugin-svgr: Updated to `4.3.0` (latest)
  - @tailwindcss/vite: Updated to `4.1.11` (latest)

## 3.0.4

### Patch Changes

- 2da3003: - Update typescript version to the latest v.5.8.3
  - Update typescript definitions for node
- 1d30fb5: Fix jsdom css parsing error (update jsdom dependencies)

## 3.0.3

### Patch Changes

- b693d90: Heureka now supports filters in deeplinks.

## 3.0.2

### Patch Changes

- 483d9ee: Update react version to 19.1.0

## 3.0.1

### Patch Changes

- 43d6aa0: Update vite to the latest version (v 6.3.5) to resolve dependency vulnarebilities

## 3.0.0

### Major Changes

- 6b5e878: - Rollback `url-state-provider` back to `v1.3.2`.
  - `url-state-provider` will now ignore Hashed(#) part of the URL while encoding/decoding query parameters.
  - Removed dependency of `url-state-provider-v1` in all internal applications.

## 2.3.4

### Patch Changes

- cdba61c: Upgrade to vite 6.2

## 2.3.3

### Patch Changes

- cde9cb5: Update vite version to 6.0

## 2.3.2

### Patch Changes

- 150b32d: adjust node and npm deps that the version is open to the top

## 2.3.1

### Patch Changes

- 065652a: Output types to the correct directory

## 2.3.0

### Minor Changes

- 83a4a82: Exports new `saveStateToUrl` and `readStateFromUrl` utilities to save and read state from the url by using new encoder and decoder.

## 2.2.0

### Minor Changes

- 2ef6e25: Exports new `encodeV2` and `decodeV2` utilities to encode js object to url query parameters in a standard way as well as to decode query parameters back to javascript object.

## 2.1.0

### Minor Changes

- eb989ea: Migrate to url-state-provider to typescript.

## 2.0.7

### Patch Changes

- 8c06648: Unify Typescript and Eslint config in one package

## 2.0.6

### Patch Changes

- 3ca3d35: Update instructions in readme files

## 2.0.5

### Patch Changes

- 5102bf8: Update instructions in readme files

## 2.0.4

### Patch Changes

- Fix files config in package.json

## 2.0.3

### Patch Changes

- Update Version

## 2.0.2

### Patch Changes

- 79aedc3: Update patch version of all packages
- Add files to be contained in the release to files in package.json
