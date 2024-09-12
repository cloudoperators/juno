/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

class AppLoaderError extends Error {
  constructor(message, url) {
    super(message)
    this.name = "AppLoaderError"
    this.url = url
  }
}

export async function mount(containerElement, { name, url, appProps = {} }) {
  // if url is given, then the app is going to be loaded from the given url
  // otherwise, the app is going to be loaded from the local apps folder
  if (!url) {
    // Get the current file's directory from import.meta.url
    let __dirname = new URL(".", import.meta.url).pathname
    // Remove the trailing /apps/ from the path
    if (__dirname.endsWith("/apps/")) __dirname = __dirname.slice(0, -5)
    // Construct the URL to the app's index.js file
    url = new URL(`${__dirname}apps/${name}/index.js`, import.meta.url).href
  }

  console.debug("===Load App:", { name, url, appProps })

  try {
    // Dynamically import the module and extract its mount function
    const { mount } = await import(url)

    // Mount the module with the provided container element and props
    await mount(containerElement, {
      props: appProps,
    })
  } catch (error) {
    error.url = url
    throw new AppLoaderError(error.message, url)
  }
}
