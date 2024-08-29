# Juno UI Theme Switcher Addon for Storybook

## Overview

The **Juno UI Theme Switcher** is a Storybook addon designed specifically for Juno UI. It provides a seamless way to switch between dark and light themes, not just within the preview section but globally throughout your Storybook environment. This powerful addon ensures that your UI components are presented in the right theme, making it an essential tool for development and testing.

## How It Works

### 1. Conversion of Variables.scss

The process begins with the conversion of the `Variables.scss` file into CSS. The resulting CSS file is then placed in a static folder named "assets." This conversion and file placement take place within the `main.js` file. The `Variables.css` file contains color variables for both dark and light modes.

### 2. Theme Selection

The theme is selected based on the class added to the `<body>` element. When the class `theme-dark` is applied, the dark theme variables are used. Conversely, when `theme-light` is applied, the light theme variables are used.

### 3. Integration with Storybook

The Theme Switcher addon integrates with Storybook through various components:

#### - Link Element in Manager UI

Using the DOM API, a link element is added to the Manager UI of Storybook. This link element loads the CSS variables required for the selected theme. Simultaneously, the appropriate theme class is added to the `<body>`.

#### - Theme Switcher Button

The addon defines a Theme Switcher button. When this button is clicked, it changes the theme class in the Manager UI and sends an event with the new theme mode using the Channel API. This process occurs in the `manager.js` file.

#### - Variables in Preview Part

In the Preview section (`preview.js`), the Variables CSS file is loaded into the `<head>` of the iframe using a link tag. The corresponding theme class is applied to the `<body>`. Additionally, a listener is defined using the Channel API, which listens for Theme Change Events triggered in the Manager UI. It dynamically updates the theme class in the Preview section to match the selected theme.

### 4. Theme-Aware Decorator

In addition to the theme switching functionality, the Theme Switcher addon defines a decorator. This decorator serves two crucial purposes:

- **Styles for Juno Components**: Juno components are encapsulated within the shadow root by default. This means styles must be applied within the Shadow DOM. The decorator uses a StyleProvider from Juno UI to supply styles to Juno components, ensuring they are rendered correctly.

- **Dynamic Theme Mode**: The decorator also listens for theme mode changes and updates the theme mode within the StyleProvider, ensuring that Juno components are always styled correctly for the selected theme.

With the Juno UI Theme Switcher addon for Storybook, you can efficiently develop and test your Juno UI components in the desired theme, enhancing your workflow and user interface testing.
