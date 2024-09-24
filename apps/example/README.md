# Example App

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Built with Juno](https://cloudoperators.github.io/juno/built-with-juno.svg)](https://github.com/cloudoperators/juno)

The Example App serves as a demo to showcase interactions between multiple components, adhering to our best practices. Additionally, it illustrates how Juno components can be utilized in a real-world scenario.

# Usage

## Standalone Mode

To create a static, runnable build, execute the following commands:

```bash
cd apps/example
npx turbo build:static
```

This will generate an `index.html` file along with the necessary assets in the dist folder. You’ll need to copy a `appProps.json` file containing the required props into the dist folder.

## As a Micro Frontend (MFE)

To build a library version for dynamic import, use the following commands:

```bash
cd apps/example
npx turbo build
```

This will create a dist folder with all assets. You can host this folder and load it as an MFE using dynamic import:

```html
<div id="root"></div>

<script type="module">
  import("PATH_TO_HOST/example/dist/index.js").then((app) => {
    app.mount(document.getElementById("root"), { props: /* PROPS JSON */ })
  })
</script>
```

## Development Mode

```bash
cd apps/example
npx turbo dev
```

### Testing

```bash
cd apps/example
npx turbo test
```

## App Props

These are the customizable application properties (appProps) that you can define in your appProps.json file:

- **theme**: `"theme-light"` or `"theme-dark"` (default).
- **endpoint**: The API endpoint URL for the app. Empty by default.
- **embedded**: `true`or `false` (default). Set to true if the app is to be embedded in another existing app or page. If set to true, the app will not render a page header/footer and will only render the content.
