# Heureka

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Built with Juno](https://cloudoperators.github.io/juno/built-with-juno.svg)](https://github.com/cloudoperators/juno)

This standalone UI uses the Heureka API which aims to:

- Track the overall state of our technology landscape
- Establish a unified and complete Patch Management Process, including:

  - Maintaining and tracking vulnerabilities and affected components
  - Documenting the remediation, classification, and impact of vulnerabilities
  - Recording changes related to vulnerability patching and component updates

For your more info Heureka is a Security Posture Management tool designed to manage security issues in a cloud operating system.

Its primary focus is remediation management of security issues such as vulnerabilities, security events, and policy violations while ensuring compliance and audit-ability. The BE code for Heureka including its used API here for frontend is available in the following repo: https://github.com/cloudoperators/heureka

## Standalone Mode

To create a static, runnable build, execute the following commands:

```bash
cd apps/heureka
pnpx turbo build:static
```

This will generate an `index.html` file along with the necessary assets in the dist folder. You’ll need to copy a `appProps.json` file containing the required props into the dist folder.

## As a Micro Frontend (MFE)

To build a library version for dynamic import, use the following commands:

```bash
cd apps/heureka
pnpx turbo build
```

This will create a build folder with all assets. You can host this folder and load it as an MFE using dynamic import:

```html
<div id="root"></div>

<script type="module">
  import("PATH_TO_HOST/heureka/build/index.js").then((app) => {
    app.mount(document.getElementById("root"), { props: /* PROPS JSON */ })
  })
</script>
```

## Development Mode

First, create an `appProps.json` file in the root directory of the application (apps/heureka), using appProps.template.json as a reference. Customize the file with the necessary properties. Once completed, run the following commands:

```bash
cd apps/heureka
pnpx turbo dev
```

### Testing

```bash
cd apps/heureka
pnpx turbo test
```

** Note **
We use [MockServiceWorker](https://mswjs.io/) (MSW) to intercept GraphQL requests during testing. To mock any GraphQL query or mutation, you need to provide a handler for it in the `src/mocks/handlers.ts` file.

## How to update GraphQL types?

1. Go to app directory:
   ```bash
   cd apps/heureka
   ```
2. Create `.env` file if you haven't already and change configurations accordingly:
   ```bash
   cp .env.template .env
   ```
3. Update GraphQL types from the latest GraphQL schema:
   ```bash
   pnpm generate:types
   ```

## App Props

These are the customizable application properties (appProps) that you can define in your appProps.json file:

- **theme** (optional): Overrides the default theme. Acceptable values are `"theme-light"` or `"theme-dark"` (default).
- **apiEndpoint** (required): The URL of the API endpoint the app will interact with.
- **embedded** (optional): Set to `true` if the app will be embedded within another app or page. When `true`, the app will not display the header or footer, rendering only the content. Default is `false`.
- **initialFilters** (optional): The initialFilters set default filters using an object that contains a key (the filter field) and a value (an array of filter criteria). For example, `{ "support_group": ["containers"] }`.
- **basePath** (optional, default: `/`):  
  Specifies the root path under which the application is served. Useful for deploying the app to a subdirectory. If not provided, defaults to the root path `/`.
- **enableHashedRouting** (optional, default: `false`):  
  A boolean flag that, when set to `true`, enables hashed routing in the application. This means the URL will use the hash (`#`) fragment to manage client-side navigation, which can be useful for static file hosting environments or when server-side routing is not available.

## Contribution Guide for Creating React Components

To ensure a well-organized codebase and maintain consistency, please follow these guidelines when creating React components:

### 1. Component Placement

- Always add a component close to where it is being consumed.
- If a component is used across multiple pages, place it in the `common` directory.

### 2. File Structure

- Each component should reside in its own file named `ComponentName.tsx`.

### 3. Child Components

- If a component has child components (that are not shared among other components):
  - Rename `ComponentName.tsx` to `ComponentName/index.tsx`.
  - Create a `ComponentName/` directory to house the child components.
  - Apply the same structure and rules (outlined in points 2 and 3) to the child components.
