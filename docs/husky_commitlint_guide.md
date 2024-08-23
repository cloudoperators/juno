# Commitlint and Husky Configuration

This project uses **Husky** to enforce code quality checks and **commitlint** to ensure commit messages follow a consistent convention. Below are the details on how these are configured and how they work together.

## Husky Prepare

To set up Husky for the first time, you need to run the following command:

```
npm run prepare
```

This command will initialize Husky and set up the necessary Git hooks in your project. After running this command, you can proceed with configuring the hooks and their associated scripts.

## GUI Visual Studio Troubleshooting Guide

If you are experiencing issues with GUI Visual Studio while using Husky and commitlint, follow these troubleshooting steps:

Ensure that the `~/.config/husky/init.sh` file exists and contains the following code:

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
nvm use default  # or your current version
```

For more info check this one https://typicode.github.io/husky/how-to.html#node-version-managers-and-guis

## Commitlint Configuration

We enforce specific commit message formats using `commitlint` to ensure that all commits are meaningful and consistent. This is crucial for maintaining a clean and understandable project history.

### Allowed Commit Types

The following commit types are allowed:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **chore**: Changes that don't have an influence on the code running in production. Chore commits typically don't change the release.
- **fix**: A bug fix
- **feat**: A new feature
- **publish**: Changes related to publishing the package
- **release**: Version releases
- **refactor**: Code refactor that doesn't introduce a new feature or fix a bug
- **test**: For test purposes, when only tests will be written or changed
- **style**: When there are only style changes

### Allowed Commit Scopes

The following scopes are permitted for commits:

- **build**: Related to the build system
- **communicator**: Changes in the communication layer
- **config**: Configuration-related changes
- **ci**: Continuous Integration configuration and changes
- **core**: Core functionalities
- **deps**: Dependency management
- **docs**: Docs related
- **example**: Changes to the example app
- **infra**: Infrastructure-related changes
- **juno**: Juno-specific changes
- **k8s**: Kubernetes-related changes
- **message-provider**: Changes in the message provider
- **npm**: npm-related changes
- **oauth**: OAuth implementation and changes
- **template**: Changes to the template app
- **ui**: changes to ui-components
- **utils**: Utility functions or modules
- **url-state-provider**: Changes in the URL state provider
- **url-state-router**: Changes in the URL state router
- **version**: Versioning and release-related changes
- **ISSUE-\<number>**: Reference to a specific issue (e.g., `ISSUE-123`)

### Commit Message Format

Each commit message should be structured as follows:

- **type**: Must be one of the allowed types listed above.
- **scope**: Must be one of the allowed scopes or follow the `ISSUE-\<number>` pattern.
- **subject**: Brief description of the change (avoid using special characters like `.` at the end).

### Example Commit Messages

- `feat(ui): add new button component`
- `fix(core): resolve the race condition in data fetching`
- `chore(deps): update dependency versions`
- `build(ci): update CI configuration for Node.js version`
- `fix(ISSUE-456): correct calculation error in pricing module`

## Husky Hooks

To ensure that all commits adhere to the rules above, we use **Husky** to run checks at various stages of the commit process.

### Pre-commit Hook

Before a commit is finalized, the following checks are automatically run:

1. **Linting**: Ensures that code follows our style guidelines (`npm run lint`).
2. **Type Checking**: Ensures that there are no TypeScript type errors (`npm run typecheck`).
3. **Formatting**: Ensures code is properly formatted with Prettier (`npm run format`).

### Pre-push Hook

Before any code is pushed to the remote repository, the following checks are performed:

1. **Linting**: Ensures code quality with ESLint (`npm run lint`).
2. **Type Checking**: Checks TypeScript types (`npm run typecheck`).
3. **Testing**: Runs the test suite to ensure all tests pass (`npm test`).

### Skipping Hooks in CI

In CI environments (e.g., when using automation bots), these hooks are automatically skipped to avoid unnecessary checks on automated commits.

### Commit Title Check

> **Important**: When adding a new scope to your project, it's essential to ensure consistency across your tooling and documentation. Follow these steps whenever a new scope is introduced:

1. **Update Commitlint Configuration**: First, add the new scope to your commitlint configuration to enforce it during commit message validation. See the `commitlint.config.js.md` for guidance on how to update your configuration.

2. **Update Documentation**: Reflect this change in the `husky_commitlint_guide.md` document to keep your contributors informed about the allowed scopes. Specifically, add the new scope to the list in the excerpt provided above to maintain an up-to-date reference.

3. **Update CI Title Lint Check**: Lastly, modify the `ci-title-lint-check.yaml` file to include the new scope in the `scopes` section. This ensures that your continuous integration process aligns with the updated commit conventions, preventing CI failures due to unrecognized scopes.

By following these steps, you maintain alignment between your commitlint rules, project documentation, and CI checks, ensuring a smooth workflow for contributors and maintainers alike.
