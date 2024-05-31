# Juno UI Components Library

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

## Installation

To include Juno UI components as a dev dependency in your app install with npm:

```bash
npm add --dev juno-ui-components
```

…or declare manually as a dev-dependency:

```js
// package.json
"devDependencies": {
  ...
  "juno-ui-components": ">= 0"
  ...
}
```

```bash
npm --workspaces install
```

## Working With Tailwind

Juno comes with [Tailwind](https://tailwindcss.com/) included, so when using Juno you automatically can use tailwind in your project.

To be able to make full use of the predefined colors and other custom properties from the Juno UI components library you will need to include the ui components tailwind config into your application's tailwind config like this:

```js
module.exports = {
  presets: [
    require("juno-ui-components/build/lib/tailwind.config")
  ],
 ...
}
```

Doing this lets you use Tailwind classnames from the Juno UI Components library.

## Development

In order to work ON (NOT WITH) the Juno Design System and its components run storybook with:

```bash
npm -w juno-ui-components run storybook
```

or just run from the root directory of this repository `npm run ui-components`

Run the test suite:

```bash
npm -w juno-ui-components run test
```
