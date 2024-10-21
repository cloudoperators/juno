1. Vite configuration from all applications should be extended to accept an env variable when building the application as static to be able to choose the target folder.

```js
if (mode === "static") {
  const appName = pkg.name // Read the package name
  const outDir = process.env.PREVIEW_DIR ? `${process.env.PREVIEW_DIR}/${appName}` : "build"
  return {
    ...sharedConfig,
    base: "./", // Relative Path in Generated index.html
    build: {
      outDir: outDir,
    },
  }
}
```

1. Turbo configuration should be also extended to forward the `OUT_DIR` environment variable when calling the script `build:static`:

```js
"build:static": {
  "dependsOn": [
    "@cloudoperators/juno-ui-components#build",
    "@cloudoperators/juno-utils#build",
    "@cloudoperators/juno-messages-provider#build",
    "@cloudoperators/juno-communicator#build"
  ],
  "env": ["PREVIEW_DIR"]
}
```

3. The `preview` application will set in its own `turbo.json` file all the applications to preview in a new task called `build:preview` and set as a dependency of the `preview` task.

```js
"preview": {
  "dependsOn": ["build:preview", "build:static"],
  "env": ["PREVIEW_DIR"]
},
"build:preview": {
  "dependsOn": ["@cloudoperators/juno-app-doop#build:static", "@cloudoperators/juno-app-heureka#build:static"]
}
```

4. Runing from root the preview application following command to build all the applications set in the dependencies.

```bash
 PREVIEW_DIR=../preview/public npx turbo run preview --filter @cloudoperators/juno-app-preview
```

and you get following result in the build folder of the preview application:

```bash
.
├── assets
│   ├── App-DGSPJq-A.js
│   ├── app_bg_example-Bs7YGqs5.svg
│   ├── favicon-BCN2Ir7d.ico
│   ├── index-BMXQkvIR.js
│   └── index-DSA2lV2B.js
├── doop
│   ├── assets
│   ├── build
│   └── index.html
└── index.html

```
