# JavaScript client for Kubernetes API

This `Kubernetes client` is designed for use in both browser and Node.js environments. It utilizes the fetch API and is compatible with all modern browsers. For older browsers, the fetch polyfill (github/fetch) should be used.

The k8sclient facilitates communication with the Kubernetes API. It minimizes data interpretation and adds only essential logic. In addition to standard HTTP methods like GET or POST, it implements the WATCH method, which establishes a stream to the server and reacts to events.

All functions return Promise objects and can therefore be processed with a chain of then calls. Potential errors can be caught using the catch method and will be of type `K8sApiError`.

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

With pnpm:

```
pnpm add @cloudoperators/juno-k8s-client
```

With yarn:

```
yarn add @cloudoperators/juno-k8s-client
```

# Configuration Options

When creating a client, you can pass the following options:

| Option        | Type    | Required | Description                                         |
| ------------- | ------- | -------- | --------------------------------------------------- |
| `apiEndpoint` | string  | Yes      | The Kubernetes API server endpoint                  |
| `token`       | string  | Yes      | Bearer token for authentication                     |
| `ignoreSsl`   | boolean | No       | Ignore SSL certificate verification (Node.js only)  |
| `debug`       | boolean | No       | Enable debug logging for API requests and responses |

## SSL Certificate Handling

The `ignoreSsl` option allows you to bypass SSL certificate verification when connecting to Kubernetes APIs with self-signed or invalid certificates.

**⚠️ Security Warning**: Only use `ignoreSsl: true` in development environments or with trusted internal APIs. Never disable SSL verification in production.

**Browser Limitation**: The `ignoreSsl` option is only supported in Node.js environments. In browser environments, this option is ignored for security reasons, as browsers handle SSL certificate validation automatically.

```js
import { createClient } from "@cloudoperators/juno-k8s-client"

// For internal/development APIs with self-signed certificates (Node.js only)
const apiClient = createClient({
  apiEndpoint: "https://internal-k8s-api.company.com",
  token: "BEARER-TOKEN",
  ignoreSsl: true, // Only works in Node.js
})
```

# Error Handling

All API errors thrown by this client implement the `K8sApiError` interface:

```typescript
interface K8sApiError extends Error {
  apiVersion?: string
  kind?: string
  message: string
  metadata?: Record<string, any>
  reason?: string
  status?: string
  code?: number
  response?: {
    data?: { message?: string }
    status?: number
  }
}
```

This provides detailed information about Kubernetes API errors, including status codes, reasons, and additional metadata.

# Example Code (ES6)

## Basic client creation

```js
import { createClient } from "@cloudoperators/juno-k8s-client"

const apiEndpoint = "https://k8s-api.com"
let token = "BEARER-TOKEN"
const apiClient = createClient({ apiEndpoint, token })
```

## Client with SSL ignore (Node.js only)

```js
import { createClient } from "@cloudoperators/juno-k8s-client"

const apiEndpoint = "https://internal-k8s-api.company.com"
let token = "BEARER-TOKEN"
const apiClient = createClient({
  apiEndpoint,
  token,
  ignoreSsl: true, // For internal APIs with self-signed certificates
})
```

## List all pods

In this code snippet, we use the get method to fetch all pods from the Kubernetes API endpoint. The retrieved data is then logged to the console.

```js
import { createClient } from "@cloudoperators/juno-k8s-client"

const apiEndpoint = "https://k8s-api.com"
let token = "BEARER-TOKEN"
const apiClient = createClient({ apiEndpoint, token })

apiClient
  .get("/api/v1/pods")
  .then((data) => console.log(data))
  .catch((error) => {
    console.error("Failed to fetch pods:", error.message)
    console.error("Status:", error.status)
    console.error("Reason:", error.reason)
    console.error("HTTP Code:", error.code)
  })
```

## List pods with query parameters

