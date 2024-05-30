# Example App

The example app serves as a demonstration application where we thoroughly test and implement interactions between multiple components following our best practices. Additionally, it functions as a prime illustration of how Juno components can be effectively utilized.

# Usage

## Standalone

To integrate the Microfrontend as a standalone module, follow these steps:

1. Include the following script tag in your HTML file:

```js
<script type="module">
  import("URL_TO_MODULE_JS_FILE").then((app) =>
    app.mount(document.getElementById("root"), {
      props: { /* SOME PROPS*/ }
    })
  )
</script>
```

2. Place a div element with the id "root" where you want the Microfrontend to be rendered:

```html
<div id="root" data-juno-app="exampleapp"></div>
```

## Embedded

1. To embed the React Microfrontend into your application, start by installing it:

```bash
npm add "@sapcc/juno-app-exampleapp"
```

2. Next, import and integrate it into your code:

```js
import Exampleapp from "@sapcc/juno-app-exampleapp"

const App = () => {
  /*...*/
  return (
    <div>
      <Exampleapp />
    </div>
  )
}
```

Or using React's lazy loading to keep the bundle size small

```js
import { lazy } from "react"

const Exampleapp = lazy(() => import("@sapcc/juno-app-exampleapp"))

const App = () => {
  /*...*/
  return (
    <div>
      <Exampleapp />
    </div>
  )
}
```
