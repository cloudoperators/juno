# Communicator

The "Communicator" library empowers seamless message exchange across various contexts, including multiple tabs on the same origin, by utilizing events. It offers a versatile range of communication options, including broadcast events for widespread interaction and one-to-one messaging capabilities.

The library employs a set of methods, each complementing its counterpart:

- **broadcast <-> watch**: These methods enable efficient communication between sender and receiver. When a sender employs the `broadcast` method to transmit an event, it must be monitored by a recipient using the `watch` method. This mechanism ensures that information is disseminated to the intended audience.

- **get <-> onGet**: These methods are tailor-made for one-to-one communication, allowing precise exchanges between sender and recipient. Similar to broadcast and watch, if a sender utilizes the `get` method, the corresponding recipient should listen and respond using the `onGet` method. This approach ensures that data flows seamlessly in a directed manner.

The Communicator library introduces the `crossWindow` option, which enhances its capabilities by enabling cross-tab communication. This feature facilitates communication between tabs, providing additional flexibility and expanding the library's utility.

## Installation

You can install the library in various ways:

1. Via `package.json`:

   ```json
   "dependencies": {
     "communicator": "https://assets.juno.global.cloud.sap/libs/communicator@latest/package.tgz"
   }
   ```

2. Via `import`:

   ```javascript
   import {
     broadcast,
     watch,
     get,
     onGet,
   } from "https://assets.juno.global.cloud.sap/libs/communicator@latest/build/index.js"
   ```

3. Via `importmap`:

   ```html
   <script
     defer
     src="https://assets.juno.global.cloud.sap/apps/widget-loader@latest/build/app.js"
     data-importmap-only="true"
   ></script>

   <script type="module">
     import { broadcast, watch, get, onGet } from "@juno/communicator@latest"
   </script>
   ```

## Usage

To use the library, you can import the necessary functions:

```javascript
import { broadcast, watch, get, onGet } from "communicator"
```

### `broadcast(name, data, options) ⇒ void`

Use this function to send messages via BroadcastChannel across different contexts, such as multiple tabs on the same origin.

- `name` (required): The message name.
- `data` (required, null is allowed): The message data.
- `options` (optional): An object with options
  - `debug` (boolean, false by default): Set this to `true` for debugging purposes.
  - `crossWindow` (boolean, false by default): Set this to `true` to enable cross-window communication.

Example:

```javascript
import { broadcast } from "communicator"

broadcast(
  "AUTH_TOKEN_UPDATED",
  { token: "TOKEN" },
  {
    debug: true,
    crossWindow: false,
  }
)
```

### `watch(name, callback, options) ⇒ function`

Register a listener for a specific message. Messages are observed across contexts.

- `name` (required): The message name.
- `callback` (required): A function that is executed when a message is sent for the registered name. It should have the following signature: `(data, { sourceWindowId, thisWindowId }) => void`.

For the `options` object, you can mention that it includes the following properties:

- `debug` (boolean, false by default): Set this to `true` for debugging purposes.

Example:

```javascript
import { watch } from "communicator"

const unwatch = watch(
  "AUTH_TOKEN_UPDATED",
  (data, { sourceWindowId, thisWindowId }) => {
    // Receive message data
    console.log(data)
  },
  {
    debug: false, // Default
  }
)

// To unregister the listener, call unwatch()
unwatch()
```

### `get(name, callback, options) ⇒ function`

Request a message by name and receive the data with the callback.

- `name` (required): The message name.
- `callback` (required): A function that is executed upon receiving a response.
- `options` (optional): An object with the following properties:
  - `getOptions` (object): An object that allows customization of the get request.
  - `debug` (boolean, false by default): Set this to `true` for debugging purposes.

Example:

```javascript
import { get } from "communicator"

const cancel = get(
  "AUTH_TOKEN_UPDATED",
  (data, { sourceWindowId, thisWindowId }) => {
    // Receive message data
    console.log(data)
  },
  {
    debug: false, // Default
  }
)

// To cancel the request, call cancel()
cancel()
```

### `onGet(name, callback, options) ⇒ function`

Use this function to respond to get messages.

- `name` (required): The message name.
- `callback` (required): A function that is executed when get events occur and returns the data.
- `options` (optional): An object with the following properties:

  - `debug` (boolean, false by default): Set this to `true` for debugging purposes.

Example:

```javascript
import { onGet } from "communicator"

const unwatch = onGet(
  "AUTH_TOKEN_UPDATED",
  (getOptions, { sourceWindowId, thisWindowId }) => {
    // Return data
    return { name: "test" }
  },
  {
    debug: false, // Default
  }
)

// To unregister the response, call unwatch()
unwatch()
```
