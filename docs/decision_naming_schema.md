# Naming Schema Decision for Directories and package.json

In order to establish a clear and consistent naming convention for directories and packages within our project, we have decided on the following schema:

## Package Directory Name

**`<TARGET_PROJECT>-]<PACKAGE_NAME>[-app|mfe]`**

## package.json Name

For `package.json` entries within our npm packages, we have adopted the following schema:

**`@<OWNER>/<TARGET_PROJECT>-]<PACKAGE_NAME>[-app|mfe]`**

### Components of the Naming Schema

- `[<TARGET_PROJECT>-]`: Optionally specifies the target project the package is intended for, including the project name and a hyphen if applicable. Enhances categorization based on project association within a multi-project environment.
- `<PACKAGE_NAME>`: Clearly identifies the specific package. A descriptive and concise name facilitates quick understanding of the package’s functionality.
- `[-app|mfe]`: Optionally indicates whether the package is an application (`app`) or a micro frontend (`mfe`), including the type designation preceded by a hyphen. Differentiates between different types of packages and clarifies their role within the project architecture.

### Examples

Here are some examples demonstrating the application of our naming schema:

- `elektra-dashboard-app`: Represents an application directory for the header component in Project X.
- `elektra-compute-mfe`: Denotes a micro frontend directory for user functionalities in Project Y.
- `utils-logger`: Serves as a utility directory for logging purposes, not tied to a specific project or type.

- `@<OWNER>`: part is used to namespace packages under a specific owner or organization on npm.
  • Usage: It helps in grouping packages that belong to the same entity, such as a company, team, or individual developer, under a common namespace.
