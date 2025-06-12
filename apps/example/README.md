# Example App

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Built with Juno](https://cloudoperators.github.io/juno/built-with-juno.svg)](https://github.com/cloudoperators/juno)

The **Example** App serves as a demo to showcase interactions between multiple components, adhering to our best practices. Additionally, it illustrates how Juno components can be utilized in a real-world scenario.

# Usage

## Standalone Mode

To create a static, runnable build, execute the following commands:

```bash
cd apps/example
pnpx turbo build:static
```

This will generate an `index.html` file along with the necessary assets in the dist folder. You’ll need to copy a `appProps.json` file containing the required props into the dist folder.

## As a Micro Frontend (MFE)

To build a library version for dynamic import, use the following commands:

```bash
cd apps/example
pnpx turbo build
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

<!-- add note -->

> [!NOTE]  
> Please make sure to copy the **appProps.template.js** file to **appProps.json** before proceeding.

```bash
cd apps/example
pnpx turbo dev
```

### Testing

```bash
cd apps/example
pnpx turbo test
```

## App Props

These are the customisable application properties that you can define in your `appProps.json` file:

- **endpoint**:

  - Specifies the URL for API requests.
  - **Default**: Base URL of the current page
  - **Example**:
    ```json
    {
      "endpoint": "https://api.example.com"
    }
    ```

- **id**:
  - Unique identifier for user or session tracking.
  - **Default**: Undefined
  - **Example**:
    ```json
    {
      "id": "user1"
    }
    ```

## Contributing

We welcome contributions from the community. Please follow our [contribution guidelines](https://github.com/cloudoperators/juno/blob/main/CONTRIBUTING.md) to contribute to this project.

## License

Licensed under the [Apache License](LICENSE).
