# Naming Schema for Directories and `package.json`

To establish a clear and consistent naming convention for directories and packages within our project, we have adopted the following schema:

Please consider the npm naming guidelines: [npm naming guidelines](https://docs.npmjs.com/cli/v10/configuring-npm/package-json).

## Package Directory Naming

**`[apps|packages]/<PACKAGE_NAME>`**

## `package.json` Naming

**`@<OWNER>/<REPOSITORY_NAME>-[app-]<PACKAGE_NAME>`**

### Components of the Naming Schema

- **`@<OWNER>`**: Used in `package.json` files on npm to namespace packages under a specific owner or organization. It facilitates grouping packages belonging to the same entity, such as a company, team, or individual developer, under a common namespace.
- **`<REPOSITORY_NAME>`**: Specifies the name of the GitHub repository the package is intended for. This helps in categorizing and associating the package within a multi-repository environment.

- **`[app-]<PACKAGE_NAME>`**: Clearly identifies the specific package. For application packages, prefix with `app-` to distinguish them from other packages. A descriptive and concise name facilitates quick understanding of the package’s functionality or purpose.

### Examples

Here are some examples illustrating the application of our naming schema:

#### Directory Names:

Repository: `juno`

- `apps/landing-page`
- `apps/user-dashboard`
- `packages/ui-components`
- `packages/communicator`

Repository: `elektra`

- `apps/dashboard`
- `packages/compute`

#### `package.json` Entries:

Repository: `juno`

- `@cloudoperators/juno-app-landing-page`
- `@cloudoperators/juno-app-user-dashboard`
- `@cloudoperators/juno-ui-components`
- `@cloudoperators/juno-communicator`

Repository: `elektra`

- `@cloudoperators/elektra-app-dashboard`
- `@cloudoperators/elektra-compute`

These examples should help in understanding how to apply the naming schema consistently across directories and `package.json` files.
