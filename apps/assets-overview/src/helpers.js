/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const APP = "app"
export const LIB = "lib"

export const parseError = (error) => {
  let errMsg = JSON.stringify(error)
  if (error?.message) {
    errMsg = error?.message
    try {
      errMsg = JSON.parse(error?.message).msg
    } catch (error) {}
  }
  return errMsg
}

// https://medium.com/geekculture/sorting-an-array-of-semantic-versions-in-typescript-55d65d411df2
// use the key to sort an array of objects bey key
export const compareVersions = (key) => (a, b) => {
  // 1. Split the strings into their parts.
  let a1
  let b1

  if (key) {
    a1 = a[key].split(".")
    b1 = b[key].split(".")
  } else {
    a1 = a.split(".")
    b1 = b.split(".")
  }
  // 2. Contingency in case there's a 4th or 5th version
  const len = Math.min(a1.length, b1.length)
  // 3. Look through each version number and compare.
  for (let i = 0; i < len; i++) {
    const a2 = +a1[i] || 0
    const b2 = +b1[i] || 0

    if (a2 !== b2) {
      return a2 > b2 ? 1 : -1
    }
  }

  // 4. We hit this if the all checked versions so far are equal
  return b1.length - a1.length
}

export const camelToDash = (string) => {
  if (!string) return null
  return string.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase())
}

export const scriptTag = ({ assetsUrl, name, version, appProps }) => {
  let newAppProps = ""
  if (appProps && typeof appProps === "object") {
    Object.keys(appProps).forEach((key, index) => {
      newAppProps = `${newAppProps}${
        index ? "\n" : ""
      }  data-props-${camelToDash(key)}="REPLACE_ME"`
    })
  }

  return `<script
  defer
  src="${assetsUrl}/apps/widget-loader@latest/build/app.js" 
  data-name="${name}"
  data-version="${version || "latest"}"
${newAppProps}>
</script>`
}

export const baseHtml = ({ name, hasDependencies }) => {
  return `<!DOCTYPE html>
  <html style="margin: 0; padding: 0; display: flex; flex-direction: column;">
    <head>
      <title>Converged Cloud | ${name}</title>
      <link rel="icon" href="/assets/favicon.ico"/>
      <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
    </head>
    <body style="height: 100vh; flex-grow: 1; margin: 0; padding: 0;">     

      <!--Add here the micro-frontend script tag-->
      ${hasDependencies ? "<!--Add here the dependencies-->\n" : ""}
    </body>
  </html> 
  `
}
