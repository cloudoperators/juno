# Proposal: Preview V2

**Date:** 2024-10-21  
**Author(s):** Arturo Reuschenbach Puncernau
**Status:** Draft

---

## 1. Problem Statement

The current setup for previewing Juno applications is unclear to some colleagues, particularly regarding how to add or remove applications for preview within a pull request. Additionally, the index file that lists the deployed preview applications lacks styling, and the generated index.html file is created during the GitHub workflow, making it difficult to read and maintain.

---

## 2. Objectives & Goals

This document will:

- Provide a clear **step-by-step guide** for adding new applications to the preview system.
- **Improve the styling** of the index file that lists the deployed preview applications.
- Avoid **Generate the index.html file** during the build process.

---

## 3. Constraints & Assumptions

**Constraints:**

- New **Preview application** build with Juno that lists all applications to preview by default or accepts per appProps a list of applications to preview.

**Assumptions:**

- **Developers** knows how to deal with the Turbo configuration and Vite configuration.

---

## 4. Proposed Solutions

This proposal is primarily based on extending the current Turbo and Vite configurations to enable the preview of multiple applications. The goal of this solution is to **build each application in isolation**, ensuring that they do not interfere with the integration of the preview application. The preview application will simply provide a styled list of applications to preview, allowing users to access each application in its own isolated environment. This solution has been tested locally successfully.

### Steps to consider

1. The Vite configuration for all applications to be previewed should be extended to accept an environment variable when building the application as static. This will allow us to specify the target folder. Using a dedicated variable like PREVIEW_DIR will enable us to automatically place the build output in a folder named after the app within the specified target directory:

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

1. The Turbo configuration for each application being previewed should be extended to forward the `PREVIEW_DIR` environment variable when executing the `build:static` script:

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

3. The preview application will define all the applications to preview in its turbo.json configuration under a new task called build:preview, along with the existing build:static task, and set them as dependencies of the preview task. This ensures that the applications are built before the preview itself is built.

```js
"preview": {
  "dependsOn": ["build:preview", "build:static"],
  "env": ["PREVIEW_DIR"]
},
"build:preview": {
  "dependsOn": [
    "build:static",
    "@cloudoperators/juno-app-doop#build:static",
    "@cloudoperators/juno-app-heureka#build:static"
  ]
},
```

4. Runing from root the `preview` command it will build all the applications to preview, copy them to the public folder and build the preview application itself taking the public to the build bundle.

```bash
 PREVIEW_DIR=../preview/public npx turbo run preview --filter @cloudoperators/juno-app-preview
```

This is an example how the build bundle structure will look like:

```bash
.
├── assets
│   ├── App-DmwwKAWh.js
│   ├── app_bg_example-Bs7YGqs5.svg
│   ├── favicon-BCN2Ir7d.ico
│   ├── index-BxGy82q9.js
│   └── index-D0VKDNQM.js
├── doop
│   ├── assets
│   ├── build
│   └── index.html
├── @cloudoperators
│   ├── juno-app-doop
│   │   ├── assets
│   │   └── index.html
│   ├── juno-app-heureka
│   │   ├── assets
│   │   └── index.html
└── index.html
```

## 5. Discussion & Feedback

- **Team Feedback:** Concerns were raised about not able to ajust the preview configuration for each application.
- **Team Feedback:** Concerns were raised about the need of improve the maintainability of the index.html file created in the workflow.

---

## 6. References

- [Turbo](https://turbo.build/repo/docs/reference/configuration)
- [Vite](https://vite.dev/config/)

---
