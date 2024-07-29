# utils

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

**utils** is a collection of utility functions, libraries, and hooks that are commonly used in building a Juno application.

## Features

- [**Infinite Scrolling (useEndlessScrollList)**](#usage-of-infinite-scrolling-useendlessscrolllist): react hook to facilitate the integration of an infinite scroll list.
- [**Mock Rest API (fetchProxyInitDB, fetchProxy)**](#usage-of-mock-rest-api-fetchproxyinitdb-fetchproxy): library designed to replicate the behavior of a Fetch REST API with mock data.
- [**Mount Juno Apps (useAppLoader)**](#mount-juno-apps-useapploader): react hook which enables mounting of Juno applications within other Juno applications.

## Installation

Add utils to dependencies in package.json:

```json

  "dependencies": {
    "@cloudoperators/utils": "*"
  },

```

## Usage of Infinite scrolling (useEndlessScrollList)

1. Import the react hook
2. Invoke the useEndlessScrollList hook by providing the complete set of items and desired options as a custom loading object and a function to be used to render the ref element. Please see below for more options.
3. Use the `scrollListItems` attribute to check if there are items to render. In case no items are available, display a corresponding message.
4. Use the iterator to iterate over the items to display. This will automatically handle the rendering of loading elements and reference objects whenever they are needed.

```js
//ViolationDetailsList.jsx
(1) import {useEndlessScrollList} from "@cloudoperators/utils"

const ViolationDetailsList = ({items}) => {

  (2) const { scrollListItems, iterator } = useEndlessScrollList(
    items,
    {
      loadingObject: (
        <DataGridRow>
          <DataGridCell colSpan={2}>
            <span>Loading ...</span>
          </DataGridCell>
        </DataGridRow>
      ),
      refFunction: (ref) => (
        <DataGridRow>
          <DataGridCell colSpan={2} className="border-b-0 py-0">
            <span ref={ref} />
          </DataGridCell>
        </DataGridRow>
      ),
    }
  )

  return (
    <>
      (3) {scrollListItems?.length > 0 ? (
        <DataGrid
          cellVerticalAlignment="top"
          gridColumnTemplate="min-content 2fr"
        >
          (4) {iterator.map((item, index) => (
            <DataGridRow key={index}>
              [...]
            </DataGridRow>
          ))}
        </DataGrid>
      ) : (
        <Message
          text="No violations found. Everything OK!"
          variant="success"
        />
      )}
    </>
  )
}
```

Available options:

| Option        | description                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| delay         | the delay in ms between adding items to the list. Default is 500ms                                      |
| showLoading   | whether to show the loading indicator. Default is true and it renders a span with the text "Loading..." |
| loadingObject | the object to be rendered as the loading indicator. Default is a span with the text "Loading..."        |
| showRef       | whether to show the ref element                                                                         |
| refFunction   | the function to be used to render the ref element. It receives the ref as a parameter                   |

Return object attributes

| Option          | description                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| scrollListItems | the items to be displayed                                                                                                |
| lastLisItemRef  | the ref element to be used as the last item                                                                              |
| isAddingItems   | whether items are being added to the list                                                                                |
| iterator        | an iterator to be used to render the list. It has a map function that receives a function to be used to render each item |

## Usage of Mock REST API (fetchProxyInitDB, fetchProxy)<a name="fetchProxy"></a>

Utilize this library to develop against mock data and without requiring any code modifications when switching to a real REST API. When utilizing fetchProxy with the `mock` flag, it utilizes a provided mock data. If the mock flag is unset, the request is then forwarded to the actual Fetch REST API.

### Get started

1. Define the JSON data to use when mocking the REST API.

   ```json
   {
     "peaks": [{ "id": 1, "name": "Ama Dablam", "height": "6814m", "region": "Khumbu" }],
     "regions": [{ "id": 1, "name": "Khumbu", "countries": "Nepal" }]
   }
   ```

2. Save the data into a file, such as `db.json`. While it's optional to include the JSON directly as a parameter when initializing `fetchProxy`, for the sake of code cleanliness, we recommend storing it in a separate file.

3. Initialize the fetchProxy with the mock JSON data.

   ```js
   // App.jsx
   import React { useEffect} from "react"
   import AppContent from "./components/AppContent"
   import { fetchProxyInitDB } from "@cloudoperators/utils"
   import db from "../db.json"

   const App = (props = {}) => {
     // setup the mock db.json
     useEffect(() => {
       if (props.mockAPI) {
         fetchProxyInitDB(db)
       }
     }, [props.mockAPI])

     return <AppContent />
   }
   ```

4. Use the `fetchProxy` within your components to retrieve the mock JSON. Add the `mock` option to determine whether the API should be mocked or not.

   ```js
   // AppContent.jsx
   import React, { useEffect, useState } from "react"
   import { fetchProxy } from "@cloudoperators/utils"

   const AppContent = () => {
     const [data, setData] = useState(null)

     useEffect(() => {
       fetchProxy(`${window.location.origin}/peaks`, {
         method: "GET",
         headers: {
           "Content-Type": "application/json",
           Accept: "application/json",
         },
         ...{ mock: true },
       })
         .then((response) => {
           if (!response.ok) {
             throw new Error("Network response was not ok")
           }
           return response.json()
         })
         .then((result) => {
           setData(result)
         })
     }, [])

     return <>{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</>
   }
   ```

### Conditions and Limitations

- fetchProxy

  1. Provide a Browser-compatible URL ([WHATWG URL Standard](https://nodejs.org/api/url.html#the-whatwg-url-api)) as you would use with the fetch API as for example `http://localhost:3001/peaks`.
  2. Additional query parameters will be disregarded. Currently, there is no functionality to paginate or sort based on query parameters yet.
  3. No PATCH method defined yet.

- Mock json data

  1. Flat collection of key-value pairs
  2. Key defines the name of the object category
  3. Value muss be an array.
  4. Each element in the array muss have the attribute id.

```react {linenos=inline,hl_lines=[3,6,"13-15"],linenostart=1}
// db.json
(1){
 (2)"peaks":
 (3)[
   {
     (4)"id": 1,
     "name": "Ama Dablam",
     "height": "6814m",
     "region": "Khumbu"
   }
 ]
}
```

### Routes

Based on the previous mock JSON data, here are all the default routes. When making POST, PUT, or DELETE requests, any changes will be automatically saved to the 'db' object and reset upon browser reload.

```bash
GET    /peaks
GET    /peaks/1
POST   /peaks
PUT    /peaks/1
DELETE /peaks/1
```

### Extended Options

**Rewrite Routes**

Utilize the rewriteRoutes option when you wish to align URLs with the structure of your mock database. For instance, if the API URL includes /api/v1/peaks, but the corresponding JSON structure is {"peaks":[]}, you can add a rewrite rule to exclude the /api/v1 portion. This ensures seamless mapping between your API endpoints and the mock database structure. The option rewriteRoutes accepts a collection of key value pairs with key as regex expresion and value as string to rewrite the url path.

```js
const customRoutes = {
  "/api/v1/(.*)": "/$1", // Replace '/api/v1' with an empty string
  "^/api": "", // Replace '/api' with an empty string
}

fetchProxyInitDB(db, { rewriteRoutes: customRoutes })
```

Now you can access resources using following routes:

```bash
/api/v1/peaks # → /peaks
/api/peaks    # → /peaks
```

**Rewrite Responses**

Employ the rewriteResponses option when you intend to customize the response from the mock API. This flexibility is available on a per-API method and path basis. For instance, suppose you require a distinct response when making a POST request to /api/v1/peaks, deviating from the standard response that includes the posted object. In such cases, you can introduce a rewriteResponses rule, exemplified as follows: {"POST": {"/api/v1/peaks": {"test": "custom response"}}}. It's essential to note that rewriteResponses takes precedence over rewriteRoutes. Therefore, if you've altered the original path in rewriteRoutes, ensure it matches the original path for accurate execution.

```js
const customResponses = {
  POST: {
    "^/peaks": { certificate: "testCertificate" },
  },
}

fetchProxyInitDB(db, { rewriteResponses: customResponses })
```

### Self Contained Running Example

Simply copy the following example and run it to explore how to use this library.

```js
import React, { useEffect, useState } from "react"
import { fetchProxy, fetchProxyInitDB } from "@cloudoperators/utils"

const App = () => {
  const [data, setData] = useState(null)

  // setup the mock db.json
  useEffect(() => {
    fetchProxyInitDB({
      peaks: [{ id: 1, name: "Ama Dablam", height: "6814m", region: "Khumbu" }],
    })
  }, [])

  useEffect(() => {
    fetchProxy(`${window.location.origin}/peaks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      ...{ mock: true },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
      .then((result) => {
        setData(result)
      })
  }, [])

  return <>{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</>
}

export default App
```

## Mount Juno Apps (useAppLoader)<a name="useAppLoader"></a>

This react hook is designed for scenarios where you wish to embed a Juno application within another application, particularly useful when running multiple applications within a single environment.

### How it Works

This hook uses our widget loader app, creating a runtime environment (shell) that ensures all dependencies required by the widget are available. To facilitate shared dependencies among multiple applications and optimize resource loading, the process unfolds in the following steps:

**Loading ES Module Shim:**
Initially, the hook loads the ES Module Shim, which supports import maps. This provides a foundation for efficient dependency management.

**Import Maps:**
In the second step, an importMap is loaded. This map serves as a blueprint, guiding the browser on the origin of package imports. This step ensures that all necessary dependencies are accessible at runtime.

**Loading the target Application:**
Finally, the target application is loaded into the environment. Thanks to the importMap, the browser intelligently retrieves packages, and shared dependencies are loaded only ONCE and not per application. The browser cache further optimizes performance by ensuring packages are not fetched with every page load.

### Prerequisites

Ensure the following prerequisites are met before using this hook:

**URL to Our Assets Host:**
Provide the URL to our assets host, allowing the hook to fetch our widget loader.

**Compiled as ES Module:**
The application must be compiled as an ES module to accommodate the dependency on ES Module Shim.

**Name and Version or URL:**
If the application is hosted in our assets sever you can choose between:

1. Provide the name and version (default version is "latest") of the application. The hook will then fetch the application from our assets server.
2. Provide the complete URL path to the application. The hook will then fetch the application from the provided URL.

If the application is hosted in a different server you can choose between:

1. Provide the complete URL path to the application, remember that the application must be compiled as an ES module. The hook will then fetch the application from the provided URL.

### Get started

1. Import the react hook useAppLoader.

   ```js
   import { useAppLoader } from "@cloudoperators/utils"
   ```

2. Invoke the use hook useAppLoader by providing the assets URL.

   ```js
   const { mount } = useAppLoader("https://assets.juno.qa-de-1.cloud.sap/")
   ```

3. Create a ref using the useRef hook.

   ```js
   const app = useRef(null)
   ```

4. Use the mount function to mount the application. The mount function accepts the following options:

   - container: the ref to the container element which will host the application
   - options object with the following attributes:
     - name: the name of the application
     - version: the version of the application (default is latest)
     - props: the props to be passed to the application

   Example using name and version and passing embedded as a prop to the target application:

   ```js
   useEffect(() => {
     if (!mount) return
     mount(app.current, {
       name: "exampleapp",
       version: "latest",
       props: { embedded: true },
     })
   }, [mount])
   ```

   Example using URL and passing embedded as a prop to the target application:

   ```js
   useEffect(() => {
     if (!mount) return
     mount(app.current, {
       url: "https://assets.juno.global.cloud.sap/apps/exampleapp@latest/build/index.js",
       props: { embedded: true },
     })
   }, [mount])
   ```

5. Use the ref to render the application.

   ```js
   <div ref={app} />
   ```

### Self Contained Running Example

Simply copy the following example and run it to explore how to use this library.

```js
import React, { useEffect, useRef } from "react"
import { useAppLoader } from "@cloudoperators/utils"

const App = () => {
  const { mount } = useAppLoader("https://assets.juno.qa-de-1.cloud.sap/")
  const app = useRef()

  useEffect(() => {
    if (!mount || !app.current) return
    mount(app.current, { name: "exampleapp" })
  }, [mount, app])

  return (
    <>
      <div>This is the root app responsible for loading the other apps.</div>
      <div ref={app} />
    </>
  )
}

export default App
```

## Testing

To run tests, use the following command:

```bash
npm run test
```

If you're working within the Juno monorepo using workspaces, you can use:

````bash
npm -w @cloudoperators/utils run test
```@cloudoperators/

## Build

To build your project, run:

```bash
npm run build
````

For Juno monorepo users within workspaces, you can use:

```bash
npm -w @cloudoperators/utils run build
```
