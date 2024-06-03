# Communicator

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

The **Communicator** library facilitates seamless message exchange across various contexts, including multiple tabs on the same origin, by utilizing events. It offers a versatile range of communication options, including broadcast events for widespread interaction and one-to-one messaging capabilities.

## Overview

The library employs a set of methods, each complementing its counterpart:

- **broadcast <-> watch**: These methods enable efficient communication between sender and receiver. When a sender employs the `broadcast` method to transmit an event, it must be monitored by a recipient using the `watch` method. This mechanism ensures that information is disseminated to the intended audience.

- **get <-> onGet**: These methods are tailor-made for one-to-one communication, allowing precise exchanges between sender and recipient. Similar to broadcast and watch, if a sender utilizes the `get` method, the corresponding recipient should listen and respond using the `onGet` method. This approach ensures that data flows seamlessly in a directed manner.

Additionally, the Communicator library introduces the `crossWindow` option, which enhances its capabilities by enabling cross-tab communication. This feature facilitates communication between tabs, providing additional flexibility and expanding the library's utility.

## Usage

To use the library, you can import the necessary functions:

```javascript
import { broadcast, watch, get, onGet } from "communicator"
```

### broadcast(name, data, options) ⇒ void

Use this function to send messages via BroadcastChannel across different contexts, such as multiple tabs on the same origin.

```javascript
broadcast(
  "AUTH_TOKEN_UPDATED",
  { token: "TOKEN" },
  { debug: true, crossWindow: false }
)
```

### watch(name, callback, options) ⇒ function

Register a listener for a specific message. Messages are observed across contexts.

```javascript
const unwatch = watch(
  "AUTH_TOKEN_UPDATED",
  (data, { sourceWindowId, thisWindowId }) => {
    console.log(data)
  },
  { debug: false }
)
```

### get(name, callback, options) ⇒ function

Request a message by name and receive the data with the callback.

```javascript
const cancel = get(
  "AUTH_TOKEN_UPDATED",
  (data, { sourceWindowId, thisWindowId }) => {
    console.log(data)
  },
  { debug: false }
)
```

### onGet(name, callback, options) ⇒ function

Use this function to respond to get messages.

```javascript
const unwatch = onGet(
  "AUTH_TOKEN_UPDATED",
  (getOptions, { sourceWindowId, thisWindowId }) => {
    return { name: "test" }
  },
  { debug: false }
)
```

These changes make the README clearer and easier to understand, while maintaining the original structure and content. Let me know if you need further assistance!
