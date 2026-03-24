# Dependency Pinning Check 📌

This security script verifies that all dependencies in `package.json` files use exact version numbers (pinned versions) rather than version ranges.

## Why Pinning Matters

Using version ranges (`^`, `~`, `>=`, etc.) allows package managers to automatically install newer versions, which can introduce:

- **Supply chain attacks**: Malicious code in updated packages
- **Breaking changes**: Unexpected behavior from dependency updates
- **Inconsistent builds**: Different environments may install different versions

### Historical Examples:

- `event-stream@3.3.6` - Bitcoin wallet stealer injected via compromised dependency
- `ua-parser-js@0.7.29` - Cryptominer backdoor in specific version
- `coa@2.0.3` - Password stealer affecting 9M downloads/week

## Usage

### Run Locally

```bash
# From repository root
pnpm run check-pinned-deps

# Or directly
node .github/scripts/check-pinned-dependencies.js
```

### In CI/CD

The check runs automatically as part of the CI checks matrix (`.github/workflows/ci-checks.yaml`) on:

- All pull requests (opened, synchronized, reopened)
- Pushes to `changeset-release/main` branch

### Example Output

**All dependencies pinned (✅):**

```
Checking for pinned dependencies...

✓ apps/greenhouse/package.json
✓ packages/oauth/package.json
✓ package.json

======================================================================
Dependency Pinning Check Summary
======================================================================

Files checked: 17
✓ All dependencies are properly pinned!
```

**Unpinned dependencies found (❌):**

```
Checking for pinned dependencies...

✓ apps/greenhouse/package.json
✗ Found unpinned dependencies

======================================================================
Dependency Pinning Check Summary
======================================================================

Files checked: 17

✗ Found 3 unpinned dependencies:

apps/example/package.json:
  ✗ dependencies.lodash: "^4.17.23"
  ✗ dependencies.react: "~19.0.0"
  ✗ devDependencies.vite: ">=7.0.0"

ERROR: Unpinned dependencies found!

To fix: Remove version range prefixes (^, ~, >=, etc.) from package.json
Example: Change "^1.2.3" to "1.2.3"
```

## What's Checked

### Dependency Fields (Checked):

- ✅ `dependencies`
- ✅ `devDependencies`
- ✅ `optionalDependencies`

### Fields Skipped:

- ⏭️ `peerDependencies` (ranges expected here)
- ⏭️ `peerDependenciesMeta`

### Allowed Patterns:

- `workspace:*` - Monorepo workspace dependencies
- `npm:` - npm protocol references
- `file:` - Local file dependencies
- `link:` - Linked dependencies
- `patch:` - Patched dependencies (pnpm)

### Unpinned Patterns (Blocked):

- `^1.2.3` - Caret (allows minor/patch updates)
- `~1.2.3` - Tilde (allows patch updates)
- `>=1.2.0` - Greater than or equal
- `<=2.0.0` - Less than or equal
- `>1.0.0` - Greater than
- `<3.0.0` - Less than
- `*` - Any version

## Configuration

Edit `.github/scripts/check-pinned-dependencies.js` to customize:

```javascript
const config = {
  // Allow specific packages to have ranges
  allowedUnpinnedPackages: ["some-internal-package"],

  // Ignore specific packages completely
  ignorePackages: ["example-package"],
}
```

## Fixing Unpinned Dependencies

### Automatic Fix (Recommended):

Add to `.npmrc`:

```ini
save-exact=true
```

This ensures new packages are automatically pinned when installed.

### Manual Fix:

```json
{
  "dependencies": {
    "lodash": "^4.17.23", // ❌ Unpinned
    "lodash": "4.17.23" // ✅ Pinned
  }
}
```

### Update All Dependencies:

```bash
# 1. Remove version prefixes from package.json
# 2. Regenerate lock file
pnpm install

# Or use sed to remove prefixes automatically
sed -i '' 's/"\^/"/g' package.json
sed -i '' 's/"~/"/g' package.json
```

## Additional Security

This script is part of a defense-in-depth strategy:

1. **Pinned dependencies** (this script) - Prevent auto-updates
2. **Lock file** (`pnpm-lock.yaml`) - Lock transitive dependencies
3. **`--frozen-lockfile`** - Prevent lock file changes in CI
4. **npm audit** - Check for known vulnerabilities
5. **Dependabot/Renovate** - Automated, reviewed updates
6. **Socket.dev/Snyk** - Supply chain monitoring

## Related Files

- `.github/workflows/ci-checks.yaml` - Integrated into CI checks matrix (line 80-81)
- `.npmrc` - Contains `save-exact=true` for auto-pinning
- `pnpm-lock.yaml` - Locks all transitive dependencies

## References

- [npm docs: save-exact](https://docs.npmjs.com/cli/v10/using-npm/config#save-exact)
- [pnpm: Pinning dependencies](https://pnpm.io/continuous-integration#pinning-dependencies)
- [OWASP: Supply Chain Security](https://owasp.org/www-community/vulnerabilities/Supply_Chain_Attack)
