/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CodegenConfig } from "@graphql-codegen/cli"
import * as dotenv from "dotenv"
import * as fs from "fs"
import * as path from "path"
import * as yaml from "js-yaml"

// Load and parse the license config
const licenseConfigPath = path.resolve(__dirname, "..", "..", ".github", "licenserc.yaml")
const licenseYaml = fs.readFileSync(licenseConfigPath, "utf8")
const licenseContent = (yaml.load(licenseYaml) as any)?.header?.license?.content?.trim() || ""

// Format as a block comment
const formattedLicenseHeader = `/*\n${licenseContent
  .split("\n")
  .map((line) => ` * ${line}`)
  .join("\n")}\n */`

// Load environment variables from .env file
dotenv.config()

const config: CodegenConfig = {
  schema: process.env.API_ENDPOINT,
  documents: "src/**/*.graphql",

  generates: {
    "src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        {
          add: {
            content: formattedLicenseHeader,
          },
        },
      ],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
}

export default config
