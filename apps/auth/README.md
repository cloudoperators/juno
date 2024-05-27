# Auth App

This app implements the OIDC flow to login the user.

## Usage

### load via script tag

```js
<script
  defer
  src="https://assets.juno.global.cloud.sap/apps/widget-loader@latest/build/app.js"
  data-name="auth"
></script>
```

### load via Importmap

```js
<script
  defer
  src="https://assets.juno.global.cloud.sap/apps/widget-loader@latest/build/app.js"
  data-importmap-only="true"
></script>

<script type="module">
  import "@juno/auth@latest"
</script>
```

### load via import

```js
<script type="module">
  import "https://assets.juno.global.cloud.sap/apps/auth@latest/build/index.js"
</script>
```

Once the app is loaded, it tries to login the user via oidc. After a successful login, it fires an `AUTH_UPDATE_DATA` event. Other apps that rely on authentication should use the **communicator** lib to subscribe to it via `watch("AUTH_UPDATE_DATA",(data) => { /* handle data */})`.

## Props

**issuerUrl:**

- Type: Required (String)
- Description: Endpoint URL of the OpenID provider.
- Value: "https://endpoint_url_of_the_openid_provider.com"

**clientId:**

- Type: Required (String)
- Description: OIDC client id.
- Value: "tbd"

**requestParams:**

- Type: Optional (Object)
- Description: Additional parameters to be sent with the OIDC authentication request. The value is a JSON object, and you can pass any additional parameters required by your OIDC provider using this prop.
- Value: `{"connector_id": "ccloud"}`

**debug:**

- Type: Optional (Boolean)
- Description: Enable logging of debug information. Set to true to enable debug mode with additional logging during the authentication and communication processes.
- Value: true

**initialLogin:**

- Type: Optional (Boolean)
- Description: Trigger the login process automatically on load press. Possible values are true or false (default).
- Value: true

**mock:**

- Type: Optional (Boolean or String)
- Description: Enable mocking of the OIDC data. Allowed values are true, false (default), or JSON (pure or base64 encoded).
- Value: false

The "mock" property can also be a JSON object that overrides individual token properties. For example, it can be defined as mock='{"email": "test.test@test.com"}'.
