# OpenID Connect Lib (oauth)

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

The principle of this lib is as follows. Immediately after loading this lib, it evaluates the URL. It looks for state param in the hash or search. If state is found, then the value of this parameter is used as a key to find the corresponding stored state properties in sessionStorage. If the saved state exists, then it is the answer (oidc response) from the ID provider to the previously made request (oidc request), and the lib tries to evaluate the result.

## Evaluation of the response

The response contains either the `id_token` (in the hash of the URL) directly in the case of **implicit flow** or the `code` (in the search of the URL) in the case of **code flow**. Both flows return the previously created state. If a saved state is found for the state parameter, the URL is evaluated. In the case of the implicit flow, the `id_token` parameter already contains all the data and only needs to be decoded. In the case of the code flow, another POST call must be made using the **PKCE** method to the token endpoint of the ID provider, which, if successful, sends back the id_token and the refresh_token. This refresh_token is used to automatically refresh the id_token if refresh is set to true.

## Redirect to the ID provider

The request to the ID provider proceeds as follows. Before the actual request is made, the Lib creates state properties and saves them in the session storage under a hash as a key. This state contains all the necessary information that is required for the request to the ID provider and the evaluation of the response. The hash key is sent as the value of the state parameter in the request to the ID provider. Next, the lib constructs the request URL and redirects the user. After successful login, the ID provider redirects the user (the response contains the state key). Since the response is a redirect, the website is reloaded and with it this lib and the process as described in **Evaluation of the response** is triggered.

## Install

```npm add @cloudoperators/oauth````

## Usage

Vanilla

```js
import { oidcSession } from "@cloudoperators/oauth"

const oidc = oidcSession({
  issuerURL: props.issuerURL,
  clientID: props.clientID,
  initialLogin: props.initialLogin,
  refresh: true,
  flowType: "code",
  onUpdate: (authData) => {
    const { auth, isProcessing, loggedIn, error } = authData
    console.log("auth data updated", { auth, isProcessing, loggedIn, error })
  },
})
const { login, logout, refresh, currentState } = oidc
```

React

```js
import { oidcSession } from "@cloudoperators/oauth"

const App = (props = {}) => {
  const [authData, setAuthData] = React.useState()

  const oidc = React.useMemo(
    () =>
      oidcSession({
        issuerURL: props.issuerURL,
        clientID: props.clientID,
        initialLogin: props.initialLogin,
        refresh: true,
        flowType: "code",
        onUpdate: (authData) => {
          setAuthData(authData)
        },
      }),
    [setAuthData]
  )

  return (
    <div>
      {authData.loggedIn ? (
        <div>
          <p>{authData.auth?.parsed?.fullName}</p>
          <pre>{authData.auth?.JWT}</pre>
          <pre>{authData.auth?.refreshToken}</pre>
          <pre>{authData.auth?.raw}</pre>
          <pre>{authData.auth?.parsed}</pre>
          <button onClick={oidc.logout}>Logout</button>
        </div>
      ) : (
        <button onClick={oidc.login}>Login</button>
      )}
    </div>
  )
}
```

Certainly! Here's the code description in Markdown format:

````markdown
## Mocked Authentication Session Module

This JavaScript module provides a mocked authentication session for a client application. It simulates the behavior of an authentication mechanism by generating a mock authentication token and handling login, logout, and token refresh actions.

### Default Mocked Token

A constant named `DEFAULT_MOCKED_TOKEN` defines a default mock authentication token with various properties such as issuer (`iss`), subject (`sub`), audience (`aud`), expiration time (`exp`), issuance time (`iat`), nonce, email, email verification status, user groups, name, and preferred username.

```javascript
const DEFAULT_MOCKED_TOKEN = {
  iss: "https://auth.mock",
  sub: "3ksXP1FQq7j9125Q6ayY",
  aud: "mock-dev-env",
  exp: Math.floor(Date.now() / 1000) + 8 * 3600,
  iat: Math.floor(Date.now() / 1000),
  nonce: "MOCK",
  email: "jane.doe@nodomain.com",
  email_verified: true,
  groups: ["organization:test-org", "test-team-1"],
  name: "I123456",
  preferred_username: "Jane Doe",
}
```
````

#### Mocked Session

The default exported function `mockedSession` is responsible for creating and managing a mocked authentication session. It takes in an object `params` as an argument, which can include properties like `token`, `initialLogin`, `onUpdate`, and additional unknown properties.

The function initializes the `state` object with properties like `auth` (representing the authentication data), `error`, `loggedIn`, and `isProcessing`. It defines methods such as `login`, `logout`, and `refresh` to simulate login, logout, and token refresh actions, respectively. If `initialLogin` is true, it calls the `login` function to set the initial state.

The function returns an object with methods `login`, `logout`, `refresh`, and `currentState`, allowing the client application to interact with the mocked authentication session.

```javascript
export default function mockedSession(params) {
  // ... Function implementation
}
```

## oidcSession(options) ⇒ <code>object</code>

Create a oidc session object

**Kind**: module function

**options**
| Param | Type | Description |
| -------------------------------- | ------------------- | ---------------------------- |
| issuerURL (required) | <code>string</code> | URL of the ID Provider |
| clientID (required) | <code>string</code> | client id configured in ID Provider |
| flowType (optional) | <code>string</code> | implicit or code (default) |
| refresh (optional) | <code>boolean</code> | true or false (default) |
| requestParams (optional) | <code>object</code> | additional parameters that are initially sent to the ID provider (oidc redirect) |
| callbackURL (optional) | <code>string</code> | default callback URL is `window.location.origin` |
| onUpdate (optional) | <code>function</code> | onUpdate should be specified. Otherwise you won't get the notification about login, logout or refresh |

**returns**

#### login() ⇒ <code>void</code>

#### logout(options) ⇒ <code>void</code>

**options**
| Param | Type | Description |
| -------------------------------- | ------------------- | ---------------------------- |
| resetOIDCSession (optional) | <code>boolean</code> | resets the oidc session on ID provider |
| silent | <code>boolean</code> | if true it uses a iframe to call the end_session_endpoint on ID Provider|

#### refresh() ⇒ <code>void</code>

#### currentState() ⇒ <code>object</code>

## Auth Data

```js
{
  auth: {
    JWT: "ID_TOKEN",
    refreshToken: "REFRESH_TOKEN", //only for code flow
    raw: {/*...*/}, // decoded id_token
    parsed: {
      loginName: "USER_ID",
      email: "EMAIL",
      firstName: "USER_FIRST_NAME",
      lastName: "USER_LAST_NAME,
      fullName: "USER_FULL_NAME",
      expiresAt: 1234567890, // javascript timestamp (epoch*1000),
      expiresAtDate: Date, // javascript date object
      groups: [/*...*/],
    }
  },
  isProcessing: false, // true if oidc request started
  loggedIn: true, // false if auth is null
  error: null // not null if odic failed
}
```
