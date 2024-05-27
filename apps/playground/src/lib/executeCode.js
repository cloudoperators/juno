/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

let swc = null

async function transformCode(codeString) {
  if (swc === null) {
    const module = await import("@swc/wasm-web")
    await module.default()
    swc = module
  }

  return swc.transformSync(codeString, {
    filename: "index.tsx",
    jsc: {
      parser: {
        syntax: "typescript",
        tsx: true,
      },
    },
    module: {
      type: "commonjs",
    },
  }).code
}

export async function executeCode(codeString, dependencies) {
  const transformedCode = await transformCode(codeString)
  const exports = {}
  const require = (path) => {
    if (dependencies[path]) {
      return dependencies[path]
    }
    throw Error(`Module not found: ${path}.`)
  }

  // create dinamically a function with the transformed having as
  // arguments the exports and require and return the default export
  // of the transformed code
  const result = new Function("exports", "require", transformedCode)
  result(exports, require)

  return exports.default
}
