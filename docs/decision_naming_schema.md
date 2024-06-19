# Naming Schema for Directories and `package.json`

To establish a clear and consistent naming convention for directories and packages within our project, we have adopted the following schema:

Please consider the npm naming guidelines: https://docs.npmjs.com/cli/v10/configuring-npm/package-json

## Package Directory Naming

**`[<TARGET_PROJECT>-]<PACKAGE_NAME>[-app|mfe]`**

## `package.json` Naming

**`@<OWNER>/[<TARGET_PROJECT>-]<PACKAGE_NAME>[-app|mfe]`**

### Components of the Naming Schema

- **`@<OWNER>`**: Used in `package.json` files on npm to namespace packages under a specific owner or organization. It facilitates grouping packages belonging to the same entity, such as a company, team, or individual developer, under a common namespace.

- **`[<TARGET_PROJECT>-]`**: Optionally specifies the target project the package is intended for, including the project name and a hyphen if applicable. This enhances categorization based on project association within a multi-project environment.

- **`<PACKAGE_NAME>`**: Clearly identifies the specific package. A descriptive and concise name facilitates quick understanding of the package’s functionality or purpose.

- **`[-app|mfe]`**: Optional suffix indicating whether the package is an application (`app`) or a micro frontend (`mfe`). This differentiation helps in understanding the type of functionality the package provides within the project architecture.

### Examples

Here are some examples illustrating the application of our naming schema:

#### Directory Names:

- `elektra-dashboard-app`: Represents an application directory for the dashboard component in Project Elektra.

- `elektra-compute-mfe`: Denotes a micro frontend directory for compute functionalities in Project Elektra.

- `utils-logger`: Serves as a utility directory for logging purposes, applicable across various projects.

#### `package.json` Entries:

- `@cloudoperators/elektra-dashboard-app`: `package.json` entry for the dashboard application in Project Elektra.

- `@cloudoperators/elektra-compute-mfe`: `package.json` entry for the compute micro frontend in Project Elektra.

- `@cloudoperators/utils-logger`: `package.json` entry for the logging utility package.
