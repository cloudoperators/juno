# JavaScript client for Kubernetes API

This client is designed for use in the browser (not tested in Node.js). It utilizes the fetch API and is compatible with all modern browsers. For older browsers, the fetch polyfill (github/fetch) should be used.

The k8sclient facilitates communication with the Kubernetes API. It minimizes data interpretation and adds only essential logic. In addition to standard HTTP methods like GET or POST, it implements the WATCH method, which establishes a stream to the server and reacts to events.

All functions return Promise objects and can therefore be processed with a chain of then calls. Potential errors can be caught using the catch method.

The client requires a Kubernetes API endpoint and a token. Once both parameters are provided, the following functions are available:

- head
- get
- post
- put
- patch
- delete
- watch

# Installation

With npm:

```
npm install @cloudoperators/juno-k8s-client
```

With yarn:

```
yarn add @cloudoperators/juno-k8s-client
```

# Example Code (ES6)

## List all pods

In this code snippet, we use the get method to fetch all pods from the Kubernetes API endpoint. The retrieved data is then logged to the console.

```js
import { createClient } from "@cloudoperators/juno-k8s-client"

const apiEndpoint = "https://k8s-api.com"
let token = "BEARER-TOKEN"

const apiClient = createClient({ apiEndpoint, token })

apiClient.get("/api/v1/pods").then((data) => console.log(data))
```

## Create a new namespace

You can use this example to create a new namespace in the Kubernetes cluster.

```js
import { createClient } from "@cloudoperators/juno-k8s-client"

const apiEndpoint = "https://k8s-api.com"
let token = "BEARER-TOKEN"

const apiClient = createClient({ apiEndpoint, token })

apiClient.post("/api/v1/namespaces", {
  apiVersion: "v1",
  kind: "Namespace",
  metadata: {
    name: "my_namespace",
    annotations: { displayName: "My Namespace" },
    labels: { app: "my-app" },
  },
})
```

## Delete a namespace

The following example demonstrates how to delete a namespace in the Kubernetes cluster.

```js
import { createClient } from "@cloudoperators/juno-k8s-client"

const apiEndpoint = "https://k8s-api.com"
let token = "BEARER-TOKEN"

const apiClient = createClient({ apiEndpoint, token })

apiClient.delete("/api/v1/namespaces/my_namespace")
```

## Refresh Token

Use this example to refresh the authentication token.

```js
import { createClient } from "@cloudoperators/juno-k8s-client"

const apiEndpoint = "https://k8s-api.com"
let token = "BEARER-TOKEN"

const apiClient = createClient({ apiEndpoint, token })

apiClient.refreshToken("NEW-TOKEN")
```

### Watch

The watch call establishes a persistent connection to the Kubernetes API server and listens for changes to the specified resource. In this example, we're watching for changes to pods ("/api/v1/pods").

The watch call should be **explicitly started** using `podsWatch.start()` to begin listening for changes, and it can be **cancelled** using `podsWatch.cancel()` when it's no longer needed.

```javascript
import { createClient } from "@cloudoperators/juno-k8s-client"

const apiEndpoint = "https://k8s-api.com"
let token = "BEARER-TOKEN"

const apiClient = createClient({ apiEndpoint, token })
const dispatch = (action) => console.log(action)

// Initialize the watch call
const podsWatch = apiClient
  .watch("/api/v1/pods")
  .on(apiClient.WATCH_ERROR, () => console.log("ERROR"))
  .on(apiClient.WATCH_ADDED, (items) => dispatch({ type: "RECEIVE_ITEMS", items }))
  .on(apiClient.WATCH_MODIFIED, (items) => dispatch({ type: "UPDATE_ITEMS", items }))
  .on(apiClient.WATCH_DELETED, (items) => dispatch({ type: "DELETE_ITEMS", items }))

// Start the watch call to begin listening for changes
podsWatch.start()

// Optionally, set a timeout to cancel the watch call after a certain period
setTimeout(podsWatch.cancel, 5 * 60 * 1000) // 5 minutes
```

# Development

All dependencies of this project are expressed in its package.json file. Before you start developing, ensure that you have NPM installed, then run:

```bash
npm install
npm run test
npm run build
```
