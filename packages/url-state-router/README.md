# URL State Router

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

If you already know the [React-Router](https://reactrouter.com) and you are wondering how you can use something similar in **micro frontends**, then you have come to the right place!

Problem: Multiple routers on one page (SPA).

Solution: URL-State-Router.

The idea of the URL State Router is based heavily on the [React-Router](https://reactrouter.com/). However, the URL-State-Router pursues the use case to enable multiple routers on a single page.

This is achieved by combining the paths from several routers and managing them as search param in the URL. Each URL state router registers itself with a unique key (stateID) in the global state (part of [url-state-provider]()) and receives functions to update the state such as **push** and **replace** or **onChange** in order to react to changes in the URL . The synchronization and mapping of the state to the URL and back is done by the [url-state-provider]().

```js
import { Router, Route, Switch, Redirect, Link } from "url-state-router";

const App = () => {
  return (
    <Router stateID="app1">
      <Route exact path="/">
        <Redirect to="/items" />
      </Route>
      <Route path="/items">
        <Link to="/items/new">Create Item</Link>
        <Link to="/items/10">Go to Item 10</Link>
      </Route>
      <Switch>
        <Route path="/items/new">New Item</Route>
        <Route path="/items/:id">Item Details</Route>
      </Switch>
    </Router>
  );
};
```

## Install

```bash
npm add url-state-router
```

## Router

Router is the main component in which all other components live.
In principle it is a context provider. Immediately after mounting, this component registers itself with the [url-state-provider]() with the given **stateID** and sets the context variables:

- currentPath, intial it is the state from the URL or "/"
- options, path options like { tab: 2 }
- routeParams, params mapped on the matching route. Ex. navigating to `/services/abc` and matching route ` <Route exact path="/services/:serviceId" ... />` routeParams will be then `{serviceId: "abc"}`
- navigateTo, function, which receives the path and options as parameters
- redirectTo, similar to navigateTo with the difference that the window history does not get a new entry, but the last URL is replaced.

```js
import { Router } from "url-state-router";

const App = () => <Router stateID="app1">...</Router>;
```

## Route

Route component compares the current path with the given path and if a match is made, the content of the route is rendered.

```js
import { Router, Route, Link } from "url-state-router";

const App = () => (
  <Router stateID="app">
    <Link to="/items">Show Items</Link>
    <Route path="/items">Items Overview</Route>
  </Router>
);
```

The content of the Route can either be given as a component prop or as children.

```js
import { Router, Route, Link } from "url-state-router";

const Overview = () => <div>Items Overview</div>;

const App = () => (
  <Router stateID="app">
    <Link to="/items">Show Items</Link>
    <Route path="/items" component={Overview} />
  </Router>
);
```

The comparison of the paths goes from left to the right. If the current path is longer than the Route `path`, but is identical at the beginning, then this is evaluated as a match. This is useful if, for example, you are using modal windows and you want both the modal window and the view in the background to be displayed. However, in certain cases this behavior is undesirable. Then the prop `exact` should be used.

```js
import { Router, Route } from "url-state-router";

const Overview = () => <div>Items Overview</div>;

const App = () => (
  <Router stateID="app">
    {/* is displayed if the current path is "/items" or "/items/new" */}
    <Route path="/items">...</Route>
    {/* only rendered if the current path is "/items" */}
    <Route exact path="/items">
      ...
    </Route>
  </Router>
);
```

## Redirect

Redirect is used to force an initial redirection.

```js
import { Router, Route, Redirect } from "url-state-router";

const Overview = () => <div>Items Overview</div>;

const App = () => (
  <Router stateID="app">
    <Route path="/">
      <Redirect to="/items" />
    </Route>

    <Route path="/items">Items</Route>
  </Router>
);
```

## Switch

Switch is used when multiple routes with similar paths match the current path. For example, the path `/items/:id` and `/items/new` would both match `/items/new`. If we only want to render one of the two routes, we need a Switch.

```js
import { Router, Route, Switch } from "url-state-router";

const Overview = () => <div>Items Overview</div>;

const App = () => (
  <Router stateID="app">
    <Switch>
      <Route path="/items/new"> ... </Route>
      <Route path="/items/:id"> ... </Route>
    </Switch>
  </Router>
);
```

The order is important, the first path from top to bottom that matches is used!

## Link

Link renders an anchor using in onClick the `navigateTo` function from the `RouterContext`.

```js
import { Router, Route, Link } from "url-state-router";

const Overview = () => <div>Items Overview</div>;

const App = () => (
  <Router stateID="app">
    <Link to="/items">Show Items</Link>
    <Route path="/items"> Items </Route>
  </Router>
);
```

## useRouter

This hook accesses the RouterContext and returns navigation-relevant data and functions:

- `insideRouter`: boolean, indicates whether this hook is called within a router
- `currentPath`: string, current path of the router
- `options`: object, path options like { tab: 2 }
- `navigateTo`: function(path, options), pushes a new state to the window.history
- `redirectTo`: function(path, options), replaces the last state in the window.history

```js
import { Router, Route, useRouter } from "url-state-router";

const Items = () => {
  const { currentPath, options, navigateTo, redirectTo } = useRouter();

  return (
    <>
      Breadcrumb: {currentPath}
      <br />
      Items
      <br />
      <button onClick={() => navigateTo("/")}>Back</button>
    </>
  );
};
```

# Development

```bash
npm run start
npm run test
```
