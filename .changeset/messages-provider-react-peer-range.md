---
"@cloudoperators/juno-messages-provider": patch
---

fix(message-provider): standardize react peer range on ^19.1.0

Change the `react` and `react-dom` peerDependencies from the exact `19.3.1` pin to
`^19.1.0`, matching `@cloudoperators/juno-ui-components` and the other Greenhouse
provider packages. Consumers are no longer forced to resolve one exact React patch
version; any React 19.1+ satisfies the contract. Callers already on React 19.1+ are
unaffected.
