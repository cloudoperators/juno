[← Back to Contents Overview](0_contents.md)

# Versioning and Deprecation Policy

## Versioning

Juno UI Components follow [semantic versioning](https://semver.org):

- **Patch releases** deliver bug fixes without changing existing behaviour.
- **Minor releases** add new components or features in a backwards-compatible way.
- **Major releases** may introduce breaking changes to APIs, component behaviour, or visual appearance that require updates in consuming applications.

A changelog is maintained for all packages and updated with every release.

## Breaking Changes

Changes that affect existing behaviour are generally reserved for major releases. Exceptions are made for components or features that are explicitly work-in-progress and not yet part of the stable public API — these may be adjusted or removed in a minor release.

## Deprecation

When a component, prop, or pattern is scheduled for removal it is first deprecated rather than removed immediately. Deprecated items:

- Remain functional until the next major release.
- Log a console warning when used, indicating that a replacement is available or that the item will be removed.
- Are documented in the changelog with guidance on what to use instead.

Deprecated items may be removed in a future major version, but can remain in a deprecated state across multiple major releases.