```js
import { createClient } from "@cloudoperators/juno-k8s-client"

const apiEndpoint = "https://k8s-api.com"
let token = "BEARER-TOKEN"
const apiClient = createClient({ apiEndpoint, token })

// Get pods with label selector
apiClient
  .get("/api/v1/namespaces/default/pods", {
    params: {
      labelSelector: "app=nginx",
      fieldSelector: "status.phase=Running",
    },
  })
  .then((data) => console.log(data))
  .catch((error) => {
    if (error.code === 403) {
      console.error("Access forbidden:", error.reason)
    } else if (error.code === 404) {
      console.error("Namespace not found:", error.message)
    } else {
      console.error("API Error:", error.message)
    }
  })
```

## Create a new namespace

You can use this example to create a new namespace in the Kubernetes cluster.

```js
import { createClient } from "@cloudoperators/juno-k8s-client"

const apiEndpoint = "https://k8s-api.com"
let token = "BEARER-TOKEN"
const apiClient = createClient({ apiEndpoint, token })

apiClient
  .post("/api/v1/namespaces", {
    apiVersion: "v1",
    kind: "Namespace",
    metadata: {
      name: "my_namespace",
      annotations: { displayName: "My Namespace" },
      labels: { app: "my-app" },
    },
  })
  .then((result) => console.log("Namespace created:", result))
  .catch((error) => {
    if (error.reason === "AlreadyExists") {
      console.error("Namespace already exists:", error.message)
    } else if (error.code === 422) {
      console.error("Invalid namespace configuration:", error.message)
    } else {
      console.error("Failed to create namespace:", error.message)
    }
  })
```

## Delete a namespace

The following example demonstrates how to delete a namespace in the Kubernetes cluster.

```js
import { createClient } from "@cloudoperators/juno-k8s-client"

const apiEndpoint = "https://k8s-api.com"
let token = "BEARER-TOKEN"
const apiClient = createClient({ apiEndpoint, token })

apiClient
  .delete("/api/v1/namespaces/my_namespace")
  .then((result) => console.log("Namespace deleted:", result))
  .catch((error) => {
    if (error.code === 404) {
      console.error("Namespace not found:", error.message)
    } else if (error.reason === "Forbidden") {
      console.error("Insufficient permissions to delete namespace:", error.message)
    } else {
      console.error("Failed to delete namespace:", error.message)
      console.error("Error details:", error.metadata)
    }
  })
```

## Per-request SSL override (Node.js only)

You can also override SSL behavior on a per-request basis:

```js
import { createClient } from "@cloudoperators/juno-k8s-client"

const apiEndpoint = "https://k8s-api.com"
let token = "BEARER-TOKEN"

// Client with SSL verification enabled by default
const apiClient = createClient({ apiEndpoint, token, ignoreSsl: false })

// Most requests use SSL verification
apiClient.get("/api/v1/pods")

// But you can override for specific requests (Node.js only)
apiClient
  .get("/api/v1/secrets", {
    ignoreSsl: true, // This request ignores SSL
  })
  .catch((error) => {
    console.error("Failed to fetch secrets:", error.message)
    if (error.response?.status) {
      console.error("HTTP Status:", error.response.status)
    }
  })
```

## Refresh Token

Use this example to refresh the authentication token.

```js
import { createClient } from "@cloudoperators/juno-k8s-client"

const apiEndpoint = "https://k8s-api.com"
let token = "BEARER-TOKEN"
const apiClient = createClient({ apiEndpoint, token })

try {
  apiClient.refreshToken("NEW-TOKEN")
  console.log("Token refreshed successfully")
} catch (error) {
  console.error("Failed to refresh token:", error.message)
}
```

## Watch

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
  .on(apiClient.WATCH_ERROR, (error) => {
    console.error("Watch error occurred:", error.message)
    console.error("Error reason:", error.reason)
    console.error("Error code:", error.code)

    // Handle specific error cases
    if (error.code === 401) {
      console.error("Authentication failed - token may be expired")
    } else if (error.code === 403) {
      console.error("Access forbidden - insufficient permissions")
    } else if (error.reason === "Expired") {
      console.error("Watch session expired - consider restarting")
    }
  })
  .on(apiClient.WATCH_ADDED, (items) => dispatch({ type: "RECEIVE_ITEMS", items }))
  .on(apiClient.WATCH_MODIFIED, (items) => dispatch({ type: "UPDATE_ITEMS", items }))
  .on(apiClient.WATCH_DELETED, (items) => dispatch({ type: "DELETE_ITEMS", items }))

