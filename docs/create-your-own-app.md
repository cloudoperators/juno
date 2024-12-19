# Create your own App with Juno

## Overview

This guide will walk you through creating your own app using our [Juno UI Components](https://cloudoperators.github.io/juno), whether you want to embed it within the [Greenhouse dashboard](https://cloudoperators.github.io/greenhouse/) or have it function as a standalone application.

## Prerequisites

- Node.js: Vite requires Node.js version 18+ or 20+ depending if a template is being used.

## Scaffolding Vite App

Vite is a build tool designed to deliver a faster and more efficient development experience for modern web projects. We recommend using Vite to scaffold your app, as it aligns with the tooling used for other applications built with the Juno UI Components in this repository.

```bash
npm create vite@latest my-app
```

- Replace `my-app` with the name of your app.

When prompted, select the following options:

- Select the `react` framework when prompted.
- Select the `typescript` language when prompted. We recommend using TypeScript for type safety and better development experience but it's not required.

Follow the instructions in the [Getting Started](https://vite.dev/guide/#getting-started) guide for more information.

## Adding Juno UI Components

To add Juno UI Components as a dependency in your app, we recommend installing them using npm. While pnpm is also a great choice, we suggest using npm to maintain consistency with the Juno project's setup.

```bash
npm add @cloudoperators/juno-ui-components
```

This will add the latest version of the Juno UI Components as a dependency in your `package.json` file.

## Setting Up the App

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

Open the `main.tsx` file and wrap your app component with the [AppShellProvider](https://cloudoperators.github.io/juno/?path=/docs/layout-appshellprovider--docs) component from `Juno-UI-Components` to supply the necessary context for your application. The `AppShellProvider` serves as a foundational wrapper for Juno apps, incorporating a `StyleProvider` and a `PortalProvider`, while also setting a default shadow root for the app. After this modification, your `main.tsx` file should look like this:

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

### 4. Clean up the `index.css` file

Delete the default styles in the `index.css` file and replace them with the following styles to reflect the changes from `Hello World!` in your app:

```css
/* index.css */
h1 {
  color: red;
}
```

### 5. Run the app

Run the app with the following command:

```bash
npm run dev
```
