# Example App test

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Built with Juno](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMjAiIHJvbGU9ImltZyIgYXJpYS1sYWJlbD0iQnVpbHQgd2l0aCBKdW5vIj48dGl0bGU+QnVpbHQgd2l0aCBKdW5vPC90aXRsZT48bGluZWFyR3JhZGllbnQgaWQ9InMiIHgyPSIwIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjYmJiIiBzdG9wLW9wYWNpdHk9Ii4xIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLW9wYWNpdHk9Ii4xIi8+PC9saW5lYXJHcmFkaWVudD48Y2xpcFBhdGggaWQ9InIiPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMjAiIHJ4PSIzIiBmaWxsPSIjZmZmIi8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjcikiPjxyZWN0IHdpZHRoPSI3MCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzU1NSIvPjxyZWN0IHg9IjcwIiB3aWR0aD0iNTAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNDAgMTcxIDAiLz48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ1cmwoI3MpIi8+PC9nPjxnIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJWZXJkYW5hLEdlbmV2YSxEZWphVnUgU2FucyxzYW5zLXNlcmlmIiB0ZXh0LXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiBmb250LXNpemU9IjExMCI+PHRleHQgYXJpYS1oaWRkZW49InRydWUiIHg9IjM1NSIgeT0iMTUwIiBmaWxsPSIjMDEwMTAxIiBmaWxsLW9wYWNpdHk9Ii4zIiB0cmFuc2Zvcm09InNjYWxlKC4xKSIgdGV4dExlbmd0aD0iNjAwIj5CdWlsdCB3aXRoPC90ZXh0Pjx0ZXh0IHg9IjM1NSIgeT0iMTQwIiB0cmFuc2Zvcm09InNjYWxlKC4xKSIgZmlsbD0iI2ZmZiIgdGV4dExlbmd0aD0iNjAwIj5CdWlsdCB3aXRoPC90ZXh0Pjx0ZXh0IGFyaWEtaGlkZGVuPSJ0cnVlIiB4PSI5MzAiIHk9IjE1MCIgZmlsbD0iIzAxMDEwMSIgZmlsbC1vcGFjaXR5PSIuMyIgdHJhbnNmb3JtPSJzY2FsZSguMSkiIHRleHRMZW5ndGg9IjMwMCI+SnVubzwvdGV4dD48dGV4dCB4PSI5MzAiIHk9IjE0MCIgdHJhbnNmb3JtPSJzY2FsZSguMSkiIGZpbGw9IiNmZmYiIHRleHRMZW5ndGg9IjMwMCI+SnVubzwvdGV4dD48L2c+PC9zdmc+)](https://github.com/cloudoperators/juno)

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
