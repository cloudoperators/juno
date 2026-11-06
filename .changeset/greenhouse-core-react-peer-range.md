---
"@cloudoperators/greenhouse-core": patch
---

fix(greenhouse-core): standardize react peer range on ^19.1.0

Change the `react` and `react-dom` peerDependencies from `>=19.0.0` to `^19.1.0`,
matching `@cloudoperators/juno-ui-components`. This expresses the React 19 support
contract more precisely (patch/minor upgrades within 19.x are allowed; a breaking
major is not) without coupling consumers to an exact version. Callers already on
React 19.1+ are unaffected.
