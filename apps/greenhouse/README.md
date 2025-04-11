# Greenhouse

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Built with Juno](https://cloudoperators.github.io/juno/built-with-juno.svg)](https://github.com/cloudoperators/juno)

This is the shell app for Project Greenhouse. It is the host for all apps that are part of Greenhouse.

# Usage

## Standalone Mode

To create a static, runnable build, execute the following commands:

```bash
cd apps/greenhouse
npx turbo build:static
```

This will generate an `index.html` file along with the necessary assets in the dist folder. You’ll need to copy a `appProps.json` file containing the required props into the dist folder.

## Development Mode

<!-- add note -->

> [!NOTE]  
> Please make sure to copy the **appProps.template.js** file to **appProps.json** before proceeding.

```bash
cd apps/greenhouse
npx turbo dev
```

### Testing

```bash
cd apps/greenhouse
npx turbo test
```

## App Props

These are the customizable application properties (appProps) that you can define in your appProps.json file:

- **authIssuerUrl** (required): `"https://endpoint_url_of_the_openid_provider.com"`. Endpoint URL of the OpenID provider.
- **authClientId** (required): `"id_of_the_oidc_client"`. OIDC client ID.
- **theme** (optional): Overrides the default theme. Acceptable values are `"theme-light"` or `"theme-dark"` (default).
- **embedded** (optional): Set to `true` if the app will be embedded within another app or page. When `true`, the app will not display the header or footer, rendering only the content. Default is `false`.
- **currentHost** (required): `"URL TO ASSETS SERVER"`. This value is usually set by the Widget Loader. If the app is loaded via `import` or `importShim`, this parameter should be set.
- **apiEndpoint** (required): `"URL TO K8S API"`. This value is necessary to communicate with the Kubernetes API.
- **mockAuth**: true, false (default), or JSON (optional). Simulates mock authentication; allowed values include boolean, plain JSON objects. When enabled, the application receives a predefined mock token with attributes such as `iss`, `sub`, `aud`, `exp`, `iat`, `nonce`, `email`, `email_verified`, `groups`, `name`, and `preferred_username`. These attributes will be overridden if a JSON object is provided instead of a boolean. Additionally, the organization group will be overridden with the value specified in the URL.
  **Important:** `mockAuth` takes precedence over both real and token-based authentication, regardless of the organization provided. If set, mock data will be used even when `demoOrg` and `demoUserToken` are defined.
- **demoOrg** (optional): `"demo"`. If the organization name matches this value, the app will use the demo user token for authentication.
- **demoUserToken** (optional): `"token for demo user"`. Used for authentication if `demoOrg` and `demoUserToken` are set, and the organization name matches `demoOrg`.
  **Note:** This is ignored if `mockAuth` is set.
