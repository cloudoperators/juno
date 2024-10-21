# Heureka

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Built with Juno](https://cloudoperators.github.io/juno/built-with-juno.svg)](https://github.com/cloudoperators/juno)

This mircro frontent uses the Heureka POC API which aims to:

- Track the overall state of our technology landscape
- Establish a unified & complete Patch Management Process:
  - Maintain & track vulnerabilities and affected components
  - Document the remediation, classification, and impact of vulnerabilities
  - Document the changes corresponding with patching of vulnerabilities, as well as updating components

# Usage

## Standalone Mode

To create a static, runnable build, execute the following commands:

```bash
cd apps/heureka
npx turbo build:static
```

This will generate an `index.html` file along with the necessary assets in the dist folder. You’ll need to copy a `appProps.json` file containing the required props into the dist folder.

## As a Micro Frontend (MFE)

To build a library version for dynamic import, use the following commands:

```bash
cd apps/heureka
npx turbo build
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
npx turbo dev
```

### Testing

```bash
cd apps/heureka
npx turbo test
```

## App Props

These are the customizable application properties (appProps) that you can define in your appProps.json file:

- **theme** (optional): Overrides the default theme. Acceptable values are `"theme-light"` or `"theme-dark"` (default).
- **apiEndpoint** (required): The URL of the API endpoint the app will interact with.
- **embedded** (optional): Set to `true` if the app will be embedded within another app or page. When `true`, the app will not display the header or footer, rendering only the content. Default is `false`.
