# Create your own Application with Juno

## Overview

This guide will walk you through creating your own application using our [Juno UI Components](https://cloudoperators.github.io/juno), whether you want to embed it within the [Greenhouse dashboard](https://cloudoperators.github.io/greenhouse/) or have it function as a standalone application.

## Prerequisites

- Node.js: Vite requires Node.js version 18+ or 20+ depending if a template is being used.

## Scaffolding Vite Application

Vite is a build tool designed to deliver a faster and more efficient development experience for modern web projects. We recommend using Vite to scaffold your application, as it aligns with the tooling used for other applications built with the Juno UI Components in this repository.

```bash
pnpm create vite@latest my-app
```

- Replace `my-app` with the name of your application.

When prompted, select the following options:

- Select the `react` framework when prompted.
- Select the `typescript` language when prompted. We recommend using TypeScript for type safety and better development experience but it's not required.

Follow the instructions in the [Getting Started](https://vite.dev/guide/#getting-started) guide for more information.

## Adding Juno UI Components

To add Juno UI Components as a dependency in your application, we recommend installing them using pnpm. While pnpm is also a great choice, we suggest using pnpm to maintain consistency with the Juno project's setup.

```bash
pnpm add @cloudoperators/juno-ui-components
```

This will add the latest version of the Juno UI Components as a dependency in your `package.json` file.

## Setting Up the Application

To be able to make full use of the Juno design system and its components, you will need to go through the following steps:

### 1. Add base styles

Add the following to the `head` of your `index.html` file so the application can be displayed correctly in standalone mode:

```html
<style>
  html {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
  body {
    flex-grow: 1;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
  #root {
    display: inline;
  }
</style>
```

### 2. Wrap the app with the `AppShellProvider`

Open the `main.tsx` file and wrap your application component with the [AppShellProvider](https://cloudoperators.github.io/juno/?path=/docs/layout-appshellprovider--docs) component from `Juno-UI-Components` to supply the necessary context for your application. The `AppShellProvider` serves as a foundational wrapper for Juno applications, incorporating a `StyleProvider` and a `PortalProvider`, while also setting a default shadow root for the application. After this modification, your `main.tsx` file should look like this:

```tsx
// main.tsx
import { AppShellProvider } from "@cloudoperators/juno-ui-components"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import styles from "./index.css?inline"

createRoot(document.getElementById("root")!).render(
  <AppShellProvider>
    {/* load styles inside the shadow dom */}
    <style>{styles.toString()}</style>
    <App />
  </AppShellProvider>
)
```

Notice that we are also importing the `index.css` file to load the styles inside the shadow DOM.

### 3. Add the `AppShell` component

The [AppShell](https://cloudoperators.github.io/juno/?path=/docs/layout-appshell--docs) component serves as the main container for your application's content. It acts as the primary structure for the app's body. After this modification, your `App.tsx` file should look like this:

```tsx
// App.tsx
import { AppShell } from "@cloudoperators/juno-ui-components"

function App() {
  return (
    <AppShell pageHeader="My App">
      <h1>Hello World!</h1>
    </AppShell>
  )
}

export default App
```

Consider using the `embedded` and `fullWidthContent` props when setting up the AppShell, depending on whether the application should be rendered embedded in another app/page or as a standalone application. For more information, refer to the [AppShell](https://cloudoperators.github.io/juno/?path=/docs/layout-appshell--docs) documentation.

### 4. Clean up the `index.css` file

Delete the default styles in the `index.css` file and replace them with the following styles to reflect the changes from `Hello World!` in your application:

```css
/* index.css */
h1 {
  color: red;
}
```

### 5. Run the Application

Run the app with the following command:

```bash
pnpm dev
```

## Building the Application

When building your application, you need to decide whether you want to bundle all dependencies into your application or rely on external libraries that are provided by the host. The approach depends on whether your application is standalone or intended to run as part of a larger host environment (e.g., within the Greenhouse or Aurora dashboard).

### Standalone Applications

For standalone applications, all libraries should be bundled directly into the application to ensure that it can function independently without relying on an external host to provide dependencies.

To bundle your dependencies with Vite, simply include them as normal dependencies in your `package.json`. Vite will automatically bundle them when you build your application.

For example, in the package.json:

```json
{
  "dependencies": {
    "@cloudoperators/juno-ui-components": "^latest",
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  }
}
```

Once you run the build command:

```bash
pnpm build
```

### Host-Dependent Applications

If your application is designed to run within a host that already provides certain libraries (for example, Greenhouse provides `@cloudoperators/juno-ui-components`), those libraries should not be bundled. Instead, they should be added to the peerDependencies section of your package.json file.

This ensures that the host will provide the necessary libraries, and your application will not attempt to bundle them, avoiding duplication and reducing the size of your application. Our host applications will always bundle `@cloudoperators/juno-ui-components`, `react` and `react-dom`, so you should ensure they are added to peer dependencies in your app if it is meant to run within one of those hosts.

For example, in the package.json:

```json
{
  "peerDependencies": {
    "@cloudoperators/juno-ui-components": "^latest",
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  }
}
```

By adding libraries to peerDependencies, you inform the bundler and host that these libraries will be supplied by the host and should not be bundled into the app's final build.
