# Doop test

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Built with Juno](https://cloudoperators.github.io/juno/built-with-juno.svg)](https://github.com/cloudoperators/juno)

This UI offers a dashboard to aggregate all policy violations reported by the Gatekeeper instances in each cluster.

# Usage

## Standalone Mode

To create a static, runnable build, execute the following commands:

```bash
cd apps/doop
npx turbo build:static
```

This will generate an `index.html` file along with the necessary assets in the dist folder. You’ll need to copy a `appProps.json` file containing the required props into the dist folder.

## As a Micro Frontend (MFE)

To build a library version for dynamic import, use the following commands:

```bash
cd apps/doop
npx turbo build
```

This will create a build folder with all assets. You can host this folder and load it as an MFE using dynamic import:

```html
<div id="root"></div>

<script type="module">
  import("PATH_TO_HOST/doop/build/index.js").then((app) => {
    app.mount(document.getElementById("root"), { props: /* PROPS JSON */ })
  })
</script>
```

## Development Mode

First, create an `appProps.json` file in the root directory of the application (apps/doop), using appProps.template.json as a reference. Customize the file with the necessary properties. Once completed, run the following commands:

```bash
cd apps/doop
npx turbo dev
```

### Testing

```bash
cd apps/doop
npx turbo test
```

## App Props

These are the customizable application properties (appProps) that you can define in your appProps.json file:

- **id** (optional): Use unique IDs if you need to instantiate multiple instances of the app on the same page.
- **theme** (optional): Overrides the default theme. Acceptable values are `"theme-light"` or `"theme-dark"` (default).
- **displayName** (optional): The name to be displayed in the app's header.
- **apiEndpoint** (required): The URL of the API endpoint the app will interact with.
- **embedded** (optional): Set to `true` if the app will be embedded within another app or page. When `true`, the app will not display the header or footer, rendering only the content. Default is `false`.
- **isMock** (optional): Use mocked data for development purposes. Default is `false`.
- **showDebugSeverities** (optional): Display debug severity levels in the log. Default is `false`.