// Start the watch call to begin listening for changes
podsWatch.start()

// Optionally, set a timeout to cancel the watch call after a certain period
setTimeout(podsWatch.cancel, 5 * 60 * 1000) // 5 minutes
```

## Watch with SSL ignore (Node.js only)

```javascript
import { createClient } from "@cloudoperators/juno-k8s-client"

const apiEndpoint = "https://internal-k8s-api.company.com"
let token = "BEARER-TOKEN"
const apiClient = createClient({
  apiEndpoint,
  token,
  ignoreSsl: true, // For internal APIs
})

const podsWatch = apiClient
  .watch("/api/v1/pods", {
    params: { watch: "true" },
    ignoreSsl: true, // Can also be set per-request
  })
  .on(apiClient.WATCH_ERROR, (error) => {
    console.error("Watch connection failed:", error.message)
    if (error.response?.data?.message) {
      console.error("Server message:", error.response.data.message)
    }
  })
  .on(apiClient.WATCH_ADDED, (items) => console.log("Added:", items))

podsWatch.start()
```

# Common Use Cases

## Internal Kubernetes Clusters

For internal clusters with self-signed certificates (Node.js environments):

```js
const apiClient = createClient({
  apiEndpoint: "https://rancher.internal.company.com/k8s/clusters/c-12345",
  token: process.env.K8S_TOKEN,
  ignoreSsl: true, // Safe for internal networks
})

// Example with error handling for internal clusters
apiClient
  .get("/api/v1/nodes")
  .then((nodes) => console.log("Cluster nodes:", nodes))
  .catch((error) => {
    console.error("Failed to connect to internal cluster:", error.message)
    if (error.code === 0 || error.message.includes("ECONNREFUSED")) {
      console.error("Network connectivity issue - check VPN or firewall")
    }
  })
```

## Development Environment

```js
const apiClient = createClient({
  apiEndpoint: "https://localhost:6443",
  token: "dev-token",
  ignoreSsl: process.env.NODE_ENV === "development", // Only in development
})

// Development-specific error handling
apiClient.get("/api/v1/namespaces").catch((error) => {
  if (process.env.NODE_ENV === "development") {
    console.warn("Development API error:", error.message)
    console.warn("This might be expected in dev environment")
  } else {
    console.error("Production API error:", error)
  }
})
```

## Production Environment

```js
const apiClient = createClient({
  apiEndpoint: "https://prod-k8s-api.company.com",
  token: process.env.K8S_TOKEN,
  // ignoreSsl should not be used in production
})

// Production error handling with monitoring
apiClient.get("/api/v1/pods").catch((error) => {
  // Log detailed error information for monitoring
  console.error("Production API Error:", {
    message: error.message,
    status: error.status,
    reason: error.reason,
    code: error.code,
    apiVersion: error.apiVersion,
    kind: error.kind,
    timestamp: new Date().toISOString(),
  })

  // Send to monitoring service
  // monitoringService.reportError(error)
})
```

# Environment Support

## Browser Environment

- ✅ Full HTTP methods support (GET, POST, PUT, PATCH, DELETE, HEAD)
- ✅ Watch functionality
- ✅ Token refresh
- ✅ Complete error handling with `K8sApiError`
- ❌ `ignoreSsl` option (ignored for security reasons)

## Node.js Environment

- ✅ Full HTTP methods support
- ✅ Watch functionality
- ✅ Token refresh
- ✅ Complete error handling with `K8sApiError`
- ✅ `ignoreSsl` option with HTTPS agent support

# Development

All dependencies of this project are expressed in its package.json file. Before you start developing, ensure that you have NPM installed, then run:

```bash
pnpm install
pnpm test
pnpm build
```

## Contributing

We welcome contributions from the community. Please follow our [contribution guidelines](https://github.com/cloudoperators/juno/blob/main/CONTRIBUTING.md) to contribute to this project.

## License

Licensed under the [Apache License](LICENSE).
