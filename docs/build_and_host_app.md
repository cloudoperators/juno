# Build and host your own Juno application (linux/darwin)

## Prerequisits

Installed:

- node >= 18
- npm >= 9.6

Check successfully installations:

```bash
node -v
# v18.15.0

npm -v
# 9.6.4
```

## Instructions

1. Copy one of the following base apps to your own repository.

   - **template**: this application contains the basic setup and CC layout to start developing an application from scratch.
     `https://github.com/sapcc/juno/tree/main/apps/template`

   - **exampleapp**: this application contains the basic setup and CC layout to start developing an application. In addition you will find several best practice implementations (tabs, list, panel, message, etc.) to get a feeling how to use [juno-ui-components](https://ui.juno.global.cloud.sap/) and other Juno libs.
     `https://github.com/sapcc/juno/tree/main/apps/exampleapp`

2. Delete all peerDependencies.
   To be able to build a self contained app meaning all libs bundled together with the app itself and without any external dependencies you will have to remove all peerDependencies. The peerDependencies are defined in the `package.json` file and it is enough to remove the whole section with key `peerDependencies`.
   See following example of the peerDependencies section located in the package.json file:
   ```json
     "peerDependencies": {
     "@tanstack/react-query": "^4.28.0",
     "juno-ui-components": "https://assets.juno.global.cloud.sap/libs/juno-ui-components@2.13.8/package.tgz",
     "luxon": "^2.3.0",
     "prop-types": "^15.8.1",
     "react": "18.2.0",
     "react-dom": "^18.2.0",
     "url-state-provider": "https://assets.juno.global.cloud.sap/libs/url-state-provider@1.3.2/package.tgz",
     "zustand": "^4.1.1"
   },
   ```
3. Replace the versioning of all Juno devDependencies
   The devDependencies are also located in the `package.json` file. Since the base app is now copied outside the Juno repository the Juno dependencies have to have a fully qualified URL. Find all Juno dev dependencies by searching for the version string `"*"`. For all such dependencies replace the version string `*` with the fully qualified URL.
   Find all libs having as a version the a `*` string. E.g.:

    <!---
    use yaml instead of json to not highlight as an error using "..."
    -->

   ```yaml
   "devDependencies": {
      ...
      "juno-ui-components": "https://assets.juno.global.cloud.sap/libs/juno-ui-components@2.13.8/package.tgz",
      "url-state-provider": "https://assets.juno.global.cloud.sap/libs/url-state-provider@1.3.2/package.tgz",
      ...
   },
   ```

   Replace the `*` with the fully qualified URL.

   Use following pattern:

   ```js
   "devDependencies": {
      //...
      "<package_name>": "https://assets.juno.global.cloud.sap/libs/<package_name>@<version>/package.tgz",
      //...
   },
   ```

   E.g.:

   ```js
   "devDependencies": {
      //...
      "juno-ui-components": "https://assets.juno.global.cloud.sap/libs/juno-ui-components@1.5.9/package.tgz",
      "url-state-provider": "https://assets.juno.global.cloud.sap/libs/url-state-provider@1.0.0/package.tgz",
      //...
   },
   ```

   We recommend referencing a specific version of each lib as shown above, rather than `latest`, which would also be possible. If you do want to reference `latest`, please be aware that upgrading to a newer version later then requires you to clean your npm cache first via `npm cache clean`. To see the newest available versions of the Juno libs check our [overview app](https://assets.juno.global.cloud.sap/?__s=N4IghgzhCmAuEFoD2A3aAnFBLaB3EAXKLGAEYCSAdgCbQAehATADQiVgrmzQC2hIIVgAcwlaABsA8kOhjqhAGZhxMAL6qgA). E.g.: `https://assets.juno.global.cloud.sap/libs/juno-ui-components@1.5.9/package.tgz`

4. In `package.json` update your app name, i.e. replace `"template"` with your app's name:
   ```js
    "name": "template",
   ```
   to
   ```js
    "name": "myapp",
   ```
5. In `src/App.js` also update the `URL_STATE_KEY` constant with your app name.

   ```js
   /* IMPORTANT: Replace this with your app's name */
   const URL_STATE_KEY = "template"
   ```

6. Install all dependencies.
   Run the following compand to install all needed dependencies.

   ```bash
   npm add -D esbuild
   npm install
   ```

7. Start your application at least once.

   ```bash
   npm run start
   ```

   If you get the error:

   ```bash
   Error: Cannot find module '../../helpers/appProps'
   ```

   fix it by copying `appProps.js` from juno helpers/appProps to base directory and adapting the path in `esbuild.js` to `const appProps = require("./appProps")`

8. Build the application.
   Run the following command to build the application.

   ```bash
   npm run build
   ```

   All compiled chunks will be placed under the `/build` folder.

9. Copy everything to your webserver.
   - Copy the `/build` folder with all its contents to your webserver.
   - Copy the following files from your `/public` folder to your webserver: `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `index.html`
   - The folder from which you want to serve the app should look like this now:
     ```
     /
     - build/
        - index.js
        - App-xxxx.js
        - ...
     - index.html
     - favicon.ico
     - favicon-16x16.png
     - favicon-32x32.png
     ```
   - Then serve `index.html`
