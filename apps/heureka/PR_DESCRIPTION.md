# Summary

Upgrade GraphQL Code Generator packages in the heureka app from v5 to v6, following the official migration guide. This includes updating `@graphql-codegen/typescript-operations` from 5.1.0 to 6.1.6 and `@graphql-codegen/typescript-react-apollo` from 4.4.2 to 5.0.0.

# Changes Made

## Dependency Updates

- Upgraded `@graphql-codegen/typescript-operations`: 5.1.0 → 6.1.6
- Upgraded `@graphql-codegen/typescript-react-apollo`: 4.4.2 → 5.0.0

## Configuration Changes

- **codegen.ts**: Removed `typescript` plugin per v6 migration guide (Breaking Change #1: schema Object types no longer generated)
- **codegen.ts**: Added `enumType: "const"` config for backward compatibility with existing enum usage

## Type System Changes

- **Created `src/generated/types.ts`**: Helper file to extract reusable types from operation result types using TypeScript utility types
  - Extracts Service, Image, Vulnerability, Remediation, and other entity types from query results
  - Includes Page type for pagination
  - Documents that this is a workaround; client-preset with fragments is the recommended v6 approach

## Code Updates (v6 Stricter Type Handling)

### Services/utils.ts

- Changed imports from schema types to extracted operation result types
- Fixed filter logic to use `Object.entries` instead of `omit` to handle `__typename`
- Added type predicates with `NonNullable` for filtering nullable arrays (7 locations)
- Fixed Page type casting with explicit type predicate
- Comments added explaining v6's stricter null handling requirements

### Vulnerabilities/utils.ts

- Changed imports to use extracted Page type from types helper
- Added type predicates with `NonNullable` for filtering nullable arrays (2 locations)
- Fixed Page type casting with explicit type predicate
- Added type assertions in `getNormalizedFilters` due to `Object.entries` not narrowing nullable union types
- Comments added explaining v6 requirements

### CursorPagination.tsx

- Changed Page import from graphql to types helper

### Test Files

- **ServicePanel.test.tsx**: Updated mock import pattern
- **RemediationModal.test.tsx**: Fixed `renderModal` type to avoid literal type inference - uses `Omit` and re-adds `remediationType` with full union type

### Mock Data (src/mocks/promises.tsx)

- Added missing v6-required fields: `hasNextPage`, `hasPreviousPage`, `isValidPage`, `nextPageAfter` to all `pageInfo` objects
- Added missing fields to mockImagesPromise: `counts: null` at top level, `vulnerabilities: null` in nodes
- Added missing fields to mockVulnerabilitiesPromise: `counts: null` at top level, `supportGroups: null` in nodes
- Used `satisfies Promise<ApolloQueryResult<...>>` operator instead of type annotations to avoid discriminated union issues with `dataState`
- Re-imported `GetImagesQuery` and `GetVulnerabilitiesQuery` types

# Related Issues

None - dependency upgrade to address Renovate updates and maintain compatibility with latest GraphQL tooling.

# Testing Instructions

1. `pnpm i` - Install updated dependencies
2. `pnpm typecheck` - Verify TypeScript compilation passes
3. `pnpm lint` - Verify linting passes
4. `pnpm test` - Verify all tests pass
5. `pnpm build` - Verify build succeeds
6. Test the heureka app UI manually to ensure GraphQL queries/mutations work correctly

# Checklist

- [x] I have performed a self-review of my code.
- [x] I have commented my code, particularly in hard-to-understand areas.
- [x] I have added tests that prove my fix is effective or that my feature works.
- [x] New and existing unit tests pass locally with my changes.
- [x] I have made corresponding changes to the documentation (if applicable).
- [x] My changes generate no new warnings or errors.
- [ ] I have created a changeset for my changes.

# PR Manifesto

Review the [PR Manifesto](https://github.com/cloudoperators/juno/blob/main/docs/pr_manifesto.md) for best practises.

---

## Migration Notes

This upgrade follows the official GraphQL Codegen v6 migration guide:
https://the-guild.dev/graphql/codegen/docs/migration/operations-and-client-preset-from-5-0

### Breaking Changes Addressed

1. **Schema Object types removed**: v6 no longer generates schema Object types from the `typescript-operations` plugin because they represent ALL schema fields, whereas operations only fetch specific fields. Created `types.ts` to extract types from operation results as a workaround.

2. **Stricter null handling**: v6 operation result types are more precise about nullable arrays and fields, requiring explicit type predicates (`NonNullable`) when filtering arrays.

3. **Enum generation**: Added `enumType: "const"` config to maintain backward compatibility with existing enum usage patterns.

### Future Improvements

The current approach uses manual type extraction in `types.ts` as a workaround. The recommended v6 approach is migrating to the `client-preset` with GraphQL Fragments and fragment masking for better type safety and component isolation. This would be a larger refactor for a future PR.
